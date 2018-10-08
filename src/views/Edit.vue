<template>
  <div class="page">
    <h4 class="center-align">Edit user</h4>
    
    <v-alert
      v-if="noUser"
      :title="alertMessage"
      :type="alertType"/>
    
    <v-form
      v-else
      v-model="user"/>
    
    <div class="buttons-wrp">
      <v-button type="danger" @click.native="activeModal = true">Delete</v-button>
      <v-button type="primary" @click.native="saveUser">Save</v-button>
    </div>

    <v-modal
      v-model="activeModal"
      @confirm="removeUser" />

  </div>
</template>

<script>
import axios from "@/helpers/shortUrlToServer";
import VForm from "@/components/v-form";
import VAlert from "@/components/v-alert";
import VButton from "@/components/v-button";
import VModal from "@/components/v-modal";

export default {
  name: "Edit",
  components: {
    VForm,
    VAlert,
    VButton,
    VModal
  },
  data() {
    return {
      user: null,
      alertMessage: "Loading user data...",
      alertType: "warning",
      activeModal: false
    };
  },
  mounted() {
    this.loadUser();
  },
  computed: {
    noUser() {
      return !this.user;
    },
    id() {
      return this.$route.params.id;
    },
    url() {
      return `/users/${this.id}`;
    }
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(({ data }) => (this.user = data))
        .catch(e => console.error(e));
    },
    saveUser() {
      axios
        .patch(this.url, this.user)
        .then(() => {
          console.info("Сохранено успешно");
          this.redirectToUsers();
        })
        .catch(e => console.error(e));
    },
    removeUser() {
      axios
        .delete(this.url)
        .then(() => {
          console.info("Удалено");
          this.redirectToUsers();
        })
        .catch(e => console.error(e));
    },
    redirectToUsers() {
      this.$router.push("/users");
    }
  }
};
</script>

<style lang="scss" scoped>
.buttons-wrp {
  text-align: center;
  padding: 0 0 40px;
  .btn + .btn {
    margin-left: 15px;
  }
}
</style>
