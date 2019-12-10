<script>
/* eslint-disable */
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [
        {
          label: 'test',
          type: 'line',
          data: [19000, 21000, 22000, 17000, 12000, 19000],
          backgroundColor: 'transparent',
          borderColor: '#F9E66D',
        },
        {
          label: 'Net',
          backgroundColor: '#5DAD58',
          data: [19000, 21000, 22000, 17000, 12000, 19000]
        },
        {
          label: 'Gross',
          backgroundColor: '#4F9B50',
          data: [3000, 2000, 1000, 1000, 1500, 2100]
        },
        {
          label: 'Unit per Transaction',
          backgroundColor: '#707070',
          data: [7, 6, 5, 4, 3, 2]
        },
      ]
    },
    options: {
      legend: {
        position: 'bottom',
        labels: {
          filter: function(legendItem, data) {
            return !legendItem.text.includes('test');
          }
        }
      },
      tooltips: {
        mode: 'label',
        backgroundColor: 'white',
        bodyFontColor: 'black',
        borderColor: '#F9E66D',
        borderWidth: 1,
        titleFontColor: 'black',
        callbacks: {
          label: function(tooltipItem, data) {
            var myIndex = data.datasets[tooltipItem.datasetIndex].label;
            // for tooltipitem y label
            // if y label === gross
            // return gross+=nettnya?
            // if y label ===
            var total = 0;
            for (var i = 0; i < data.datasets.length; i++) {
              if (data.datasets[i].label !== "test" || data.datasets[i].label !== "Unit per Transaction") {
                total += data.datasets[i].data[tooltipItem.index];
              }
            }
            if (myIndex === "Gross") {
              return myIndex + " " + Number(total)
            }
            if (myIndex === "Average Purchase Value") {
              return "APV" + " " + Number(tooltipItem.yLabel)
            }
            if (myIndex === "Unit per Transaction") {
              return "UPT" + " " + Number(tooltipItem.yLabel)
            }
            if (myIndex === "test") {
              return false
            }
            else {
              return myIndex + " " + Number(tooltipItem.yLabel)
            }
            
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          { 
            stacked: true,
            barPercentage: 0.5 
          }
        ],
        yAxes: [{ stacked: true }]
      },
    }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
/* eslint-enable */
</script>
