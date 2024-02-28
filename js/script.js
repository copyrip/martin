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
  icon = "./img/"+icon + ".png";

  $("#fav").attr("href", icon);

  /* TITLES */

  var iconImg = $('<img>').attr({
    src: icon,
    width: 20
  });

  $(".title").html("");
  $(".title").append(iconImg)
  $(".title").append(" martin's world - "+getTime());


  setInterval(function(){
    $("title").text("martin's world - "+getTime());

    $(".title").html("");
    $(".title").append(iconImg)
    $(".title").append(" martin's world - "+getTime());
  }, 1000);

  /* IMG HOVER */
  imgHover("#algo");
  imgHover("#ritf");
  imgHover("#sylvain");
  imgHover("#madeleine");
  imgHover("#nico");
  imgHover("#raphaelle");
  imgHover("#marc");
  imgHover("#grf");
});

function imgHover(id) {

  $(id).hover(function() {
    var x = Math.floor(Math.random()*($(window).width()-$(id+"_img").width()));
    var y = Math.floor(Math.random()*($(window).height()-$(id+"_img").height()));

    var size = Math.floor(Math.random() * (700 - 500 + 1)) + 500;
    $(id+"_img").css({width:size});
    $(id+"_img").css({transition:"none",opacity:1,left:x, top:y, filter:"blur(0px)"}).show();
  },
    function() {
      setTimeout(
	function()
	{
	  $(id+"_img").css({transition:"all 3s",opacity:0.3,filter:"blur(10px)"});
	}, 3500);
    }

  );
}

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

