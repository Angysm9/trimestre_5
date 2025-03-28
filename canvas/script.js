let canvas = document.getElementById ("canvas");
let cxt = canvas.getContext ("2d");

cxt.fillStyle="rgb (0 255 0 / 60%)";
cxt.fillRect=(0, 0, 180, 180);

cxt.fillStyle="red";
cxt.fillRect=(320, 240, 200, 300);

cxt.fillStyle="rgb (0 0 255 / 50%)";
cxt.fillRect=(450, 240, 100, 100);