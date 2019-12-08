<template>
  <div class="my-content">
    <b-navbar
      toggleable="sm"
      type="light"
      class="my-navbar">
      <b-navbar-brand href="#">
        <img
          src="../assets/img/advotics-logo.jpg"
          style="height: 30px" >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"/>

      <b-collapse
        id="nav-collapse"
        is-nav>
        <b-navbar-nav/>
        <b-navbar-nav class="ml-auto">
          <p
            class="text-md-center mr-3 mb-0 acc-info">Username <br>
            <span
              style="font-size: 10px; color: #777">
              Company Name
            </span>
          </p>
          <span
            class="fa fa-user-circle mr-4"
            style="font-size: 30px; color: #BDBEC0"/>
          <span
            class="fa fa-sign-out align-middle mt-1"
            style="font-size: 20px; color: #BDBEC0"/>
        </b-navbar-nav>
      </b-collapse>


    </b-navbar>

    <div class="container pt-4">
      <div class="row">
        <div class="col col-12">
          <!-- Content will be placed here -->
          <slot/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

export default {
  /**
   * The name of the layout.
   */
  name: 'DefaultLayout',

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      menuCollapsed: false,
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
    /**
     * Will log the user out.
     */
    logout() {
      this.$store.dispatch('auth/logout');
    },

    /**
     * Will toggle the menu.
     */
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    },
  },
};
</script>
