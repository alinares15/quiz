/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var num = 0;
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        var q3score = dogsOrcats(q3Result);
        var q2score = mood(q2Result);
        var q1score = weather(q1Result);
        totalScore = q3score + q2score + q1score;
        if (totalScore === 22){
            $(".result").html("You Are Craving Pizza!")
        } else if (totalScore < 12){
            $(".result").html("You Are Craving Salad!")
        } else {
            $(".result").html("You Are Craving SLEEP!")
        }
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


function dogsOrcats(q3Result){
    if (q3Result === "dogs"){
        return 3;
    } 
    else if (q3Result === "cats"){
        return 2;
    }
    else  {
        return 1;
    }
}


function mood(q2Result){
    if (q2Result === "content"){
        return 4;
    } 
    else if (q2Result === "agatated"){
        return 3;
    } else if (q2Result === "hungry"){
        return 2;
    } else {
        return 1;
    }
}

function weather(q3Result){
    if (q3Result === "sunny"){
        return 3;
    }
    else if (q3Result === "rainty"){
        return 2;
    } else {
        return 1;
    }
}

function congragulate() {
    
}