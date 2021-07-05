<template>
<div>
  <h5>{{this.company.name}}</h5>
  <div>
    <b-carousel
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      no-animation
      indicators
      img-width="1024"
      img-height="480"
    >
     <b-carousel-slide
        v-for="(path, idx) in this.company.imagePathList"
        :key="idx"
        img-src="path"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</div>
</template>

<script>
import axios from "axios"

export default {
  name: 'MainInfoPage',
  data: function() {
    return {
      company: {},
    }
  },

  created() {
    axios.get('https://docfriends.github.io/Docfriends_Front_Recruit/api/company.json').then(res => {
      console.log(res.data.data)
      this.company= res.data.data
    })
  }

}
</script>

<style>

</style>