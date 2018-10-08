<template>
  <div class="form">
    <v-input id="name" v-model="localUser.firstName" label="First name"/>
    <v-input id="last" v-model="localUser.lastName" label="Last name"/>
    <v-input id="age" type="number" v-model.number="localUser.age" label="Age"/>
    <v-input id="mail" type="email" v-model="localUser.email" label="Email"/>
    <v-input id="phone" v-model="localUser.phone" label="Phone"/>
    <v-input id="address" v-model="localUser.address" label="Address"/>
    <v-checkbox id="active-user" v-model="localUser.isActive" title="Active"/>
  </div>
</template>

<script>
import VInput from "@/components/v-input";
import VCheckbox from "@/components/v-checkbox";

export default {
  name: "v-form",
  components: {
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
      localUser: null
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
  width: 800px;
  margin: 40px auto;
  &__bottom {
    text-align: center;
  }
}
</style>
