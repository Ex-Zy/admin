<template>
  <div :class="[`alert alert_${type}`]">
    {{title}}
  </div>
</template>

<script>
export default {
  name: "v-alert",
  props: {
    title: {
      type: String,
      default: "Alert instance"
    },
    type: {
      validator(val) {
        return ["primary", "warning", "danger", "success"].includes(val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  padding: 10px 30px;
  margin: 0 0 15px;
  color: #fff;
  font-size: 16px;
  border-radius: 0 0 2px 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  &_warning {
    background: #ff6d00;
  }
  &_danger {
    background: #ff3d00;
  }
  &_primary {
    background: #00b0ff;
  }
  &_success {
    background: #00c853;
  }
}
</style>
