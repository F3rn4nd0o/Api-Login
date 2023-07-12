API Solid - Documentação
Esta é uma API desenvolvida para autenticação de usuários. Ela utiliza Docker para executar o banco de dados PostgreSQL usando a imagem bitnami/postgresql e o Prisma para interagir com o banco de dados.

Pré-requisitos:
Docker: Instalação do Docker

Navegue até o diretório raiz do projeto:
cd api-solid


Abra o arquivo docker-compose.yml e verifique se o conteúdo é semelhante ao seguinte:
yaml
Copy code
version: '3'

services:
  api-solid-pg:
    image: bitnami/postgresql
    ports:
      - 5432:5432
    environment:
      - POSTGRESQL_USERNAME=docker
      - POSTGRESQL_PASSWORD=docker
      - POSTGRESQL_DATABASE=apisolid
      
Execute o seguinte comando para gerar os contêineres do Docker:
docker-compose up -d

Aguarde até que todos os contêineres sejam criados e iniciados. Você pode verificar o status dos contêineres em execução com o seguinte comando:
docker ps

Uma vez que todos os contêineres estejam em execução, a API Solid estará pronta para uso.

Se você desejar encerrar a execução da API Solid e remover os contêineres, execute o seguinte comando:
docker-compose down

Isso encerrará os contêineres criados pelo Docker Compose.
