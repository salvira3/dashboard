<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
/* ============
 * Entry Point
 * ============
 *
 * The entry point of the application.
 */

export default {
  /**
   * The name of the application.
   */
  name: 'VueBoilerplate',

  /**
   * Fires when the app has been mounted.
   */
  mounted() {
    // If the user is authenticated,
    // fetch the data from the API
    if (this.$store.state.auth.authenticated) {
      this.$store.dispatch('account/find');
    }
  },
};
</script>

<style lang="scss">
  @import './styles/app.scss';
</style>
