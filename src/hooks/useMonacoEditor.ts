import * as monaco from 'monaco-editor'
import { ref, nextTick, onBeforeUnmount } from 'vue'

/**
 * 使用Monaco编辑器的自定义hook。
 *
 * @param language 编辑器的语言，默认为'javascript'。
 * @param mode 编辑器的主题模式，可选'dark'或'light'，默认为'dark'。
 * @returns 返回一个对象，包含与Monaco编辑器相关的各种函数和引用。
 */
export default function useMonacoEditor(language: string = 'javascript', mode: 'dark'|'light' = 'dark', readOnly: boolean = false) {
  // 初始化Monaco编辑器实例
  let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null
  // 创建一个用于存放Monaco编辑器DOM元素的引用
  const monacoEditorRef = ref<HTMLElement | null>(null)

  /**
   * 创建Monaco编辑器实例。
   *
   * @param editorOption 编辑器构造选项的配置对象，默认为空对象。
   * @returns 返回创建的Monaco编辑器实例。
   */
  function createEditor(editorOption: monaco.editor.IStandaloneEditorConstructionOptions = {}) {
    if(!monacoEditorRef.value) return
    monacoEditor = monaco.editor.create(monacoEditorRef.value, {
      // 初始化模型
      model: monaco.editor.createModel('', language),
      // 启用缩略图
      minimap: { enabled: true },
      // 启用圆角选择
      roundedSelection: true,
      // 设置主题
      theme: mode == 'dark' ? 'vs-dark' : 'vs',
      // 设置多光标快捷键
      multiCursorModifier: 'ctrlCmd',
      // 配置滚动条样式
      scrollbar: {
        verticalScrollbarSize: 8,
        horizontalScrollbarSize: 8
      },
      // 显示行号
      lineNumbers: 'on',
      // 设置制表符大小
      tabSize: 2,
      // 设置字体大小
      fontSize: 16,
      // 自动缩进配置
      autoIndent: 'advanced',
      // 自动布局
      automaticLayout: true,
      readOnly,
      ...editorOption
    })
    return monacoEditor
  }

  /**
   * 格式化当前文档。
   */
  async function formatDoc() {
    await monacoEditor?.getAction('editor.action.formatDocument')?.run()
  }

  /**
   * 更新编辑器的值。
   *
   * @param val 要设置的新文本值。
   */
  function updateVal(val: string) {
    nextTick(() => {
      // 在只读模式下取消只读以允许更改
      if(getOption(monaco.editor.EditorOption.readOnly)) {
        updateOptions({ readOnly: false })
      }
      monacoEditor?.setValue(val)
      // 设置延迟以异步格式化文档
      setTimeout(async () => {
        await formatDoc()
      }, 10)
    })
  }

  /**
   * 更新编辑器配置。
   *
   * @param opt 要更新的编辑器构造选项配置对象。
   */
  function updateOptions(opt: monaco.editor.IStandaloneEditorConstructionOptions) {
    monacoEditor?.updateOptions(opt)
  }

  /**
   * 获取当前编辑器实例。
   *
   * @returns 返回当前的Monaco编辑器实例。
   */
  function getOption(name: monaco.editor.EditorOption) {
    return monacoEditor?.getOption(name)
  }

  /**
   * 获取当前编辑器实例。
   *
   * @returns 返回当前的Monaco编辑器实例。
   */
  function getEditor() {
    return monacoEditor
  }

  // 在组件卸载前销毁Monaco编辑器实例，以避免内存泄漏
  onBeforeUnmount(() => {
    if(monacoEditor) {
      monacoEditor.dispose()
    }
  })

  return {
    monacoEditorRef,
    createEditor,
    getEditor,
    updateVal,
    updateOptions,
    getOption,
    formatDoc
  }
}