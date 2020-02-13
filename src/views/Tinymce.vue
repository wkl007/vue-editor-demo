<template>
  <tinymce :html="html"/>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymcePage',
  components: {
    Tinymce
  },
  data () {
    return {
      html: 'https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html',
    }
  }
}
</script>
