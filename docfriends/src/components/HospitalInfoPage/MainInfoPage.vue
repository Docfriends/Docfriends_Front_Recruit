<template>
<div class="company">
  <h3>{{this.company.name}}</h3>
  <div>
    <b-carousel
      id="carousel-fade"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
     <b-carousel-slide
        v-for="(path, idx) in this.company.imagePathList"
        :key="idx"
        :img-src="path"
      ></b-carousel-slide>
    </b-carousel>
  </div>
  <br/><br/>
  <b-row>
    <b-col class="pb-2"><b-button size="lg" pill variant="outline-success" @click="goCompanyPage()">소속 정보</b-button></b-col>
    <b-col class="pb-2"><b-button size="lg" pill variant="outline-success" @click="goExportPage()">소속 전문가</b-button></b-col>
  </b-row>
  <div v-if="flag === 1">
    <CompanyPage :company="company" />
  </div>
  <div v-else>
    <ExportsInfoPage :experts="experts" :company="company.name" />
  </div>
</div>

</template>

<script>
import CompanyPage from "./Sections/CompanyPage.vue";
import ExportsInfoPage from "./Sections/ExportsInfoPage.vue";
import axios from "axios"

export default {
  name: 'MainInfoPage',
  components: {
    CompanyPage,
    ExportsInfoPage
  },
  data: function() {
    return {
      flag: 1,
      company: {},
      experts: {}
    }
  },
  created() {
    axios.get('https://docfriends.github.io/Docfriends_Front_Recruit/api/company.json').then(res => {
      console.log(res.data.data)
      this.company= res.data.data
    })
    axios.get('https://docfriends.github.io/Docfriends_Front_Recruit/api/companyExpert.json').then(res => {
      console.log(res.data.data)
      this.experts= res.data.data
    })
  },
  methods: {
    goCompanyPage: function() {
      this.flag = 1
    },
    goExportPage: function() {
      this.flag = 2
    }
  },
  

}
</script>

<style>
  div h3 {
   font-weight: bold;
 }
  .company {
  margin: auto;
  width: 75% !important;
  padding: 10px;
 }
 .img-fluid {
    max-width: 100% !important;
    height: auto;
}

</style>