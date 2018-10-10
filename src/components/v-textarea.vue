<template>
  <div class="input-field">
    <textarea
      :id="id"
      :value="value"
      class="input-field__area materialize-textarea"></textarea>
    <label class="active" :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "v-textarea",
  props: {
    id: {
      type: String,
      requred: true
    },
    value: {
      type: String
    },
    label: {
      type: String,
      requred: true
    }
  }
};
</script>

<style lang="scss" scoped>
.input-field {
  margin: 30px 0 20px;
  &__area {
    height: 100px;
  }
}
</style>
