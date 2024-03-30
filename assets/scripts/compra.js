const shows = [
    {
        img: '../assets/images/53410916675_363215546c_h.jpg',
        descricao: '6 DE ABRIL DE 2024 <br>Endereço: AV RODRIGO OTAVIO - MANAUS  - AM <br>Local: STUDIO 5<br> Abertura das Portas: 19:00 <br> Classificação: +18 ',
        titulo: 'Roupa Nova',
    },

    {
        img: '../assets/images/53427063651_23ff2e2789_h.jpg',
        descricao: '29 DE JUNHO DE 2024 <BR> Endereço: PARINTINS - PARINTINS - AM <br> Local: AMAZON RÍVER <br> Abertura das Portas: 11:00 <br>Classificação: +18 ',
        titulo: 'Ferrugem e Xande'
    },

    {
        img: '../assets/images/53575713781_4271db7219_h.jpg',
        descricao: ' 24 DE AGOSTO DE 2024 <br> Endereço: AV RODRIGO OTAVIO - MANAUS - AM <br> Local: STUDIO 5 <br> Abertura das Portas: 22:00 <br> Início do Evento: 22:00 <br> Classificação: +18 ',
        titulo : 'Di Ferrero'
    },

    {
        img: '../assets/images/53577817158_e751c4502f_h.jpg',
        descricao: '30 DE MARÇO DE 2024<br>Endereço: ESTAC. RIO TAPAJÓS SHOPPING - SANTARÉM - PA <br> Local: ESTAC. RIO TAPAJÓS SHOPPING <br>Abertura das Portas: 21:00 <br>Classificação: +18 ',
        titulo: 'Joelma'
    },

    {
        img: '../assets/images/53614719773_60f26ba983_h.jpg',
        descricao: '4 DE MAIO DE 2024 <br> Endereço: UNIVERSIDADE NILTON LINS - MANAUS - AM <br> Local: UNIVERSIDADE NILTON LINS <br> Abertura das Portas: 16:00 <br> Classificação: Livre',
        titulo: 'PUMP BBQ FESTIVAL',
    },

    {
        img: '../assets/images/flash53591565225_746b7c706a_h.jpg',
        descricao: '13 DE ABRIL DE 2024 <br> Endereço: AV RODRIGO OTAVIO - MANAUS - AM <br> Local: STUDIO 5 <br> Abertura das Portas: 22:00 <br> Classificação: +18 ',
        titulo: 'FLASH DISCO NOITE DAS DIVAS'
    },

    {
        img: '../assets/images/reggae53598406766_17609b5ede_h.jpg',
        descricao: '4 DE MAIO DE 2024 <br> Endereço: CARNANINDEUA - ANANINDEUA - PA <br> Local: AV ARTERIAL 18 <br> Abertura das Portas: 21:00 <br> Classificação: +18',
        titulo: 'Tribo de Jah'
    },

    {
        img: '../assets/images/bloco53606322616_2ca1c01384_h.jpg',
        descricao: '04 & 05 DE MAIO <br> Endereço: CARNANINDEUA - ANANINDEUA - PA <br>  Local: AV ARTERIAL 18 <br> Abertura das Portas: 20:00 <br> Classificação: +18 ',
        titulo: 'Bloco O Manda Chuva'
    },

    {
        img: '../assets/images/som53617643324_53f56059c5_h.jpg',
        descricao: '2 DE MAIO DE 2024 <br> Endereço: TEATRO MARGARIDA SCHIVASSAPA - BELÉM - PA <br> Local: TEATRO MARGARIDA SCHIVASSAPA <br> Abertura das Portas: 19:00 <br> Classificação: +12 ',
        titulo: 'O SOM DO CORAÇÃO'
    }
]

let idElementoClicado = localStorage.getItem('idElementoClicado');

mudaImagem()
mudaDescricao()
mudaTitulo()

function mudaImagem () {
    const imagem = document.getElementById('show-img')
    imagem.src = shows[idElementoClicado].img
}

function mudaDescricao() {
    const descricao = document.getElementById('show-descricao')
    descricao.innerHTML = shows[idElementoClicado].descricao
}

function mudaTitulo () {
    const tituloShow = document.getElementById('titulo-show')
    tituloShow.innerText = shows[idElementoClicado].titulo
}


