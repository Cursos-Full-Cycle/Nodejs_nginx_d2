# Full Cycle - Desafio NodeJS + NGINX

## Pré-requisitos:
* Adicionar um registro no banco de dados mysql, cadastrando um nome na tabela people.
* Retornar para o usuário Full Cycle Rocks!
* Retornar para o usuário a lista de nomes cadastrada no banco de dados.
* Subir a aplicação rodando somente o comando docker-compose up -d
* Rodar na porta 8080

## Rodando via Docker HUB

Rodar o comando
```
docker-compose up -d
```


## Via código

Após o projeto clonado, para rodar

```
docker-compose up -d
```

Para rodar
```
docker-compose -f Docker-compose-dev.yaml up -d
```

### Ambos os modos deve imprimir
Full Cycle Rocks
Lista de registros já inseridos.