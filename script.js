$(document).ready(function(){
    $("#addButton").click(function(){
      //$("#addButton").removeClass("bttnIsActive");
      $(this).toggleClass("bttnIsActive");
      $("#subButton").removeClass("bttnIsActive");
      $("#scalarMult").removeClass("bttnIsActive");
      $("#dotProd").removeClass("bttnIsActive");
      $("#crossProd").removeClass("bttnIsActive");
      $("#oneScalar").hide();
      $("#twoVectors").show();
      $("#vAddW").show();
      $("#vSubW").hide();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    console.log("the function was left");
    $("#subButton").click(function(){
      //$("#subButton").removeClass("bttnIsActive");
      $(this).toggleClass("bttnIsActive");
      $("#addButton").removeClass("bttnIsActive");
      $("#scalarMult").removeClass("bttnIsActive");
      $("#dotProd").removeClass("bttnIsActive");
      $("#crossProd").removeClass("bttnIsActive");
      $("#oneScalar").hide();
      $("#twoVectors").show();
      $("#vAddW").hide();
      $("#vSubW").show();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    $("#scalarMult").click(function(){
      //$("#scalarMult").removeClass("bttnIsActive");
      $(this).toggleClass("bttnIsActive"); 
      $("#addButton").removeClass("bttnIsActive");
      $("#subButton").removeClass("bttnIsActive");
      $("#dotProd").removeClass("bttnIsActive");
      $("#crossProd").removeClass("bttnIsActive");
      $("#twoVectors").hide();
      $("#oneScalar").show();
      $("#vAddW").hide();
      $("#vSubW").hide();
      $("#scalMultResult").show();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    
    $("#dotProd").click(function(){
      //$("#dotProd").removeClass("bttnIsActive");
      $(this).toggleClass("bttnIsActive"); 
      $("#addButton").removeClass("bttnIsActive");
      $("#scalarMult").removeClass("bttnIsActive");
      $("#subButton").removeClass("bttnIsActive");
      $("#crossProd").removeClass("bttnIsActive");
      $("#oneScalar").hide();
      $("#twoVectors").show();
      $("#vAddW").hide();
      $("#vSubW").hide();
      $("#scalMultResult").hide();
      $("#vDotW").show();
      $("#crossProdResult").hide();
    });
    $("#crossProd").click(function(){
      //$("#crossProd").removeClass("bttnIsActive");
      $(this).toggleClass("bttnIsActive"); 
      $("#addButton").removeClass("bttnIsActive");
      $("#scalarMult").removeClass("bttnIsActive");
      $("#dotProd").removeClass("bttnIsActive");
      $("#subButton").removeClass("bttnIsActive");
      $("#oneScalar").hide();
      $("#twoVectors").show();
      $("#vAddW").hide();
      $("#vSubW").hide();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").show();
    });
});
