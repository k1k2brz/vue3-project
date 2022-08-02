import { createRouter, createWebHistory } from "vue-router";
// 뒤에 todos붙여주면 Todos파일로 가게
import Home from "../pages/IndexPage.vue";
import Todos from "../pages/todos/IndexPage.vue";
import Todo from "../pages/todos/IndexId.vue";
import TodoCreate from "../pages/todos/create/IndexPage.vue";
// import home과 todos를 아래 컴포넌트에 넣어준다.

const router = createRouter({
  history: createWebHistory(),
  // 하나의 객체가 하나의 route를 의미
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    // 뒤에 todos붙여주면 Todos파일로 가게 Path설정
    {
      path: "/todos",
      name: "Todos",
      component: Todos,
    },
    // create부터 선언하고 밑에 :id가 나오는게 좋음(아니면 먼저 id를 받아버리기 때문에)
    {
      path: "/todos/create",
      name: "TodoCreate",
      component: TodoCreate,
    },
    // 콜론 넣고 주소 넣어야 여러개 값을 받는다
    {
      path: "/todos/:id",
      name: "Todo",
      component: Todo,
    },
  ],
});

// 1 /home 2 /todos 3 /todos/create 4 /todos/:id

export default router;
