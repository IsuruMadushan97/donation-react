// $("#container").on('click-row.bs.table', function (e, row, $element) {
//     window.location = $element.data('href');
// });
let about = document.getElementById("about3");
let about2 = document.getElementById("about2");

function func(param, event) {
  about.style = "display:none";
  about2.style = "display:block";
  let id = event.childNodes[1].childNodes[0];
  console.log(id);
}
