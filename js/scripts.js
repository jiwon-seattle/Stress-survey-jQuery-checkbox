$(document).ready(function(){
    $("#stress_survey").submit(function(event){
      event.preventDefault();
      //$("#work-responses").show();
      //var userResponses = []
      sum1 = 0
      sum2 = 0
      sum3 = 0

      $("input:checkbox[name=negativeAffects]:checked").each(function(){
        var affects = parseInt($(this).val());
        sum1 = sum1 + affects
        
        });

      $("input:checkbox[name=symptoms]:checked").each(function(){
        var affects = parseInt($(this).val());
        sum2 = sum2 + affects
         
        });

      $("input:checkbox[name=coping]:checked").each(function(){
        var affects = parseInt($(this).val());
        sum3 = sum3 + affects
             
        });

                                                         

    sum = sum1 + sum2 + sum3
    
    if (sum >= 5) {
        $("#extreme").show();
    } else if (sum >= 3 || sum <5) {
        $("#medium").show();
    } else {
        $("#low").show();
    }

    
});
    
});