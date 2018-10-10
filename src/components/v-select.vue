<template>
  <div class="select">
    <label>{{label}}</label>
    <select
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
      type: String
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
}
</style>
