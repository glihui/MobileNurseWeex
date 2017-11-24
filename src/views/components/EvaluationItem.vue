<template>
  <div class="item" v-bind:style="{'background-color':colorval }" @click="handleClick" @longpress="handleLongPress">
    <div class="imgblock">
      <image class="listimg" :src="listimg"></image>
    </div>
    <div class="centersite">
      <text>{{ Time }}</text>
      <text class="txtbottom">评估护士：{{ Name }}</text>
    </div>
    <div class="listicon">
      <text class="icofont">&rsaquo;</text>
    </div>
    <!-- <image class="img" :src="right"></image> -->
  </div>
</template>

<script>
import ViewServer from '@/ViewServer.js'

export default {
  name: 'EvaluationItem',
  data() {
    return {
      // right: ViewServer + 'img/right.png'
      listimg: ViewServer + 'img/listimg.png'
    }
  },
  props: {
    Time: String,
    Name: String,
    colorval: String
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
    handleLongPress(event) {
      this.$emit('longclick', event)
    }
  }
}
</script>

<style scoped>
.item {
  /*   justify-content: space-between; */
  flex-direction: row;
  /* background-color: #FFFFFF; */
  height: 120px;
}

.item:active {
  /*   justify-content: space-between; */
  flex-direction: row;
  background-color: #C0CCDA;
}

.listimg {
  height: 80px;
  width: 55px;
}

.centersite {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 70px;
  font-size: 14px;
}

.imgblock {
  margin-left: 70px;
  align-items: center;
  justify-content: center;
}

.listicon {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 350px;
}

.icofont {
  font-size: 70px;
  color: #7F7F7F;
}

.txtbottom {
  color: #8C8C8C;
  margin-top: 10px;
}
</style>