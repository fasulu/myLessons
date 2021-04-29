// ## index.html

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="./css/styles.css">

</head>
<body>
    <div>
        <button id="startAnimation">Start animation</button>

        <button id="stopAnimation">Stop animation</button>
    
        <button>Don't click me!</button>
    </div>

    <h1>Hello World!</h1>

    <h2>I was hidden</h2>

    <!-- <input id="txtInput" type="text"> -->

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="./js/script.js"></script>
</body>
</html>
```

// ## styles.css

```css
.color-red {
    color: red;
    font-size: 40px;
}
```

// ## script.js

```jsx
$(function () {

    console.log($("div").html());

    // $("div").html("<label>there are no more buttons!</label>")

    $("div").append("je viens de faire une méthode append")
    $("div").append("<label>je vais disparaitre</label>")
    $("div").before("<h3>test before</h3>")

    // $("div").empty();

    $("h2").show()

    // $("h2").show(5000, function () {
    //     console.log("je suis bien affiché maintenant!");
    // });

    // $("h2").toggle(3000, function () {
    //     console.log("Animation terminée !");
    // });

    $("#startAnimation").click(function () {
        $("h1").animate({
            height: '+=150px',
            width: '+=150px',
            fontSize: "+=15px"
        }, 3000, function () {
            console.log("animation terminée !");
        });
    });

    $("#stopAnimation").click(function () {
        $("h1").stop()
    });
    

    $("button").css('color', 'green')

    // $("button").click(function () {
    //     // $("h1").hide();

    //     $("h1").toggleClass("color-red")

    //     $("h2").show();
    // });

    // $("h1").mouseenter(function () {
    //     $("body").css('background-color', 'red')
    // })

    // $("h1").mouseleave(function () {
    //     $("body").css('background-color', 'white')
    // })

    $("h1").hover(
        function () {
            $("body").css('background-color', 'red')
        },
        function () {
            $("body").css('background-color', 'white')
        });

    $("#txtInput").change(function () {
        console.log($(this).val())
    })
})
```