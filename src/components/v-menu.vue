<template>
  <nav class="light-blue darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">App</router-link>
      <ul id="nav-mobile" class="right">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          tag="li"
          exact>
          <a>{{link.title}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "v-menu",
  props: {
    links: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.brand-logo {
  left: 10px;
  transform: none;
}
</style>
