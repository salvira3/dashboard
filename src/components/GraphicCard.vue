<template>
  <div class="my-card p-4">
    <div class="row">
      <div class="col-11">
        <h4 class="title-card font-weight-bold text-uppercase">average purchase value</h4>
        <bar-chart/>
      </div>
      <div class="col-1">
        <span class="fa fa-ellipsis-v"/>
      </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import BarChart from '@/components/BarChart';

export default {
  name: 'GraphicCard',
  props: [

  ],
  components: {
    BarChart,
  }
}
/* eslint-enable */
</script>

<style lang="sass" scoped>
</style>
