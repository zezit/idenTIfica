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

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

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

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

![Untitled](https://user-images.githubusercontent.com/113153014/192166231-bc9290c3-7bf2-4ee3-8386-7daf6b4e07ca.jpg)


## Wireframes


![unknown](https://user-images.githubusercontent.com/113153014/192166289-f6bc1091-2bc8-43fe-bf16-e03b65f495d3.png)
![unknown (1)](https://user-images.githubusercontent.com/113153014/192166282-95365351-bbfe-48c5-9cf0-735e0b5feac5.png)
![unknown (2)](https://user-images.githubusercontent.com/113153014/192166283-93eae3c9-044c-48ff-aa16-1c141bd51610.png)
![unknown (3)](https://user-images.githubusercontent.com/113153014/192166285-0c740d42-1b5c-4df9-ad35-14123a29a8b6.png)
![unknown (4)](https://user-images.githubusercontent.com/113153014/192166287-9d48979a-a8a8-4c2d-b659-7edaa3c88706.png)
![unknown (5)](https://user-images.githubusercontent.com/113153014/192166288-c01db009-075c-491b-90a1-1852b3695e09.png)

# Metodologia

Trello: Usado para organizar idéias e gerir o projeto.
Miro: Usado para por as idéias em pratica e materializar todo o contexto.
Figma: Usado em toda a etapa de wireframes e projeto.
Github: Usado para dividir tarefas e centralizar toda a informação.


## Divisão de Papéis

Scrum master

|Jose Victor Mendes Dias|
|-----------|-------------------------|---------------|
|Responsável por definir as tarefas de todos no grupo e quais metodologias usaremos.|

PO

|Mellyssa Meireles dos Santos|
|-----------|----------------------------------------|
|Apoio nas tarefas e soluçao de problemas.|

Equipe

|José Carlos ferreira de andrade|
|-----------|----------------------------------------|
Responsável pela documentação do projeto.

|Lucas Henrique Orselino de Magalhães.|
|-----------|----------------------------------------|
|Responsável pelos wireframes.|

|Vinicius Reggiani Lima|
|-----------|----------------------------------------|

|Responsável pelo prototipo do site.|




## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | (https://miro.com/app/board/uXjVPY9Ap-M=/) | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti1-plf-es-2022-2-ti1-grupo-7 | 
|Protótipo Interativo |  Figma | (https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti1-plf-es-2022-2-ti1-grupo-7) | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
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

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
