<template>
  <div class="scroll-bar">
    <div id="progress" class="progress-line"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  created() {
    this.initScrollBar();
  },
  methods: {
    initScrollBar() {
      document.addEventListener("scroll", ($event) => {
        let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        let height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("progress").style.width = scrolled + "%";
      });
    },
  },
};
</script>