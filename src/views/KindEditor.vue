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
      html: 'https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html',
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
