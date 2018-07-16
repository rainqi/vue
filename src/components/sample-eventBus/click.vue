<template>
  <div class="click">
    <div @click="doClick" class="click__msg"><span>{{msg}}</span></div>
    <div>
      <show></show>
    </div>
  </div>
</template>

<script>
// use eventBus to talk in different components
import EventBus from '../js/event-bus.js';
import Show from './show';
export default {
  name: 'click',
  data() {
    return {
      msg: 'EventBus',
    };
  },
  methods: {
    doClick: function (event) {
      EventBus.$emit('getTarget', event.target);
    }
  },
  components: {
    Show,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
  @import "../sass/click.scss";
</style>
