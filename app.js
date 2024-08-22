const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

start.addEventListener('click', () => {
    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
    start.disabled = true;
    stop.disabled = false;

});

stop.addEventListener('click', () => {
    document.removeEventListener('keydown', handleDown);
    document.removeEventListener('keyup', handleUp);
    logDiv.textContent = '';
    stateDiv.textContent = '';
    start.disabled = false;
    stop.disabled = true;
});

function handleDown(e) {
    logDiv.textContent = `Key: "${e.key}" is pressed down`;
    stateDiv.textContent = `Key is down`;
}

function handleUp(e) {
    logDiv.textContent = `Key: "${e.key}" is released`;
    stateDiv.textContent = `Key is up`;
}

