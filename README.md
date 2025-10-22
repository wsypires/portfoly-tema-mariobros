# 🎮 Mario Bros Portfolio

Um portfólio web interativo com tema do universo **Mario Bros**, desenvolvido em estilo **pixel art retrô** com animações inspiradas em jogos clássicos.

![Mario Bros Portfolio](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎨 Características

✨ **Tema Visual Imersivo**
- Fundo com céu azul e grama verde do Mario
- Nuvens flutuantes que se movem com o scroll
- Canos verdes decorativos
- Blocos do Mario animados

🎮 **Animações Retrô**
- Efeito de bounce nos elementos
- Nuvens flutuantes dinâmicas
- Brilho pulsante no título
- Transições suaves com estilo pixel art

👾 **Componentes Interativos**
- Personagem Mario em pixel art (construído com CSS)
- Botão flutuante do WhatsApp para contato direto
- Ícones de redes sociais com efeito de bounce
- Cards com bordas em estilo pixel

📱 **Design Responsivo**
- Layout adaptável para mobile, tablet e desktop
- Fontes pixeladas que escalam corretamente
- Navegação intuitiva em todos os dispositivos

🎯 **Seções Completas**
- Apresentação pessoal com avatar pixel art
- Seção de skills (Power-ups)
- Portfólio de projetos (Completed Quests)
- Links de contato e redes sociais
- Footer com informações

---

## 🚀 Quick Start

### Pré-requisitos

- Node.js v18+
- npm ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mario-portfolio.git
cd mario-portfolio

# Instale as dependências
npm install
# ou
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
pnpm dev
```

Acesse `http://localhost:3000` no seu navegador.

### Build para Produção

```bash
# Crie uma build otimizada
npm run build
# ou
pnpm build
```

Os arquivos otimizados estarão em `dist/public/`.

---

## 📁 Estrutura do Projeto

```
mario-portfolio/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Página principal do portfólio
│   │   │   └── NotFound.tsx      # Página 404
│   │   ├── components/
│   │   │   └── ui/               # Componentes shadcn/ui
│   │   ├── contexts/             # React contexts
│   │   ├── hooks/                # Custom hooks
│   │   ├── lib/                  # Utilitários
│   │   ├── App.tsx               # Componente raiz
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Estilos globais + tema Mario
│   ├── public/                   # Arquivos estáticos
│   └── index.html                # Template HTML
├── dist/                         # Build output (gerado)
├── package.json
├── tailwind.config.ts            # Configuração Tailwind com cores Mario
├── vite.config.ts                # Configuração Vite
├── tsconfig.json
├── DEPLOYMENT_GUIDE.md           # Guia de deploy
└── README.md                     # Este arquivo
```

---

## 🎨 Paleta de Cores Mario Bros

| Cor | Hex | Uso |
|-----|-----|-----|
| Mario Red | `#e74c3c` | Títulos, botões |
| Mario Blue | `#2980b9` | Textos secundários |
| Mario Green | `#27ae60` | Seções, canos |
| Mario Yellow | `#f1c40f` | Cards, destaque |
| Mario Orange | `#e67e22` | Acentos |
| Sky Blue | `#87ceeb` | Fundo superior |
| Grass Green | `#52b788` | Fundo inferior |

---

## 🔧 Personalizações

### Atualizar Informações Pessoais

Edite `client/src/pages/Home.tsx`:

```tsx
// Atualize seu nome
<h1>SEU NOME AQUI</h1>

// Atualize sua descrição
<p>Sua descrição profissional...</p>

// Atualize seu número WhatsApp
href="https://wa.me/5511999999999"
```

### Adicionar Redes Sociais

Atualize o array `socialLinks` em `Home.tsx`:

```tsx
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/seu-usuario',
    color: '#1a1a1a',
  },
  // Adicione mais links aqui
];
```

### Modificar Cores

Edite `tailwind.config.ts`:

```ts
colors: {
  "mario-red": "#seu-vermelho",
  "mario-blue": "#seu-azul",
  // ... outras cores
}
```

---

## 📦 Dependências Principais

- **React 19** - Framework UI
- **Tailwind CSS 4** - Utility-first CSS
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Wouter** - Client-side routing
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

---

## 🚀 Deploy

### Cloudflare Pages (Recomendado)

1. Faça push do seu repositório para GitHub
2. Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
3. Conecte seu repositório GitHub
4. Configure:
   - Build command: `npm run build`
   - Build output: `dist/public`
5. Deploy automático a cada push!

Para instruções detalhadas, veja [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

### Outras Opções

- **Vercel** - Otimizado para React
- **Netlify** - Fácil integração com Git
- **GitHub Pages** - Gratuito e integrado

---

## 🎮 Animações e Efeitos

O portfólio inclui várias animações CSS:

- **`bounce-pixel`** - Efeito de pulo retrô
- **`glow-pulse`** - Brilho pulsante
- **`slide-in-left`** - Entrada pela esquerda
- **`slide-in-right`** - Entrada pela direita
- **`fade-in`** - Fade in suave
- **`float`** - Flutuação contínua
- **`sway`** - Balanço leve

Todas definidas em `client/src/index.css`.

---

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile** (< 480px) - Fontes menores, layout single column
- **Tablet** (480px - 768px) - Layout adaptado
- **Desktop** (> 768px) - Layout completo com 3 colunas

---

## 🔐 Segurança

- Sem dados sensíveis no código
- Variáveis de ambiente para URLs externas
- Links de contato seguros
- Sem rastreamento invasivo

---

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📧 Contato

Tem dúvidas ou sugestões? Entre em contato através do WhatsApp ou pelas redes sociais!

---

## 🎯 Roadmap

- [ ] Adicionar seção de blog
- [ ] Integrar formulário de contato
- [ ] Adicionar dark mode
- [ ] Melhorar SEO
- [ ] Adicionar analytics
- [ ] Criar versão em inglês

---

## 🙏 Agradecimentos

- Inspiração: Série Super Mario Bros
- Ícones: [Lucide React](https://lucide.dev/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Estilos: [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ in the Mushroom Kingdom** 🍄

Desenvolvido com Manus AI

