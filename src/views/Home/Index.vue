<template>
  <v-layout>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1 class="title-page">Dashboard</h1>
        </div>
        <div class="col-sm-6"/>
      </div>
      <div
        v-b-toggle.marketContent
        class="row collapse-title">
        <div class="col-9">
          <div class="text-uppercase p-2">Market insights</div>
        </div>
        <div class="col-3">
          <div class="p-2">
            <span class="fa fa-lightbulb-o mr-2 help" /><a
              href="#"
              class="help">Click here for help</a>
            <span
              class="fa fa-angle-up ml-2"
              style="font-size: 25px" />
          </div>
        </div>
      </div>
      <b-collapse id="marketContent">
        <div class="row">
          <div class="col-sm-3">
            mini-card here
          </div>
        </div>
        <div class="row">
          <div class="col-6">Graphic here</div>
          <div class="col-3">Product Card here</div>
          <div class="col-3">Product Card here</div>
        </div>
      </b-collapse>
    </div>
  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VLayout from '@/layouts/Default.vue';
import VCard from '@/components/Card.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'HomeIndex',

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    VCard,
  },
};
</script>
