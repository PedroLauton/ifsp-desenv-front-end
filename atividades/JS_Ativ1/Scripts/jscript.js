/* Alterar Cor de Fundo */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

/* 2º Adicionar o evento para chamar a função: */
obj_sel_fundo.addEventListener('change', FunMudaCorFundo)

/* 3º Declarar a função para executar as ações: */
function FunMudaCorFundo() {
    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value)
}


/*  Alterar Cor da Fonte */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */

const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')

/* 2º Adicionar os eventos para chamar a função: */

for (obj_rb_fonte of array_rb_fonte) {
    obj_rb_fonte.addEventListener('click', FunMudaCorFonte)
}

/* 3º Declarar a função para executar as ações: */
function FunMudaCorFonte() {
    for (obj_rb_fonte of array_rb_fonte) {
        if (obj_rb_fonte.checked) {
            obj_div_area_teste.classList.add(obj_rb_fonte.value)
        }
        else {
            obj_div_area_teste.classList.remove(obj_rb_fonte.value)
        }
    }
}


/* Decorar com Linha no Meio e Borda */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_cb_linha_meio = document.querySelector('#cb_linha_meio')
const obj_cb_borda = document.querySelector('#cb_borda')

/* 2º Adicionar os eventos para chamar as funções: */
obj_cb_linha_meio.addEventListener('click', FunLinhaMeio)
obj_cb_borda.addEventListener('click', FunBorda)

/* 3º Declarar as funções para executar as ações: */
function FunLinhaMeio() {
    if ( obj_cb_linha_meio.checked ) {
        obj_div_area_teste.classList.add(obj_cb_linha_meio.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_linha_meio.value)
    }
}

function FunBorda() {
    if ( obj_cb_borda.checked ) {
        obj_div_area_teste.classList.add(obj_cb_borda.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_borda.value)
    }
}

/* Trocar o Texto */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_txt_texto_novo = document.querySelector('#txt_texto_novo')
const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')

/* 2º Adicionar o evento para chamar a função: */
obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)

/* 3º Declarar a função para executar as ações: */

function FunTrocaTexto() {
    if ( obj_txt_texto_novo.value != '' ) {
        obj_div_area_teste.innerHTML = 'Novo texto: ' + obj_txt_texto_novo.value
    }
    else {
        alert('Digite algo no campo')
    }
}



/* ********** */
/*  INFERIOR  */

/* Cor de Fundo Cabeçalho */

/* Cria os objetos para trabalhar com eles usando JavaScript */
const obj_sel_fundo_cabec = document.querySelector('#sel_fundo_cabec')
const obj_header = document.querySelector('header')

/* Adiciona o evento que permite disparar a função. 
   Evento: alterar (change) a opção da Lista de Seleção */
obj_sel_fundo_cabec.addEventListener('change', FunMudaFundoCabec)

/* Declara (cria) a função que executa a ação desejada */
function FunMudaFundoCabec() {
    /* Adiciona o atributo class='' no header, usando o nome da classe de acordo com a
    opção que foi selecionada (que está preenchida no value) */
    obj_header.setAttribute('class', obj_sel_fundo_cabec.value)
}

/* Imagem de Fundo */

/* Cria os objetos para trabalhar com eles usando JavaScript */
const obj_cb_img_fundo = document.querySelector('#cb_img_fundo')
const obj_div_imagem_fundo = document.querySelector('#div_imagem_fundo')

/* Adiciona eventos que permitem disparar as funções. Evento: clicar (click) no Check Box */
obj_cb_img_fundo.addEventListener('click', FunImagemFundo)

/* Declara (cria) a função que executa a ação desejada */
function FunImagemFundo() {
    /* Verifica se o click foi para selecionar ou para remover a seleção */
    if (obj_cb_img_fundo.checked) {
        /* Adiciona o atributo class='' na div, usando o nome da classe de acordo com a
        opção que foi clicada (que está preenchida no value) */
        obj_div_imagem_fundo.setAttribute('class', obj_cb_img_fundo.value)
    }
    else {
        /* Remove o atributo class da div */
        obj_div_imagem_fundo.removeAttribute('class')
    }
}

/* Opacidade */

/* Cria os objetos para trabalhar com eles usando JavaScript */
const obj_cb_opacidade = document.querySelector('#cb_opacidade')
const obj_img_opacidade = document.querySelector('#img_opacidade')

/* Adiciona evento que permite disparar a função. Evento: clicar (click) no Check Box */
obj_cb_opacidade.addEventListener('click', FunOpacidade)

/* Declara (cria) a função que executa a ação desejada */
function FunOpacidade() {
    /* Verifica se o click foi para selecionar ou para remover a seleção */
    if (obj_cb_opacidade.checked) {
        /* Adiciona o atributo class='' na div, usando o nome da classe de acordo com a
        opção que foi clicada (que está preenchida no value) */
        obj_img_opacidade.setAttribute('class', obj_cb_opacidade.value)
    }
    else {
        /* Remove o atributo class da div */
        obj_img_opacidade.removeAttribute('class')
    }
}

/* Troca Fonte e Texto */

/* Cria os objetos para trabalhar com eles usando JavaScript */
const obj_bt_ft_audiowide = document.querySelector('#bt_ft_audiowide')
const obj_bt_ft_monoton = document.querySelector('#bt_ft_monoton')
const obj_p_troca_fonte = document.querySelector('#p_troca_fonte')

/* Adiciona eventos que permitem disparar as funções. Eventos: clicar nos botões */
obj_bt_ft_audiowide.addEventListener('click', FunTrocaFonteAudiowide)
obj_bt_ft_monoton.addEventListener('click', FunTrocaFonteMonoton)

/* Declara (cria) a função que executa a ação desejada */
function FunTrocaFonteAudiowide() {  
    /* Adiciona o atributo class='' no parágrafo, usando o nome da classe de acordo com o
        botão que foi clicado (que está preenchida no value) */  
    obj_p_troca_fonte.setAttribute('class', obj_bt_ft_audiowide.value)
    /* Utiliza o texto que está preenchido no atributo valuer do botão para completar 
        o texto do parágrafo (atributo innerText) */
    obj_p_troca_fonte.innerText = 'Fonte: ' + obj_bt_ft_audiowide.value;
}

/* Declara (cria) a função que executa a ação desejada */
function FunTrocaFonteMonoton() {
    /* Adiciona o atributo class='' no parágrafo, usando o nome da classe de acordo com o
        botão que foi clicado (que está preenchida no value) */  
    obj_p_troca_fonte.setAttribute('class', obj_bt_ft_monoton.value)
    /* Utiliza o texto que está preenchido no atributo valuer do botão para completar 
        o texto do parágrafo (atributo innerText) */
    obj_p_troca_fonte.innerText = 'Fonte: ' + obj_bt_ft_monoton.value;
}
