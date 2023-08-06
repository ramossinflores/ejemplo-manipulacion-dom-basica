/* const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#parrafito');
const input = document.querySelector('input');
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML ='Patito <br> feo';
h1.innerText ='Patito <br> feo';
//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('class', 'rojo')
//h1.setAttribute('')

h1.classList.add('rojo');
h1.classList.remove('verde');
h1.classList.toggle('verde');
h1.classList.contains('verde');

const img =document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/674318/pexels-photo-674318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
console.log(img);
pid.append(img); */

const h1= document.querySelector('h1');
const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn= document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
const form= document.querySelector('#form');

//btn.addEventListener('evento', 'código que queremos ejecutar');

function SumarInputs(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs= input1.value + input2.value;
    pResult.innerText="Resultado: " + sumaInputs;
}

//btn.addEventListener('click', btnOnClick);
form.addEventListener('submit', SumarInputs);


