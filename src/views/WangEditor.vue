<template>
  <wang-editor :html="html"/>
</template>

<script>
import WangEditor from '@/components/WangEditor'

export default {
  name: 'WangEditorPage',
  components: {
    WangEditor
  },
  data () {
    return {
      html: 'https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html',
    }
  }
}
</script>
