const elegrid = document.querySelector('.grid');

for (let i = 0; i <= 100; i = i + 1) {
    elegrid.innerHTML = elegrid.innerHTML + `<div class="cell">${i}</div>`
}