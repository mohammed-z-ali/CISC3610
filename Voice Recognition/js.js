
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous = false;

var circle = document.getElementById('circle');
var btn = document.getElementById('btn');
var instructions = document.getElementById('instructions');

btn.addEventListener('click', function () {
    recognition.start();
});

recognition.addEventListener('result', function (event) {
    var resultIndex = event.resultIndex;
    var transcript = event.results[resultIndex][0].transcript;
    var result = transcript.toLowerCase();
    if (result.includes('help')) {
        instructions.classList.add('show');
    } else if (result.includes('color')) {
        var color = result.split(' ')[1];
        circle.style.backgroundColor = color;
    } else if (result.includes('size')) {
        var size = result.split(' ')[1];
        if (size > 300) {
            alert('Size size limit 300');
        } else if (size < 1) {
            alert('Size too small, the minimize size is 1');
        } else {
            circle.style.width = size + 'px';
            circle.style.height = size + 'px';
            circle.style.marginTop = -(size / 2) + 'px';
            circle.style.marginLeft = -(size / 2) + 'px';
        }
    }
    btn.innerHTML = 'Speak';
});

recognition.addEventListener('end', function () {
    btn.innerHTML = 'Speak';
});
