//initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyA9sxu2a_LybZatwJubxg218nsDRyFkuPU",
    authDomain: "gestao-trafego.firebaseapp.com",
    databaseURL: "https://gestao-trafego-default-rtdb.firebaseio.com",
    projectId: "gestao-trafego",
    storageBucket: "gestao-trafego.appspot.com",
    messagingSenderId: "912766766816",
    appId: "1:912766766816:web:93041643a779e219178a85"
}
firebase.initializeApp(firebaseConfig)
const db = firebase.database()
//initialize firebase end

// functions to DataBase 
var resposta_bd

async function listar_empregados (){
    await db.ref('empregados')
    .once('value')
    .then(snap => {
       resposta_bd = Object.values(snap.val()) 
    })
}
async function listar_cursos(){
    await db.ref('cursos')
    .once('value')
    .then(snap => {
        resposta_bd = Object.values(snap.val())
    })
}
async function listar_horarios(){
    await db.ref('horarios')
    .once('value')
    .then(snap => {
       resposta_bd = Object.values(snap.val())
    })
}
async function listar_escalas(){
    await db.ref('escalas')
    .once('value')
    .then(snap => {
        resposta_bd = Object.values(snap.val())
    })
}
async function listar_usofolgas(){
    await db.ref('uso_folgas')
    .once('value')
    .then(snap => {
        resposta_bd = Object.values(snap.val())
    })
}
async function listar_direfolgas (){
    await db.ref('direito_folgas')
    .once('value')
    .then(snap=> {
        resposta_bd = Object.values(snap.val())
    })
}
// functions to DataBase end 

const calendario = document.getElementById('calendario')

const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
var a = [	""	,	"A"	,	"A"	,	""	,	""	,	""	,	"A"	,	""	,	""	,	""	,	"A"	,	""	,	""	,	""	,	""	,	"A"	,	"A"	,	""	,	""	,	"A"	,	""	,	""	,	""	,	"A"	,	""	,	""	,	""	,	""	,	"A"	,	""	,	""	,	""	,	"A"	,	""	,	""	]
var b = [	""	,	""	,	"B"	,	""	,	""	,	""	,	""	,	"B"	,	""	,	""	,	""	,	"B"	,	""	,	""	,	""	,	"B"	,	"B"	,	""	,	""	,	""	,	"B"	,	""	,	""	,	""	,	"B"	,	""	,	""	,	""	,	""	,	"B"	,	"B"	,	""	,	""	,	"B"	,	""	]	
var c = [	""	,	""	,	""	,	"C"	,	""	,	""	,	""	,	""	,	"C"	,	"C"	,	""	,	""	,	"C"	,	""	,	""	,	""	,	"C"	,	""	,	""	,	""	,	""	,	"C"	,	""	,	""	,	""	,	"C"	,	""	,	""	,	""	,	"C"	,	"C"	,	""	,	""	,	""	,	"C"	]		
var d = [	"D"	,	""	,	""	,	""	,	"D"	,	""	,	""	,	""	,	"D"	,	"D"	,	""	,	""	,	""	,	"D"	,	""	,	""	,	""	,	"D"	,	""	,	""	,	""	,	""	,	"D"	,	"D"	,	""	,	""	,	"D"	,	""	,	""	,	""	,	"D"	,	""	,	""	,	""	,	""	]	
var e = [	""	,	"E"	,	"E"	,	""	,	""	,	"E"	,	""	,	""	,	""	,	"E"	,	""	,	""	,	""	,	""	,	"E"	,	""	,	""	,	""	,	"E"	,	""	,	""	,	""	,	"E"	,	"E"	,	""	,	""	,	""	,	"E"	,	""	,	""	,	""	,	"E"	,	""	,	""	,	""	]		

