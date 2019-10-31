## Requisitos minimos

- Node >= 10.16.0
- Yarn >= 1.19.1

## Iniciando Projeto

```zsh

#clonando o projeto
$ git clone https://github.com/Thiago-F/Challenger-Provi.git

#clonando o projeto
$ git clone https://github.com/Thiago-F/Challenger-Provi.git

#acessando a pasta
$ cd Challenger-Provi/

#baixando os pacotes
$ yarn ou npm install

#iniciando servidor
$ yarn server

#iniciando aplicação
$ yarn start

```

## Sobre o projeto

- O challenger era simular uma dashboard onde o aluno(a) pudesse visualizar o seu curso, quantidade de parcelas, valor das parcelas e juros.
- O conceito foi deixar o design simples e usar o Redux para compartilhamento de estados entre os componentes.
- No projeto foram usados algumas bibliotecas como o axios para requisição ao servidor fake, o servidor fake proprio dito que foi criado com a biblioteca json-server, e para estilização e criação de componentes estilizaveis foi adicionado tambem o styled-components
- Para efeito didatico e simular parte da realidade os dados foram coletados direto do site da provi.com.br, e para criar melhor clareza no uso do redux algumas ações que o usuário faz são apenas simuladas, como trocar de curso de uma determinada escola e tambem trocar o numero de parcelas desse curso
- Todo o lint e padronização de codigos foram feitos com o eslint e o prettier
