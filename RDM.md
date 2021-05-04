
# RDM2021021701N - Melhorias do SGP (Ciclo 2021)
rafael.cardoso@alpekpolyester.com;
dvilela@alpekpolyester.com;
agouveia@alpekpolyester.com;
ademberg.vasconcelos@alpekpolyester.com;
rrocha@alpekpolyester.com;
lrocha@alpekpolyester.com


# Backup Project
roberto.couceiro@alpekpolyester.com;
ademberg.vasconcelos@alpekpolyester.com;
lrocha@alpekpolyester.com;
edton.gomes@alpekpolyester.com;
dsantos@alpekpolyester.com;
srodrigues@alpekpolyester.com

# Firewall Update
roberto.couceiro@alpekpolyester.com;
ademberg.vasconcelos@alpekpolyester.com;
lrocha@alpekpolyester.com;
dsantos@alpekpolyester.com;
cmanoel@alpekpolyester.com

# Global Domain - DOD2021031803
roberto.couceiro@alpekpolyester.com;
ademberg.vasconcelos@alpekpolyester.com;
lrocha@alpekpolyester.com;
edton.gomes@alpekpolyester.com;
dsantos@alpekpolyester.com;
srodrigues@alpekpolyester.com;
agouveia@alpekpolyester.com;
rrocha@alpekpolyester.com

# E-procurement Project - 2ª phase
ademberg.vasconcelos@alpekpolyester.com;
lrocha@alpekpolyester.com;
agouveia@alpekpolyester.com;
claudemir@alpekpolyester.com;
aviana@alpekpolyester.com;
nilton.cunha@alpekpolyester.com


# LGPD - DOD2021031807
amanda.lopes@alpekpolyester.com;
anaraquel@alpekpolyester.com;
ademberg.vasconcelos@alpekpolyester.com;
lrocha@alpekpolyester.com;
aabreu@alpekpolyester.com;
claudemir@alpekpolyester.com;
dvilela@alpekpolyester.com;
dsantos@alpekpolyester.com;
mcecilia@alpekpolyester.com;
venancio@alpekpolyester.com;
ylanna.costa@alpekpolyester.com

# SYN - DOD2021031809
ademberg.vasconcelos@alpekpolyester.com;
rrocha@alpekpolyester.com;
lrocha@alpekpolyester.com;



================================================================================================================================================
# RDMS Antigas do projeto de migração do domínio 

RDM2021040502N	Projeto Global de Migração de Domínio 
RDM2021020501N	Sistemas - Alterar a aplicação OCR Online para que possa autenticar por dois domínios simultaneamente
RDM2021012711N	Sistemas - Alterar a aplicação Sistema de Telefonia  para que possa autenticar por dois domínios simultaneamente
RDM2021012710N	Sistemas - Alterar a aplicação Sistema de reserva de veículos para que possa autenticar por dois domínios simultaneamente
RDM2021012709N	Sistemas - Alterar a aplicação PQS Saúde para que possa autenticar por dois domínios simultaneamente
RDM2021012708N	Sistemas - Alterar a aplicação Ponto informatizado para que possa autenticar por dois domínios simultaneamente
RDM2021012707N	Sistemas - Alterar a aplicação Intranet para que possa autenticar por dois domínios simultaneamente
RDM2021012706N	Sistemas - Alterar a aplicação Gestão de Performance para que possa autenticar por dois domínios simultaneamente
RDM2021012705N	Sistemas - Alterar a aplicação Gestão de Ativos para que possa autenticar por dois domínios simultaneamente
RDM2021012704N	Sistemas - Alterar a aplicação Fluxo de Caixa para que possa autenticar por dois domínios simultaneamente
RDM2021012703N	Sistemas - Alterar a aplicação Ficha de Admissão para que possa autenticar por dois domínios simultaneamente
RDM2021012702N	Sistemas - Alterar a aplicação Controle de Salas de Reunião para que possa autenticar por dois domínios simultaneamente
RDM2021011907N	Sistemas - Alterar a aplicação Controle de Portaria e Pesagens para que possa autenticar por dois domínios simultaneamente
RDM2021011905N	Sistemas - Alterar a aplicação Controle de Equipamentos para que possa autenticar por dois domínios simultaneamente
RDM2021011801N	Sistemas - Alterar a aplicação Banco de Talentos para que possa autenticar por dois domínios simultaneamente


