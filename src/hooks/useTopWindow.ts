import { onMounted, ref } from "vue";

/**
 * useTopWindow 函数用于判断当前窗口是否为顶层窗口。
 * 该函数没有参数。
 * @returns {Ref<boolean>} 返回一个布尔类型的响应式对象，其值表示当前窗口是否为顶层窗口。
 */
export default function useTopWindow() {
  // 创建一个响应式变量，初始值为true
  const top = ref<boolean>(true);

  // 组件挂载时，检查当前窗口是否为顶层窗口，并更新响应式变量的值
  onMounted(() => {
    top.value = window.top === window;
  })

  return top;
}