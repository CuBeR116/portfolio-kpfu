<template>
  <div id="main">
    <MainHead />
    <About />
    <Contacts />
  </div>
</template>

<script>
import MainHead from "../components/MainPage/MainHead";
import Contacts from "../components/MainPage/Contacts";
import About from "../components/MainPage/About";

export default {
  name: "Main",
  components: {
    MainHead,
    Contacts,
    About,
  },
};
</script>
