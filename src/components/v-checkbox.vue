<template>
  <label class="input-checkbox">
    <input type="checkbox"
           class="input-checkbox__item"
           :id="id"
           :checked="value"
           @change="updateValue"/>
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
  },
  methods: {
    updateValue(e) {
      this.$emit("change", e.target.checked);
    }
  }
};
</script>

<style scoped>
</style>
