<template>
  <div class="main-info" id="head">
    <div class="welcome-text">
      <p>{{ text }}</p>
      <a href="#info" data-scroll class="welcome-text-arrow">
        <img src="../../img/arrow.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHead",
  data() {
    return {
      text: "",
      toPrintText: "<Добро пожаловать />",
    };
  },
  created() {
    this.printText();
  },
  methods: {
    printText(i = 0) {
      let speed = 50;

      setTimeout(() => {
        if (i < this.toPrintText.length) {
          this.text += this.toPrintText.charAt(i);
          i++;
          this.printText(i);
        }
      }, speed);
    },
  },
};
</script>