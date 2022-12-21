

const arrayCartelas = []

for (let index = 0; index < 10; index++) {
    const cartela = [];
    for (let index = 0; index < 3; index++) {
       while (true) {
            let numbers = Math.ceil(Math.random() * 75)

            if (!cartela.includes(numbers)) {
                cartela.push(numbers);
                break
            }
       }
        
    }
    cartela.sort((a, b) => a - b)
    arrayCartelas.push(cartela);
} 

console.log(arrayCartelas);




// ========================================================



for (let index = 1; index <= 75; index++) {
    
    number = 1
    
    let numeros = document.querySelector(".numeros")
    numeros.innerHTML += `<div class="caixasN" id="num${index}">${index}</div>`
    
    number++
    
     
}


let display = document.querySelector("#display")
const btn = document.querySelector("#send")

number = display.value








// console.log(display.value);




// Verificar as cartelas


function confereCartela(numsorteados) {
    let cloneCartelas = arrayCartelas
    for (const number of numsorteados) {
        for (const cloneCartela of cloneCartelas) {
            for (let index = 0; index < cloneCartela.length; index++) {
                if (cloneCartela[index] == number) {
                    cloneCartela.splice(cloneCartela.indexOf(cloneCartela[index]), 1)
                    if (cloneCartela.length == 0) {
                        // alert(`Cartela ${cloneCartelas.indexOf(cloneCartela) + 1} bateu!`);

                        const bateu = document.querySelector(".bateu")
                        
                        bateu.style.display = 'grid'
                        closeBtn = document.querySelector("#closeWindow");
                        closeBtn.innerHTML = `<p id="cb">Cartela ${cloneCartelas.indexOf(cloneCartela) + 1} bateu!</p>`;
                        
                        const displayBateu = document.querySelector(".N3");
                        displayBateu.innerHTML = `<p id="displayGanhou">Cartela ${cloneCartelas.indexOf(cloneCartela) + 1} bateu!</p>`;

                    }
                };
            }
        }
    }
}

const bateu = document.querySelector(".bateu")

closeBtn = document.querySelector("#closeWindow");
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    bateu.style.display = 'none';
})


let numsorteados = []


btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    
    const displayOption = document.querySelector(`#num${display.value}`)
    displayOption.classList.add('sorteado')
    
    
    let numChamado = document.querySelector("#numChamado");
    
    
    numsorteados.push(display.value);
    
    
    console.log(numsorteados);
    
    numChamado.innerHTML = `<h1>${display.value}</h1>`
    console.log(displayOption);
    
    // const arrayNumbers = []
    // confereCartela(arrayNumbers)
    confereCartela(numsorteados)



    console.log(arrayCartelas);
})






