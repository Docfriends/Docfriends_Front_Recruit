<template>
  <div>
    <b-card-group columns>
      <b-card
        @click="goExpertPage()"
        v-for="(expert, idx) in experts.expertList"
        :key="idx"
        tag="article"
        width="33%"
        class="mb-2"
      >
        <div v-if="expert.alarmActivationState==='N'">
          <b-avatar :src= "expert.profileImgPath" size="6rem" badge badge-variant="secondary"></b-avatar>
        </div>
        <div v-if="expert.alarmActivationState==='Y'">
          <b-avatar :src= "expert.profileImgPath" size="6rem" badge badge-variant="success"></b-avatar>
        </div>
        <br>
        <b-card-title style="font-weight:bold">
          {{expert.name}} {{expert.expertTypeName}}님
        </b-card-title>
        <b-card-text style="color:gray">
          {{company}} 
        </b-card-text>
        <div>
          <b-icon class="likey floats" icon="heart-fill" scale="1"></b-icon>
          <p class="likey floats">&nbsp;{{expert.likeCnt}}</p>
        </div>
      </b-card>
    </b-card-group>
  </div>  
  
</template>

<script>
export default {
  name: 'ExportsInfoPage',
  props: ["experts", "company"],
  methods: {
    goExpertPage: function() {
      this.$router.push({ name: 'DoctorsInfoPage'})
    },
  }
}
</script>

<style>
 .likey {
   color: red;
 }
 .floats {
   display: inline-block;
 }
</style>