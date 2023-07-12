
Pré-requisitos:
Docker: Instalação do Docker

Navegue até o diretório raiz do projeto:

$ cd api-solid
      
Execute o seguinte comando para gerar os contêineres do Docker:

$ docker-compose up -d

Aguarde até que todos os contêineres sejam criados e iniciados. Você pode verificar o status dos contêineres em execução com o seguinte comando:

$ docker ps

Depois de executar tudo acima entre no diretório raiz do projeto e crie as migrations:

$ npx prisma migrate dev

Uma vez que todos os contêineres estejam em execução, a API Solid estará pronta para uso.

Se você desejar encerrar a execução da API Solid e remover os contêineres, execute o seguinte comando:

$ docker-compose down

Isso encerrará os contêineres criados pelo Docker Compose.
