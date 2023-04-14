/*
i = 0;

if (i < 100) {
    si esegue tutto il blocco di istruzioni
    i = i + 1
    si ritorna al if
}


ESEMPIO 

1) i = 0;  in console si ha 0
2) i = 1;  in console si ha 1
3) i = 2;  in console si ha 2



*/


const elegrid = document.querySelector('.grid');

for (let i = 0; i <= 100; i = i + 1) {
    console.log(i);
    elegrid.innerHTML = elegrid.innerHTML + `<div class="cell">${i}</div>`
}