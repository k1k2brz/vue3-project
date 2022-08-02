import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// store를 추가함으로써 vuex state에 접근이 가능해진다.
createApp(App).use(store).use(router).mount("#app");

// 배열에서 index를 쓸 대는 Vue.set을 써준다.
