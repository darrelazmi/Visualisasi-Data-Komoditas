SEMUA = document.getElementById('all-categories-page');

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

var data = [padi, jagung, tebu, sawit];

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

Plotly.newPlot(SEMUA, data, layout, config)