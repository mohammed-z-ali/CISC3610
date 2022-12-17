var status = 0;

// get button elements

const reggae = document.getElementById("reggae");

const disco = document.getElementById("disco");

const rock = document.getElementById("rock");

const hiphop = document.getElementById("hiphop");

const lovesong = document.getElementById("lovesong");




// get audio elements

const audio_reggae = document.getElementById("audio_reggae");

const audio_disco = document.getElementById("audio_disco");

const audio_rock = document.getElementById("audio_rock");

const audio_hiphop = document.getElementById("audio_hiphop");

const audio_lovesong = document.getElementById("audio_lovesong");




//reggae




reggae.addEventListener('click', function () {

    if (status == 0) {

        audio_reggae.play();

        audio_disco.pause();

        audio_rock.pause();

        audio_hiphop.pause();

        audio_lovesong.pause();

        status = 1;




        document.getElementById("np").innerHTML = "Now Playing : Reggae";

    }

    else {

        audio_reggae.pause();

        audio_disco.pause();

        audio_rock.pause();

        audio_hiphop.pause();

        audio_lovesong.pause();

        status = 0;




    }

});




//disco




disco.addEventListener('click', function () {

    if (status == 0) {

        audio_reggae.pause();

        audio_disco.play();

        audio_rock.pause();

        audio_hiphop.pause();

        audio_lovesong.pause();

        status = 1;




        document.getElementById("np").innerHTML = "Now Playing : Disco";

    }

    else {

        audio_reggae.pause();

        audio_disco.pause();

        audio_rock.pause();

        audio_hiphop.pause();

        audio_lovesong.pause();

        status = 0;




    }

});




// rock




rock.addEventListener('click', function () {

    if (status == 0) {

        audio_reggae.pause();

        audio_disco.pause();

        audio_rock.play();

        audio_hiphop.pause();

        audio_lovesong.pause();

        status = 1;




        document.getElementById("np").innerHTML = "Now Playing : Rock";

    }

    else {

        audio_reggae.pause();

        audio_disco.pause();

        audio_rock.pause();

        audio_hiphop.pause();

        audio_lovesong.pause();

        status = 0;

    }

});




// hiphop




hiphop.addEventListener('click', function () {

    if (status == 0) {

        audio_reggae.pause();

        audio_disco.pause();

        audio_rock.pause();

        audio_hiphop.play();

        audio_lovesong.pause();

        status = 1;




        document.getElementById("np").innerHTML = "Now Playing : Hiphop";

    }

    else {

        audio_reggae.pause();

        audio_disco.pause();

        audio_rock.pause();

        audio_hiphop.pause();

        audio_lovesong.pause();

        status = 0;

    }

});




// lovesong




lovesong.addEventListener('click', function () {

    if (status == 0) {

        audio_reggae.pause();

        audio_disco.pause();

        audio_rock.pause();

        audio_hiphop.pause();

        audio_lovesong.play();

        status = 1;




        document.getElementById("np").innerHTML = "Now Playing : Love Song";

    }

    else {

        audio_reggae.pause();

        audio_disco.pause();

        audio_rock.pause();

        audio_hiphop.pause();

        audio_lovesong.pause();

        status = 0;

    }

});