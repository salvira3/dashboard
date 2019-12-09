<template>
  <div class="my-card p-4">
    <div class="row">
      <div class="col-10">
        <h4 class="title-card">{{ title }}</h4>

      </div>
      <div class="col-2">
        <span class="fa fa-ellipsis-v text-right"/>

      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <h3 class="font-weight-bold pt-3">{{ intToRupiah(total) }}</h3>
        <small>
          <span
            class="fa fa-long-arrow-down"
            style="color:red"/> <span
              style="color:red"
              class="font-weight-bold ml-1">{{ percentage }}%</span> last period in products sold
        </small>
      </div>
      <div class="col-3">
        <img
          src="../assets/img/sales.svg"
          class="pt-4">
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import intToRupiah from '@/utils/intToRupiah';

export default {
  name: 'MiniCard',
  props: {
    title: String,
    total: Number,
    percentage: String,
  },
  methods: {
    intToRupiah,
  },
};
/* eslint-enable */
</script>

<style lang="sass" scoped>
  .my-card
    background: white
    border-radius: 3px
    box-shadow: -2.5px 2.5px 3px rgba(146, 146, 146, 0.3)

  .title-card
    color: #777
</style>
