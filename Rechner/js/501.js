

// $(document).ready(function(){
    // $("#dartboard #areas g").children().hover(
    //     function(){
    //         $(this).css("opacity","0.6");
    //     },
    //     function(){
    //         $(this).css("opacity","1");
    //     }
    // )

//     $("#dartboard #areas g").children().click(function(){
//         // $(this).hide().fadeIn('slow');
//         alert($(this).attr("id"));
//     });
// });



// Example von https://codepen.io/Bryan_Cook/pen/ZoXNoZ
// function Keypad(){
//     $('#page3').show();
//     closeNav();
//     }

// This is to prevent any jQuery code from running before the document is finished loading (is ready).
// It is good practice to wait for the document to be fully loaded and ready before working with it. 
// This also allows you to have your JavaScript code before the body of your document, in the head section.
$(document).ready(function(){
 
  $("#start").on("click",function(){
    $("#player1next").attr("class", "btn btn-warning");
  });

  var i = 2;
    // Felder auf Dartboard drücken. i=2 gibt an Spieler 1 ist dran
    $("#dartboard #areas g").children().on("click",function(){
      if(i%2 == 0) { // even
        // Feld aktuelle Punkte Orange einfärben
        $("#scoreThrowP1").css("background-color","orange");
        // $("#player1next").attr("class", "btn btn-warning");
      // Gedrücktes Feld Orange einfärben 
      // $(this).css("fill","orange")
        var score = $(this).attr("value");
        var oldscore =  $("#scoreThrowP1").html();
       $("#scoreThrowP1").html(parseInt(oldscore)+parseInt(score));
      }
      else{
        $("#scoreThrowP2").css("background-color","orange");
        $("#player2next").attr("class", "btn btn-warning");
        var score = $(this).attr("value");
        var oldscore =  $("#scoreThrowP2").html();
        $("#scoreThrowP2").html(parseInt(oldscore)+parseInt(score));
      }
        
        
    }); 
    
    $("#player1next").on("click",function(){
      $("#scoreThrowP1").css("background-color","whitesmoke");
      $("#player1next").attr("class", "btn btn-primary");
      $("#player2next").attr("class", "btn btn-warning");
      var oldscore =  $("#scoreThrowP1").html();
      var rest1 = $("#actScoreP1").html();
      $("#actScoreP1").html(parseInt(rest1)-parseInt(oldscore));
      $("#scoreThrowP1").html("0");
      i=3;
    });  
      
    $("#player2next").on("click",function(){
      $("#scoreThrowP2").css("background-color","whitesmoke");
      $("#player2next").attr("class", "btn btn-primary");
      $("#player1next").attr("class", "btn btn-warning");
      var oldscore =  $("#scoreThrowP2").html();
      var rest1 = $("#actScoreP2").html();
      $("#actScoreP2").html(parseInt(rest1)-parseInt(oldscore));
      $("#scoreThrowP2").html("0");
      i =2;
    });  
});
    
//     var bcx="x";
//     //==== HOVER DARTBOARD ======
//     $("#dartboard #areas g").children().hover(
//       function(){
//         bcx=$(this).css("fill");
//             $(this).css("fill","blue");
//         $(this).css("opacity","0.6");
//      },
//       function(){
//     //    alert(bcx);
//         var localvar=bcx;
//         //alert(localvar);
//         $(this).css("opacity","1");
//             $(this).css("fill",bcx);
//     //    alert(bcx);
//     //    alert('1');
    
//       } 
//     )
    //=================================
    
    
    
    
    
    
//     function openNav() {
//       document.getElementById("mySidebar").style.width = "250px";
//       document.getElementById("main").style.marginLeft = "250px";
//     }
    
//     function closeNav() {
//       document.getElementById("mySidebar").style.width = "0";
//       document.getElementById("main").style.marginLeft= "0";
//     }
    
//     $('#calcontainer > div.item1.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()=="" || $("#scoreThrowP1").text()!="0"  )  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item2.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item3.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item4.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item5.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item6.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item7.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item8.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item9.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
//     $('#calcontainer > div.item10.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()==""  || $("#scoreThrowP1").text()!="0")  {
//             var existing=$("#scoreThrowP1").html();
//             $("#scoreThrowP1").html(existing+jQuery(this).html());
//     }
//     else {  
//             var existing=$("#scoreThrowP2").html();
//             $("#scoreThrowP2").html(existing+jQuery(this).html());
//      };
//     });
    
    
//     // delete button, vermutlich nicht gebraucht, wäre für Keypad
//     $('#calcontainer > div.item11.cal.btn.btn-info').click(function(){
//     if ($("#scoreThrowP1").text()=="0")  {
//       $("#scoreThrowP2").html("");
//     }
//       else {
//       $("#scoreThrowP1").html("");
//     }
      
//     });
    
//     $('#calcontainer > div.item12.cal.btn.btn-info').click(function(){
//       var existing=$("#scoreThrowP1").html();
//       $("#scoreThrowP1").html(parseInt(existing));
//       $('#page3').hide();
//     });