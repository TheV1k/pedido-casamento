const btnSim = document.getElementById('btnSim')
const btnNao = document.getElementById('btnNao')
const animacao = document.querySelector('#pedido')
const aceito = document.querySelector('.img-aceito')


btnSim.addEventListener('click', () =>{
    animacao.classList.add('hidden')
    aceito.classList.remove('hidden')
})

btnNao.addEventListener('click', ()=>{
    btnNao.classList.add('hidden')
})
    
     
