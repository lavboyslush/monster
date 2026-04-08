 const doorleft = document.getElementById("doorleft");
    const doorright = document.getElementById("doorright");

function go(where) {


   
    doorleft.style.animation = "none";
    void doorleft.offsetWidth; // Force reflow
    doorleft.style.animation = "doorleft-reverse 0.5s linear forwards";

   
    doorright.style.animation = "none";
    void doorright.offsetWidth; // Force reflow
    doorright.style.animation = "doorright-reverse 0.5s linear forwards";




    setTimeout(function () {


        doorleft.style.animation = "none";
        void doorleft.offsetWidth; // Force reflow
        doorleft.style.animation = "doorleft 1.5s linear forwards";

        doorright.style.animation = "none";
        void doorright.offsetWidth; // Force reflow
        doorright.style.animation = "doorright 1.5s linear forwards";


        // img.remove();
        window.location.href = where;
    },  700);
}


function openDoors() {
    // Prevent running twice
    if (doorleft.style.animation && doorleft.style.animation.includes("doorleft")) return;

    doorleft.style.animation = "none";
    doorright.style.animation = "none";
    void doorleft.offsetWidth; // force reflow
    void doorright.offsetWidth;

    doorleft.style.animation = "doorleft 1.5s ease-in forwards";
    doorright.style.animation = "doorright 1.5s ease-in forwards";
}

// Open doors when everything is loaded
window.onload = openDoors;

// Fallback: open after 3 seconds if still not opened
setTimeout(openDoors, 1500);

