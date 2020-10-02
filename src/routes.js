import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import MainPage from "./components/MainPage.vue";
import DiaryNew from "./components/board/diary/DiaryNew.vue";
import DiaryList from "./components/board/diary/DiaryList.vue";
import DiaryPost from "./components/board/diary/DiaryPost.vue";
import StudyNew from "./components/board/study/StudyNew.vue";
import StudyList from "./components/board/study/StudyList.vue";
import StudyPost from "./components/board/study/StudyPost.vue";
import UserJoin from "./components/user/UserJoin.vue";
import UserModify from "./components/user/UserModify.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: LoginPage },
    { path: "/main-page", component: MainPage },
    { path: "/diary-new", component: DiaryNew },
    { path: "/diary-list", component: DiaryList },
    { path: "/diary-post", component: DiaryPost },
    { path: "/study-new", component: StudyNew },
    { path: "/study-list", component: StudyList },
    { path: "/study-post", component: StudyPost },
    { path: "/user-join", component: UserJoin },
    { path: "/user-modify", component: UserModify },
  ],
});