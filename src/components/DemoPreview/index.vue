<script setup lang="ts">
  import { defineProps, useSlots } from 'vue'

  export interface IDemoPreviewProps {
    // title: string;
    // description?: string;
    // code: {
    //   template: string;
    //   script: string;
    //   styles: string;
    // }
    content: string,
  }

  const props = defineProps<IDemoPreviewProps>()

  // defineComponent({
  //   components: {
  //     MarkdownPreview
  //   }
  // })

  // const demoTemplate = computed(() => {
  //   return props?.code?.template || ""
  // })

  // const demoScript = computed(() => {
  //   return props?.code?.script || ""
  // })

  // const demoStyles = computed(() => {
  //   return props?.code?.styles || ""
  // })

  const slots = useSlots()
</script>

<template>
  <div class="demo-preview max-w-[1200px] m-auto px-[24px] py-[50px] text-left">
    <div v-if="slots.default" class="h-[620px] overflow-hidden p-[16px] radius-[8px] border-solid border-[1px] border-[#e8e8e8] shadow-sm transition-all duration-300 hover:shadow-md">
      <div class="w-full h-full overflow-auto empty:hidden">
        <slot name="default"></slot>
      </div>
    </div>

    <div class="mt-[40px]">
      <div v-html="props.content"></div>
    </div>

    <!--
    <h1 class="text-[28px] font-bold mt-8 color-[#404040]" v-text="props.title"></h1>

    <div v-if="props.description" class="text-[16px] mt-3 color-[#666]" v-text="props.description"></div>

    <h2 class="text-[22px] font-bold mt-5 color-[#404040]">代码片段</h2>

    <div class="mt-5" v-if="!!demoTemplate">
      <h3 class="text-[18px] font-bold mb-2 color-[#404040]">Template</h3>
      <div class="h-[620px] overflow-hidden radius-[4px] border-solid border-[1px] border-[#f5f5f5]">
        <MonacoEditor v-model="demoTemplate" mode="light" language="vue" readOnly />
      </div>
    </div>

    <div class="mt-3" v-if="!!demoScript">
      <h3 class="text-[18px] font-bold mb-2 color-[#404040]">Script</h3>
      <div class="h-[620px] overflow-hidden radius-[4px] border-solid border-[1px] border-[#f5f5f5]">
        <MonacoEditor v-model="demoScript" mode="light" language="typescript" readOnly />
      </div>
    </div>

    <div class="mt-3" v-if="!!demoStyles">
      <h3 class="text-[18px] font-bold mb-2 color-[#404040]">Styles</h3>
      <div class="h-[620px] overflow-hidden radius-[4px] border-solid border-[1px] border-[#f5f5f5]">
        <MonacoEditor v-model="demoStyles" mode="light" language="less" readOnly />
      </div>
    </div> -->
  </div>
</template>

<style lang="less">
.demo-preview {
  ol {
    list-style: auto;
    padding-left: 2em;
  }

  ul {
    list-style: disc;
    padding-left: 2em;
  }

  p {
    line-height: 1.8;
    margin: 1em 0;
    font-size: 14px;

    code {
      padding: 0.2em 0.4em;
      margin: 0;
      font-size: 85%;
      background-color: rgba(175,184,193,.2);
      border-radius: 6px;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 28px;
    margin: 0 auto 10px;
  }

  h2 {
    margin: 1em 0 0.6em;
    font-size: 22px;
    font-weight: 500;
  }

  h3 {
    margin: 1em 0 0.6em;
    font-size: 18px;
    font-weight: 500;
  }

  h4 {
    margin: 1em 0 0.6em;
    font-size: 16px;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5 {
    color: #404040;
  }

  pre {
    max-height: 600px;
    overflow: auto;
    margin: 1em 0;
    border-radius: 6px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    padding: 0;

    code {
      margin: 0;
      border: none;
      display: block;
      line-height: 1.5;
      font-size: 14px;
      white-space: pre;
      border-radius: 3px;
      padding: 10px 15px
    }
  }

  blockquote {
    font-size: 90%;
    color: #999;
    border-left: 4px solid #e9e9e9;
    padding-left: 0.8em;
    margin: 1em 0;
  }
}
</style>