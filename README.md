# Desafio front-end

Infelizmente mesmo com o tempo extra, não consegui fazer nem metade do que eu queria. Então no momento o projeto está num estado MVP (funciona, mas nem perto de usar as melhores práticas). 

## Para rodar: 

Clonar o repositório ou fazer o download.
Digitar npm install no prompt para instalar as dependências.
Abrir o projeto em sua IDE.
Ir na pasta src/helpers/ e abrir o arquivo apiKeys.js.
Inserir sua private key e token para acesso a api da Marvel. 
Npm start para rodar o projeto.

**Sobre o projeto**

- Todos os ícones eu salvei os SVG do Figma. No 'mundo real', provavelmente usaria uma fonte de ícones. 

- Usuário não pode adicionar duas vezes o mesmo herói na lista de favoritos.

- O tamanho da descrição eu fiz uma função externa (salva na pasta Helpers), já que uso com diferentes valores em mais de um lugar. Na Home eu optei por deixar com somente 100 caracteres. Na descrição de cada revista, coloquei os 200 pedidos.

- Para a parte de estilos eu prefiro trabalhar com styled components. Mas como a descrição falava em usar Sass, optei por fazer com CSS Modules. Comecei a reorganizar os estilos, mas também não tive tempo. Criei uma pasta scss em /assets, e criei variáveis, mixins e classes compartilhadas. Faltou migrar tudo que eu conseguisse. 

- Apesar do texto com o "# results" no canto direito, a descrição falava para voltar EXATAMENTE 5 revistas. Então foi o que eu fiz, já limitando a quantidade de respostas na API. Mas nesse caso atual, eu só adicionaria o plugin de paginação nessa página também. 

- No Figma o tamanho das revistas estava maior na página de detalhes. Porém, em um personagem de exemplo que estava usando, tinham capas com tamanho bem menor. Ao invés de perder qualidade deixando todas do mesmo tamanho, optei por usar todas no tamanho máximo da menor imagem disponível.

- Coloquei uma lógica para o "Return to previous page" da página de detalhes voltar para a que foi clicada, seja ela a página principal ou a de favoritos.

- Não consegui montar a lógica para a paginação de um jeito eficiente. Então, para o momento, usei um plugin (react-paginate). Não ficou exatamente igual o Figma :(
