# Bem vindo!
O projeto é uma pequena plataforma capaz de armazenar e genciar seus GIFs. Não consegui implementar tudo que eu queria pra esse projeto mas ele responde aos pedidos de:
* Listar/Buscar por GIFs
* Visualizar detalhes
* Scroll infinito (eu adicionei um botão de carregamento, espero ser a mesma coisa pra você)
* Salvar GIFs (ele salva em um pequeno dashboard que você consegue abrir acessando o Meus GIFs no menu)
* Editar dados de um GIF
* Deletar um GIF

## Entrega
Eu deixei um Dockerfile configurado, basta rodar:
```
$ docker build -t vuejs-cookbook/dockerize-vuejs-app .
```
```
$ docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

## Video de Apresentação
[Clique aqui](https://www.loom.com/share/2f9a85d54ebe42c0b470f3083a104ba4)
