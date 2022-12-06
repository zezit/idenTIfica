# Informações do Projeto
`TÍTULO DO PROJETO`  

iden***TI***fica

`CURSO` 

Engenharia de Software

## Participantes

- Alexandre Bernardes Alves Fernandes
- José Carlos Ferreira de Andrade
- Jose Victor Mendes Dias
- Lucas Henrique Orselino de Magalhães
- Mellyssa Meireles dos Santos
- Vinicius Reggiani Lima

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Escolher uma profissão ou seguimento de carreira é uma necessidade determinante na vida das pessoas. Com o número de profissões e novas graduações crescendo exponencialmente nos últimos anos e o mercado de trabalho se torna cada vez mais competitivo e exigente, tomar essa decisão pode ser uma tarefa muito difícil. 

As áreas da tecnologia tem se tornado cada vez mais procuradas devido as diversas possibilidades de atuação no mercado e a falta de profissionais capacitados para ocuparam as vagas. Devido ao surgimento de novas possibilidades de carreiras e cursos nessa área, a escolha de um caminho para seguir pode ser ainda mais difícil. 

## Objetivos

Nosso objetivo consiste em criar um software que auxilie jovens e adultos na escolha do curso superior, analisando o perfil do usuário, comparando desde a grade curricular dos cursos de graduação. Nesse caso checar se ela condiz com as demandas do mercado de trabalho, se ela esta atualizada, qual sua modalidade, também comparando seu preço em média e a sua localização. Assim, tendo essas informações, e feito uma comparação com o perfil do usuário e mostrando qual curso se encaixa melhor ao perfil do usuário.

## Justificativa

Fazer uma boa faculdade pesa bastante no currículo das pessoas e a escolha do curso ideal e algo bem difícil se a pessoal não tiver uma boa base para de espelhar. 

Hoje a profissão na área de Informática é bastante valorizada, em especial porque há tecnologia vem se inovando com bastante frequência. Inclusive, a procura por profissionais  é muito alta, principalmente entre as empresas de TI (Tecnologia da Informação).

Com a criação desse projeto, permitira ao usuário usar a interface que o auxilie a encontrar o curso superior e tirar certas dúvidas de qual curso que mais atenda seu perfil.

## Público-Alvo

Nosso público alvo não consiste em um nicho especifico de pessoas, afinal a área de TI é relativamente nova e está em crescimento, com o passar do tempo o mundo moderno pede mais proficionais na área então nosso trabalho é tanto para pessoas que estão no mercado de trabalho e buscam aprimoramento profissional ou  pessoas que estão iniciando suas carreiras agora.

# Especificações do Projeto

Nosso projeto foi idealizado utilizando as ferramentas Miro, Trello, Git e Github com o intuitio de se criar ambientes colaborativos em que poderiamos trabalhar em conjunto. assim como o Discord como meio de comunicação nas reuniões regulares.

