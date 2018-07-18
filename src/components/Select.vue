<template>
  <div class="selector">
    <div class="selector__dropdown">
      <div class="collapsible">
        <div class="selector__dropdown-header">
          <div class="selector__dropdown-header--title">
            <div class="selector__dropdown-header--name">GLA SUV 2017年款2</div>
          </div>
          <div class="selector__dropdown-header--icon">
            <i class="ec ec-caret-down"></i>
          </div>
        </div>
        <div class="selector__dropdown-content">
          <div class="selector__dropdown-options">
            <div class="selector__dropdown-option"></div>
            <div class="selector__dropdown-option"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .selector {
    display: flex;
    justify-content: center;
    padding-top: .9375em;

    &__dropdown {
      flex: 1;
      width: 0;
      &-header {
        border: 0;
        background-color: #ececec;
        padding: 0 1em;
        font-size: .75rem;
        height: 3em;
        line-height: 3em;
        justify-content: space-between;
        &--title {
          display: flex;
        }
        &--name {
          font-size: .75rem;
          color: #1f1f1f;
          overflow: hidden;
        }
        &--icon {
          vertical-align: middle;
        }
      }
    }
  }
</style>
