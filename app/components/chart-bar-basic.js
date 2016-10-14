import Ember from 'ember';

export default Ember.Component.extend({

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Last week Analysis'
    },
    xAxis: {
      categories: ['11-10-2016', '12-10-2016', '13-10-2016']
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Time spent'
      }
    }
  },

  chartData: [
    {
      name: 'Weekly Task Status',
      data: [5, 0, 20]
    }
  ],

});
