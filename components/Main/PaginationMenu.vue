<template>
  <div class="menu-fixed-pc">
    <div class="fixed-pc-logo">
      <router-link class="logo-text" :to="{ path: '/' }">Х. Эмиль</router-link>
    </div>
    <router-link class="p-link" :to="{ path: '/' }">
      <img src="../../img/home.svg" alt="Вверх" />
    </router-link>

    <router-link class="p-link" :to="{ path: '/about' }">
      <img src="../../img/info.svg" alt="Вверх" />
    </router-link>

    <router-link class="p-link" :to="{ path: '/contacts' }">
      <img src="../../img/contacts.svg" alt="Вверх" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PaginationMenu",
};
</script>