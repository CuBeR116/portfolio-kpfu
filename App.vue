<template>
  <div id="app">
    <ProgressBar />
    <router-view></router-view>
    <PaginationMenu />
  </div>
</template>

<script>
import ProgressBar from "./components/Main/ProgressBar";
import PaginationMenu from "./components/Main/PaginationMenu";

export default {
  name: "app",
  components: {
    ProgressBar,
    PaginationMenu,
  },
};
</script>

<style>
@import "../styles/style.css";
</style>
