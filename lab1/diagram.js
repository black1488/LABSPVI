function createDiagram() {
    var wb =0;
    var wk =0;
    var wn =0;
    var wp =0;
    var wq =0;
    var wr =0;
    var bb =0;
    var bk =0;
    var bn =0;
    var bp =0;
    var bq =0;
    var br =0;
    var table = document.getElementById("table");
    for (var i = 0, row; row=table.rows[i]; i++) {
        for (var j = 0, col;  col = row.cells[j]; j++) {
            var item;
        }
    }
    // Bar chart
  new Chart(document.getElementById("chess-chart"), {
  type: 'bar',
  data: {
    labels: ["wb", "wk", "wn", "wp", "wq", "wr", "bb", "bk", "bn", "bp", "bq", "br"],
    datasets: [
      {
        label: "Pieces",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#c45850","#3e95cd"],
        data: [2,1,2,8,1,2,2,1,2,8,1,2]
      }
    ]
  }, 
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'My chess diagram'
    }
  }
  });
}