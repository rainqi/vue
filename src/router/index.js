import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Show from '@/components/sample-eventBus/show';
import Click from '@/components/sample-eventBus/click';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/show/',
      name: 'show',
      component: Show,
    },
    {
      path: '/click/',
      name: 'click',
      component: Click,
    },
  ],
});
