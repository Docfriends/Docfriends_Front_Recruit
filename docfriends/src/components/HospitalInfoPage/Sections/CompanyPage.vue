<template>
  <div>
    <b-jumbotron bg-variant="white" text-variant="black" border-variant="dark" class="detailSection">
      <h5>알림 키워드</h5>
      <b-list-group horizontal>
        <p style="color:grey"
      v-for="(keyword, idx) in company.alarmKeywordList"
      :key="idx">#{{keyword}}&nbsp;&nbsp;</p>
      </b-list-group>
      <h5>병원 홈페이지</h5>
      
      <a href="{company.homepageUrl}">{{company.homepageUrl}}</a>
      <br><br>
      <h5>병원 전화번호</h5>
      <p>{{company.tel}}</p>
      <h5>주소</h5>
      <p>{{company.addrRoad}}&nbsp;{{company.addrEtc}}</p>
      <GmapMap
          ref="mapRef"
          :center= "{
          lat: parseFloat(company.lat),
          lng: parseFloat(company.lon),
          }"
          :zoom="16"
          style="width: 100%; height: 300px"
      >
        <GmapMarker
        v-for="(m,index) in markers"
        :key="index"
        :position="m.position" />
        </GmapMap>
    </b-jumbotron>
  </div>
  
</template>

<script>
export default {
  name: 'CompanyPage',
  props: ["company"],
  data: function() {
    return {
      center: {
        lat: parseFloat(this.company.lat),
        lng: parseFloat(this.company.lon),
      },
      markers:[
        {
          position: {
            lat: parseFloat(this.company.lat),
            lng: parseFloat(this.company.lon),
          }
        }
      ]
    }
  },
}
</script>

<style>
  #map {
  height: 100%;
}
</style>