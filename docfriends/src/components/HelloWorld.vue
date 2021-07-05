<template>
  <div class="hello">
    <button @click="goDoctorsInfoPage()">피드</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      choices: ['자주 이기는 상위권팀', '예측할 수 없는 중위권팀', '반전을 꿈꾸는 하위권 팀'],
    }
  },
  props: {
    msg: String
  },
  methods: {
    goDoctorsInfoPage: function() {
      this.$router.push({ name: 'DoctorsInfoPage'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
