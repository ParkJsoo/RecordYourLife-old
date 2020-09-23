import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import MainPage from "./components/MainPage.vue";
import DiaryNew from "./components/board/diary/DiaryNew.vue";
import DiaryList from "./components/board/diary/DiaryList.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {path: '/', component: LoginPage},
    { path: '/main-page', component: MainPage },
    { path: '/diary-new', component: DiaryNew },
    { path: '/diary-list', component: DiaryList },
  ],
});