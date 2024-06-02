SAWIT = document.getElementById('all-categories-page');

var sawit = {
    x: [2018, 2019, 2020, 2021, 2022],
    y: [249468013,	250234008,	251398336,	251570088,	256829531],
    mode: 'lines+markers',
    name: 'Kelapa Sawit',
    marker: {
        color: 'teal'
    },
    line: {
        color: 'teal'
    }
};

var data = [sawit];

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

Plotly.newPlot(SAWIT, data, layout, config)