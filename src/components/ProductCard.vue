<template>
  <div class="my-card p-4">
    <div class="row">
      <div class="col-10">
        <p class="title-card font-weight-bold text-uppercase">{{ title }}</p>
      </div>
      <div class="col-2">
        <span class="fa fa-ellipsis-v"/>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in list"
        :key="item.id">
        <div
          v-if="index === 0"
          class="first-item">
          <div class="row">
            <div class="col-5">
              <img
                src="../assets/img/bag.png"
                class="my-img-thumbnail">
            </div>
            <div class="col-7 pl-0">
              <p class="mt-2 font-weight-bold">{{ item.nama_produk }}</p>
              <p class="my-item">
                {{ intToRupiah(item.harga) }}
                <span class="ml-2">{{ item.jml_terjual }} terjual</span>
              </p>
            </div>
          </div>


        </div>
        <div
          v-else
          class="other-item mt-2">
          <div class="row">
            <div class="col-4">
              <img
                src="../assets/img/bag.png"
                class="my-img-thumbnail">
            </div>
            <div class="col-8 pl-0">
              <p class="mt-2 font-weight-bold">{{ item.nama_produk }}</p>
              <p class="my-item">
                {{ intToRupiah(item.harga) }}
                <span class="ml-2">{{ item.jml_terjual }} terjual</span>
              </p>
            </div>
          </div>
        </div>


      </div>

    </div>
  </div>

</template>

<script>
/* eslint-disable */
import intToRupiah from '@/utils/intToRupiah';

export default {
  name: 'ProductCard',
  props: [
    'title',
    'list'
  ],
  components: {
  },
  methods: {
    intToRupiah,
  },
}
/* eslint-enable */
</script>

<style lang="sass" scoped>


  .first-item
    border-radius: 5px
    background: #FCE8C2

  .other-item
    border-radius: 5px
    border: 1px solid #d2d2d2

  .my-img-thumbnail
    width: 100%
    height: 100%
    border-top-left-radius: 5px
    border-bottom-left-radius: 5px

  .my-item
    font-size: 10px
</style>
