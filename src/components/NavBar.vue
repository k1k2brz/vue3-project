<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- href대신 to를 사용하니까 링크 변경시 스핀이 안돔(리로딩이 없음) (router-link) -->
    <!-- 라우터를 사용하는 이유는 창 변경할 때 요청을 중간에 가로채서 맞는 컴포넌트를 찾아줌 (a태그보다 빠르다) -->
    <!-- to뒤에 경로나 :찍고 index.js의 name을 걸어주면 링크이동 -->
    <!-- index.js에서 설정한 home component가 여기에 들어온다 -->
    <router-link class="navbar-brand" :to="{ name: 'Home' }"
      >BrandName</router-link
    >

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'Todos' }"
          >Todos</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
