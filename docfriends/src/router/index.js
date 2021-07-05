import Vue from "vue";
import VueRouter from "vue-router";
import DoctorsInfoPage from "../components/DoctorsInfoPage/DoctorsInfoPage.vue";
import MainInfoPage from "../components/HospitalInfoPage/MainInfoPage.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/doctorsinfopage",
    name: "DoctorsInfoPage",
    component: DoctorsInfoPage,
  },
  {
    path: "/maininfopage",
    name: "MainInfoPage",
    component: MainInfoPage,
  },
  // {
  //   path: "/sports",
  //   name: "Sports",
  //   component: Sports,
  //   children: [
  //     {
  //       path: "",
  //       name: "SportsSchedule",
  //       component: () => import("../components/Sports/Schedule.vue")
  //     },
  //     {
  //       path: "ranking",
  //       name: "SportRanking",
  //       component: () => import("@/components/Sports/Ranking.vue")
  //     },
  //     {
  //       path: "news",
  //       name: "SportNews",
  //       component: () => import("@/components/Sports/News.vue")
  //     },
  //   ]
  // },
  // {
  //   path: "/feed",
  //   name: "Feed",
  //   component: Feed,
  //   children: [

  //   ]
  // }, 
  // {
  //   path: "/search",
  //   name: "Seacrh",
  //   component: Search,
  //   children: [
  //     {
  //       path: "",
  //       name: "realSearch",
  //       component: () => import("../components/Search/realSearch.vue")
  //     },
  //     {
  //       path: "friendsteam",
  //       name: "FriendsTeam",
  //       component: () => import("@/components/Search/FriendsTeam.vue")
  //     },
  //     {
  //       path: "recommend",
  //       name: "Recommend",
  //       component: () => import("@/components/Search/Recommend.vue"),
  //       children: [
  //         {
  //           path: "",
  //           name: "Question1",
  //           component: () => import("../components/Search/Question1.vue")
  //         },
  //         {
  //           path: "question2",
  //           name: "Question2",
  //           component: () => import("../components/Search/Question2.vue")
  //         },
  //         {
  //           path: "question3",
  //           name: "Question3",
  //           component: () => import("../components/Search/Question3.vue")
  //         },
  //         {
  //           path: "question4",
  //           name: "Question4",
  //           component: () => import("../components/Search/Question4.vue")
  //         },                        
  //       ]
  //     },
  //   ]
  // },
  // {
  //   path: "/chat",
  //   name: "Chat",
  //   component: Chat,
  //   children: [

  //   ]
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: Profile,
  //   children: [
  //     {
  //       path: "",
  //       name: "Article",
  //       component: () => import("@/views/Users/Article.vue")
  //     },
  //     {
  //       path: "myteam",
  //       name: "MyTeam",
  //       component: () => import("@/views/Users/MyTeam.vue"),
  //       children: [

  //         {
  //           path: "mymyteam",
  //           name: "MyMyTeam",
  //           component: () => import("@/views/Users/MyMyTeam.vue")            
  //         },
  //         {
  //           path: "newteam",
  //           name: "NewTeam",
  //           component: () => import("@/views/Users/NewTeam.vue"),
  //           children: [

  //             {
  //               path: "newteamfootball",
  //               name: "NewTeamFootball",
  //               component: () => import("@/views/Users/NewTeamFootball.vue")            
  //             },
  //             {
  //               path: "newteambaseball",
  //               name: "NewTeamBaseball",
  //               component: () => import("@/views/Users/NewTeamBaseball.vue")            
  //             },
  //             {
  //               path: "newteamlol",
  //               name: "NewTeamLol",
  //               component: () => import("@/views/Users/NewTeamLol.vue")            
  //             },
  //             {
  //               path: "NewTeamSearchResult",
  //               name: "NewTeamSearchResult",
  //               component: () => import("@/views/Users/NewTeamSearchResult.vue")            
  //             },
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       path: "alarm",
  //       name: "Alarm",
  //       component: () => import("@/views/Users/Alarm.vue")
  //     },
  //   ]
  // },

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
