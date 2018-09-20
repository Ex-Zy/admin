<template>
  <table class="highlight">
    <thead>
      <tr>
        <slot name="header">
          <th>Имя</th>
          <th>Отчество</th>
          <th>Фамилия</th>
          <th>Возраст</th>
          <th>Пол</th>
        </slot>
      </tr>
    </thead>
    <tbody>
      <slot name="body">
        <tr
          v-for="(user, index) in users"
          :key="index">

          <td>{{user.firstName}}</td>
          <td>{{user.middleName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.age}}</td>
          <td>{{user.gender}}</td>

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