async function carregarCalendario(data) {
    
    const ano = data.getFullYear()
    const mes = data.getMonth()

    const primeiroDiaDoMes = new Date(ano, mes, 1)
    
    document.getElementById('mes').innerText = meses[mes]
    document.getElementById('ano').innerText = ano

    //mes atual + 1, dia "0" retorna o número do último dia do mês anterior
    const diasNoMes = new Date(ano, mes + 1, 0).getDate()

    const textoData = primeiroDiaDoMes.toLocaleString('pt-BR', {
        month : 'long',
        day : "numeric",
        year : 'numeric',
        weekday : "long"
    })


    let diaDaSemana
    async function editarDiaDaSemana() {
        if (textoData.includes('-')) {
            diaDaSemana = textoData.split('-')[0]
        } else {
            diaDaSemana = textoData.split(', ')[0]
        }
    }
    
    await editarDiaDaSemana()
    const diasVazios = diasDaSemana.indexOf(diaDaSemana)


// escrevendo a escala
    const umDia = 1000 * 60 * 60 * 24
    const referencia = new Date(2010, 0, 1)
    var diferencaMs = primeiroDiaDoMes.getTime() - referencia.getTime()
    var diferencaDias = diferencaMs / umDia
    var index = parseInt(diferencaDias % 35)
    calendario.innerHTML = ''

    for (let i = 1; i <= diasVazios + diasNoMes; i++) {
        
        const quadradoDia = document.createElement('div')
        const numeroDia = document.createElement('span')
        numeroDia.classList.add('numero-dia')
        const conteudoDia = document.createElement('div')
        conteudoDia.classList.add('conteudo-dia')

        const escalaA = document.createElement('span')
        escalaA.classList.add('escala-a')
        const escalaB = document.createElement('span')
        escalaB.classList.add('escala-b')
        const escalaC = document.createElement('span')
        escalaC.classList.add('escala-c')
        const escalaD = document.createElement('span')
        escalaD.classList.add('escala-d')
        const escalaE = document.createElement('span')
        escalaE.classList.add('escala-e')
        
        const folgasEscalas = document.createElement('div')
        folgasEscalas.classList.add('folgas-escalas')

        if (i > diasVazios) {
            quadradoDia.classList.add('dia')
            numeroDia.innerText = i - diasVazios
            quadradoDia.appendChild(numeroDia)
            let mesAtual = mes + 1
            conteudoDia.id = i - diasVazios + '/' + mesAtual + '/' + ano
            
            escalaA.innerText = a[index]
            if (a[index] != '') {
                if (escalaSelecionada == 'a' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaA)
                    if (escalaSelecionada == 'a') quadradoDia.classList.add('folga')
                }
            } 
            escalaB.innerText = b[index]
            if (b[index] != '') {
                if (escalaSelecionada == 'b' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaB)
                    if (escalaSelecionada == 'b') quadradoDia.classList.add('folga')
                }
            }
            escalaC.innerText = c[index]
            if (c[index] != '') {
                if (escalaSelecionada == 'c' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaC)
                    if (escalaSelecionada == 'c') quadradoDia.classList.add('folga')
                }
            }
            escalaD.innerText = d[index]
            if (d[index] != '') {
                if (escalaSelecionada == 'd' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaD)
                    if (escalaSelecionada == 'd') quadradoDia.classList.add('folga')
                }
            }
            escalaE.innerText = e[index]
            if (e[index] != '') {
                if (escalaSelecionada == 'e' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaE)
                    if (escalaSelecionada == 'e') quadradoDia.classList.add('folga')
                }
            }

            conteudoDia.appendChild(folgasEscalas)
            
            if (index == 34) index = 0 
            else index++
                
            quadradoDia.appendChild(conteudoDia)
            quadradoDia.onclick = async () => {
                var escaladefolga = document.getElementById(conteudoDia.id).getElementsByClassName('folgas-escalas').valueOf('span')[0].outerText.split('')
                await trabalhando (escaladefolga)
                alert(conteudoDia.id+" folga escala: "+escaladefolga+'\n'+lista_empregados_trabalhando.length+' Empregados Trabalhando: \n'+lista_empregados_trabalhando)
            }
        } else {
            quadradoDia.classList.add('vazio')
        }
        
        calendario.appendChild(quadradoDia)
    }
}

