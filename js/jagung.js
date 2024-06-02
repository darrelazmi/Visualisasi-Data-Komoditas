JAGUNG = document.getElementById('jagung-page');

var jagung = {
    x: [2018, 2019, 2020, 2021, 2022],
    y: [30253938,	19650000,	16926000,	17017000,	23564000],
    mode: 'lines+markers',
    name: 'Jagung',
    marker: {
        color: 'yellow'
    },
    line: {
        color: 'yellow'
    }
};

var data = [jagung];

var layout = {
    title: {
        text:'Jumlah Hasil Panen dari Tahun 2018 hingga 2022',
        font: {
          size: 24
        },
        xref: 'paper',
        x: 0,
    },
    xaxis: {
      title: {
        text: 'Tahun',
        font: {
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Jumlah (Ton)',
        font: {
          size: 18,
          color: '#7f7f7f'
        }
      }
    },
    width: 800,
    height: 500
};

var config = {
    responsive: true
};

Plotly.newPlot(JAGUNG, data, layout, config)