# 🎯 Otimizador Imperativo de Prompts

Ferramenta web que transforma rascunhos caóticos de comandos em **prompts imperativos estruturados em 4 quadrantes**, com recomendações de configuração do LLM (modelo, temperatura, top-p, max tokens, raciocínio).

🔗 **Demo:** https://otimizador-de-prompts.vercel.app

## ✨ Recursos

- **Motor de inferência por domínio** — detecta automaticamente o perfil da tarefa (Código, Jurídico, Marketing, Criativo, Redação, Análise, Dados, Estratégia, Didático) e atribui persona, tom e diretrizes adequadas.
- **5 Seções**: Escopo & Objetivo · Diretrizes Imperativas (UTILIZE / GARANTA / MANTENHA / ABSTENHA-SE) · Formatação & Design · Segregação de Contexto & Restrições · **Verificação Final**.
- **Prompt pré-preenchido**: todos os campos vêm com valores sugeridos por domínio (marcados como *sugerido*); a seção final lista o checklist a revisar antes de enviar — nada de placeholders vazios.
- **Tipografia de alto contraste** e escala responsiva (legível em mobile, Android, iOS e desktop).
- **Parâmetros recomendados do LLM** por domínio (modelo, temperatura, top-p, max tokens, raciocínio), com justificativa.
- **Aba "Claude & Code"** — referência atualizada (mai/2026) dos modelos Claude (Opus 4.8, Sonnet 4.6, Haiku 4.5); **guia por ecossistema** com anatomia + template XML copiável para 4 plataformas (Claude Geral/API, Cowork, Artifacts, Code CLI); **tabela de hiperparâmetros** (temperatura/top-p/max tokens/stop) por tarefa técnica; recursos do Claude Code e boas práticas de prompting.
- **Exemplos rápidos** (quick-start) e atalho **Ctrl/Cmd + Enter**.
- **Exportar `.md`** e **copiar** o prompt para o clipboard.
- **Tema claro / Tokyo Midnight** com persistência (localStorage) e respeito a `prefers-color-scheme`.
- Estimativa de tokens, contagem de palavras/caracteres.
- **100% client-side** — sem backend, sem login, sem coleta de dados. Acessibilidade WCAG AA.

## 🛠️ Stack

- **React 18** + **lucide-react** — empacotados num **bundle local pré-compilado** (`assets/app.js`), sem nenhuma dependência de CDN em tempo de execução.
- **esbuild** transpila o JSX e faz *tree-shaking* (só os ícones usados entram no bundle).
- **Montserrat** (Google Fonts), CSS variables (temas) e estilos inline.

Estrutura:

```
src/app.jsx      → código-fonte (JSX, imports ES)
assets/app.js    → bundle gerado (commitado; é o que o site serve)
index.html       → casca mínima que carrega o bundle
package.json     → deps fixadas + script de build
```

> **Por que sem CDN:** o app não quebra se a unpkg/jsDelivr cair, carrega mais rápido
> (sem Babel transpilando ~3 MB no navegador) e o bundle final tem ~210 KB.

## 🚀 Rodando localmente

```bash
npm install        # instala React, lucide-react e esbuild
npm run build      # gera assets/app.js
npx serve .        # serve em http://localhost:3000
```

Durante o desenvolvimento, use `npm run watch` para rebuildar a cada alteração em `src/app.jsx`.

## 📦 Deploy

Hospedado como site estático na **Vercel**. O bundle (`assets/app.js`) é commitado, então
o deploy continua **zero-config** (a Vercel só serve os arquivos). Para republicar:

```bash
npm run build && vercel deploy --prod
```

> ⚠️ Sempre rode `npm run build` após editar `src/app.jsx` — o site serve o bundle, não o fonte.

## 📄 Licença

MIT.
