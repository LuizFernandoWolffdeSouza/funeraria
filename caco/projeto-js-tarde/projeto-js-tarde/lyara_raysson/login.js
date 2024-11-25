
// NOME
const botao = document.querySelector('#teste');

const showData = function (obj) {

    // login e loginErro
    const login = document.querySelector('#login').value;
    const loginErro = document.querySelector('#senha');

    // senha e senhaErro
    const senha = document.querySelector('#senha').value;
    const senhaErro = document.querySelector('#login');

    // escrever que não funcionou   
    const erro = document.querySelector('#label');

    for (let index = 0; index < obj.length; index++) {
        if (login == obj[index].login && senha == obj[index].senha) {
            loginErro.setAttribute('style', 'border-color: green');
            senhaErro.setAttribute('style', 'border-color: green');
            window.open("index.html", "_blank");
            

        } else {
            erro.innerHTML = 'Usuário não existe'
            erro.setAttribute('style', 'color: red');
            loginErro.setAttribute('style', 'border-color: red');
            senhaErro.setAttribute('style', 'border-color: red');

        }
    }
}

botao.addEventListener('click', function (e) {

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`ws/loginJson.json`, options)

        .then(function (response) {
            response.json()
                //o json tbem retorna um promessa, então precisamos verificar se deu certo
                //se der certo nesse caso retorna os dados p nós
                .then(function (data) {
                    showData(data);
                    // console.log(data);
                })
        })

        //se der errado faz outra coisa
        .catch(function (e) {
            console.log('Error: ' + e.message);
        })

})
