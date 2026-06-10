# 🧪 Laboratório Prático de Hooks (React + TypeScript)

Este projeto é um laboratório interativo desenvolvido em **React**, **TypeScript** e **Vite**, projetado para explorar, demonstrar e praticar o uso dos principais React Hooks (tanto nativos quanto customizados).

O aplicativo possui uma tela de login simples (gerenciada por Context API) que ativa o painel principal, onde vários componentes isolados demonstram diferentes hooks em ação de forma visual e prática.

---

## 🛠️ Hooks Demonstrados no Projeto

O projeto cobre uma ampla gama de React Hooks, estruturados em componentes focados:

### 1. Hooks Nativos

*   **`useState`** (Componente: `ContadorState.tsx`)
    *   Demonstra o gerenciamento de estado local simples através de um contador incremental/decremental.
*   **`useEffect`** (Componente: `UsuarioPerfilEffect.tsx`)
    *   Demonstra o ciclo de vida e efeitos colaterais. Simula uma chamada de API para carregar dados de usuário sempre que o ID selecionado muda, lidando corretamente com estados de carregamento.
*   **`useContext`** (Componente: `ComponenteContexto.tsx` / Contexto: `AuthContext.tsx`)
    *   Utiliza a Context API para compartilhar globalmente o estado de autenticação (se o usuário está logado, dados do usuário e funções de login/logout).
*   **`useReducer`** (Componente: `ContadorComplexoReducer.tsx`)
    *   Utilizado para gerenciar estados mais complexos baseados em ações (*actions* e *dispatch*), simulando um fluxo no estilo Redux.
*   **`useRef`** (Componente: `FocarInputRef.tsx`)
    *   Demonstra o acesso direto a elementos do DOM. Permite focar em um campo de texto programaticamente com o clique de um botão.
*   **`useMemo`** (Componente: `FiltroNumerosMemo.tsx`)
    *   Evita cálculos caros re-executando a filtragem e ordenação de uma grande lista de números somente quando os dados de entrada realmente mudarem.
*   **`useCallback`** (Componente: `BotaoCallback.tsx`)
    *   Memoiza funções de callback passadas para componentes filhos para evitar re-renderizações desnecessárias causadas pela recriação de funções a cada render do componente pai.

### 2. Hooks Customizados (*Custom Hooks*)

*   **`useAuth`** (`src/hooks/useAuth.ts`)
    *   Facilita o consumo do contexto de autenticação de forma limpa e segura em toda a aplicação.
*   **`useOnlineStatus`** (`src/hooks/useOnlineStatus.ts`)
    *   Monitora o status de conexão de rede do navegador (`navigator.onLine`) em tempo real e atualiza a interface dinamicamente se a conexão cair ou for restabelecida.

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Abra no navegador:**
   Acesse o endereço fornecido no terminal (geralmente `http://localhost:5173`).

---

## 📦 Como Subir para o GitHub

Para subir este projeto para o seu próprio repositório no GitHub, siga as instruções abaixo:

1. **Inicialize o repositório Git local** (caso ainda não esteja inicializado):
   ```bash
   git init
   ```

2. **Adicione os arquivos ao Git** (o arquivo `.gitignore` já está configurado para não subir a pasta `node_modules`):
   ```bash
   git add .
   ```

3. **Crie o primeiro commit:**
   ```bash
   git commit -m "feat: setup inicial do laboratorio de react hooks"
   ```

4. **Crie um novo repositório vazio no GitHub** (não adicione README, .gitignore ou Licença lá).

5. **Associe o repositório local ao repositório remoto no GitHub:**
   *(Substitua `SEU_USUARIO` e `NOME_DO_REPOSITORIO` pelos seus dados reais)*
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   ```

6. **Defina a branch principal como `main`:**
   ```bash
   git branch -M main
   ```

7. **Envie os arquivos para o GitHub:**
   ```bash
   git push -u origin main
   ```

---

## 📝 Tecnologias Utilizadas

*   **React 19**
*   **TypeScript**
*   **Vite**
*   **CSS3** (Estilização responsiva em Grid e Flexbox)
