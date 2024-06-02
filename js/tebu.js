TEBU = document.getElementById('tebu-page');


var tebu = {
    x: [2018, 2019, 2020, 2021, 2022],
    y: [29500000,	29100000,	29300000,	32200000,	32400000],
    mode: 'lines+markers',
    name: 'Tebu',
    marker: {
        color: 'purple'
    },
    line: {
        color: 'purple'
    }
};

var data = [tebu];

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

Plotly.newPlot(TEBU, data, layout, config)