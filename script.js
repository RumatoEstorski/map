window.onload = function () {
let map = document.getElementById("map");
let rx = Math.floor(Math.random() * (map.width + 1));
let ry = Math.floor(Math.random() * (map.height + 1));
let treasure = {
    x: rx,
    y: ry
};
map.onmousemove = showCoords;

function showCoords (event) {
    let coords = document.getElementById("coords");
    let x = event.offsetX;
    let y = event.offsetY;
    let x1 = Math.abs(x - treasure.x);
    let x2 = Math.abs(y - treasure.y);
    coords.value = `Координаты: ${x} , ${y}`;
    if (x1 < 30 && x2 < 30) {
        alert("Сокровище здесь");
    }
    if (x1 < 200 && x2< 200) {
        coords.value = `Координаты: ${x} , ${y}` + " Теплее";
    }
}
};