<template>
  <div id="app">

    <nav class="blue darken-2">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Vue app</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link tag="li" to="/" exact>
            <a>Home</a>
          </router-link>
          <router-link tag="li" to="/about" exact>
            <a>About</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
.brand-logo {
  left: 10px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
