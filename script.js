$(document).ready(function(){
    $("#addButton").click(function(){
      $("#oneScalar").hide();
      $("#twoVectors").show();
      $("#vAddW").show();
      $("#vSubW").hide();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    $("#subButton").click(function(){
      $("#oneScalar").hide();
      $("#twoVectors").show();
      $("#vAddW").hide();
      $("#vSubW").show();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    $("#scalarMult").click(function(){
      $("#twoVectors").hide();
      $("#oneScalar").show();
      $("#vAddW").hide();
      $("#vSubW").hide();
      $("#scalMultResult").show();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    // dot product doesn't work!
    // $("#dotProd").click(function(){
    //   $("#oneScalar").hide();
    //   $("#twoVectors").show();
    //   $("#vAddW")hide();
    //   $("#vSubW").hide();
    //   $("#scalMultResult").hide();
    //   $("#vDotW").show();
    //   $("#crossProdResult").hide();
    // });
    $("#crossProd").click(function(){
      $("#oneScalar").hide();
      $("#twoVectors").show();
      $("#vAddW").hide();
      $("#vSubW").hide();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").show();
    });
});
