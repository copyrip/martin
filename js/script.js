/* MARTIN's WEBSITE
 *
 * 0. <title>
 * get time...
 *
 */


$("title").text(getTime());

setInterval(function(){
  $("title").text(getTime());
}, 1000);


function getTime() {
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  return  time;
}
/*
var array ["1","2","3"];

function animTitle(array) {
  array.each(function(e) {
    $("title").text(array[e];
  }
}
*/

