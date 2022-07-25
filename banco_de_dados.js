var empregado = {
    matricula : '12345',
    nome_de_guerra : 'Nome',
    nome_completo : 'Nome Completo',
    cargo : 'Piloto',
    funcao : '',
    escala : 'A',
    horario_entrada : '8:30',
    horario_saida : '14:45',
    turno : 'Manhã',
    posto : 'T-PAS',
    chave : '7795',
    celular_1 : '999999999',
    celular_2 : '999999999',
    telefone_1 : '33333333',
    telefone_2 : '33333333',
    email_corporativo : 'piloto@metro.df.gov.br',
    email_pessoal : 'piloto@bol.com.br',
    data_admissao : '17/11/2005',
    data_nascimento : '18/10/1987',
    endereço : '',
    cep : '',
    cidade : '',
    cursos : [],
}

var resposta_bd = []

async function listar_empregados() {
    db.ref('empregados').get().then(snap => {
        resposta_bd = []
        resposta_bd.push(snap.val())
    })
    
}

await listar_empregados()
