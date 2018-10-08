<template>
  <label class="input-checkbox">
    <input type="checkbox"
           class="input-checkbox__item"
           :id="id"
           :checked="value"
           @change="$emit('change', $event.target.checked)" />
    <span class="input-checkbox__text">{{title}}</span>
  </label>
</template>

<script>
export default {
  name: "v-checkbox",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    id: {
      type: String
    },
    title: {
      type: String
    },
    value: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
