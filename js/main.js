document.addEventListener("DOMContentLoaded", function () {
    // Assuming there is only one element with the class "popup-trigger"
    console.log("culo");
    var triggers =  document.querySelectorAll(".popup-trigger");


    triggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            var target = this.getAttribute("data-target");
            var grayElement = document.querySelector(".gray");
            grayElement.style.visibility = "visible";
            grayElement.classList.add("active");

            document.querySelector(target).classList.add("active");

        });
    });

    var closers = document.querySelectorAll(".popup-close, .gray");

    closers.forEach( closer => {
        closer.addEventListener("click", function () {
            var popupElements = document.querySelectorAll(".popup");
            var grayElement = document.querySelector(".gray");

            popupElements.forEach(function (element) {
                element.classList.remove("active");
            });
            grayElement.classList.remove("active");
            grayElement.style.visibility = "hidden";

        });
    });
});

