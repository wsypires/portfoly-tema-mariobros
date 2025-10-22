# 🎮 Mario Bros Portfolio - Guia de Deploy

Bem-vindo ao guia completo para hospedar seu portfólio Mario Bros no GitHub e Cloudflare!

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Git** - [Download aqui](https://git-scm.com/)
- **Node.js** (v18+) - [Download aqui](https://nodejs.org/)
- **npm** ou **pnpm** - Gerenciador de pacotes

Verifique as instalações:

```bash
git --version
node --version
npm --version
```

---

## 🚀 Passo 1: Preparar o Projeto Localmente

### 1.1 Instalar Dependências

```bash
cd mario-portfolio
npm install
# ou
pnpm install
```

### 1.2 Testar Localmente

```bash
npm run dev
# ou
pnpm dev
```

Acesse `http://localhost:3000` para visualizar seu portfólio.

### 1.3 Build para Produção

```bash
npm run build
# ou
pnpm build
```

Isso criará uma pasta `dist/public` com os arquivos otimizados para produção.

---

## 📦 Passo 2: Publicar no GitHub

### 2.1 Criar um Repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em **"New"** para criar um novo repositório
3. Nomeie como `mario-portfolio`
4. Escolha **Public** para que fique acessível
5. Clique em **"Create repository"**

### 2.2 Inicializar Git Localmente

Se ainda não tiver inicializado o Git:

```bash
cd mario-portfolio
git init
git add .
git commit -m "Initial commit: Mario Bros Portfolio"
```

### 2.3 Conectar ao GitHub

```bash
git remote add origin https://github.com/seu-usuario/mario-portfolio.git
git branch -M main
git push -u origin main
```

Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

### 2.4 Verificar no GitHub

Acesse `https://github.com/seu-usuario/mario-portfolio` para confirmar que os arquivos foram enviados.

---

## ☁️ Passo 3: Hospedar na Cloudflare Pages

### 3.1 Conectar Cloudflare ao GitHub

1. Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
2. Clique em **"Create a project"**
3. Selecione **"Connect to Git"**
4. Autorize o Cloudflare a acessar sua conta GitHub
5. Selecione o repositório `mario-portfolio`

### 3.2 Configurar Build Settings

Na página de configuração:

- **Framework preset**: Selecione **"None"** (ou **"React"** se disponível)
- **Build command**: `npm run build` ou `pnpm build`
- **Build output directory**: `dist/public`
- **Root directory**: `/` (deixe em branco)

### 3.3 Configurar Variáveis de Ambiente (Opcional)

Se seu projeto usar variáveis de ambiente:

1. Vá para **"Settings"** do projeto
2. Clique em **"Environment variables"**
3. Adicione as variáveis necessárias

### 3.4 Deploy

Clique em **"Save and Deploy"**. O Cloudflare automaticamente:

- Fará clone do seu repositório
- Executará o comando de build
- Hospedará os arquivos estáticos

Seu site estará disponível em: `https://seu-projeto.pages.dev`

---

## 🔄 Atualizações Futuras

Após a configuração inicial, qualquer push para a branch `main` do GitHub acionará automaticamente um novo deploy no Cloudflare Pages.

### Para atualizar seu portfólio:

```bash
# Faça suas alterações localmente
# Teste com: npm run dev

# Quando estiver pronto:
git add .
git commit -m "Descrição das mudanças"
git push origin main

# Cloudflare detectará a mudança e fará deploy automaticamente
```

---

## 🎯 Domínio Personalizado (Opcional)

Para usar seu próprio domínio:

1. No Cloudflare Pages, vá para **"Custom domains"**
2. Clique em **"Add custom domain"**
3. Digite seu domínio (ex: `meuportfolio.com`)
4. Siga as instruções para configurar os nameservers

---

## 🐛 Troubleshooting

### Erro: "Build failed"

Verifique os logs no Cloudflare Pages:
- Certifique-se de que `npm run build` funciona localmente
- Verifique se todas as dependências estão no `package.json`

### Site não atualiza após push

- Aguarde alguns minutos (Cloudflare pode levar até 5 minutos)
- Verifique o status do deploy em **"Deployments"**
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Erro 404 em rotas internas

Adicione um arquivo `_redirects` na pasta `public`:

```
/* /index.html 200
```

---

## 📝 Estrutura do Projeto

```
mario-portfolio/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── components/
│   │   ├── index.css
│   │   └── App.tsx
│   ├── public/
│   └── index.html
├── dist/
│   └── public/          (Gerado após build)
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── DEPLOYMENT_GUIDE.md
```

---

## 🎨 Personalizações Recomendadas

Antes de fazer deploy, considere:

1. **Atualizar informações pessoais**
   - Edite `client/src/pages/Home.tsx`
   - Atualize nome, descrição e links de contato

2. **Adicionar seu número WhatsApp**
   - Procure por `5511999999999` em `Home.tsx`
   - Substitua pelo seu número (com código do país)

3. **Atualizar links de redes sociais**
   - Edite as URLs em `Home.tsx`
   - Adicione seus perfis reais

4. **Adicionar projetos reais**
   - Substitua os projetos de exemplo
   - Adicione links para seus repositórios

---

## 📚 Recursos Úteis

- [Documentação do Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## ✨ Dicas Finais

- **Mantenha o repositório público** para que outros possam ver seu código
- **Use commits descritivos** para rastrear mudanças
- **Teste localmente antes de fazer push** para evitar builds quebrados
- **Monitore o desempenho** usando as ferramentas do Cloudflare

---

## 🎮 Divirta-se!

Seu portfólio Mario Bros está pronto para conquistar o mundo digital! 🍄🎯

Se tiver dúvidas, consulte a documentação oficial do Cloudflare ou GitHub.

**Made with ❤️ in the Mushroom Kingdom**

