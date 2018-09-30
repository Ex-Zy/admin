<template>
  <div class="page">
    <h4 class="center-align">Add user</h4>

    <v-form
      v-model="user"/>

    <div class="buttons-wrp">
      <v-button type="secondary">Cancel</v-button>
      <v-button type="primary">Save</v-button>
    </div>

  </div>
</template>

<script>
// import axios from "axios";
import VForm from "@/components/v-form.vue";
import VAlert from "@/components/v-alert.vue";
import VButton from "@/components/v-button.vue";

const emptyUser = {
  id: "",
  isActive: "",
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
    VButton
  },
  data() {
    return {
      user: null
    };
  },
  created() {
    this.mergeUser();
  },
  methods: {
    mergeUser() {
      this.user = Object.assign({}, emptyUser);
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
