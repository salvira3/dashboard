<template>
  <v-layout>
    <div class="container pb-5">
      <div class="row">
        <div class="col-sm-7">
          <h1 class="title-page">Dashboard</h1>
        </div>
        <div class="col-sm-5">
          <date-filter/>
        </div>
      </div>
      <div
        class="row collapse-title mt-4"
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
        <div class="row pt-5">
          <div class="col-6">
            <graphic-card />
          </div>
          <div class="col-3">
            <product-card
              :title="'best selling sku'"
              :list="my_list" />
          </div>
          <div class="col-3">
            <product-card
              :title="'top competitor sku'"
              :list="other_list" />
          </div>
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
import GraphicCard from '@/components/GraphicCard.vue';
import ProductCard from '@/components/ProductCard.vue';
import DateFilter from '@/components/DateFilter.vue';


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
    GraphicCard,
    ProductCard,
    DateFilter,
  },

  data() {
    return {
      visible: true,
      my_list: [
        {
          image_url: 'bag.png', nama_produk: 'Nama Produk', harga: 10000, jml_terjual: 10,
        },
        {
          image_url: 'bag.png', nama_produk: 'Nama Produk', harga: 10000, jml_terjual: 10,
        },
        {
          image_url: 'bag.png', nama_produk: 'Nama Produk', harga: 10000, jml_terjual: 10,
        },
        {
          image_url: 'bag.png', nama_produk: 'Nama Produk', harga: 10000, jml_terjual: 10,
        },
        {
          image_url: 'bag.png', nama_produk: 'Nama Produk', harga: 10000, jml_terjual: 10,
        },
      ],
      other_list: [
        {
          image_url: 'pony.png', nama_produk: 'Nama Produk', harga: 20000, jml_terjual: 50,
        },
        {
          image_url: 'pony.png', nama_produk: 'Nama Produk', harga: 20000, jml_terjual: 50,
        },
        {
          image_url: 'pony.png', nama_produk: 'Nama Produk', harga: 20000, jml_terjual: 50,
        },
        {
          image_url: 'pony.png', nama_produk: 'Nama Produk', harga: 20000, jml_terjual: 50,
        },
        {
          image_url: 'pony.png', nama_produk: 'Nama Produk', harga: 20000, jml_terjual: 50,
        },
      ],
    };
  },
};
</script>
