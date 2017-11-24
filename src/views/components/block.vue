<template>
  <div class="wrap" @click="handleClick">
    <div class="topblock">
      <div class="left">
        <div class="baseinfo">
          <text class="basea">{{Name}}</text>
          <text class="baseb">{{Sex}}</text>
          <text class="basec">{{Age}}</text>
        </div>
        <div class="detailinfo">
          <text class="infoa">{{MSZD}}</text>
          <text class="infob">过敏药物：{{medic}}</text>
          <text class="infoc">入院时间：{{DataShow}}</text>
        </div>
      </div>
      <div class="right">
        <text>图</text>
      </div>
    </div>
    <div class="footer">
      <text class="footfont">{{BedNo}}</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    BedNo: String,
    Name: String,
    DataShow: String,
    IconUrl: String,
    Sex: String,
    Age: [String, Number],
    MSZD: String,
    medic: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style scoped>
.icon {
  height: 44px;
  width: 44px;
}

.wrap {
  align-items: center;
  flex-direction: column;
  border-width: 1px;
  border-radius: 30%;
  border-style: solid;
  border-color: #99A9BF;
  width: 750px;
  height: 1300px;
}

.topblock {
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.left {
  flex: 3;
  flex-direction: column;
  margin-top: 20px;
}

.right {
  flex: 1;
  width: 100px;
  height: 100px;
}

.baseinfo {
  flex-direction: row;
}

.infoa {
  width: 215px;
  font-family: Verdana, Geneva, sans-serif;
  min-height: 20px;
  font-size: 23px;
  padding-bottom: 10px;
  line-height: 33px;
}

.infob {
  width: 210px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 23px;
  padding-bottom: 10px;
  line-height: 33px;
}

.infoc {
  width: 243px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 23px;
  padding-bottom: 10px;
}

.footer {
  background-color: #359efd;
  border-bottom-left-radius: 33%;
  border-bottom-right-radius: 34%;
  border-style: solid;
  border-color: #99A9BF;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  width: 350px;
  height: 65px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 285px;
}

.baseb,
.basec {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 23px;
  color: #ca5952;
  font-weight: 200px;
  padding-top: 8px;
  margin-left: 12px;
}

.basea {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 32px;
  font-weight: 160px;
}

.topblock {
  margin-left: 16px;
}

.detailinfo {
  margin-top: 18px;
}
.footfont {
  font-size: 32px;
}



















































/* 
.text-content {
  margin-top: 10px;
  font-size: 25px;
  flex-direction: row;
}

.datashow {
  margin-top: 10px;
  font-size: 25px;
}

.bedno {
  margin-right: 0px;
}

.name {
  margin-left: 25px;
}

.imgcon {
  flex-direction: row;
  justify-content: center;
}

.icon1 {
  margin-left: 1px;
  padding: 0px 15px;
}

.icon2 {
  margin-left: 1px;
  padding: 0px 20px;
}

.icon3 {
  margin-left: 1px;
  padding: 0px 15px;
} */
</style>