## Personas e Mapas de Empatia
![TIAW - Equipe 7 (1)](https://user-images.githubusercontent.com/113153014/192166126-f8e93aa6-9a18-4174-823d-192f9283e86c.jpg)
![TIAW - Equipe 7 (4)](https://user-images.githubusercontent.com/113153014/192166127-fd1dd3fd-5178-4438-882c-e9dc08771179.jpg)
![TIAW - Equipe 7 (3)](https://user-images.githubusercontent.com/113153014/192166128-23d55519-36d9-4e88-9c67-fc181f837770.jpg)
![TIAW - Equipe 7 (2)](https://user-images.githubusercontent.com/113153014/192166129-b30f5d50-8cfd-4861-a953-c84332994a0b.jpg)



## Histórias de Usuários



|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Estudante | Preciso de opções para decidir sobre que graduação escolher | Para ter mais facilidade na decisao final   |
| Empregado | Preciso saber qual graduação escolher | Para ter um desempenho melhor nas minhas tarefas  |
| Graduanda  | preciso de um site  | para ver opções de graduações em TI disponíveis  |




## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário pesquise graduações | ALTA | 
|RF-002| Deve ter um campo de busca para fácil acesso  |BAIXA |
|RF-003| Deve mostrar informações sobre as graduações | MÉDIA |
|RF-004| Deve conter informações claras e precisas   | MÉDIA |
|RF-005| Permitir que usuário compare graduações  | BAIXA |
|RF-006| Deve ter páginas quem tirem dúvidas do usuário  | BAIXA |
|RF-007| Deve ter uma seção com depoimentos de profissionais da área  | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um computador | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  ALTA | 
|RNF-003| a interface deve ser simples e intuitiva |  MÉDIA | 
|RNF-004| taxa de ocorrência de falha igual ou inferior a 2/1.000 |  ALTA |
|RNF-005| Probabilidade de falha durante fase operacional |  MÉDIA |
|RNF-006| Monitorar tempo médio até a ocorrência de falha |  MÉDIA |
|RNF-007| Consumir a menor quantidade de memória possível  |  MÉDIA |
|RNF-008| Reiniciar o site pós falha em até 3 seg |  MÉDIA |




## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido em back back-end  |
|03| Membros da equipe que só podem trabalhar fora do periodo de aulas  |
|04| Cada membro deve trabalhar apenas nas tarefas atribuidas a si  |
|05| Cada tarefa deve ser entregue dentro do prazo acordado  |
|06| Não pode ser desenvolvido um módulo de banco de dados  |
|07| Ao fim de cada tarefa o programa deve ser testado antes da entrega |
|08| Caso algum integrante seja afastado por problemas de saúde a tarefa do mesmo deve ser dividida entre os demais membros  |


# Projeto de Interface

Criamos uma interface simples e intuitiva com informações basicas sobre as graduações disponiveis no mercado, assim como uma ferramente que auxilia na escolha caso a pessoa não consiga decidir facilmente. 

## User Flow

[userflow_page-0001](https://user-images.githubusercontent.com/113153014/192181620-100e1f43-d0cf-4345-97e1-27c5126d1cb8.jpg)


## Wireframes

#### Tela inicial

![Telainicial](https://user-images.githubusercontent.com/113153014/192180871-bb2b7185-df3f-4552-a332-40ef433cbfef.jpg)

#### Formulário

![formulario](./images/form.jpg))


#### Graduações #1

![Cursos1](https://user-images.githubusercontent.com/113153014/192180602-650eab79-3c2a-4717-83b3-c6a785819fa3.jpg)


#### Graduações #1

![Cursos2](https://user-images.githubusercontent.com/113153014/192180606-b2654a8d-3389-4775-bf18-ef95cce11d7a.jpg)


#### Universidades

![Universidades](https://user-images.githubusercontent.com/113153014/192180882-201e1074-65b3-4bbb-9f55-898b694bec5f.jpg)


#### Carreiras
![Carreiras](https://user-images.githubusercontent.com/113153014/192180807-f6f9f0cc-5087-459c-88dd-d0c9d9697066.jpg)


#### Sobre nós

![Sobre nós](./images/about.jpg)

# Metodologia

usamos as metodologias Kamban, getting things done e scrum.


## Divisão de Papéis

| Contribuinte  | Cargo  | Descrição de funções |
|-------|-------------------------|----|
| José Victor Mendes Dias |Equipe | divisão de tarefas, protótipo, wireframe |
|Mellyssa Meireles dos Santos | Equipe | apresentação, documentação |
| José Carlos Ferreira de Andrade | Equipe | documentação, wireframe |
| Lucas Henrique Orselino de Magalhães | Equipe | protótipo, documentação, wireframe |
| Vinicius Reggiani Lima | Equipe | wireframe |
| Alexandre Bernardes Alves Fernandes | Equipe | ------ |


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinking  | Miro | (https://miro.com/app/board/uXjVPY9Ap-M=/) | 
|Repositório de código | GitHub | (https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti1-plf-es-2022-2-ti1-grupo-7) | 
|Protótipo Interativo |  Figma | (https://www.figma.com/proto/aIXiW6Uf9M1WIz4gpMNFsd/Protótipo---Escolha-de-cursos-TI?node-id=1%3A5&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A5) | 


## Controle de Versão

Definimos primeiro o que seria feito através de um brainstorm, vimos as ferramentas que seriam usadas e o que seria possível implementar no projeto. As funções foram definidas mediante as habilidades individuais dos integrantes do projeto, hospedamos o projeto na plataforma Github para unificar todas as informações. A branch master é utilizada como a central do projeto e deve ser sempre a mais atualizada.  

Inicialmente, cada membro do grupo deve organizar as suas tarefas em sua branch específica e após a finalização das atividades, fazer um merge com a branch master. Para fazer alterações na master, primeiro é necessário atualizar a sua branch com os commits da master, para não ocorrer erros.


# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

## Tecnologias Utilizadas

O ambiente utilizado para a programação foi o Visual Studio Code, uma IDE (Integrated Development Environment) utilizada para edição de código-fonte.
Desenvolvido pela Microsoft para Windows, Linux e macOS e lançado em 2015, o Visual Studio Code é um software livre e de código aberto que inclui suporte para depuração e refatoração do código. Sendo um editor de código-fonte, torna-se possível programar em inúmeras linguagens, incluindo Dart.
Foram utilizados também os softwares Dia (DIA WEBSITE, 2020) e Miro (MIRO WEBSITE, 2020), aplicações gratuitas para desenho de diagramas.

Estarão listadas outras tecnologias e bibliotecas utilizadas para o desenvolvimento do sistema, assim como suas funções.

⦁	GitHub:  plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git (GITHUB WEBSITE, 2020), utilizada para versionamento do código do projeto;

⦁	Trello: Aplicação de gerenciamento de projeto que facilita a visualização de tarefas e seu estado de produção a partir de um quadro Kanban (TRELLO WEBSITE, 2020). Utilizado para organização, mantendo os orientadores informados sobre o andamento do projeto;

⦁	Kanban: Metodologia ágile visual adotada para o desenvolvimento do sistema, auxiliando no controle de produção ou gestão de tarefas utilizando um sistema de colunas representando o estado de cada tarefa. As colunas são: A fazer, Em execução e Feito (ARTIA WEBSITE, 2019). 

⦁	JavaScript: Linguagem capaz de executar scripts do lado do usuário (DEVELOPER MOZILLA, 2020);

⦁	HTML: Linguagem de marcação utilizada para desenvolver o corpo de páginas web.

⦁	CSS: É uma folha de estilização de aparência em páginas web que utilizam HTML, XML e XHTML para o desenvolvimento (SILVA, 2008);

⦁	Bootstrap: Um framework web para desenvolvimento de layouts e telas de sistema web, facilitando o desenvolvimento do front-end através de classes CSS (WIKIPÉDIA, 2020), utilizado para estilização das interfaces de usuário do sistema web do projeto;

## Arquitetura da solução

No projeto utilizou-se a distribuição de pastas no padrão mvc (Model, View, Control), separando os arquivos de visualização (HTML e CSS) dos arquivos que controlam quais informações serão exibidas (JavaScript). Para armazenamento de informações, utilizou-se o armazenamento local do navegador.
Para hospedagem, optou-se por duas ferramentas gratuitas. A decisão de utilizar de duas ferramentas se embasou nos testes futuros, que contabilizariam a performance de cada hospedagem. As hospedagens utilizadas foram o Github Pages, funcionalidade integrada ao GitHub que permite hospedar códigos de determinado repositório.


> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências


⦁	TRELLO. Trello. Disponível em: ⦁	www.trello.com. Acesso: 02 dez. 2022
⦁	GitHub. GitHub. Disponível em: ⦁	www.github.com. Acesso: 02 dez. 2022
⦁	Roger-that flow: um uso aprimorado do git-flow. Daniel Almeida Luz. Disponível em: https://www.bdm.unb.br/bitstream/10483/21938/1/2018_DanielAlmeidaLuz_tcc.pdf . Acesso: 02 dez. 2022
⦁	BOOTSTRAP. About. Disponível em: ⦁	https://getbootstrap.com/⦁	docs⦁	/5/⦁	about⦁	/overview/. Acesso em: 02 dez. 2022. 
⦁	Jquery. Jquery. Disponível em: https://jquery.com/ . Acesso em: 02 dez. 2022
⦁	DATATABLES. DataTables. Disponível em: https://datatables.net/. Acesso em: 02 dez. 2022.
⦁	OFICINAS DE ALGORITIMOS COM ESTUDANTES DO SEGUNDO GRAU: UMA PESQUISA AÇÃO. Carlos Eduardo, Dagoberto Melo. Disponível em: https://repositorio.animaeducacao.com.br/bitstream/ANIMA/13748/1/TCC%20-%20Carlos%20e%20Dagoberto.pdf . Acesso em: 02 dez. 2022.
