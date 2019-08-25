<template>
  <div class="card-container">
    <div class="title">COMPANY SPEND HISTORY</div>
    <div>
      <apexchart height="150" type="area" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import imgMixins from '../../../mixins/img.mixins'
export default {
  mixins: [imgMixins],
  data () {
    return {
      options: {},
      series: []
    }
  },
  computed: {
    ...mapState('Company', ['spendChart'])
  },
  mounted () {
    this.options = {
      chart: {
        id: 'spend-history-chart'
      },
      labels: this.spendChart.map(c => c.label),
      xaxis: {
        categories: this.spendChart.map(c => c.x)
      },
      dataLabels: {
        formatter: (val) => { return '' }
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            if (val > 1000)
              val = (val / 1000) + 'K'
            return val
          }
        }
      }
    }
    this.series = [{
      name: 'Spend',
      data: this.spendChart.map(c => c.y)
    }]
  }
}
</script>