# Full Cycle Rocks! - Nginx como Proxy Reverso

Este projeto é um desafio para demonstrar o uso do `nginx` como proxy reverso para uma aplicação Node.js, que se comunica com um banco de dados MySQL para cadastrar e exibir nomes.

## Objetivo

Quando o usuário acessar o `nginx` na porta 8080, o proxy encaminhará a requisição para uma aplicação Node.js, que registrará um nome na tabela `people` no MySQL e retornará a seguinte resposta: 

```html
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
```

## Requisitos
- Docker
- Docker Compose

## Como Executar
Clone o Repositório

```bash
git clone <SEU_REPOSITORIO_URL>
cd <SEU_REPOSITORIO>
```
Executar com Docker Compose Na raiz do projeto, rode:

```bash
docker-compose up -d
```

Acesse a Aplicação Abra seu navegador e vá para:
http://localhost:8080

## Considerações

A aplicação estará disponível na porta 8080.

O Nginx funcionará como proxy reverso, encaminhando as requisições para o Node.js na porta 3000.

Ao acessar http://localhost:8080, você verá a mensagem Full Cycle Rocks! junto com a lista de nomes cadastrados.

## Encerrando o Ambiente
Para parar e remover os containers, rode:

```bash
docker-compose down
```
## Problemas Comuns
Erro de Conexão com o Banco de Dados: Verifique se o serviço MySQL está funcionando corretamente.
Porta em Uso: Certifique-se de que a porta 8080 não está sendo usada por outro processo.

## 🤝 Como contribuir
- Faça um fork do projeto.
- Crie uma branch para sua feature (git checkout -b minha-feature).
- Faça o commit das suas alterações (git commit -m 'Minha nova feature').
- Push para a branch (git push origin minha-feature).
- Abra um Pull Request.

## 📜 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🎉 Divirta-se!
Este desafio foi desenvolvido para exercitar suas habilidades com Go e Docker. Boa sorte e aproveite a jornada!

Feito com ❤️ por `Bernardo Alves`.

