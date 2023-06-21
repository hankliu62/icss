
<script lang="ts" setup>
import { computed, ref, defineProps, defineEmits, onMounted, onUnmounted, onUpdated } from 'vue';
import debounce from 'lodash/debounce';
import { isFullScreen, isSafari, isIE, isiOS } from '@/utils/doc';

// 全屏改变事件
let FC_EVENT_NAME = 'fullscreenchange';
if (isSafari()) {
  FC_EVENT_NAME = 'webkitfullscreenchange';
} else if (isIE()) {
  FC_EVENT_NAME = 'MSFullscreenChange';
}

interface IComputeVideoSizeParams {
  containerWidth: number;
  containerHeight: number;
  videoOriginWidth: number;
  videoOriginHeight: number;
  fit?: string;
  filled: boolean;
}

function computeVideoSize({
  containerWidth,
  containerHeight,
  videoOriginWidth,
  videoOriginHeight,
  fit,
  filled,
}: IComputeVideoSizeParams) {
  let videoWidth;
  let videoHeight;
  const containerRatio = containerWidth / containerHeight;
  const videoRatio = videoOriginWidth / videoOriginHeight;
  if (containerWidth === videoOriginWidth && containerHeight === videoOriginHeight) {
    videoWidth = videoOriginWidth;
    videoHeight = videoOriginHeight;
  } else if (containerWidth < videoOriginWidth || containerWidth < videoOriginWidth) {
    if (containerRatio > videoRatio) {
      videoWidth = containerWidth;
      videoHeight = containerWidth / containerRatio;
    } else {
      videoWidth = containerWidth;
      videoHeight = (containerHeight * containerRatio) / videoRatio;
    }
  } else if (fit === 'flex' && !filled) {
    videoWidth = videoOriginWidth;
    videoHeight = videoOriginHeight;
  } else if (containerRatio > videoRatio) {
    videoWidth = (containerWidth * videoRatio) / containerRatio;
    videoHeight = containerHeight;
  } else {
    videoWidth = containerWidth;
    videoHeight = containerWidth / containerRatio;
  }
  return {
    videoWidth,
    videoHeight,
  };
}

// 定义props
// @ts-ignore
export interface IVideoPlayerProps {
  source: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  ratio?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  fit?: string;
  size?: string;
  layout?: string;
  filled?: boolean;
  download?: boolean;
}

const props = defineProps<IVideoPlayerProps>()

// 定义state

// 是否暂停
const paused = ref<boolean>(false)
// 是否准备就绪
const ready = ref<boolean>(false)
// 是否发送错误
const error = ref<boolean>(false)
// 是否全屏
const filled = ref<boolean>(isFullScreen())

const videoWrapRef = ref<HTMLDivElement|null>(null)
const videoRef = ref<HTMLVideoElement|null>(null)

// 定义computed

// 父级元素的样式
const wrapStyle = computed<Record<string, any>>(() => {
  let wrapStyle: any = { width: props.width };
  if (props.height) {
    wrapStyle.height = props.height;
  } else {
    wrapStyle.paddingTop = `${(1 / (props.ratio || 16 / 9)) * 100}%`;
  }
  if (filled.value) {
    wrapStyle.paddingTop = 0;
    wrapStyle.width = '100%';
    wrapStyle.height = '100%';
  }
  return {}
})

// 定义methods

const emit = defineEmits(['ended', 'error', 'timeUpdate', 'play', 'pause'])

// 切换播放/暂停
const onTogglePlay = () => {
  const videoEl = videoRef.value;
  if (videoEl) {
    const { paused: videoElPaused } = videoEl;
    if (videoElPaused) {
      videoEl.play();
    } else {
      videoEl.pause();
    }
  }
}

// 当文件就绪可以开始播放时运行（缓冲已足够开始时）
const onCanPlay = (e: Event) => {
  ready.value = true
  error.value = false
}

// 当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行
const onTimeUpdate = (e: Event) => {
  const time = (e?.currentTarget as any)?.currentTime;

  emit('timeUpdate', time)
}


