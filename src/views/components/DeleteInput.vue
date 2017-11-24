<template>
  <div class="wrapper">
    <image :src="icon" class="img"></image>
    <input :type="type" :placeholder="placeholder" class="input" :value="result" @input="oninput" @return="onreturn" />
    <text class="delete" @click="result = ''">{{ del }}</text>
  </div>
</template>

<script>
export default {
  name: 'DeleteInput',
  data() {
    return {
      result: this.value,
      del: ''
    }
  },
  props: {
    icon: String,
    type: String,
    placeholder: String,
    value: String
  },
  watch: {
    value (val) {
      this.result = val
    }
  },
  methods: {
    oninput(event) {
      if (event.value === '') {
        this.del = ''
      } else {
        this.del = '×'
      }
      this.$emit('input', event.value)
    },
    onreturn(event) {
      this.$emit('return', event)
    },
    showDel() {
      return this.result !== ''
    }
  }
}
</script>

<style>
.wrapper {
  width: 550px;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: #99A9BF;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 25px;
  margin-bottom: 34px;
  margin-left:90px;
  padding-left:40px;
}

.input {
  height: 80px;
  width: 600px;
  margin-top: 10px;
  margin-bottom: 1px;
  padding-left:95px;
  color: #717171;
}

.img {
  width: 60px;
  height: 60px;
}

.delete {
  width: 60px;
  height: 60px;
  font-size: 50px;
}
</style>
