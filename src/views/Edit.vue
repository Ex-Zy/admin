<template>
  <div class="page">
    <h4 class="center-align">Edit user</h4>
    
    <v-alert
      v-if="noUser"
      :title="alertMessage"
      :type="alertType"/>
    
    <v-form 
      :user="userInfo"></v-form>
    
  </div>
</template>

<script>
import axios from "axios";
import VForm from "@/components/v-form.vue";
import VAlert from "@/components/v-alert.vue";

export default {
  name: "Edit",
  components: {
    VForm,
    VAlert
  },
  data() {
    return {
      userInfo: {},
      alertMessage: "Loading user data...",
      alertType: "warning"
    };
  },
  mounted() {
    this.loadUser();
  },
  computed: {
    noUser() {
      return Object.keys(this.userInfo).length === 0;
    }
  },
  methods: {
    loadUser() {
      axios
        .get("http://localhost:3004/users/1")
        .then(({ data }) => (this.userInfo = data))
        .catch(e => console.error(e));
    }
  }
};
</script>

<style scoped>
</style>
