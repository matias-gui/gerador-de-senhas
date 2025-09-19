let mensagem = document.getElementById('mensagem')
let tamanhoSenha = document.getElementById('iTamanhoSenha')
let containerResultado = document.querySelector('.container-resultado')
let mostrarSenha = document.querySelector('.senha')
let gerarSenha = document.querySelector(".gerarSenha")
let copiarSenha = document.querySelector('.copiarSenha')


let senhas = '"@#$¨¨&*()_-=+/?°`[]{}|<>;:1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!"@#$¨¨&*()_-=+/?°`[]{}|<>;:'

gerarSenha.addEventListener('click', () => {
    let senhaAtual = ''
    if (tamanhoSenha.value <= 3) {
        mensagem.style.display = 'flex'
        mensagem.style.justifyContent = 'center'
        mensagem.style.alignItems = 'center'
        mensagem.style.backgroundColor = ' rgba(116, 23, 23, 0.97)'
        mensagem.textContent = 'Tamanho da senha invalido !!'
        mensagem.style.animation = 'mensagem .5s ease-in-out  2 '
        containerResultado.style.opacity = 0
    } else {
        mensagem.style.display = 'none'
        for (let i = 0; i < tamanhoSenha.value; i++) {
            senhaAtual += senhas[Math.floor(Math.random() * senhas.length)]
        }

        mostrarSenha.textContent = senhaAtual
        containerResultado.style.opacity = 1
        containerResultado.style.transition = '1s';
        tamanhoSenha.value = ''
        copiarSenha.addEventListener('click', () => {
            mensagem.style.display = 'flex'
            mensagem.style.justifyContent = 'center'
            mensagem.style.alignItems = 'center'
            mensagem.style.backgroundColor = 'rgba(35, 163, 44, 0.89)'
            mensagem.textContent = 'Senha copiada com sucesso!!'
            mensagem.style.animation = 'mensagem .5s ease-in-out  2 '
            navigator.clipboard.writeText(senhaAtual)

        })


    }
}

)
