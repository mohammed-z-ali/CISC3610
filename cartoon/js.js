var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');

    // dimensions

    var canvasWidth = 600;
    var canvasHeight = 400;

    //colors
    var skyColor = '#70c5ce';
    var sunColor = '#F6C73D';
    var sunStrokeColor = '#F5F4A9';
    var grassColor = '#abe87a';
    var fenceColor = '#81593B';
    var houseColor = '#5B7C9E';
    var doorColor = '#EE573B';
    var windowColor = '#955251';
    var cloudColor = '#fff';
    var headColor = '#DFA280';
    var mouthColor = 'white';
    var bodyColor = '#F6C770';


    //background
    ctx.fillStyle = skyColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);


    // sun
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = sunColor;
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = sunStrokeColor;
    ctx.stroke();


    // clouds
    ctx.beginPath();
    ctx.arc(280, 40, 60, 32, 2 * Math.PI);
    ctx.arc(350, 30, 19, 15, 2 * Math.PI);
    ctx.arc(400, 100, 60, -5, 2 * Math.PI);
    ctx.fillStyle = cloudColor;
    ctx.fill();


    // grass
    ctx.fillStyle = grassColor;
    ctx.fillRect(0, canvasHeight - 100, canvasWidth, 100);



    // fence
    for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(i * 60, canvasHeight - 100);
        ctx.lineTo(i * 60 + 30, canvasHeight - 100);
        ctx.lineTo(i * 60 + 30, canvasHeight - 50);
        ctx.lineTo(i * 60, canvasHeight - 50);
        ctx.lineTo(i * 60, canvasHeight - 100);
        ctx.fillStyle = fenceColor;
        ctx.fill();
    }


    // house
    ctx.beginPath();
    ctx.moveTo(250, canvasHeight - 50);
    ctx.lineTo(250, canvasHeight - 250);
    ctx.lineTo(450, canvasHeight - 250);
    ctx.lineTo(450, canvasHeight - 50);
    ctx.lineTo(250, canvasHeight - 50);
    ctx.fillStyle = houseColor;
    ctx.fill();

    // door
    ctx.beginPath();
    ctx.rect(350, canvasHeight - 250, 100, 200);
    ctx.fillStyle = doorColor;
    ctx.fill();

    // window
    ctx.beginPath();
    ctx.rect(370, canvasHeight - 170, 50, 50);
    ctx.fillStyle = windowColor;
    ctx.fill();


    /*------CARTOON---------*/

    //hair
    ctx.beginPath()
    ctx.arc(280, 280, 20, 0, 2* Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

     //body
     ctx.beginPath();
     ctx.rect(260, 300, 40, 35);
     ctx.rect(265, 335, 8, 25);
     ctx.rect(285, 335, 8, 25);
     ctx.fillStyle = bodyColor;
     ctx.fill();

    //face
    ctx.beginPath()
    ctx.arc(280, 282, 19, 0, 2* Math.PI);
    ctx.fillStyle = headColor;
    ctx.fill();

    //eyes
    ctx.beginPath()
    ctx.arc(272, 276, 2.5, 0, 2* Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath()
    ctx.arc(288, 276, 2.5, 0, 2* Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    //mouth

    ctx.beginPath();
    //ctx.arc(280, 260, 5, 3, 2 * Math.PI);
    ctx.ellipse(280, 288, 6, 2.5, Math.PI / 40, 1, 2 * Math.PI);
    ctx.fillStyle = mouthColor;
    ctx.fill();



    //text
    ctx.font = "15px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText("A sample cartoon with background", 10, 200);
    

