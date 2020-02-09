<template>
  <div ref="editor"></div>
</template>

<script>
import E from 'wangeditor'
import { ossUpload } from '@/utils/oss'
import { isUrl } from '@/utils'
import CommonServer from '@/api/common'

export default {
  name: 'Editor',
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      menus: [
        'head', // 标题
        'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        'backColor', // 背景颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'quote', // 引用
        'emoticon', // 表情
        'image', // 插入图片
        'table', // 表格
        'video', // 插入视频
        'code', // 插入代码
        'undo', // 撤销
        'redo' // 重复
      ],
      editorContent: ''
    }
  },
  mounted () {
    this.initEditor()
  },
  watch: {
    html (val, oldVal) {
      if (val) {
        this.getHtml()
      }
    }
  },
  beforeDestroy () {
    this.editor && this.editor.txt.clear()
  },
  methods: {
    // 初始化编辑器
    initEditor () {
      this.editor = new E(this.$refs.editor)
      this.editor.customConfig.menus = this.menus // menu菜单
      this.editor.customConfig.customUploadImg = async (files, insert) => {
        const res = await ossUpload(files[0])
        insert(res.url)
        console.log('上传成功')
      }
      this.editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      this.editor.create()
      this.getHtml()
    },
    // 获取html
    async getHtml () {
      if (!this.html) return
      let html = this.html
      if (isUrl(this.html)) {
        const res = await CommonServer.getHtml(this.html)
        html = res.data
      }
      this.$nextTick(() => {
        this.editorContent = html
        this.editor.txt.html(html)
      })
    },
    // 获取编辑器内容
    getContent () {
      console.log(this.editorContent)
      // this.$emit('getContent', editor.txt.html())
    },
    // 清除内容
    clearHtml () {
      this.editor && this.editor.txt.clear()
    }
  }
}
</script>
