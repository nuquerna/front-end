let button, databox, name, worker;

function init() {
    button = document.getElementById('button');
    databox = document.getElementById('databox');
    name = document.getElementById('name');

    worker = new Worker('worker.js');

    button.addEventListener('click', send);
    worker.addEventListener('message', received);
}

const send = () => worker.postMessage(name.value);

const received = e => {
    const li = document.createElement("li");     
    li.innerHTML = e.data;
    databox.appendChild(li);
}

window.addEventListener('load', init, false);