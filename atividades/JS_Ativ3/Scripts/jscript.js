
/* Criar os objetos para trabalhar com eles usando JavaScript */
const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono = document.querySelector('#div_poligono')
const obj_p_perimetro = document.querySelector('#p_perimetro')
const obj_zoom_in = document.querySelector('#zoom_in')
const obj_zoom_out = document.querySelector('#zoom_out')
const obj_img_zoom = document.querySelector('#img_zoom')
const obj_num_valor1 = document.querySelector('#num_valor1')
const obj_num_valor2 = document.querySelector('#num_valor2')
const obj_txt_resultado = document.querySelector('#txt_resultado')
const obj_bt_soma = document.querySelector('#bt_soma')
const obj_bt_multiplica = document.querySelector('#bt_multiplica')
const obj_link_aumentar = document.querySelector('#link_aumentar')
const obj_link_diminuir = document.querySelector('#link_diminuir')
const obj_img_redimensiona = document.querySelector('#img_redimensiona')

/* Declarar variáveis */
let tam_zoom
let tamanho

/* Adicionar eventos que permitem disparar as funções */
obj_num_largura.addEventListener('change', FunRedimensionaPoligono)
obj_num_altura.addEventListener('change', FunRedimensionaPoligono)
obj_zoom_in.addEventListener('click', FunZoomIn)
obj_zoom_out.addEventListener('click', FunZoomOut)
obj_bt_soma.addEventListener('click', FunSoma)
obj_bt_multiplica.addEventListener('click', FunMultiplica)
obj_link_aumentar.addEventListener('click', FunAumenta)
obj_link_diminuir.addEventListener('click', FunDiminui)

/* Declarar as funções que executam as ações desejadas */
function FunRedimensionaPoligono() {
    /* Verifica se os valores dos campos numéricos são válidos */
    if (obj_num_largura.value < 50 || obj_num_largura.value > 100 
        || obj_num_altura.value < 50 || obj_num_altura.value > 100) {
        alert('Valores inválidos')
    }
    else {
        /* Atualiza o estilo do polígono com os novos valores de largura e altura */
        obj_div_poligono.style.width = obj_num_largura.value + 'px'
        obj_div_poligono.style.height = obj_num_altura.value + 'px'

        /* Calcula a área */
        let area = obj_num_largura.value * obj_num_altura.value

        /* Preenche a área dentro do polígono */
        obj_div_poligono.innerText = 'Área: ' + area  + 'px²'

        /* Calcula o Perímetro e preenche no parágrafo */

        /* Converte para Int e soma: */
        let perim = parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value) +
        parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value)

        /* Exibe o resultado no parágrafo */
        obj_p_perimetro.innerText = 'Perímetro: ' + perim  + 'px'
    }
}


function FunZoomIn() {   
    /* Obtém o tamanho atual do objeto */ 
    tam_zoom = obj_img_zoom.width
    /* Incrementa o tamanho em 30px */
    tam_zoom = tam_zoom + 30
    if (tam_zoom <= 160) {
        /* Se o tamanho estiver abaixo ou igual a 160, aplica o novo tamanho */
        obj_img_zoom.style.width = tam_zoom + 'px'
        /* Remove o filtro aplicado para desfocar o bloco "zoom out" (se estiver aplicado) */
        obj_zoom_out.style.filter = 'none'
    }
    else {
        /* Aplica o filtro para desfocar o bloco "zoom in" */
        obj_zoom_in.style.filter = 'blur(5px)'
    }
}

function FunZoomOut() {   
    /* Obtém o tamanho atual do objeto */ 
    tam_zoom = obj_img_zoom.width
    /* Reduz o tamanho em 30px */
    tam_zoom = tam_zoom - 30
    if (tam_zoom >= 60) {
        /* Se o tamanho estiver igual ou acima de 60, aplica o novo tamanho */
        obj_img_zoom.style.width = tam_zoom + 'px'
        /* Remove o filtro aplicado para desfocar o bloco "zoom in" (se estiver aplicado) */
        obj_zoom_in.style.filter = 'none'
    }
    else {
        /* Aplica o filtro para desfocar o bloco "zoom out" */
        obj_zoom_out.style.filter = 'blur(5px)'
    }
}


function FunSoma() {
    /* Verifica se os campos numéricos estão vazios */
    if (obj_num_valor1.value == '' || obj_num_valor2.value == '') {
        alert('Preencha os dois valores!')
    }
    else {
        /* Se não estiver vazio, verifica se os valores são válidos */
        if (obj_num_valor1.value < 1 || obj_num_valor1.value > 50 ||
            obj_num_valor2.value < 1 || obj_num_valor2.value > 50) {
            alert('Valores inválidos')
        }
        else {
            /* Converte para Int e soma: */
            let res = parseInt(obj_num_valor1.value) + parseInt(obj_num_valor2.value)

            /* Exibe o resultado no input */
            obj_txt_resultado.setAttribute('value', res)
        }
    }
}


function FunMultiplica() {
    /* Verifica se os campos numéricos estão vazios */
    if (obj_num_valor1.value == '' || obj_num_valor2.value == '') {
        alert('Preencha os dois valores!')
    }
    else {
        /* Se não estiver vazio, verifica se os valores são válidos */
        if (obj_num_valor1.value < 1 || obj_num_valor1.value > 50 ||
            obj_num_valor2.value < 1 || obj_num_valor2.value > 50) {
            alert('Valores inválidos')
        }
        else {
            /* Faz o cálculo e exibe no input */
            let res = obj_num_valor1.value * obj_num_valor2.value
            obj_txt_resultado.setAttribute('value', res)
        }
    }
}

function FunAumenta() {   
    /* Obtém o tamanho atual do objeto */ 
    tamanho = obj_img_redimensiona.width
    /* Incrementa o tamanho em 10px */
    tamanho = tamanho + 10
    if (tamanho <= 150) {
        /* Se o tamanho estiver abaixo ou igual a 150, atualiza a largura */
        obj_img_redimensiona.style.width = tamanho + 'px'
    }
    else {
        alert('Tamanho máximo!')
    }
}


function FunDiminui() { 
     /* Obtém o tamanho atual do objeto */    
    tamanho = obj_img_redimensiona.width
    /* Reduz o tamanho em 10px */
    tamanho = tamanho - 10
    if (tamanho >= 50) {
        /* Se o tamanho estiver igual ou acima de 50, atualiza a largura */
        obj_img_redimensiona.style.width = tamanho + 'px'
    }
    else {
        alert('Tamanho mínimo!')
    }
}

