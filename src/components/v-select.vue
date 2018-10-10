<template>
  <div class="select">
    <select
      :id="id"
      class="select__list browser-default"
      :value="selected"
      @change="updateValue">
      <option v-if="placeholder" value disabled>{{placeholder}}</option>
      <option
        v-for="item in list"
        :value="item.value"
        :key="item.value">
        {{item.title}}
      </option>
    </select>
    <label>{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "v-select",
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    selected: {
      type: String,
      requred: true
    },
    label: {
      type: String,
      requred: true
    },
    list: {
      type: Array,
      requred: true
    },
    placeholder: {
      type: String,
      default: "Select.."
    },
    id: {
      type: String,
      requred: true
    }
  },
  methods: {
    updateValue(e) {
      this.$emit("change", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  margin: 1rem 0;
  display: flex;
  flex-direction: column-reverse;
}
</style>
