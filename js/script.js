/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});


// function question1(answer){
//     if (ansewr === tiger"){
//         return Number;
//     } else if (user === "eagle"){
//         return different number;
        
//     }else if (answer === "penguin")
//     return dif num 
// }

// $(button)..........n
// input.val()


// question

var num = $("usrinput").val(num);

function dogsOrcats(){
    var usrinput = $("#question3").val();
    if (usrinput === "dogs"){
        return num + 3;
    } 
    else if (usrinput === "cats"){
        return num + 2;
    }
    else  {
        return num + 1;
    }
}