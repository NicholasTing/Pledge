window.onload = function(){
    var btn = document.getElementById('button');

    btn.onclick = function(){
        var worker = new Worker('webworker.js');
        worker.postMessage(40);
        worker.onmessage = function (e) {alert(e.data)};
    }
}
