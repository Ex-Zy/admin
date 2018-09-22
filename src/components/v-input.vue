<template>
  <div class="input-field">
    <input
      :id="id"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="inputHangler">
    <label
      class="active"
      :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "v-input",
  model: {
    prop: "value",
    event: "update:val"
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    inputHangler($event) {
      this.$emit("update:val", $event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
