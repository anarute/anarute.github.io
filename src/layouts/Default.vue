<template>
  <div class="layout">
    <main-menu />
    <slot />
  </div>
</template>

<script>
import config from "~/.temp/config.js";
import MainMenu from "@/components/MainMenu.vue";

export default {
  components: { MainMenu },
  computed: {
    config() {
      return config;
    },
  },
};
</script>

<style src="~/assets/css/main.css"></style>