RDM2021012711N   Sistema de Telefonia  
RDM2021012710N   Sistema de reserva de veículos 
RDM2021012708N   Ponto informatizado 
RDM2021012707N   Intranet 
RDM2021012706N   Gestão de Performance 
RDM2021012705N   Gestão de Ativos 
RDM2021012702N   Controle de Salas de Reunião 
RDM2021011905N   Controle de Equipamentos 
====================================================================================================================================================


--------------------------------------------------------------------
TI2021021611

Criação de usuário administrador para acesso  aos servidores: 
Desenvolvimento: D-ENXOFRE
Teste: T-ENXOFRE

Para Evanilson = easantos@alpekpolyester.com





=============================================
=============================================
=============================================


================================================================================================
# RDMs Global Domain
================================================================================================
** RDM2021011801N, RDM2021011905N, RDM2021011907N

## Titulos
Alterar a aplicação XXXXXXXXXXXX para que possa autenticar por dois domínios simultaneamente

## Descrição
Devido à unificação de domínios do grupo ALPEK se torna necessário alterar as aplicações WEB desenvolvidas internamente para que possam autenticar os usuários enxergando dois domínios simultaneamente. 

Isso se deve a estratégia de migração dos usuário e equipamentos para o novo domínio que poderá ser divididas em ondas onde por algum tempo teremos usuários simultaneamente no domínio PSUAPE e ALPEK.

## Solução 
Alterar a autenticação do sistema para que verifique o usuário em mais de um domínio 

## Checagem de segurança
Foram realizados testes de autenticação da ferramente no domínio atual e no novo domínio alpek


## Analise de prioridade 
2
2
2

##Risco da Mudança
3
3
2
2
3
5
Devido à unificação de domínios do grupo ALPEK se torna necessário alterar as aplicações WEB desenvolvidas internamente para que possam autenticar os usuários enxergando dois domínios simultaneamente. 

Isso se deve a estratégia de migração dos usuário e equipamentos para o novo domínio que poderá ser divididas em ondas onde por algum tempo teremos usuários simultaneamente no domínio PSUAPE e ALPEK.

## Benefícios
Ter os sistemas aptos a autenticar usuário de dois domínios simultâneos 

## Paleativa 
Manter os usuários no Domínio PSUAPE e em caso de problema os usuários voltariam a usar este

=========================================================================================================================================
#RDM2021011904N - Logistica -  controle de portaria
=========================================================================================================================================
## Titulos
Alterações no sistema de portaria para atender a múltiplos fluxos das operações logísticas

## Descrição
Devido à entrada de diversos tipos de caminhões e outros veículos para atividades diversas na PQS se torna necessário o desenvolvimento de um novo sistema de portaria que contemple os diversos fluxos das operações realizadas hoje.

A ideia é que o sistema seja integrado a solução de agendamento de carga onde os usuários identificariam na janela a qual tipo de operação ela pertence ao chegar na PQS o caminhão se identificaria como para aquela janela e, nessa altura o sistema já saberia, qual fluxo seguir. Se seria necessário ou não a realização da pesagem na entrada de caminhões.	

## Benefícios
Melhorar o fluxo de caminhões na planta
Racionalizar o uso da balança de pesagem que hoje é compartilhada 
Diminuir o tempo dos caminhões no processo de entrada e permanência na planta


## Paleativa
Continuar com a versão atual do sisteam 
Controle manual de entrada. 

=========================================================================================================================================
#RDM2021011903N - Ana Raquel - Assinatura digital
=========================================================================================================================================
## Descrição
Criação de uma pasta para armazenamento das atas de treinamento da PQS. 

A área de desenvolvimento humano da PQS, esta realizando uma série de treinamentos remotos e necessita de uma forma de assinatura eletrônica para as atas de participação nos mesmos. A ideia da solução seria a criação de uma pasta no SESuite para o armazenamento das atas e que possibilite, via integração com a Docusign, a coleta de assinaturas digitais dos participantes.

A solicitante pede urgência na implantação, pois não consegue manter o controle do envio das atas, enviando por email.

## Benefícios
Maior controle na assinatura das atas de treinamentos internos

## Paleativa 
Os usuários podem solicitar a assinatura diretamente via a solução da docusign, para isso é necessário apenas o cadastro dos usuários que terão acesso ao envio e treinar os mesmo no uso.

Cadastro de usuários = 30 minutos 
Treinamento = 1 hora