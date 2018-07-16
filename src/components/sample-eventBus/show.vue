<template>
  <div class="show">{{msg}}</div>
</template>

<script>
import EventBus from '../js/event-bus.js';
export default {
  name: 'Show',
  data() {
    return {
      msg: 'showEvents',
    };
  },
  mounted(){
    EventBus.$on('getTarget', target => {
      console.log(target);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
