window.onload = function(){
    var btn = document.getElementById('button');

    var stop = document.getElementById('stop');

    var p = document.getElementById('demo');

    var worker = new Worker('webworker.js');

    btn.onclick = function(){

        var input = document.getElementById('fibinput').value;
        var fib = parseInt(input);
        worker.postMessage(fib);
            console.log('finding');
        worker.onmessage = function (e){
            p.innerHTML = e.data;
        };
    }

    stop.onclick = function(){
        worker.terminate();
        p.innerHTML = 'stopped';
    
    }
}
