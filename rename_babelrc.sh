#!/bin/bash

# Navega até o diretório onde está o arquivo .babelrc
cd "recepts-ai"

# Verifica se o arquivo .babelrc existe
if [ -f ".babelrc" ]; then
    # Verifica se o arquivo é igual a ".babelrc"
    if [ "$(basename .babelrc)" = ".babelrc" ]; then
        # Renomeia o arquivo para "..babelrc"
        mv .babelrc ..babelrc
        echo "Arquivo .babelrc foi renomeado para ..babelrc"
    else
        # Renomeia o arquivo para ".babelrc"
        mv .babelrc .babelrc
        echo "Arquivo .babelrc foi renomeado para .babelrc"
    fi
else
    if [ "$(basename ..babelrc)" = "..babelrc" ]; then
        # Renomeia o arquivo para "..babelrc"
        mv ..babelrc .babelrc
        echo "Arquivo ..babelrc foi renomeado para .babelrc"
    else
        # Renomeia o arquivo para ".babelrc"
        mv .babelrc .babelrc
        echo "Arquivo ..babelrc foi renomeado para .babelrc"
    fi
fi