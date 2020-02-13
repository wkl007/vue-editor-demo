<template>
  <div class="u-editor-container">
    <div :id="id" :style="{ width: editorWidth , height: editorHeight}"></div>
  </div>
</template>

<script>

import { isUrl } from '@/utils'
import CommonServer from '@/api/common'
import configs from './configs'

const UE = window.UE

// 设置 UEDITOR_HOME_URL
window.UEDITOR_HOME_URL = process.env.Node_ENV === 'production' ? '/vue-editor-demo/editor/ueditor' : '/editor/ueditor'

export default {
  name: 'UEditor',
  props: {
    height: {
      type: [Number, String],
      required: false,
      default: 360
    },
    width: {
      type: [Number, String],
      required: false,
      default: 'auto'
    },
    html: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ueditor: null,
    }
  },
  computed: {
    id () {
      return Math.random().toString(36).substring(2, 15) + '-ueditor-' + +new Date()
    },
    editorWidth () {
      const width = this.width
      if (typeof width === 'number') {
        return `${width}px`
      }
      return width
    },
    editorHeight () {
      const height = this.height
      if (typeof height === 'number') {
        return `${height}px`
      }
      return height
    }
  },
  watch: {
    html (val) {
      this.getHtml()
    }
  },
  mounted () {
    this.initEditor()
  },
  beforeDestroy () {
    this.destroyEditor()
  },
  methods: {
    // 编辑器初始化
    initEditor () {
      this.ueditor = UE.getEditor(this.id, { ...configs })
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
      this.setContent(html)
    },
    // 图片上传成功添加到编辑器
    async imageSuccess (urlList) {
      try {
        let imageTemplateList = ''
        urlList.forEach(item => {
          const image = `<img style="max-width:100%;" src="${item}">`
          imageTemplateList = imageTemplateList + image
        })
        this.inserthtml(imageTemplateList, true)
      } catch (error) {
        console.log(error)
      }
    },
    // 设置编辑器内容  isAppendTo为true时是追加内容到编辑器，false是覆盖
    setContent (content, isAppendTo) {
      if (!content) return
      this.ueditor.ready(() => {
        this.ueditor.setContent(content, isAppendTo)
      })
    },
    // 在当前光标位置插入html内容
    insertHtml (content) {
      if (!content) return
      this.ueditor.execCommand('inserthtml', content)
    },
    // 获取编辑器内容
    getContent () {
      return this.ueditor.getContent()
    },
    // 设置编辑器聚焦
    setFocus () {
      this.ueditor.focus()
    },
    // 判断编辑器是否有内容
    hasContent () {
      return this.ueditor.hasContents()
    },
    // 销毁编辑器
    destroyEditor () {
      this.ueditor.destroy()
    }
  }
}
</script>

<style scoped lang="less">
.u-editor-container {
  position: relative;
  color: #373737;
  line-height: 22px;

  .custom-upload-button {
    position: absolute;
    top: 32px;
    left: 650px;
    z-index: 99;
  }
}
</style>

<style>
.edui-button.edui-for-135editor .edui-button-wrap .edui-button-body .edui-icon {
  background-image: url('http://static.135editor.com/img/icons/editor-135-icon.png') !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 85%;
}
</style>
