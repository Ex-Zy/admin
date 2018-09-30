<template>
  <button
    :class="`btn btn-${type}`"
    type="button">
      <slot>Default button</slot>
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: {
    type: {
      type: String,
      validator(val) {
        return ["primary", "secondary", "danger"].includes(val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  background: #039be5;
  &:hover {
    background: darken(#039be5, 5%);
  }
}
.btn-secondary {
  background: #bdbdbd;
  &:hover {
    background: darken(#bdbdbd, 5%);
  }
}
.btn-danger {
  background: #ff3d00;
  &:hover,
  &:focus {
    background: darken(#ff3d00, 5%);
  }
}
</style>
