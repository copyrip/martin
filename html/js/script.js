$(document).ready(function(){

  $("#dark").click(function() {
    if($("body").hasClass("dark")){
      $("body").removeClass("dark");
      $(this).text("dark");
    }
    else {
      $("body").addClass("dark");
      $(this).text("light");
    }
  });

  $("ul#all li").hide();

  $("form input[type=\"checkbox\"]").each(function(){
    display($(this).attr('id'),$(this).is(':checked'));
  });


  /* more infos */

  //$('dt + dd').prev('dt').append(' <span class="more">&rarr;</span>');

  //$("ul li dd").hide(); 

  $("ul li dt").click(function(){
    $("#pics").prepend("<img src=\"./img/"+$(this).attr("img")+"\">");
  });

  $("ul li dt").click(function(){
    $("a").click(function(){
      return true;
     });
    $(this).next().toggle();

    $(this).children(".more").text() === '→' ? $(this).children(".more").text('↓'):$(this).children(".more").text('→');
  });
/*
  $("ul li dt").mouseleave(function(){
    $(this).next().slideUp(3);
  });
  */


  /* sorting */

  $("form input[type=\"checkbox\"]").change(function(){
    display($(this).attr('id'),$(this).is(':checked'));
  });

  /* random tag order */
  $("#langs").append($('#langs li').sort(() => Math.random() - 0.5));

});

function display(c,is){
  c = "."+c;
  is ? $(c).show() : $(c).hide();
}

function updateDate(){
  var dt = new Date();
  dt.getDate() > 9 ?
    $("#date #day").text(dt.getDate())		:
    $("#date #day").text('0'+dt.getDate())	;
  dt.getMonth() > 9 ?
    $("#date #month").text(dt.getMonth() + 1)		:
    $("#date #month").text('0'+(dt.getMonth() + 1))	;
  $("#date #year").text(dt.getFullYear());

  dt.getHours() > 9 ?
    $("#date .hours").text(dt.getHours())	:
    $("#date .hours").text('0'+dt.getHours())	;
  dt.getMinutes() > 9 ?
    $("#date .minutes").text(dt.getMinutes())		:
    $("#date .minutes").text('0'+dt.getMinutes())	;
  dt.getSeconds() > 9 ?
    $("#date .seconds").text(dt.getSeconds()):
    $("#date .seconds").text('0'+dt.getSeconds());
}

updateDate();

setInterval(function(){
  updateDate()
},1000);
