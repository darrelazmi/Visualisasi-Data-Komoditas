PADI = document.getElementById('padi-page');

var padi = {
    x: [2018, 2019, 2020, 2021, 2022],
    y: [59200534,	54604033,	54649202,	54415294,	54748977],
    mode: 'lines+markers',
    name: 'Padi',
    marker: {
        color: 'green'
    },
    line: {
        color: 'green'
    }
};

var data = [padi];

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

Plotly.newPlot(PADI, data, layout, config)