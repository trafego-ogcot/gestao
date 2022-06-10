const calendario = document.getElementById('calendario')

const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
var a = [	""	,	"a"	,	"a"	,	""	,	""	,	""	,	"a"	,	""	,	""	,	""	,	"a"	,	""	,	""	,	""	,	""	,	"a"	,	"a"	,	""	,	""	,	"a"	,	""	,	""	,	""	,	"a"	,	""	,	""	,	""	,	""	,	"a"	,	""	,	""	,	""	,	"a"	,	""	,	""	]
var b = [	""	,	""	,	"b"	,	""	,	""	,	""	,	""	,	"b"	,	""	,	""	,	""	,	"b"	,	""	,	""	,	""	,	"b"	,	"b"	,	""	,	""	,	""	,	"b"	,	""	,	""	,	""	,	"b"	,	""	,	""	,	""	,	""	,	"b"	,	"b"	,	""	,	""	,	"b"	,	""	]	
var c = [	""	,	""	,	""	,	"c"	,	""	,	""	,	""	,	""	,	"c"	,	"c"	,	""	,	""	,	"c"	,	""	,	""	,	""	,	"c"	,	""	,	""	,	""	,	""	,	"c"	,	""	,	""	,	""	,	"c"	,	""	,	""	,	""	,	"c"	,	"c"	,	""	,	""	,	""	,	"c"	]		
var d = [	"d"	,	""	,	""	,	""	,	"d"	,	""	,	""	,	""	,	"d"	,	"d"	,	""	,	""	,	""	,	"d"	,	""	,	""	,	""	,	"d"	,	""	,	""	,	""	,	""	,	"d"	,	"d"	,	""	,	""	,	"d"	,	""	,	""	,	""	,	"d"	,	""	,	""	,	""	,	""	]	
var e = [	""	,	"e"	,	"e"	,	""	,	""	,	"e"	,	""	,	""	,	""	,	"e"	,	""	,	""	,	""	,	""	,	"e"	,	""	,	""	,	""	,	"e"	,	""	,	""	,	""	,	"e"	,	"e"	,	""	,	""	,	""	,	"e"	,	""	,	""	,	""	,	"e"	,	""	,	""	,	""	]		

async function carregarCalendario(data) {
    
    const ano = data.getFullYear()
    const mes = data.getMonth()
    const dia = data.getDate()

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
            
            escalaA.innerText = a[index].toUpperCase()
            if (a[index] != '') {
                if (escalaSelecionada == 'a' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaA)
                    if (escalaSelecionada == 'a') quadradoDia.style.backgroundColor = 'rgba(' + 242 + ',' + 242 + ', ' + 242 + ',' + 1 + ')'
                }
            } 
            escalaB.innerText = b[index].toUpperCase()
            if (b[index] != '') {
                if (escalaSelecionada == 'b' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaB)
                    if (escalaSelecionada == 'b') quadradoDia.style.backgroundColor = 'rgba(' + 242 + ',' + 242 + ', ' + 242 + ',' + 1 + ')'
                }
            }
            escalaC.innerText = c[index].toUpperCase()
            if (c[index] != '') {
                if (escalaSelecionada == 'c' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaC)
                    if (escalaSelecionada == 'c') quadradoDia.style.backgroundColor = 'rgba(' + 242 + ',' + 242 + ', ' + 242 + ',' + 1 + ')'
                }
            }
            escalaD.innerText = d[index].toUpperCase()
            if (d[index] != '') {
                if (escalaSelecionada == 'd' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaD)
                    if (escalaSelecionada == 'd') quadradoDia.style.backgroundColor = 'rgba(' + 242 + ',' + 242 + ', ' + 242 + ',' + 1 + ')'
                }
            }
            escalaE.innerText = e[index].toUpperCase()
            if (e[index] != '') {
                if (escalaSelecionada == 'e' || escalaSelecionada == 'todas' || escalaSelecionada == undefined) {
                    folgasEscalas.appendChild(escalaE)
                    if (escalaSelecionada == 'e') quadradoDia.style.backgroundColor = 'rgba(' + 242 + ',' + 242 + ', ' + 242 + ',' + 1 + ')'
                }
            }

            conteudoDia.appendChild(folgasEscalas)
            
            if (index == 34) {
                index = 0
            } else {
                index++
            }
                
            quadradoDia.appendChild(conteudoDia)
            quadradoDia.onclick = () => alert(conteudoDia.id)
        } else {
            quadradoDia.classList.add('vazio')
        }
        
        calendario.appendChild(quadradoDia)
    }
}



var escala = document.getElementById('escala')
var escalaSelecionada = localStorage.getItem('escalaSelecionada')

if (escalaSelecionada == undefined) {
    escala.value = 'TODAS'
} else {escala.value = escalaSelecionada}

escala.addEventListener('change', (e) => {
    escalaSelecionada = e.target.value
    localStorage.setItem('escalaSelecionada', escalaSelecionada)
    carregarCalendario(new Date(anoSelecionado, mesSelecionado, 1))
})

var dataSelecionada = new Date()
var anoSelecionado = new Date(dataSelecionada).getFullYear()
var mesSelecionado = new Date(dataSelecionada).getMonth()
console.log(anoSelecionado)
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

if (screen.width < 600) {
    document.getElementById('dom').innerText = 'Dom'
    document.getElementById('seg').innerText = 'Seg'
    document.getElementById('ter').innerText = 'Ter'
    document.getElementById('qua').innerText = 'Qua'
    document.getElementById('qui').innerText = 'Qui'
    document.getElementById('sex').innerText = 'Sex'
    document.getElementById('sab').innerText = 'Sáb'
}

// identificar a escala de folga do quadradoDia
// 'quadradoDia'.childNodes[0].children[0].innerText
