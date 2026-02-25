# 🚀 Guia de Deploy - R&A Website

Este guia contém instruções detalhadas para fazer deploy do website da R&A em diferentes plataformas.

## 📋 Preparação para Deploy

### 1. Verificar se tudo está funcionando
```bash
npm run dev
# Teste todas as funcionalidades no localhost:5173
```

### 2. Gerar build de produção
```bash
npm run build
```

### 3. Testar build localmente
```bash
npm run preview
```

## 🌐 Opções de Deploy

### 1. Netlify (Recomendado - Gratuito)

#### Via GitHub (Automático)
1. **Conectar repositório:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte sua conta GitHub
   - Selecione o repositório `rea-website`

2. **Configurar build:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18

3. **Deploy automático:**
   - A cada push no GitHub, o site será atualizado automaticamente

#### Via Upload Manual
1. Execute `npm run build`
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist` para a área de deploy
4. Site estará online em segundos

### 2. Vercel (Gratuito)

1. **Conectar repositório:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Conecte GitHub e selecione `rea-website`

2. **Configuração automática:**
   - Vercel detecta Vite automaticamente
   - Deploy acontece automaticamente

3. **Domínio personalizado:**
   - Adicione domínio próprio nas configurações

### 3. GitHub Pages

1. **Instalar gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Configurar package.json:**
```json
{
  "homepage": "https://seu-usuario.github.io/rea-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Fazer deploy:**
```bash
npm run deploy
```

### 4. Hospedagem Tradicional (cPanel/FTP)

1. **Gerar build:**
```bash
npm run build
```

2. **Upload via FTP:**
   - Conecte ao seu servidor via FTP
   - Faça upload de todos os arquivos da pasta `dist/`
   - Coloque na pasta `public_html` ou equivalente

3. **Configurar servidor:**
   - Certifique-se que o servidor suporta SPA (Single Page Application)
   - Configure redirecionamento para `index.html`

## ⚙️ Configurações Avançadas

### Domínio Personalizado

#### Netlify
1. Vá em "Domain settings"
2. Clique em "Add custom domain"
3. Configure DNS do seu domínio:
   ```
   CNAME www seu-site.netlify.app
   A @ 75.2.60.5
   ```

#### Vercel
1. Vá em "Settings" > "Domains"
2. Adicione seu domínio
3. Configure DNS conforme instruções

### SSL/HTTPS
- **Netlify/Vercel:** SSL automático e gratuito
- **Hospedagem tradicional:** Configure Let's Encrypt

### Variáveis de Ambiente

Se precisar de variáveis de ambiente:

1. **Crie arquivo `.env`:**
```bash
VITE_WHATSAPP_NUMBER=27998746554
VITE_EMAIL=rea@rea.srv.br
```

2. **Configure na plataforma:**
   - **Netlify:** Site settings > Environment variables
   - **Vercel:** Settings > Environment Variables

## 🔧 Otimizações para Produção

### 1. Compressão de Imagens
```bash
# Instalar imagemin
npm install --save-dev imagemin imagemin-webp

# Otimizar imagens antes do build
npm run optimize-images
```

### 2. Análise do Bundle
```bash
npm run build -- --analyze
```

### 3. Cache e Performance
- Netlify/Vercel configuram cache automaticamente
- Para hospedagem tradicional, configure headers:

```apache
# .htaccess
<IfModule mod_expires.c>
  ExpiresActive on
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 📊 Monitoramento

### Google Analytics
1. Crie conta no Google Analytics
2. Adicione código de tracking no `index.html`

### Performance
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitore Core Web Vitals

## 🆘 Solução de Problemas

### Build falha
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Imagens não carregam
- Verifique se estão na pasta `src/assets/`
- Confirme imports no código
- Teste build local com `npm run preview`

### Roteamento não funciona
- Configure redirecionamento para SPA
- Netlify: arquivo `_redirects` com `/* /index.html 200`
- Vercel: arquivo `vercel.json` com configuração de rewrites

### Performance lenta
- Otimize imagens
- Use lazy loading
- Minimize CSS/JS

## 📞 Suporte

Para problemas técnicos:
1. Verifique logs de build na plataforma
2. Teste localmente primeiro
3. Consulte documentação da plataforma

---

**🎉 Seu site da R&A estará online e funcionando perfeitamente!**
