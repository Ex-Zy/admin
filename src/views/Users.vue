<template>
  <div class="page">
    <h4 class="center-align">Brief information about users</h4>
    
    <v-alert 
      v-if="noUsers" 
      :title="alertMessage" 
      :type="alertType"/>
    
    <v-table 
      v-else 
      :users="userList"></v-table>
  </div>
</template>

<script>
import axios from "@/helpers/shortUrlToServer";
import VTable from "@/components/v-table";
import VAlert from "@/components/v-alert";

export default {
  name: "Users",
  components: {
    VTable,
    VAlert
  },
  data() {
    return {
      userList: [],
      alertType: "warning",
      alertMessage: "Loading users..."
    };
  },
  mounted() {
    this.getUsers("/users");
  },
  computed: {
    noUsers() {
      return this.userList.length === 0;
    }
  },
  methods: {
    getUsers(url) {
      axios
        .get(url)
        .then(({ data }) => (this.userList = data))
        .catch(e => console.error(e));
    }
  }
};
</script>

<style scoped>
</style>
