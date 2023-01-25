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