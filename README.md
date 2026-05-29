# 🎯 Otimizador Imperativo de Prompts

Ferramenta web que transforma rascunhos caóticos de comandos em **prompts imperativos estruturados em 4 quadrantes**, com recomendações de configuração do LLM (modelo, temperatura, top-p, max tokens, raciocínio).

🔗 **Demo:** https://otimizador-de-prompts.vercel.app

## ✨ Recursos

- **Motor de inferência por domínio** — detecta automaticamente o perfil da tarefa (Código, Jurídico, Marketing, Criativo, Redação, Análise, Dados, Estratégia, Didático) e atribui persona, tom e diretrizes adequadas.
- **4 Quadrantes**: Escopo & Objetivo · Diretrizes Imperativas (UTILIZE / GARANTA / MANTENHA / ABSTENHA-SE) · Formatação & Design · Segregação de Contexto & Restrições.
- **Parâmetros recomendados do LLM** por domínio, com justificativa.
- **Exemplos rápidos** (quick-start) e atalho **Ctrl/Cmd + Enter**.
- **Exportar `.md`** e **copiar** o prompt para o clipboard.
- **Tema claro / Tokyo Midnight** com persistência (localStorage) e respeito a `prefers-color-scheme`.
- Estimativa de tokens, contagem de palavras/caracteres.
- **100% client-side** — sem backend, sem login, sem coleta de dados. Acessibilidade WCAG AA.

## 🛠️ Stack

Arquivo único `index.html` autocontido:

- **React 18** (UMD) + **Babel Standalone** (transpila o JSX no navegador)
- **Lucide React** (ícones, UMD)
- **Montserrat** (Google Fonts)
- Estilização via CSS variables (temas) e estilos inline — sem build step.

> **Nota técnica:** o build UMD do `lucide-react` lê o React de `window.react` (minúsculo).
> Por isso há um shim `window.react = window.React;` antes de carregá-lo — sem ele, os
> ícones ficam indefinidos e o app não renderiza.

## 🚀 Rodando localmente

Por ser estático, basta servir o diretório:

```bash
npx serve .
# ou
python -m http.server 4321
```

E abrir `http://localhost:4321`.

## 📦 Deploy

Hospedado como site estático na **Vercel** (sem build). Para republicar:

```bash
vercel deploy --prod
```

## 📄 Licença

MIT.
