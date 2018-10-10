<template>
  <div id="app">
    
    <!--Menu-->
    <v-menu :links="links"></v-menu>
    
    <!--Page-->
    <router-view/>
    
  </div>
</template>

<script>
import VMenu from "@/components/v-menu.vue";

export default {
  name: "app",
  components: { VMenu },
  comments: {
    VMenu
  },
  data() {
    return {
      links: [
        {
          path: "/",
          title: "Home"
        },
        {
          path: "/users",
          title: "Users"
        },
        {
          path: "/add",
          title: "Add user"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  padding: 0 10px;
}
</style>
