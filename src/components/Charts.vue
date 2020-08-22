<template>
    <div class="row">
      <div class="col-3">
        <h3>Range: {{rangeVal}}</h3>
        <Slider v-model="rangeVal" :range="true" />
        <div data-role="page">
  <!-- <div data-role="header">
  </div> -->

  <!-- <div data-role="main" class="ui-content" >
    <form method="post" action="/action_page_post.php">
      <div data-role="rangeslider">
        <label for="price-min" style="color:white">Price:</label>
        <input type="range" name="price-min" id="price-min" value="200" min="0" max="1000">
        <label for="price-max">Price:</label>
        <input type="range" name="price-max" id="price-max" value="800" min="0" max="1000">
      </div>
      </form>
  </div> -->
</div>
      </div>
      <div class="col-9" style="overflow:hidden">
      <Chart type="line" id="myChart" :data="basicData"
      style="width:100vh;height:26vh;"/>
      </div>
    </div>
</template>

<script>
import Chart from 'primevue/chart';
import Slider from 'primevue/slider';

export default {
  components: {
    Chart,
    Slider,
  },
  data() {
    return {
      rangeVal: [40, 50],
      sliderValue: 50,
      basicData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Active',
            borderColor: 'rgba(99,228,23,0.9)',
            borderWidth: 2,
            pointBackgroundColor: ['#03e2ba', '#75d101', '#e6dc01', '#ff9a00', '#03e2ba', '#75d101',
              '#e6dc01', '#ff9a00', '#03e2ba', '#75d101', '#e6dc01', '#ff9a00'],
            pointBorderWidth: 0,
            pointHoverRadius: 10,
            pointHoverBorderColor: 'rgba(99,228,23,0.4)',
            pointHoverBorderWidth: 5,
            pointRadius: 3,
            fill: true,
            backgroundColor: 'rgba(99,228,23,0.4)',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 74],
          },
          {
            label: 'Recovered',
            borderColor: 'rgba(1,182,230,0.9)',
            borderWidth: 2,
            pointBackgroundColor: ['#e203ce', '#880989', '#3001bd', '#0167d1', '#e203ce', '#880989',
              '#3001bd', '#0167d1', '#e203ce', '#880989', '#3001bd', '#0167d1'],
            pointBorderWidth: 0,
            pointHoverRadius: 10,
            pointHoverBorderColor: 'rgba(1,182,230,0.4)',
            pointHoverBorderWidth: 5,
            pointRadius: 3,
            fill: true,
            backgroundColor: 'rgba(1,182,230,0.4)',
            data: [28, 48, 40, 19, 86, 27, 90, 50, 28, 48, 40, 19],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.p-chart {
  background-image: linear-gradient(to right, rgba(255,0,0,0)),
}
</style>
