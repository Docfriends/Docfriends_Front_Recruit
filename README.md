# Docfriends_Front_Recruit

안녕하세요

닥프렌즈 프론트 개발자 채용에 지원해주셔서 감사합니다.

깃헙 [repository](https://github.com/Docfriends/Docfriends_Front_Recruit)를 fork하신 뒤, 작업하여 폴더에 solution을 넣어 push 해주시면 됩니다.


이 프로젝트의 목적은 Front js를 활용해서 UI를 만드는 것 입니다.

전달되는 데이터의 형태를 확인하여 하단의 기능을 작동하는 UI를 만들어주시면 됩니다.

UI구조에 정확한 정답은 없으며, 해당 구조로 만든 이유를 설명할 수 있으면 됩니다.

# Guidelines

* 마감 기한은 과제 공유 메일이 도착한 일주일 후 입니다.
* Project는 빌드가 필수 전제이나, Project가 완벽하지 않아도 됩니다.
* Git을 반드시 사용해주세요.
* Front js는 vue.js 혹은 jquery를 사용해주세요.
* 특정 기능에 대한 라이브러리를 쓰셔도 무방합니다.
* 작업을 commit 단위로 나눠주세요
* readme에 실행 방법을 적어주세요
* 질문이 있으실 경우 info@docfriends.com으로 문의 부탁드립니다.

# 실행방법

1. 필수 패키지를 설치합니다. 

   ```bash
   npm install
   ```

2. 프로젝트를 실행시킵니다. 

   ```bash
   npm run serve
   ```

   

# Front

## 1. 소속 상세

* 소속 상세는 소속 정보, 소속 전문가가 있는 탭입니다.
* 아래 이미지에 보이듯이 2개의 탭 이동 시 상단 병원명과 이미지는 유지되고 하단에 내용만 변경 됩니다.

### 1) 소속 정보

<img src="example/1.company-info.png" width="2000">

* [소속 데이터(https://docfriends.github.io/Docfriends_Front_Recruit/api/company.json)](https://docfriends.github.io/Docfriends_Front_Recruit/api/company.json) 를 이용하여 화면을 표시 해주세요
* 소속 전문가를 클릭하면 2)소속 전문가 화면이 표시됩니다
* 지도는 [Google Map API](https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript) 를 사용해 주세요.

### 2) 소속 전문가

<img src="example/2.company-expert.png" width="2000">

* [소속 전문가 데이터(https://docfriends.github.io/Docfriends_Front_Recruit/api/companyExpert.json)](https://docfriends.github.io/Docfriends_Front_Recruit/api/companyExpert.json) 를 이용하여 화면을 표시 해주세요
* 소속 정보를 클릭하면 1)소속 정보화면이 표시됩니다
* 전문가를 클릭하면 2.전문가 화면으로 넘어갑니다

## 2. 전문가

<img src="example/3.expert.png" width="2000">

* [전문가 데이터(https://docfriends.github.io/Docfriends_Front_Recruit/api/expert.json)](https://docfriends.github.io/Docfriends_Front_Recruit/api/expert.json) 를 이용하여 화면을 표시 해주세요
* 하단 바로가기 버튼을 클릭하면 1.소속 상세 화면으로 넘어갑니다



