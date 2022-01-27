# GamaAcademy
Repositório para inserção dos arquivos do curso de QA da GamaAcademy

## How-To
#### Iniciar o repositório local na pasta desejada
$ git init
#### Sincronizar o repositório local com o reposiório criado previamente no GitHub
$ git remote add origin https://github.com/hdbunix/public.git
#### Adicionar todos arquivos locais para mudança
$ git add .
#### Adicionar comentario para todos arquivos que forem inclusos no proximo pull
$ git commit -m "Primeiro commit"
#### Enviar as alterações adicionadas com o git add e commit
$ git pull https://github.com/hdbunix/public.git --allow-unrelated-histories
#### Definir a Branch main como default localmente
$ git branch -m master main
#### Não sei pra que serve, mas sem isso nao funciona / faz o primeiro push desse rep local
$ git push --set-upstream origin main
#### Faz os push subsequentes do repositório local
$ git push