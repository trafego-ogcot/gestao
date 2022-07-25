var resposta_bd

async function listar_empregados (){
db.ref('empregados')
    .once('value')
    .then(snap => {
       resposta_bd = Object.values(snap.val()) 
    })
}
async function listar_cursos(){
    db.ref('cursos')
    .once('value')
    .then(snap => {
        resposta_bd = Object.values(snap.val())
    })
}
async function listar_horarios(){
    db.ref('horarios')
    .once('value')
    .then(snap => {
        resposta_bd = Object.values(snap.val())
    })
}
async function listar_escalas(){
    db.ref('escalas')
    .once('value')
    .then(snap => {
        resposta_bd = Object.values(snap.val())
    })
}