# R&A Serviços e Manutenções Elétricas - Website Institucional

Website moderno e responsivo para a R&A Serviços e Manutenções Elétricas, especializada em prestação de serviços de intervenção em vegetação em linha de transmissão e redes de distribuição de MT/BT.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Ícones modernos
- **shadcn/ui** - Componentes UI reutilizáveis

## ✨ Funcionalidades

- 🎨 **Design Moderno e Responsivo** - Adaptável a todos os dispositivos
- 🖼️ **Carousel Interativo** - Fotos reais da empresa com transições suaves
- 📱 **Integração WhatsApp** - Botão direto para contato
- 🎭 **Animações Fluidas** - Experiência visual premium
- 🌿 **Tema Sustentável** - Cores e elementos que refletem compromisso ambiental
- ⚡ **Performance Otimizada** - Carregamento rápido e eficiente

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**

### Verificar instalações:
```bash
node --version
npm --version
git --version
```

## 🛠️ Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/rea-website.git
cd rea-website
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto em modo desenvolvimento
```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Visualiza build de produção

# Linting
npm run lint         # Verifica código com ESLint
```

## 🏗️ Build para Produção

### 1. Gerar build otimizado
```bash
npm run build
```

### 2. Os arquivos serão gerados na pasta `dist/`

### 3. Para testar o build localmente:
```bash
npm run preview
```

## 🌐 Deploy

### Opção 1: Netlify
1. Conecte seu repositório GitHub ao Netlify
2. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Deploy automático a cada push

### Opção 2: Vercel
1. Conecte seu repositório ao Vercel
2. Deploy automático (Vercel detecta Vite automaticamente)

### Opção 3: GitHub Pages
```bash
npm install --save-dev gh-pages

# Adicione ao package.json:
"homepage": "https://seu-usuario.github.io/rea-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy:
npm run deploy
```

## 📁 Estrutura do Projeto

```
rea-website/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   │   ├── imagem1.jpg    # Fotos da empresa
│   │   ├── imagem2.jpg
│   │   ├── imagem3.jpg
│   │   ├── imagem4.jpg
│   │   ├── imagem5.jpeg
│   │   └── logos/         # Logos da empresa e parceiros
│   ├── components/        # Componentes reutilizáveis
│   │   └── ui/           # Componentes shadcn/ui
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personalização

### Cores do Tema
As cores principais estão definidas no `tailwind.config.js`:
- **Verde:** Sustentabilidade e natureza
- **Azul:** Confiança e profissionalismo
- **Laranja:** Energia e dinamismo

### Modificar Conteúdo
- **Textos:** Edite diretamente no `src/App.jsx`
- **Imagens:** Substitua arquivos na pasta `src/assets/`
- **Contatos:** Atualize informações na seção de contato

### Carousel de Fotos
Para adicionar/remover fotos do carousel:
1. Adicione imagens em `src/assets/`
2. Importe no `App.jsx`
3. Adicione ao array `images` no componente `EmpresaCarousel`

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1280px+)

## 🔧 Solução de Problemas

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de build
```bash
npm run lint
npm run build
```

### Problemas com imagens
- Verifique se as imagens estão na pasta `src/assets/`
- Confirme se os imports estão corretos no `App.jsx`

## 📞 Contato da Empresa

- **Telefone:** (27) 99874-6554
- **E-mail:** rea@rea.srv.br
- **Endereço:** Alameda Buganville, 37 - Centro, Sooretama/ES - CEP: 29927-000
- **WhatsApp:** [Clique aqui](https://wa.me/27998746554)

## 📄 Licença

Este projeto foi desenvolvido para a R&A Serviços e Manutenções Elétricas.

## 🤝 Contribuição

Para contribuir com melhorias:
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**Desenvolvido com ❤️ para R&A Serviços e Manutenções Elétricas**
