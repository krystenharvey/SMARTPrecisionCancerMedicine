// eventually this will grab data from files from serve, based on a prompt from a patient
//only the patient's mutated gened will appear
//when you click on a gene, it will go to another page that shows the variants, and the
//variant(s) is exhibiting

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  text: ['Asize: 40', 'Bsize: 60', 'Csize: 80', 'Dsize: 100'],
  mode: 'markers',
  marker: {
    color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    size: [40, 60, 80, 100]
  }
};

var data = [trace1];

var layout = {
  title: 'Bubble Chart Hover Text',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('myDiv', data, layout);
