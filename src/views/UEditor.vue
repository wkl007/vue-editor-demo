<template>
  <u-editor :html="html"/>
</template>

<script>
import UEditor from '@/components/UEditor'

export default {
  name: 'UEditorPage',
  components: {
    UEditor
  },
  data () {
    return {
      html: 'https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html',
    }
  }
}
</script>
