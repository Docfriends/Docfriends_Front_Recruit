<template>
  <div class="export">
    <div v-if="this.export.alarmActivationState==='N'">
      <b-avatar :src= "this.export.profileImgPath" size="6rem" badge badge-variant="secondary"></b-avatar>
    </div>
    <div v-if="this.export.alarmActivationState==='F'">
      <b-avatar :src= "this.export.profileImgPath" size="6rem" badge badge-variant="Success"></b-avatar>
    </div>
    <h5>{{this.export.name}} {{this.export.expertTypeName}}님</h5>
    <div>
      <b-icon class="likey floats" icon="heart-fill" scale="1"></b-icon>
      <p class="likey floats">&nbsp;{{this.export.likeCnt}}</p>

    </div>

    <b-jumbotron bg-variant="white" text-variant="black" border-variant="dark" class="detailSection">
    <h5>학력 및 자격면허</h5>
    <p
    v-for="(ability, idx) in this.export.ability.split('\n')"
    :key="idx">{{ability}}</p>
    <h5>경력</h5>
    
    <p
    v-for="(career, idx) in this.export.career.split('\n')"
    :key="idx">{{career}}</p>

    <h5>진료과</h5>
    <p>{{this.export.subject}}</p>
    <h5>알림 키워드</h5>
    <b-list-group horizontal>
      <p style="color:grey"
    v-for="(keyword, idx) in this.export.alarmKeywordList"
    :key="idx">#{{keyword}}&nbsp;&nbsp;</p>
    </b-list-group>
    
    
    <h5>소속 정보</h5>
    <p>{{this.export.companyName}}</p>
    <p>{{this.export.companyJibun}}</p>
    </b-jumbotron>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'DoctorsInfoPage',
   data: function() {
    return {
      export: {},
    }
  },
  created() {
    axios.get('https://docfriends.github.io/Docfriends_Front_Recruit/api/expert.json').then(res => {
      console.log(res.data.data)
      this.export = res.data.data
    })
  }

}
</script>

<style>
 .export {
  margin: auto;
  width: 75%;
  padding: 10px;
 }
 .detailSection {
   text-align: left;
 }
 div h5 {
   font-weight: bold;
 }
 .likey {
   color: red;
 }
 .floats {
   display: inline-block;
 }
</style>