var figuresArray = [0,0,0,0,0,0,0,0,0,0,0,0];
var myChart;

function moveFigure(){
  var cells = document.querySelectorAll('img[class=figure]');
  for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener("click",function(){
        this.remove();
    });
  }
}

function zeroFigures(){
    figuresArray = [0,0,0,0,0,0,0,0,0,0,0,0];
}
function checkFigures(){
  zeroFigures();
  var figures = document.querySelectorAll('img[class=figure]');
  var dynpath = window.location.href.replace('index.html','figures');
  for (let index = 0; index < figures.length; index++) {
      if (figures[index].src==dynpath+"/wb.png") {
          figuresArray[0]++;
      }
      if (figures[index].src==dynpath+"/wk.png") {
          figuresArray[1]++;
      }
      if (figures[index].src==dynpath+"/wn.png") {
          figuresArray[2]++;
      }
      if (figures[index].src==dynpath+"/wp.png") {
          figuresArray[3]++;
      }
      if (figures[index].src==dynpath+"/wq.png") {
          figuresArray[4]++;
      }
      if (figures[index].src==dynpath+"/wr.png") {
          figuresArray[5]++;
      }
      if (figures[index].src==dynpath+"/bb.png") {
          figuresArray[6]++;
      }
      if (figures[index].src==dynpath+"/bk.png") {
          figuresArray[7]++;
      }
      if (figures[index].src==dynpath+"/bn.png") {
          figuresArray[8]++;
      }
      if (figures[index].src==dynpath+"/bp.png") {
          figuresArray[9]++;
      }
      if (figures[index].src==dynpath+"/bq.png") {
          figuresArray[10]++;
      }
      if (figures[index].src==dynpath+"/br.png") {
          figuresArray[11]++;
      }
  }
}

function createDiagram() {
  checkFigures();
  myChart = new Chart(document.getElementById("chess-chart"), {
  type: 'bar',
  data: {
    labels: ["white bishop", "white king", "white knight", "white pawn", "white queen", "white rock", "black bishop", "black king", "black knight", "black pawn", "black queen", "black rock"],
    datasets: [
      {
        label: "Pieces",
        backgroundColor: ["#ffffff", "#ffffff","#ffffff","#ffffff","#ffffff","#ffffff", "#000000","#000000","#000000","#000000","#000000","#000000"],
        data: [figuresArray[0], figuresArray[1], figuresArray[2], figuresArray[3], figuresArray[4], figuresArray[5], figuresArray[6], figuresArray[7], figuresArray[8], figuresArray[9], figuresArray[10], figuresArray[11]]
      }
    ]
  }, 
  options: {
    scales:{
        yAxes:[{
            ticks:{
              beginAtZero: true,
              fontSize: 20
            }
        }],
        xAxes:[{
            ticks:{
              fontSize:20
            }
        }]
    },
    legend: {
        display: false 
    },
    title: {
      display: true,
      text: 'My chess diagram',
      fontSize: 20
    }
  }
  });
}
function refreshDiagram(){
    checkFigures();
    for (let index = 0; index < figuresArray.length; index++) {
        myChart.data.datasets[0].data[index] = figuresArray[index];
    }
    myChart.update();
}
