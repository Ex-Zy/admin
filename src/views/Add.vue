<template>
  <div class="page">
    <h4 class="center-align">Add user</h4>

    <v-alert
      v-if="noUser"
      :title="alertMessage"
      :type="alertType"/>

    <v-form
      v-else
      v-model="user"/>

    <div class="buttons-wrp">
      <v-button type="secondary" @click.native="resetUser">Cancel</v-button>
      <v-button type="primary" @click.native="saveUser">Save</v-button>
    </div>

  </div>
</template>

<script>
import axios from "@/helpers/shortUrlToServer";
import VForm from "@/components/v-form";
import VAlert from "@/components/v-alert";
import VButton from "@/components/v-button";
import VModal from "@/components/v-modal";

const emptyUser = {
  id: 0,
  isActive: false,
  balance: "",
  picture: "",
  age: "",
  accessLevel: "",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  address: "",
  about: "",
  registered: ""
};

export default {
  name: "Add",
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
      alertType: "warning"
    };
  },
  mounted() {
    this.mergeUser();
  },
  computed: {
    noUser() {
      return !this.user;
    }
  },
  methods: {
    mergeUser() {
      this.user = Object.assign({}, emptyUser);
    },
    saveUser() {
      axios
        .post("/users", this.user)
        .then(() => {
          console.info("Пользователь создан успешно");
          this.redirectToUsers();
        })
        .catch(e => console.error(e));
    },
    resetUser() {
      console.info("Отмена");
      this.redirectToUsers();
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
