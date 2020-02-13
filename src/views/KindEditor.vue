<template>
  <Kind-editor ref="kindEditor" :html="html" @input="getContent"></Kind-editor>
</template>

<script>
import KindEditor from '@/components/KindEditor'

export default {
  name: 'KindEditorPage',
  components: {
    KindEditor
  },
  data () {
    return {
      html: '你好',
      content: ''
    }
  },
  methods: {
    // 获取编辑器内容
    getContent (content) {
      this.content = content
    },
  }
}
</script>
