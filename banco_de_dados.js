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


// cargo_funcao
// :
// "pi"
// cep
// :
// "39511916"
// chave_padrao
// :
// "Q366"
// cidade
// :
// "Maranguape"
// data_admissao
// :
// "20/11/2015"
// data_nascimento
// :
// "25/02/1988"
// email
// :
// "aliquam@google.ca"
// email1
// :
// "id.libero@hotmail.couk"
// endereco
// :
// "Ap #691-1916 Ornare Rd."
// escala
// :
// "c"
// horario
// :
// "19:00"
// matricula
// :
// "3165-Z"
// nome_comp
// :
// "Selma Galloway"
// nome_guerra
// :
// "Isaac"
// posto
// :
// "CLA"
// telefone1
// :
// "1-448-427-5011"
// telefone2
// :
// "1-484-710-2834"
// telefone3
// :
// "(484) 758-5164"
// telefone4
// :
// "(791) 674-9553"
// turno
// :
// "manha"