//VERIFICA QUAIS EMPREGADOS ESTÃO TRABALHANDO NO DIA
var lista_empregados_trabalhando
async function trabalhando (folg){
    var folg0 = folg[0]
    var folg1 = folg[1]
    var folg2 = folg[2]
    console.log(folg0+' '+folg1+' '+folg2)
    await listar_empregados()
    var emp = resposta_bd
    var emp_trabalhando
    await listar_usofolgas
    let folgasUtilizadas = resposta_bd
    if (folg0!= undefined){
        var folg0_min = folg0.toLocaleLowerCase()
        var e0 = emp.filter((i)=>i.escala != folg0_min )
        if(folg1 != undefined){
            var folg1_min = folg1.toLocaleLowerCase()
            var e1 = e0.filter((i)=>i.escala != folg1_min)
            if (folg2 != undefined){
                var folg2_min = folg2.toLocaleLowerCase()
                var e2 = e1.filter((i)=>i.escala != folg2_min)
                emp_trabalhando = e2
            }else {emp_trabalhando = e1}
        } else{emp_trabalhando = e0}
    }

    var nom = emp_trabalhando.map(e => e.nome_guerra)
    lista_empregados_trabalhando = nom
    console.log(emp_trabalhando)
    console.log (nom)
}
//VERIFICA QUAIS EMPREGADOS ESTÃO TRABALHANDO NO DIA FIM

//MOSTRA QUANTIDADE DE EMPREGADOS POR ESCALA
async function emp_por_escala (){
    await listar_empregados()
    var empr_total = resposta_bd
    var emp_a = empr_total.filter((i)=> i.escala == 'a').length
    var emp_b =empr_total.filter((i)=>i.escala == 'b').length
    var emp_c = empr_total.filter((i)=>i.escala == 'c').length
    var emp_d = empr_total.filter((i)=> i.escala == 'd').length
    var emp_e = empr_total.filter((i)=>i.escala == 'e').length
    document.getElementById('esc-a').innerText = '   A: '+emp_a
    document.getElementById('esc-b').innerText = '   B: '+emp_b
    document.getElementById('esc-c').innerText = '   C: '+emp_c
    document.getElementById('esc-d').innerText = '   D: '+emp_d
    document.getElementById('esc-e').innerText = '   E: '+emp_e
}
emp_por_escala()


//MOSTRA QUANTIDADE DE EMPREGADOS POR ESCALA FIM

var escala = document.getElementById('escala')
var escalaSelecionada = localStorage.getItem('escalaSelecionada')
escala.value = escalaSelecionada != null ? escalaSelecionada : 'todas'

escala.addEventListener('change', (e) => {
    escalaSelecionada = e.target.value
    localStorage.setItem('escalaSelecionada', escalaSelecionada)
    carregarCalendario(new Date(anoSelecionado, mesSelecionado, 1))
})

var dataSelecionada = new Date()
var anoSelecionado = new Date(dataSelecionada).getFullYear()
var mesSelecionado = new Date(dataSelecionada).getMonth()
localStorage.setItem('dataSelecionada', dataSelecionada)

carregarCalendario(dataSelecionada)

function maisAno() {
    anoSelecionado++
    carregarCalendario(new Date(anoSelecionado, mesSelecionado, 1))
}
function menosAno() {
    anoSelecionado--
    carregarCalendario(new Date(anoSelecionado, mesSelecionado, 1))
}
function maisMes() {
    mesSelecionado++
    carregarCalendario(new Date(anoSelecionado, mesSelecionado, 1))
}
function menosMes() {
    mesSelecionado--
    carregarCalendario(new Date(anoSelecionado, mesSelecionado, 1))
}

// identificar a escala de folga do quadradoDia
// 'quadradoDia'.childNodes[0].children[0].innerText

function alternarCSS(nomeArquivo) {

    var atual = document.getElementsByTagName("link").item(0);

    var novo = document.createElement("link");
    novo.setAttribute("rel", "stylesheet");
    novo.setAttribute("type", "text/css");
    novo.setAttribute("href", nomeArquivo);

    document.getElementsByTagName("head").item(0).replaceChild(novo, atual);
}

var light = true

document.getElementById('tema').addEventListener('click', () => {
    if (light) {
        alternarCSS('dark.css')
        light = false
    } else {
        alternarCSS('light.css')
        light = true
    }
})