// 当视频已到达结尾时运行
const onEnded = (e: Event) => {
  emit('ended', e)
}

// 当在视频加载期间发生错误时运行
const onError = (e: Event) => {
  emit('error', e)
}

// 当视频已就绪可以开始播放时运行
const onPlay = () => {
  const videoEl = videoRef.value;
  if (videoEl) {
    videoEl.play();
    paused.value = false;
    emit('play', true)
  }
}

// 当视频被用户或程序暂停时运行
const onPause = () => {
  const videoEl = videoRef.value;
  if (videoEl) {
    videoEl.pause();
    paused.value = true;
    emit('pause', true)
  }
}

// 每当回放速率改变时运行
const onRateChange = () => {

}

// 切换全屏
const onChangeFullScreen = () => {
  const curFilled = isFullScreen();
  filled.value = curFilled
};

// 设置视频样式
const setVideoStyle = () => {
  if (!ready.value) return;

  const { fit, height } = props;
  const { width: containerWidth, height: containerHeight } = videoWrapRef.value!.getBoundingClientRect();
  const { videoWidth: videoOriginWidth, videoHeight: videoOriginHeight } = videoRef.value!;
  let currentVideoWidth, currentVideoHeight;

  if (height === 'auto') {
    currentVideoWidth = containerWidth;
    currentVideoHeight =
      containerWidth / (videoOriginWidth / videoOriginHeight);
  } else {
    let { videoHeight, videoWidth } = computeVideoSize({
      containerHeight,
      containerWidth,
      videoOriginWidth,
      videoOriginHeight,
      fit,
      filled: filled.value,
    });
    currentVideoWidth = videoWidth;
    currentVideoHeight = videoHeight;
  }
  videoRef.value!.style.width = currentVideoWidth + 'px';
  videoRef.value!.style.height = currentVideoHeight + 'px';
};

// 改变页面大小时，重新设置视频元素的大小
const debounceSetVideoStyle = debounce(setVideoStyle, 30);

// 定义生命周期函数
// 页面挂载
onMounted(() => {
  document.addEventListener(FC_EVENT_NAME, onChangeFullScreen, false);
  const videoEl = videoRef.value;

  if (videoEl) {
    if (isiOS()) {
      videoEl.load();
    }
  }

  window.addEventListener('resize', debounceSetVideoStyle);
});

// 页面卸载
onUnmounted(() => {
  document.removeEventListener(FC_EVENT_NAME, onChangeFullScreen, false);
  window.removeEventListener('resize', debounceSetVideoStyle);
});

// 页面更新
onUpdated(() => {
  if (ready.value) {
    setVideoStyle();
  }
})
</script>

<template>
  <div
    ref="videoWrapRef"
    :style="wrapStyle"
    class="tz-video-wrap relative overflow-hidden bg-black"
    :class="{'height-auto': height === 'auto', [`size-${size}`]: !filled && size}"
  >
    <video
      class="tzui-chapters-video-el"
      ref="videoRef"
      playsInline
      crossOrigin="anonymous"
      webkit-playsinline="true"
      x5-video-player-type="h5-page"
      :autoPlay="autoplay"
      :loop="loop"
      :muted="muted"
      :poster="poster"
      :src="source"
      @canplay="onCanPlay"
      @timeupdate="onTimeUpdate"
      @ended="onEnded"
      @error="onError"
      @play="onPlay"
      @pause="onPause"
      @ratechange="onRateChange"
    >
      <source :src="source" type="video/mp4" />
    </video>

    <span
      v-if="!error && videoRef && ready"
      @click="onTogglePlay"
      class="bg-white-0.3 rounded-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity hover:bg-white-0.8"
      :class="{
        ['opacity-100 hover:opacity-80']: paused,
        ['opacity-0 hover:opacity-0']: !paused,
      }"
    >
      <img
        class="w-1.6 h-1.6 lg:w-60px lg:h-60px"
        src="/common/play.svg"
        alt="Video Play Control"
        referrerPolicy="no-referrer"
      />
    </span>
  </div>
</template>

<style>

</style>