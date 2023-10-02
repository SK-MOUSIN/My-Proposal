var reactangle = document.querySelector(".box");
var imageOfMyLoveOne = document.querySelector("#first_img")
var imageOfMyLoveTwo = document.querySelector("#second_img ")

reactangle.addEventListener("mousemove", function(details){
    var reactLocation = reactangle.getBoundingClientRect();
    var mousePoint = details.clientX - reactLocation.left;

    if (mousePoint < (reactLocation.width/2)){
        var redColor = gsap.utils.mapRange(0, reactLocation.width/2, 255, 0, mousePoint);

        gsap.to(reactangle, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            border: "2px solid #ccc",
            ease : Power4,
        });

        gsap.to(imageOfMyLoveOne, {
            scale: 1
        })

    }else {
        var blueColor = gsap.utils.mapRange(reactLocation.width/2, reactLocation.width, 0, 255, mousePoint);

        gsap.to(reactangle, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            border: "2px solid #ccc",
            ease : Power4,
        });

        gsap.to(imageOfMyLoveTwo, {
            scale: 1
        })

    }
})

reactangle.addEventListener("mouseleave", function(){
    gsap.to(reactangle, {
        backgroundColor: "#000",
        border: "none"
    })

    gsap.to(imageOfMyLoveOne, {
        scale: 0
    })

    gsap.to(imageOfMyLoveTwo, {
        scale: 0
    })
})