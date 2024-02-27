/* MARTIN's WEBSITE
 *
 * 0. favicon
 * random icon
 * 0. <title>
 * get time...
 *
 */


var icons = ["index","pager","die","meridian"];


$(document).ready(function() {

  $('a').attr('target', '_blank');
  
  /* Random favicon */
  var icon = icons[Math.floor(icons.length * Math.random())];
  icon = "./icons/"+icon + ".png";

  $("#fav").attr("href", icon);

  $("#ritf").hover(function() {
      var x = Math.floor(Math.random()*($(window).width()-$("#ritf_img").width()));
      var y = Math.floor(Math.random()*($(window).height()-$("#ritf_img").height()));
      $("#ritf_img").css({transition:"none",opacity:1,left:x, top:y, filter:"blur(0px)"}).show();
    },
    function() {
      $("#ritf_img").css({transition:"all 1s",opacity:0,filter:"blur(10px)"});
      //$("#ritf_img").fadeOut(1000);
      //$("#ritf_img").fadeOut(1000);
    }
  );
});


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

