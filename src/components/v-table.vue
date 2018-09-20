<template>
  <table class="highlight">
    <thead>
      <tr>
        <slot name="header">
          <td>id</td>
          <td>FirstName</td>
          <td>LastName</td>
          <td>Age</td>
          <td>Balance</td>
          <td>Active</td>
          <td>Avatar</td>
          <td>Account</td>
          <td>Company</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Address</td>
        </slot>
      </tr>
    </thead>
    <tbody>
      <slot name="body">
        <tr
          v-for="(user, index) in users"
          :key="index">

          <td>{{user.id}}</td>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.age}}</td>
          <td>{{user.balance}}</td>
          <td>{{user.isActive}}</td>
          <td>{{user.picture}}</td>
          <td>{{user.accessLevel}}</td>
          <td>{{user.company}}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.address}}</td>

        </tr>
      </slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "v-table",
  props: {
    users: {
      type: Array,
      requred: true
    }
  }
};
</script>

<style scoped>
</style>
