# Validador de Cartão de Crédito

Esta biblioteca tem como finalidade verificar se um número de cartão de crédito é válido.

## Como instalar:

    $  npm i card-validator-ianan

## Como utilizar:

    > const cardValidator = require("card-validator-ianan")
    > cardValidator.cardValidator(4539878902538066)
    > //return true

## Roadmap Oficial do projeto:

###  Versão 1.0.3 (released)

 - Validação de número de cartão de crédito com 16 dígitos
 - Aceita entradas do tipo number e string(incluindo caracteres especiais "-, .")