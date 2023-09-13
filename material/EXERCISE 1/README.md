# Alterar palheta

Este markdown foi criado para introduzir e mostrar o quanto o css moderno deixa consistente e flexível todo o seu site.  
Uma maneira eficaz de fazer isso é usar variáveis CSS para controlar sua paleta de cores.  
Neste guia, aprenderemos como alterar a paleta de cores do site.

## Como funciona?

É importante entender que as variáveis são definidas com '--nome-da-variável'.  
Dentro de um seletor, normalmente ':root', parar criar uma variável global.

O arquivo css que está sendo importado é o [main.css](.../css/main.css)

![variables](/material/EXERCISE%201/variables.png)

Entendendo que o nome da variável é definida com '--nome-da-variável', a cor é definida logo após o ':'.  
No resultado prático utilizamos duas formas de declarar a cor.  
HEX: Ex: _#000000_  
RGBA: Ex: _rgba(0,0,0,1)_

Ambas sairiam na cor preta.

Para aplicar as cores com as variáveis dentro do código CSS é simples, basta acompanhar a cor com a função var('--nome-da-variável')  
![variables](/material/EXERCISE%201/variablespt2.png)

É uma ótima prática para manutenção e organização do código.
