# projeto-js-tarde
Repositório para o projeto de JavaScript

-Link de exemplos:

https://ohmydb.netlify.app/

https://www.adorocinema.com/vod/

-Primeira parte

Criar uma tela de login com um campo para inserir o login, um para a senha e um botão de verificação.
Ao realizar o envio, uma requisição Ajax deve ser enviada ao arquivo disponibilizado para download, esse arquivo deverá ser inserido ao projeto 
se o retorno do arquivo for positivo deverá conter no começo da página "Seja bem vindo ....." contendo o nome disponível no arquivo.

-Segunda parte

streaming de filmes:
Após o logina proxíma tela o usuário irá fazer a busca de filmes: a lista de filmes deverá ser consumida pela api imdb. 
- Parâmetro 'S' é para uma busca geral, td que conter a palavra digitada
http://www.omdbapi.com/?s=${search}&apikey= 

- Parâmetro 'T' é para busca única, somente o que foi digitado 
http://www.omdbapi.com/?t=${search}&apikey=

- Na primeira página, mostrar a lista de filmes relacionado à busca, com a capa dos filmes. Quando clicar no filme específico, mostrar na próxima tela:
- Mostrar a capa do filme.
- Mostrar o nome do filme.
- Mostrar a nota do filme.
- Mostrar a sinopse do filme.
- Mostrar o gênero do filme.
- Mostrar a classifição do Filme:

A classificação deve ser mostrada como abaixo:

Se a Classificação do retorno da API for G - Classificação livre.

Se a Classificação do retorno da API for PG - Orientação dos Responsáveis

Se a Classificação do retorno da API for PG-13 - classificação 14 anos

Se a Classificação do retorno da API for R - classificação 16 anos

Se a Classificação do retorno da API for NC – 17 - classificação 18 anos
