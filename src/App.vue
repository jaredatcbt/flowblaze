<template>
  <!-- Render components based on route name -->
  <component :is="getComponentName($route.name)"></component>
</template>
<script>
import HomePage from './views/pages/CustomHome.vue';
import Pricing from './views/pages/pricing.vue';
import commingsoon from './views/pages/commingsoon.vue';
import Login from './views/Auth/Login.vue';
export default {
  name: "App",
  components: {
    HomePage,
    Pricing,
    Login,
    commingsoon
  },
  methods: {
    getComponentName(routeName) {
      // Map route names to component names
      const routeToComponent = {
        home: 'HomePage',
        pricing: 'Pricing',
        signin: 'Login',
        commingsoon: 'commingsoon'
      };
      // Return component name based on route name
      return routeToComponent[routeName] || '';
    }
  }
}
</script>
