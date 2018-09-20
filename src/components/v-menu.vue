<template>
  <nav class="blue darken-2">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Vue app</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
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
}
</style>
