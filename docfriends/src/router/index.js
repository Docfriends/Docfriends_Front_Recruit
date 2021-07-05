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
    path: "",
    name: "MainInfoPage",
    component: MainInfoPage,
    children: [
          {
            path: "",
            name: "CompanyPage",
            component: () => import("../components/HospitalInfoPage/Sections/CompanyPage.vue"),
            props: true
          },
          {
            path: "export",
            name: "ExportsInfoPage",
            component: () => import("../components/HospitalInfoPage/Sections/ExportsInfoPage.vue"),
            props: true
          }
        ]}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
