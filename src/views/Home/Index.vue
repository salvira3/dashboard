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
        class="row collapse-title"
        @click="visible = !visible">
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
      <b-collapse
        id="marketContent"
        v-model="visible">
        <div class="row pt-5">
          <div class="col-sm-4">
            <mini-card
              title="Sales Turnover"
              total="3600000"
              percentage="33,8"/>
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
import MiniCard from '@/components/MiniCard.vue';

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
    MiniCard,
  },

  data() {
    return {
      visible: true,
    };
  },
};
</script>
