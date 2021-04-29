
dynamically add a style using attr() in jQuery (Ex14)

$("button").click(function(){
$("id,class or tag").attr('style', 'text-align: center');
});

dynamically add a class and using attr() in jQuery (Ex15)

$("button").click(function(){
    $("id,class or tag").addClass("give stylesheet classname");
});

dynamically add a text into a color bar using .text and .html in jQuery (Ex16)

$("button").click(function(){
    $("#text").text("Konexio");
  });

$("button").click(function(){
    $("#text").html("Konexio");
  });

(Ex17)

$("button").click(function(){
    $("#text").show("display");
});

(Ex18)

$("button").click(function(){
    $("#text").hide("display");
});

(Ex19)

$("button").click(function(){
    $("input").removeAttr("disabled");
});

(Ex20)-non exercise

(Ex21)

$("button").click(function(){
    $("#square").animate({
        width: '+=500px'
    }, 3000);
});

(Ex22)

$("button").click(function(){
    $("#text").animate({
        fontSize: '+=50px'
    }, 3000);
});

(Ex23)

$("button").click(function(){
    $("#square").animate({
        marginLeft: '950px'
    }, 2000);
});

(Ex24)

$("button").click(function(){
    $("#bg").animate({
        marginLeft: '850px'
    },2000);
});

(Ex25)


(Ex26)

$(function(){
    $("button").click(function(){
        $("input").addClass("is-invalid")
    })
});

(Ex27)

$(function(){
    $("button").click(function(){
        $("input").addClass("is-valid")
    })
});

(Ex28)

$(function(){
    $("button").click(function(){
        var userEmail = document.querySelector("input");
        console.log(userEmail.value);
        
    });
});

(Ex29)

$(function(){
    $("button").click(function(){
        
        var userStr = document.querySelector("input");
        console.log(userStr.value.length);
        
        if(userStr.value.length > 5) {
            $("input").addClass("is-valid");
        } else {
            $("input").addClass("is-invalid");
        }
    });
});




(Ex32)

$("button").click(function () {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function (data, statuts, response) {
            console.log(`Country: ${data[0].name}`);
            console.log(`Capital: ${data[0].capital}`);
        }
    });
});

(Ex33)

$("button").click(function () {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function (data, statuts, response) {
            $("#country").html(data[0].name);
            $("#capital").html(data[0].capital);
        }
    });
});

(Ex34)

$("button").click(function () {
    var userCountry = document.querySelector("input", 'value');
    var country = userCountry.value;
    var countryUrl = `https://restcountries.eu/rest/v2/name/${country}/`;
    $.ajax({
        url: countryUrl,
        success: function (data, statuts, response) {
            // console.log('capital', data[0].capital );
            $("#country").html(data[0].name);
            $("#capital").html(data[0].capital);
        }
    });
});
