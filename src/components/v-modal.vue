<template>
  <div class="modal" v-if="active">
    <div class="modal__overlay" @click="cancelButtonHandler"></div>
    <div class="modal__dialog">
      <div class="modal__top">
        <h4>
          <slot name="header">
            Confirmation
          </slot>
        </h4>
      </div>
      <div class="modal__body">
        <slot name="body">Are you sure?</slot>
      </div>
      <div class="modal__bottom">
        <v-button type="secondary" @click.native="cancelButtonHandler">No</v-button>
        <v-button type="primary" @click.native="confirmButtonHandler">Yes</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/v-button";

export default {
  name: "v-modal",
  components: {
    VButton
  },
  model: {
    prop: "active",
    event: "hidden"
  },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    cancelButtonHandler() {
      this.$emit("hidden", false);
    },
    confirmButtonHandler() {
      this.$emit("confirm");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: none;
  display: block;
  background: none;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.6;
  font-size: 16px;
  font-smoothing: antialiased;
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  &__dialog {
    width: 60%;
    max-height: 70%;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 10%;
    border-radius: 2px;
    background: #fafafa;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  }
  &__top {
    padding: 24px 24px 0;
  }
  &__body {
    padding: 0 24px 24px 24px;
  }
  &__bottom {
    padding: 4px 24px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .btn + .btn {
      margin-left: 15px;
    }
  }
}
</style>
