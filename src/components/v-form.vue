<template>
  <div class="form">
    <form>
      <v-input id="name" v-model="localUser.firstName" label="First name"/>
      <v-input id="last" v-model="localUser.lastName" label="Last name"/>
      <v-input id="age" type="number" v-model.number="localUser.age" label="Age"/>
      <v-input id="mail" type="email" v-model="localUser.email" label="Email"/>
      <v-input id="phone" v-model="localUser.phone" label="Phone"/>
      <v-input id="address" v-model="localUser.address" label="Address"/>
      <div class="form__bottom">
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import VInput from "@/components/v-input.vue";

export default {
  name: "v-form",
  components: {
    VInput
  },
  data() {
    return {
      localUser: {
        firstName: "",
        lastName: "",
        age: 0,
        company: "",
        isActive: false,
        balance: "",
        picture: "",
        accessLevel: "",
        email: "",
        phone: "",
        address: "",
        about: ""
      }
    };
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
