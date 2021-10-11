<template>
  <nav>
    <ul>
      <li v-for="page in routerPages" :key="page">
        <router-link :to="page">
          {{ removeSlash(page) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routerPages } from "../router";

export default defineComponent({
  name: "Index",
  setup() {
    const removeSlash = (page: string) => page.replace("/", "");

    return {
      routerPages,
      removeSlash,
    };
  },
});
</script>

<style scoped>
li {
  list-style: none;
  text-align: left;
  padding: 20px;
  font-size: 30px;
}
</style>