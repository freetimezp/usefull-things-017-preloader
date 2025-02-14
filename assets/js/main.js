document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;
    let c = 0;
    let i = setInterval(function () {
        document.querySelector(".loading-page .counter h1").innerHTML = c;
        document.querySelector(".loading-page").style.width = c + "%";

        counter++;
        c++
        if (counter == 101) {
            clearInterval(i);
        }
    }, 50);
});

//same code with jquery
// $(document).ready(function () {
//     var counter = 0;
//     var c = 0;
//     var i = setInterval(function () {
//         $(".loading-page .counter h1").html(c);
//         $(".loading-page").css("width", c + "%");

//         counter++;
//         c++;
//         if (counter == 101) {
//             clearInterval(i);
//         }
//     }, 50);
// });