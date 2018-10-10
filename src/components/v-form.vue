<template>
  <div class="form">
    <v-input id="name" v-model="localUser.firstName" label="First name"/>
    <v-input id="last" v-model="localUser.lastName" label="Last name"/>
    <v-input id="avatar" v-model="localUser.picture" label="Avatar"/>
    <v-input id="age" type="number" v-model.number="localUser.age" label="Age"/>
    <v-input id="mail" type="email" v-model="localUser.email" label="Email"/>
    <v-input id="phone" v-model="localUser.phone" label="Phone"/>
    <v-input id="address" v-model="localUser.address" label="Address"/>
    <v-select id="account" v-model="localUser.accessLevel" :list="accessLevelList" label="Account"/>
    <v-textarea id="about" v-model="localUser.about" label="About"/>
    <v-checkbox id="active-user" v-model="localUser.isActive" title="Active"/>
  </div>
</template>

<script>
import VInput from "@/components/v-input";
import VCheckbox from "@/components/v-checkbox";
import VSelect from "@/components//v-select";
import VTextarea from "./v-textarea";

export default {
  name: "v-form",
  components: {
    VTextarea,
    VSelect,
    VInput,
    VCheckbox
  },
  model: {
    prop: "user",
    event: "update:user"
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  created() {
    this.mergeUser();
  },
  data() {
    return {
      localUser: null,
      accessLevelList: [
        { title: "Admin", value: "admin" },
        { title: "User", value: "user" },
        { title: "Guest", value: "guest" }
      ]
    };
  },
  watch: {
    localUser: {
      deep: true,
      handler: function(val) {
        this.$emit("update:user", val);
      }
    }
  },
  methods: {
    mergeUser() {
      this.localUser = Object.assign({}, this.user);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 800px;
  margin: 40px auto;
  &__bottom {
    text-align: center;
  }
}
</style>
