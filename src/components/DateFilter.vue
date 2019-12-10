<template>
  <div class="my-card">
    <date-range-picker
      :date-range="dateRange"
      v-model="dateRange"
      :locale-data="locale"
      :opens="opens"
      :ranges="ranges"
      :max-date="maxDate"
      class="w-100 p-3"
      @update="console.log(value)"
    >
      <div
        slot="input"
        slot-scope="picker"
        class="period-title">
        <span
          class="fa fa-calendar mr-2"
          style="font-size: 20px"/> Period
        {{ picker.startDate | date }} - {{ picker.endDate | date }}
        <span
          class="fa fa-angle-down ml-2"
          style="font-size: 20px" />
      </div>
    </date-range-picker>
  </div>

</template>

<script>
/* eslint-disable */
import DateRangePicker from 'vue2-daterange-picker';
import moment from 'moment';
// you need to import the CSS manually (in case you want to override it)
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';

export default {
  name: 'Picker',
  components: { DateRangePicker },
  filters: {
    date(value) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return Intl.DateTimeFormat('en-US', options).format(value);
    },
  },
  data() {
    return {
      dateRange: {
        startDate: moment().subtract(1, 'week'),
        endDate: moment().subtract(1, 'days'),
      },
      maxDate: moment().subtract(1, 'days'),
      opens: 'center',
      ranges: { // default value for ranges object (if you set this to false ranges will no be rendered)
        Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'This month': [moment().startOf('month'), moment()],
        'Last 7 days': [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        'Last 30 days': [moment().subtract(1, 'month'), moment().subtract(1, 'days')],
      },
      locale: {
        direction: 'ltr', // direction of text
        format: 'DD-MM-YYYY',
        separator: ' - ', // separator between the two ranges
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        weekLabel: 'W',
        customRangeLabel: 'Custom',
        daysOfWeek: moment.weekdaysMin(), // array of days - see moment documenations for details
        monthNames: moment.monthsShort(), // array of month names - see moment documenations for details
        firstDay: 1, // ISO first day of week - see moment documenations for details
      },
    };
  },
};
/* eslint-enable */
</script>

<style lang="sass" scoped>
  .period-title
    color: #8B8B8B
    width: 100%
  .vue-daterange-picker ::v-deep .reportrange-text
    border:0 !important
  .form-control
    border:0 !important

</style>
