<template>
  <div class="page">
    <h4 class="center-align">Brief information about users</h4>

    <v-table :users="userList"></v-table>
  </div>
</template>

<script>
import VTable from "@/components/v-table.vue";

export default {
  name: "Users",
  components: {
    VTable
  },
  data() {
    return {
      userList: [
        {
          firstName: "Sergey",
          middleName: "Sergeevich",
          lastName: "Nagornykh",
          age: 25,
          gender: "male"
        },
        {
          firstName: "Maksim",
          middleName: "Olegovich",
          lastName: "Tymoshenko",
          age: 28,
          gender: "male"
        },
        {
          firstName: "Marusya",
          middleName: "Fedorovna",
          lastName: "Dragan",
          age: 26,
          gender: "female"
        },
        {
          firstName: "Vika",
          middleName: "Oleksandrovna",
          lastName: "Polyantskaya",
          age: 32,
          gender: "female"
        },
        {
          firstName: "Oleg",
          middleName: "Vasilevich",
          lastName: "Ogyrtsov",
          age: 42,
          gender: "male"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
