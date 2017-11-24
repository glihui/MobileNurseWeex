<template>
   <image style="width: 560px;height: 560px;" :src="ImgUrl"></image>
</template>

<script>
import ViewServer from '../../view-server.js'

export default {
  name: 'img',
  data () {
    return {
      ImgUrl: ViewServer + 'img/me.png'
    }
  }
}
</script>
