<template>
  <div class="grid">
    <table class="grid__table highlight">
      <thead>
        <tr>
          <slot name="header">
            <th class="grid__col-top">#</th>
            <th class="grid__col-top">FirstName</th>
            <th class="grid__col-top">LastName</th>
            <th class="grid__col-top">Age</th>
            <th class="grid__col-top">Balance</th>
            <th class="grid__col-top">Active</th>
            <th class="grid__col-top">Avatar</th>
            <th class="grid__col-top">Account</th>
            <th class="grid__col-top">Company</th>
            <th class="grid__col-top">Email</th>
            <th class="grid__col-top">Phone</th>
            <th class="grid__col-top">Address</th>
          </slot>
        </tr>
      </thead>
      <tbody>
        <slot name="body">
          <tr
            v-for="user in users"
            :key="user.id">
            <td class="grid__col">
              <router-link
                :to="'/edit/' + user.id"
                class="blah">
                # {{user.id}}
              </router-link>
            </td>
            <td class="grid__col">{{user.firstName}}</td>
            <td class="grid__col">{{user.lastName}}</td>
            <td class="grid__col">{{user.age}}</td>
            <td class="grid__col">{{user.balance}}</td>
            <td class="grid__col">{{user.isActive}}</td>
            <td class="grid__col">{{user.picture}}</td>
            <td class="grid__col">{{user.accessLevel}}</td>
            <td class="grid__col">{{user.company}}</td>
            <td class="grid__col">{{user.email}}</td>
            <td class="grid__col">{{user.phone}}</td>
            <td class="grid__col">{{user.address}}</td>

          </tr>
        </slot>
      </tbody>
    </table>
  </div>
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

<style lang="scss" scoped>
.grid {
  overflow: auto;
  &__table {
    min-width: 1400px;
  }
  &__col-top {
    font-weight: 600;
  }
  &__col,
  &__col-top {
    text-align: center;
    &:first-of-type {
      width: 40px;
    }
  }
}
</style>
