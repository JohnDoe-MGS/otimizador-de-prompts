    import React, { useState, useEffect } from 'react';
    import { createRoot } from 'react-dom/client';
    import {
      Sparkles, FileText, Wand2, Copy, Check, Target, Zap,
      Palette, Shield, Loader2, RotateCcw, ArrowLeft,
      Lightbulb, AlertCircle, Layers, Sun, Moon, Download,
      Cpu, Thermometer, Brain, Sliders, Hash, Coins, Terminal, Bot, BookOpen, ExternalLink,
      Globe, Users, Box, ClipboardCopy
    } from 'lucide-react';

    // ─── EXEMPLOS RÁPIDOS ─────────────────────────────────────────
    const SAMPLES = [
      { label: 'Código',    text: 'criar um app react de lista de tarefas com filtro por status e persistência local' },
      { label: 'Redação',   text: 'escrever um artigo de blog sobre produtividade para profissionais remotos, tom casual' },
      { label: 'Análise',   text: 'analisar os dados de churn do último trimestre e comparar com as metas em uma tabela' },
      { label: 'Marketing', text: 'campanha de anúncios para o lançamento de um curso online de finanças pessoais' },
      { label: 'Jurídico',  text: 'minutar uma cláusula de confidencialidade para contrato de prestação de serviços' },
      { label: 'Claude Code', text: 'criar um arquivo CLAUDE.md com padrões de código, comandos de build e checklist de revisão para um projeto Next.js' },
    ];

    // ─── MOTOR DE OTIMIZAÇÃO ──────────────────────────────────────
    function buildOptimized(raw) {
      const text = raw.trim();
      const detect = {
        code:      /\b(c[oó]digo|programa[rç]?|app|aplicativo|site|website|react|python|javascript|html|css|api|backend|frontend|software|sistema|componente|fun[cç][aã]o)\b/i.test(text),
        legal:     /\b(jur[ií]dic|legal|contrato|cl[aá]usula|clausula|peti[cç][aã]o|processu|advog|lei|legisla|compliance|lgpd|regulat[oó]ri|minut[ae]r)\b/i.test(text),
        marketing: /\b(marketing|an[uú]ncio|ads?|campanha|seo|tr[aá]fego|funil|lead|engajamento|convers[aã]o|redes? sociais|instagram|tiktok|branding)\b/i.test(text),
        writing:   /\b(escrev|reda[cç][aã]o|texto|artigo|blog|post|email|copy|conte[uú]d|narrat|livro|cap[ií]tulo)\b/i.test(text),
        analysis:  /\b(analis|avali|pesquis|compar|estud|relat[oó]ri|m[eé]tri|kpi|dashboard)\b/i.test(text),
        creative:  /\b(criativ|design|arte|ilustr|imagem|estilo|visual|logo|marca|ux|ui)\b/i.test(text),
        data:      /\b(dados|tabela|excel|planilha|gr[aá]fico|chart|csv|sql|estat[ií]stic)\b/i.test(text),
        strategy:  /\b(estrat[eé]g|plano|planejam|roadmap|neg[oó]ci|consultori|mercado)\b/i.test(text),
        teaching:  /\b(did[aá]t|ensin|educ|explic|tutorial|aprend|curso|aula)\b/i.test(text),
      };
      let persona = '[DADO A SER INFORMADO]: especialidade exata desejada', domain = 'genérico';
      if (detect.code)          { persona = 'Engenheiro de Software Sênior com domínio em arquitetura limpa e padrões de projeto'; domain = 'code'; }
      else if (detect.legal)    { persona = 'Advogado Sênior com domínio em redação técnica e análise normativa'; domain = 'legal'; }
      else if (detect.marketing){ persona = 'Estrategista de Marketing Sênior com foco em performance e copywriting'; domain = 'marketing'; }
      else if (detect.creative) { persona = 'Diretor Criativo Sênior com foco em design contemporâneo'; domain = 'creative'; }
      else if (detect.writing)  { persona = 'Redator Profissional com domínio em comunicação persuasiva'; domain = 'writing'; }
      else if (detect.teaching) { persona = 'Educador Sênior especializado em pedagogia progressiva'; domain = 'teaching'; }
      else if (detect.analysis) { persona = 'Analista Sênior com formação em pensamento crítico'; domain = 'analysis'; }
      else if (detect.data)     { persona = 'Cientista de Dados Sênior com domínio em análise estatística'; domain = 'data'; }
      else if (detect.strategy) { persona = 'Consultor Estratégico Sênior com visão sistêmica'; domain = 'strategy'; }

      let tom = '[DADO A SER INFORMADO]: tom desejado (formal, casual, técnico, persuasivo, etc.)';
      if (/formal|profissional|corporativ|s[eé]rio/i.test(text))      tom = 'Formal e técnico, com terminologia precisa';
      else if (/casual|amig[aá]vel|descontra[ií]d|leve/i.test(text))  tom = 'Casual e acessível, sem perder a clareza';
      else if (/persuasiv|vend|conver|cta/i.test(text))              tom = 'Persuasivo e orientado à ação';
      else if (/did[aá]t|ensin|educ|explic/i.test(text))             tom = 'Didático, progressivo e centrado no aprendizado';

      const estrutura = [];
      if (/markdown/i.test(text))          estrutura.push('Markdown semântico com hierarquia clara');
      if (/lista|bullet|t[oó]pic/i.test(text)) estrutura.push('Listas hierárquicas para enumerações');
      if (/tabela/i.test(text))            estrutura.push('Tabelas para dados comparativos');
      if (/json/i.test(text))              estrutura.push('Saída em JSON estritamente válido');
      if (/c[oó]digo|snippet/i.test(text)) estrutura.push('Blocos de código devidamente delimitados');
      if (!estrutura.length)               estrutura.push('Markdown semântico com hierarquia clara (H1, H2, H3)');

      const u = [], g = [], m = [], a = [];
      if (detect.code)      { u.push('Padrões de Clean Code e princípios SOLID','Nomes descritivos e documentação concisa'); g.push('o código seja executável, testável e legível'); m.push('coesão modular e baixo acoplamento'); a.push('introduzir dependências externas desnecessárias'); }
      if (detect.legal)     { u.push('Terminologia jurídica precisa e citação normativa quando aplicável'); g.push('aderência à legislação vigente e à praxe forense'); m.push('estrutura formal (fundamentação, pedido e fecho)'); a.push('emitir aconselhamento conclusivo sem ressalva de revisão por profissional habilitado'); }
      if (detect.marketing) { u.push('Gatilhos psicológicos, prova social e múltiplas variações de headline/CTA'); g.push('alinhamento com a persona e a etapa do funil'); m.push('proposta de valor clara e mensurável'); a.push('promessas exageradas, sensacionalistas ou não comprováveis'); }
      if (detect.writing)   { u.push('Estrutura AIDA (Atenção, Interesse, Desejo, Ação)'); g.push('coerência argumentativa do início ao fim'); m.push('voz ativa, frases curtas e parágrafos respiráveis'); a.push('jargão excessivo, redundâncias e clichês'); }
      if (detect.analysis)  { u.push('Frameworks reconhecidos (SWOT, PESTEL, 5 Forças, etc.)'); g.push('citação de fontes verificáveis quando aplicável'); m.push('imparcialidade na exposição dos dados'); a.push('afirmações sem base lógica ou empírica'); }
      if (detect.creative)  { u.push('Princípios de design visual (hierarquia, contraste, ritmo)'); g.push('originalidade conceitual em cada entregável'); m.push('consistência estética e identidade visual'); a.push('reprodução literal de referências sem reinterpretação'); }
      if (detect.data)      { u.push('Métodos estatísticos rigorosos e validação cruzada'); g.push('transparência metodológica em cada conclusão'); m.push('rastreabilidade dos dados desde a fonte'); a.push('extrapolações além da amostra disponível'); }
      if (detect.teaching)  { u.push('Analogias progressivas do simples ao complexo'); g.push('exemplos concretos para cada conceito abstrato'); m.push('vocabulário acessível ao nível do aprendiz'); a.push('saltos lógicos sem ponte conceitual prévia'); }
      if (!u.length) { u.push('Linguagem clara, objetiva e tecnicamente precisa','Estrutura lógica de raciocínio passo a passo'); }
      if (!g.length) { g.push('todas as instruções sejam executadas integralmente','o entregável seja autocontido'); }
      if (!m.length) { m.push('consistência terminológica ao longo de toda a resposta','foco estrito no escopo definido'); }
      if (!a.length) { a.push('inventar fatos, dados, números ou referências ausentes','introduzir disclaimers genéricos não solicitados'); }

      // Defaults sugeridos por domínio (preenchem o prompt; o usuário revisa ao final)
      const D = {
        code:      { resultado:'Código-fonte funcional + breve explicação de uso', comprimento:'O necessário; sem código morto', publico:'Pessoa desenvolvedora', profundidade:'Técnica (sênior)', referencias:'Stack e versões em uso', criterios:'Compila, passa nos testes e segue os padrões' },
        legal:     { resultado:'Minuta/parecer em texto formatado', comprimento:'Conforme a praxe da peça', publico:'Profissional do Direito', profundidade:'Técnica-jurídica', referencias:'Legislação e fatos do caso', criterios:'Fundamentação correta e revisão por advogado habilitado' },
        marketing: { resultado:'Peça de copy com 3 variações de headline/CTA', comprimento:'Adequado ao canal', publico:'Cliente-alvo da campanha', profundidade:'Acessível e persuasiva', referencias:'Produto, oferta e persona', criterios:'Clareza da proposta de valor e CTA mensurável' },
        creative:  { resultado:'Conceito criativo + descrição executável', comprimento:'Conciso e inspirador', publico:'Equipe de criação/cliente', profundidade:'Conceitual', referencias:'Marca e referências visuais', criterios:'Originalidade e coerência com a identidade' },
        writing:   { resultado:'Texto final pronto para publicação', comprimento:'Adequado ao formato', publico:'Leitor-alvo do conteúdo', profundidade:'Equilibrada', referencias:'Tema, fontes e tom', criterios:'Coesão, fluência e ausência de clichês' },
        analysis:  { resultado:'Análise estruturada com conclusões', comprimento:'Suficiente para sustentar as conclusões', publico:'Tomador de decisão', profundidade:'Analítica', referencias:'Dados e período analisado', criterios:'Conclusões baseadas em evidências citáveis' },
        data:      { resultado:'Tabela/relatório com método explícito', comprimento:'Objetivo', publico:'Time de dados/gestão', profundidade:'Quantitativa', referencias:'Dataset e dicionário de dados', criterios:'Reprodutibilidade e rastreabilidade' },
        strategy:  { resultado:'Plano de ação com etapas e prazos', comprimento:'Executivo', publico:'Liderança/stakeholders', profundidade:'Estratégica', referencias:'Contexto de negócio e metas', criterios:'Viabilidade e alinhamento às metas' },
        teaching:  { resultado:'Material didático com exemplos', comprimento:'Progressivo', publico:'Aprendiz iniciante/intermediário', profundidade:'Didática', referencias:'Nível atual e objetivo de aprendizado', criterios:'Compreensão verificável por exemplos' },
        'genérico':{ resultado:'Entregável textual estruturado', comprimento:'Adequado à tarefa', publico:'Público geral', profundidade:'Média', referencias:'Contexto e objetivo da tarefa', criterios:'Atende ao pedido de forma completa' },
      };
      const def = D[domain] || D['genérico'];

      return { original: text, persona, tom, estrutura, utilize: u, garanta: g, mantenha: m, abstenha: a, domain,
               resultado: def.resultado, comprimento: def.comprimento, publico: def.publico,
               profundidade: def.profundidade, referencias: def.referencias, criterios: def.criterios };
    }

    // ─── RECOMENDAÇÕES LLM ────────────────────────────────────────
    function getRecommendations(domain) {
      const map = {
        code:      { modelo:'Claude Opus 4.8 (alta complexidade) ou Sonnet 4.6', temperatura:'0.2 – 0.3', topP:'0.9', maxTokens:'8.192 – 16.384', raciocinio:'Adaptativo · effort "high"', justificativa:'Tarefas de código exigem precisão sintática. Temperatura baixa minimiza alucinações; o Opus 4.8 usa raciocínio adaptativo (parâmetro effort, padrão "high") para planejar a arquitetura.' },
        legal:     { modelo:'Claude Opus 4.8', temperatura:'0.1 – 0.3', topP:'0.85', maxTokens:'8.192 – 16.384', raciocinio:'Adaptativo · effort "high"', justificativa:'Textos jurídicos exigem precisão terminológica e rastreabilidade. Temperatura baixa reduz alucinação normativa; o raciocínio adaptativo aprofunda a argumentação.' },
        marketing: { modelo:'Claude Sonnet 4.6 ou Opus 4.8', temperatura:'0.6 – 0.8', topP:'0.95', maxTokens:'2.048 – 4.096', raciocinio:'Padrão', justificativa:'Copy de marketing demanda criatividade persuasiva e variação de ângulos. Temperatura alta amplia as opções de headline e CTA.' },
        creative:  { modelo:'Claude Opus 4.8', temperatura:'0.7 – 0.9', topP:'0.95', maxTokens:'4.096', raciocinio:'Padrão', justificativa:'Criatividade demanda exploração ampla do espaço latente. Temperatura alta amplia o leque expressivo.' },
        writing:   { modelo:'Claude Sonnet 4.6 ou Opus 4.8', temperatura:'0.5 – 0.7', topP:'0.9', maxTokens:'2.048 – 4.096', raciocinio:'Extended thinking (Sonnet)', justificativa:'Redação equilibra rigor e fluência. Temperatura mediana mantém coesão sem engessar o estilo.' },
        analysis:  { modelo:'Claude Opus 4.8', temperatura:'0.3 – 0.5', topP:'0.9', maxTokens:'8.192 – 16.384', raciocinio:'Adaptativo · effort "high"', justificativa:'Análises críticas exigem encadeamento lógico longo. O raciocínio adaptativo qualifica as conclusões.' },
        data:      { modelo:'Claude Sonnet 4.6', temperatura:'0.0 – 0.2', topP:'0.85', maxTokens:'4.096', raciocinio:'Extended thinking', justificativa:'Dados exigem reprodutibilidade. Temperatura zero garante determinismo nas inferências numéricas.' },
        strategy:  { modelo:'Claude Opus 4.8', temperatura:'0.4 – 0.6', topP:'0.9', maxTokens:'8.192 – 16.384', raciocinio:'Adaptativo · effort "high"', justificativa:'Estratégia combina raciocínio sistêmico e exploração de cenários. Temperatura moderada equilibra criatividade e rigor.' },
        teaching:  { modelo:'Claude Haiku 4.5 ou Sonnet 4.6', temperatura:'0.4 – 0.6', topP:'0.9', maxTokens:'2.048 – 4.096', raciocinio:'Extended thinking', justificativa:'Conteúdo didático precisa ser previsível mas ilustrativo. O Haiku 4.5 entrega baixa latência e custo; a temperatura moderada favorece analogias variadas.' },
        'genérico':{ modelo:'Claude Sonnet 4.6', temperatura:'0.5 – 0.7', topP:'0.9', maxTokens:'2.048 – 4.096', raciocinio:'Padrão', justificativa:'Configuração balanceada para tarefas gerais sem perfil específico identificado.' },
      };
      return map[domain] || map['genérico'];
    }

    const DOMAIN_LABELS = {
      code:'Código', legal:'Jurídico', marketing:'Marketing', creative:'Criativo',
      writing:'Redação', analysis:'Análise', data:'Dados', strategy:'Estratégia',
      teaching:'Didático', 'genérico':'Genérico',
    };

    // ─── GUIA CLAUDE & CLAUDE CODE (dados oficiais, mai/2026) ─────
    // Fonte: platform.claude.com/docs (modelos) e code.claude.com/docs (Claude Code)
    const CLAUDE_MODELS = [
      { nome:'Claude Opus 4.8',  tier:'Opus',   melhor:'Raciocínio complexo e coding agêntico de longo horizonte', contexto:'1M tokens', saida:'128k', cutoff:'jan/2026', preco:'US$ 5 / 25 por MTok', raciocinio:'Adaptativo (parâmetro effort, padrão "high")' },
      { nome:'Claude Sonnet 4.6', tier:'Sonnet', melhor:'Melhor equilíbrio entre velocidade e inteligência',        contexto:'1M tokens', saida:'64k',  cutoff:'ago/2025', preco:'US$ 3 / 15 por MTok', raciocinio:'Extended thinking + adaptativo' },
      { nome:'Claude Haiku 4.5',  tier:'Haiku',  melhor:'O mais rápido, com inteligência quase de fronteira',        contexto:'200k tokens', saida:'64k', cutoff:'fev/2025', preco:'US$ 1 / 5 por MTok',  raciocinio:'Extended thinking' },
    ];

    const CLAUDE_CODE = [
      { titulo:'CLAUDE.md + memória automática', desc:'Arquivo markdown no raiz do projeto, lido no início de cada sessão (padrões de código, arquitetura, libs, checklists). O Claude ainda salva aprendizados — comandos de build, insights de debug — entre sessões automaticamente.' },
      { titulo:'Skills e comandos "/"',          desc:'Empacote fluxos repetíveis e compartilháveis pelo time, como /review-pr ou /deploy-staging.' },
      { titulo:'Hooks',                          desc:'Rodam comandos shell antes/depois de ações do Claude — auto-format após cada edição, lint antes do commit.' },
      { titulo:'MCP (Model Context Protocol)',   desc:'Padrão aberto para conectar o Claude a fontes externas: Google Drive, Jira, Slack ou ferramentas próprias.' },
      { titulo:'Subagentes e times de agentes',  desc:'Vários agentes em paralelo coordenados por um líder; background agents para sessões simultâneas; Agent SDK para agentes 100% customizados.' },
      { titulo:'Roda em todo lugar',             desc:'Terminal (CLI), VS Code, JetBrains, app Desktop, navegador (claude.ai/code) e iOS — todos compartilham CLAUDE.md, settings e servidores MCP.' },
      { titulo:'Automação e agendamento',        desc:'Routines (infra da Anthropic, via /schedule), tarefas agendadas no Desktop e /loop para repetir um prompt na sessão. Composável no estilo Unix (pipe, CI/CD).' },
    ];

    const CLAUDE_TIPS = [
      'Seja explícito e imperativo: diga exatamente o que fazer — é a filosofia deste app.',
      'Dê contexto e o "porquê": explicar a motivação melhora a aderência às instruções.',
      'Use tags XML (<contexto>, <exemplo>, <regras>) para delimitar seções do prompt.',
      'Atribua um papel/persona via system prompt.',
      'Forneça exemplos (multishot) do formato de saída desejado.',
      'Peça raciocínio passo a passo em tarefas complexas (thinking).',
      'Encadeie prompts: divida tarefas grandes em etapas verificáveis.',
    ];

    // ─── GUIAS POR ECOSSISTEMA (4 plataformas Claude) ─────────────
    const PLATFORMS = [
      {
        id:'geral', nome:'Claude Geral / API', icon:'globe',
        melhor:'Tarefas pontuais, prompts de sistema e integrações via API.',
        anatomia:[
          'Papel no system prompt (role)',
          'Contexto + o "porquê" da tarefa',
          'Instruções numeradas e afirmativas',
          'Exemplos (multishot, 3–5)',
          'Dados/documento em tag própria',
          'Espaço de raciocínio (thinking)',
          'Formato de saída explícito',
        ],
        template:`<role>Você é um {ESPECIALISTA}.</role>

<context>
{CONTEXTO} — e por que isto importa: {MOTIVAÇÃO}.
</context>

<instructions>
1. {PASSO 1}
2. {PASSO 2}
3. {PASSO 3}
</instructions>

<examples>
  <example>
    <input>{ENTRADA EXEMPLO}</input>
    <output>{SAÍDA IDEAL}</output>
  </example>
</examples>

<data>
{DADOS OU DOCUMENTO A PROCESSAR}
</data>

<thinking>
Raciocine passo a passo antes de responder.
</thinking>

<output_format>
{markdown | JSON válido | tabela}
</output_format>`,
        porque:'As tags XML impedem que o modelo confunda instruções, contexto e dados — o maior ganho de confiabilidade em prompts longos. O papel vai no system prompt (afeta tom e domínio); multishot é a técnica de maior impacto isolado. Em contexto longo (≥ dezenas de milhares de tokens), coloque os documentos no TOPO, antes das instruções.',
      },
      {
        id:'cowork', nome:'Claude Cowork', icon:'users',
        melhor:'Projetos multi-etapa autônomos: pesquisa, análise e criação de arquivos.',
        anatomia:[
          'Objetivo = entregável final concreto',
          'Critérios de sucesso mensuráveis',
          'Recursos (arquivos + conhecimento)',
          'Restrições e guardrails',
          'Plano antes de executar + checkpoints',
          'Formato dos arquivos de saída',
        ],
        template:`<objetivo>
{ENTREGÁVEL FINAL CONCRETO, ex.: "relatório .docx de 10 páginas"}
</objetivo>

<success_criteria>
- {CRITÉRIO MENSURÁVEL 1}
- {CRITÉRIO MENSURÁVEL 2}
</success_criteria>

<resources>
- Arquivos: {LISTA DE ANEXOS}
- Conhecimento do projeto: {O QUE CONSULTAR}
</resources>

<constraints>
- NÃO {LIMITE}.
- Peça confirmação antes de {AÇÃO IRREVERSÍVEL}.
</constraints>

<plan_then_execute>
Primeiro apresente um plano em etapas. Após minha aprovação,
execute de ponta a ponta e me atualize a cada marco.
</plan_then_execute>

<deliverable_format>
{ESTRUTURA E FORMATO DOS ARQUIVOS ENTREGUES}
</deliverable_format>`,
        porque:'O Cowork executa tarefas longas de forma autônoma (minutos+), então o prompt deve ser orientado a ENTREGÁVEL + critérios de sucesso, não a micro-instruções conversacionais. Definir "plano antes de executar" e checkpoints implementa o padrão "delegar e conferir". Recursos e conhecimento do projeto ancoram a saída em dados reais, reduzindo alucinação.',
      },
      {
        id:'artifacts', nome:'Claude Artifacts', icon:'box',
        melhor:'Apps/UI autocontidos: React, HTML, SVG, diagramas Mermaid.',
        anatomia:[
          'Tipo do artefato + stack',
          'Restrição self-contained (1 arquivo)',
          'Bibliotecas aprovadas a usar',
          'Funcionalidades (lista)',
          'Layout e estilo (Tailwind)',
          'Recursos com IA via window.claude.complete',
          'Critério de aceite',
        ],
        template:`<artifact_spec>
  <type>{React | HTML | SVG | Mermaid}</type>
  <self_contained>
    Tudo em um único arquivo; sem rede externa nem chaves de API;
    apenas bibliotecas aprovadas.
  </self_contained>
  <libraries>{React, Tailwind, lucide-react, recharts}</libraries>
</artifact_spec>

<functionality>
- {FUNÇÃO 1}
- {FUNÇÃO 2}
</functionality>

<design>
- Layout: {DESCRIÇÃO}
- Estilo: Tailwind, paleta {TEMA}
</design>

<ai_features optional="true">
Use window.claude.complete(prompt) para {RECURSO INTELIGENTE}.
</ai_features>

<acceptance>{COMO SABER QUE ESTÁ PRONTO}</acceptance>`,
        porque:'O sandbox de Artifacts roda um ÚNICO arquivo, sem rede arbitrária nem segredos, só com libs aprovadas + Tailwind. Declarar tipo/stack e a restrição self-contained evita que o modelo gere código que não executa no preview. Para inteligência embutida, window.claude.complete é a única ponte de IA. Prefira estado em memória (useState) — armazenamento persistente pode ser restrito no sandbox.',
      },
      {
        id:'code', nome:'Claude Code (CLI)', icon:'terminal',
        melhor:'Engenharia agêntica no repositório: features, bugs, testes, refactor.',
        anatomia:[
          'CLAUDE.md = contexto permanente do repo',
          'Explore: ler arquivos, sem codar ainda',
          'Plan: "think"/"ultrathink" + plano',
          'Code: implementar e verificar',
          'Commit: testes, PR, changelog',
        ],
        template:`# CLAUDE.md (raiz do repositório)
## Comandos
- build: {CMD}
- test: {CMD}
## Padrões de código
- {CONVENÇÕES}
## IMPORTANTE
- YOU MUST rodar os testes antes de commitar.

# -- Prompt da tarefa --
<task>{O QUE CONSTRUIR OU CORRIGIR}</task>

<explore>
Leia {ARQUIVOS/PASTAS} e NÃO escreva código ainda.
</explore>

<plan>
Think hard e proponha um plano em etapas para eu aprovar.
</plan>

<implement>
Após aprovação, implemente e verifique a cada passo.
Escreva os testes primeiro (TDD); confirme que falham; então implemente.
</implement>`,
        porque:'O CLAUDE.md é injetado automaticamente no contexto a cada sessão (comandos, padrões, "YOU MUST" para regras críticas). O fluxo explore→plan→code→commit impede que o agente codifique cedo demais. As palavras "think < think hard < think harder < ultrathink" aumentam o orçamento de raciocínio. Use /clear entre tarefas para evitar poluição da janela de contexto e subagentes para investigação em paralelo.',
      },
    ];

    const HYPERPARAMS = [
      { tarefa:'Código / refactor',          temp:'0.0 – 0.2', topP:'0.9',  max:'8k – 16k',  stop:'``` · \\n\\n##' },
      { tarefa:'Saída JSON estrita',          temp:'0.0',       topP:'0.8',  max:'p/ schema', stop:'} · ```' },
      { tarefa:'Análise / extração de dados', temp:'0.0 – 0.2', topP:'0.85', max:'4k',        stop:'\\n\\n' },
      { tarefa:'Raciocínio / estratégia',     temp:'0.3 – 0.5', topP:'0.9',  max:'8k – 16k',  stop:'—' },
      { tarefa:'Redação técnica / jurídica',  temp:'0.2 – 0.4', topP:'0.85', max:'4k – 8k',   stop:'—' },
      { tarefa:'Copy / criativo',             temp:'0.7 – 1.0', topP:'0.95', max:'2k – 4k',   stop:'—' },
      { tarefa:'Classificação / rótulos',     temp:'0.0',       topP:'0.7',  max:'64 – 256',  stop:'\\n' },
    ];

    // ─── SERIALIZAÇÃO MARKDOWN ────────────────────────────────────
    function nivelCriatividade(temp) {
      const n = parseFloat(String(temp).replace(',', '.'));
      if (isNaN(n)) return 'média';
      if (n <= 0.3) return 'baixa (determinística)';
      if (n <= 0.6) return 'média (equilibrada)';
      return 'alta (exploratória)';
    }

    function toMarkdown(d) {
      const j = arr => arr.join('; ');
      const r = getRecommendations(d.domain);
      return `# PROMPT IMPERATIVO

**Papel:** ${d.persona}
**Tarefa:** ${d.original}
**Resultado:** ${d.resultado}

## Diretrizes
- **Utilize:** ${j(d.utilize)}
- **Garanta:** ${j(d.garanta)}
- **Mantenha:** ${j(d.mantenha)}
- **Evite:** ${j(d.abstenha)}

## Formato
- **Saída:** ${j(d.estrutura)}
- **Tom:** ${d.tom}
- **Comprimento:** ${d.comprimento} · **Idioma:** PT-BR
- **Criatividade:** ${nivelCriatividade(r.temperatura)} · **Temperatura:** ${r.temperatura} · **Top-p:** ${r.topP}

## Contexto
- **Público:** ${d.publico} · **Profundidade:** ${d.profundidade}
- **Referências:** ${d.referencias}
- **Critérios:** ${d.criterios}
- **Restrições:** não inventar dados/PII; não exceder o escopo; em caso de ambiguidade, listar suposições antes de responder.

> _Valores sugeridos — revise persona, resultado, público, referências e critérios antes de enviar._`;
    }

    // ─── COMPONENTE PRINCIPAL ─────────────────────────────────────
    function PromptOptimizer() {
      const [theme, setTheme] = useState(() => {
        try {
          const saved = localStorage.getItem('oip-theme');
          if (saved === 'light' || saved === 'dark') return saved;
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        } catch { return 'light'; }
      });
      const [activeTab, setActiveTab]     = useState('input');
      const [rawInput, setRawInput]       = useState('');
      const [optimized, setOptimized]     = useState(null);
      const [isProcessing, setProcessing] = useState(false);
      const [copied, setCopied]           = useState(false);
      const [exported, setExported]       = useState(false);

      const isDark = theme === 'dark';

      // Persiste o tema e sincroniza a cor da barra do navegador
      useEffect(() => {
        try { localStorage.setItem('oip-theme', theme); } catch {}
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', isDark ? '#1a1b26' : '#fafafa');
      }, [theme, isDark]);

      const handleOptimize = () => {
        if (!rawInput.trim() || isProcessing) return;
        setProcessing(true);
        setTimeout(() => { setOptimized(buildOptimized(rawInput)); setProcessing(false); setActiveTab('output'); }, 650);
      };

      const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); handleOptimize(); }
      };

      const handleCopy = async () => {
        if (!optimized) return;
        const md = toMarkdown(optimized);
        try { await navigator.clipboard.writeText(md); }
        catch { const t = document.createElement('textarea'); t.value = md; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch {} document.body.removeChild(t); }
        setCopied(true); setTimeout(() => setCopied(false), 2000);
      };

      const handleExport = () => {
        if (!optimized) return;
        const md = toMarkdown(optimized);
        const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `prompt-otimizado-${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.md`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        setExported(true); setTimeout(() => setExported(false), 2000);
      };

      const handleReset = () => { setRawInput(''); setOptimized(null); setCopied(false); setExported(false); setActiveTab('input'); };
      const recs = optimized ? getRecommendations(optimized.domain) : null;

      const wordCount = rawInput.trim() ? rawInput.trim().split(/\s+/).length : 0;
      const tokenEst  = optimized ? Math.round(toMarkdown(optimized).length / 4) : 0;

      const CSS = `
        .font-mont { font-family:'Montserrat',system-ui,-apple-system,sans-serif; }
        .theme-light {
          --bg:#fafafa; --card:rgba(255,255,255,0.82); --card-i:rgba(250,250,250,0.82);
          --brd:#d4d4d8; --brd-s:#e4e4e7; --tx:#0a0a0b; --tx-m:#3f3f46; --tx-d:#52525b;
          --af:#f59e0b; --at:#ea580c; --as:#b45309; --abg:rgba(245,158,11,.10); --abr:rgba(245,158,11,.32);
          --ibg:#fff; --sb:#f4f4f5; --sbh:#e4e4e7; --st:#27272a; --sbr:#c4c4c8;
          --amb1:rgba(245,158,11,.10); --amb2:rgba(234,88,12,.10);
          --du:#9a4a08; --dg:#b03309; --dm:#854d0e; --da:#a8102f;
          --ok-bg:rgba(34,197,94,.14); --ok-br:rgba(34,197,94,.40); --ok:#15803d;
        }
        .theme-dark {
          --bg:#1a1b26; --card:rgba(36,40,59,.62); --card-i:rgba(26,27,38,.62);
          --brd:#414868; --brd-s:#2f3449; --tx:#e6ebff; --tx-m:#c4ccf0; --tx-d:#8a92c0;
          --af:#7aa2f7; --at:#bb9af7; --as:#9ab4ff; --abg:rgba(122,162,247,.14); --abr:rgba(122,162,247,.38);
          --ibg:rgba(26,27,38,.7); --sb:rgba(36,40,59,.7); --sbh:rgba(36,40,59,.95); --st:#c4ccf0; --sbr:#414868;
          --amb1:rgba(122,162,247,.10); --amb2:rgba(187,154,247,.10);
          --du:#9ab4ff; --dg:#b5e08a; --dm:#f0c178; --da:#ff8fa3;
          --ok-bg:rgba(158,206,106,.16); --ok-br:rgba(158,206,106,.40); --ok:#b5e08a;
        }
        .tr { transition: background-color 250ms,color 250ms; }
        .qf { animation: qfade .45s ease-out both; }
        .qf:nth-child(1){animation-delay:0ms} .qf:nth-child(2){animation-delay:70ms}
        .qf:nth-child(3){animation-delay:140ms} .qf:nth-child(4){animation-delay:210ms}
        .qf:nth-child(5){animation-delay:280ms}
        @keyframes qfade { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .spin { animation: spin .8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        textarea:focus { outline: none; }
        .chip-btn:hover { border-color: var(--as) !important; color: var(--as) !important; }
        button:focus-visible, textarea:focus-visible, a:focus-visible {
          outline: 2px solid var(--as); outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .qf, .spin { animation: none !important; }
          .tr { transition: none !important; }
        }
      `;

      return (
        <>
          <style>{CSS}</style>
          <div className={`font-mont tr ${isDark ? 'theme-dark' : 'theme-light'}`}
               style={{ minHeight:'100vh', background:'var(--bg)', color:'var(--tx)', overflowX:'hidden', position:'relative' }}>

            {/* Ambient */}
            <div aria-hidden="true" style={{ position:'fixed', inset:0, pointerEvents:'none', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:'-10rem', right:'-10rem', width:'32rem', height:'32rem', borderRadius:'9999px', filter:'blur(80px)', background:'var(--amb1)' }} />
              <div style={{ position:'absolute', bottom:'-10rem', left:'-10rem', width:'32rem', height:'32rem', borderRadius:'9999px', filter:'blur(80px)', background:'var(--amb2)' }} />
            </div>

            <main style={{ position:'relative', maxWidth:'56rem', margin:'0 auto', padding:'2rem 1rem' }}>

              {/* HEADER */}
              <header style={{ marginBottom:'2rem', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'0.84rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.84rem' }}>
                  <div aria-hidden="true" style={{ width:'2.75rem', height:'2.75rem', borderRadius:'0.84rem', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(135deg,var(--af),var(--at))', boxShadow:'0 10px 30px -10px var(--af)', flexShrink:0 }}>
                    <Sparkles size={20} color="#fff" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h1 style={{ margin:0, fontSize:'1.25rem', fontWeight:600, letterSpacing:'-0.02em', lineHeight:1.2 }}>Otimizador Imperativo de Prompts</h1>
                    <div style={{ fontSize:'0.84rem', color:'var(--tx-m)' }}>Meta-Prompting Estruturado · 5 Seções</div>
                  </div>
                </div>
                <button onClick={() => setTheme(t => t==='light'?'dark':'light')}
                        aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro (Tokyo Midnight)'}
                        title={isDark ? 'Tema claro' : 'Tokyo Midnight'}
                        style={{ flexShrink:0, width:'2.5rem', height:'2.5rem', borderRadius:'0.84rem', border:'1px solid var(--brd)', background:'var(--card)', backdropFilter:'blur(8px)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--tx-m)', transition:'all 150ms' }}>
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </header>

              {/* TABS */}
              <div role="tablist" aria-label="Seções" style={{ display:'flex', gap:'0.25rem', padding:'0.25rem', marginBottom:'1.25rem', background:'var(--card)', border:'1px solid var(--brd)', borderRadius:'0.84rem', backdropFilter:'blur(8px)' }}>
                {[['input',<FileText size={16} />,'Entrada',false],['output',<Layers size={16} />,'Prompt',true],['claude',<Brain size={16} />,'Claude & Code',false]].map(([key,icon,label,needsOpt]) => {
                  const disabled = needsOpt && !optimized;
                  const selected = activeTab===key && !disabled;
                  return (
                    <button key={key} role="tab" aria-selected={selected} disabled={disabled}
                            onClick={() => { if (!disabled) setActiveTab(key); }}
                            style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', padding:'0.625rem 0.75rem', borderRadius:'0.5rem', border:'none', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily:'inherit', fontSize:'0.88rem', fontWeight:500, letterSpacing:'-0.01em', opacity: disabled ? 0.4 : 1, transition:'all 200ms', whiteSpace:'nowrap',
                              ...(selected
                                ? { background:`linear-gradient(to right,var(--af),var(--at))`, color:'#fff', boxShadow:'0 6px 20px -8px var(--af)' }
                                : { background:'transparent', color:'var(--tx-m)' }) }}>
                      {icon}{label}
                    </button>
                  );
                })}
              </div>

              {/* MAIN CARD */}
              <div style={{ background:'var(--card)', border:'1px solid var(--brd)', borderRadius:'1rem', padding:'1.5rem', backdropFilter:'blur(12px)', boxShadow: isDark ? '0 25px 50px -12px rgba(0,0,0,.5)' : '0 25px 50px -12px rgba(0,0,0,.08)' }}>

                {activeTab === 'claude' ? (
                  <ClaudeGuide />
                ) : activeTab === 'input' ? (
                  <>
                    <div style={{ marginBottom:'0.84rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'0.5rem' }}>
                      <label htmlFor="raw-input" style={{ fontSize:'0.875rem', fontWeight:500, letterSpacing:'-0.01em' }}>Sua ideia, comando ou rascunho</label>
                      <span style={{ fontSize:'0.84rem', color:'var(--tx-d)', fontVariantNumeric:'tabular-nums' }}>
                        {wordCount.toLocaleString('pt-BR')} palavras · {rawInput.length.toLocaleString('pt-BR')} caracteres
                      </span>
                    </div>

                    {/* Exemplos rápidos */}
                    <div style={{ marginBottom:'0.84rem', display:'flex', flexWrap:'wrap', gap:'0.375rem', alignItems:'center' }}>
                      <span style={{ fontSize:'0.84rem', color:'var(--tx-d)', display:'flex', alignItems:'center', gap:'0.25rem' }}><Sparkles size={12} />Exemplos:</span>
                      {SAMPLES.map((s,i) => (
                        <button key={i} className="chip-btn" onClick={() => setRawInput(s.text)}
                                style={{ fontSize:'0.84rem', padding:'0.25rem 0.625rem', borderRadius:'9999px', border:'1px solid var(--sbr)', background:'var(--sb)', color:'var(--tx-m)', cursor:'pointer', fontFamily:'inherit', fontWeight:500, transition:'all 150ms' }}>
                          {s.label}
                        </button>
                      ))}
                    </div>

                    <textarea id="raw-input" value={rawInput} onChange={e => setRawInput(e.target.value)} onKeyDown={handleKeyDown} spellCheck={false}
                              placeholder="Cole aqui um rascunho de comando, uma ideia solta ou um esboço caótico. Quanto mais contexto, melhor a otimização... (Ctrl+Enter para otimizar)"
                              onFocus={e => { e.target.style.borderColor='var(--as)'; e.target.style.boxShadow='0 0 0 3px var(--abg)'; }}
                              onBlur={e => { e.target.style.borderColor='var(--brd)'; e.target.style.boxShadow='none'; }}
                              style={{ width:'100%', height:'15rem', padding:'0.75rem 1rem', background:'var(--ibg)', border:'1px solid var(--brd)', borderRadius:'0.84rem', color:'var(--tx)', fontSize:'0.875rem', lineHeight:1.6, letterSpacing:'-0.01em', resize:'vertical', fontFamily:'inherit', transition:'border-color 200ms' }} />
                    <div style={{ marginTop:'1.25rem', display:'flex', flexWrap:'wrap', gap:'0.84rem' }}>
                      <button onClick={handleOptimize} disabled={!rawInput.trim() || isProcessing}
                              style={{ flex:1, minWidth:'12rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', padding:'0.75rem 1.25rem', background:`linear-gradient(to right,var(--af),var(--at))`, border:'none', borderRadius:'0.84rem', color:'#fff', fontFamily:'inherit', fontSize:'0.875rem', fontWeight:600, letterSpacing:'-0.01em', cursor: !rawInput.trim()||isProcessing ? 'not-allowed' : 'pointer', opacity: !rawInput.trim()||isProcessing ? 0.4 : 1, boxShadow:'0 10px 25px -10px var(--af)', transition:'opacity 200ms' }}>
                        {isProcessing ? <><Loader2 size={16} className="spin" />Estruturando...</> : <><Wand2 size={16} />Otimizar Diretrizes</>}
                      </button>
                      {rawInput && (
                        <button onClick={handleReset}
                                style={{ display:'flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.25rem', background:'var(--sb)', border:'1px solid var(--sbr)', borderRadius:'0.84rem', color:'var(--st)', fontFamily:'inherit', fontSize:'0.875rem', fontWeight:500, cursor:'pointer', transition:'background 200ms' }}>
                          <RotateCcw size={16} />Limpar
                        </button>
                      )}
                    </div>
                    <div style={{ marginTop:'1.25rem', padding:'0.875rem', background:'var(--abg)', border:'1px solid var(--abr)', borderRadius:'0.84rem', display:'flex', gap:'0.84rem' }}>
                      <Lightbulb size={18} style={{ color:'var(--as)', flexShrink:0, marginTop:'0.125rem' }} />
                      <p style={{ margin:0, fontSize:'0.84rem', color:'var(--tx-m)', lineHeight:1.6 }}>
                        <span style={{ color:'var(--as)', fontWeight:600 }}>Como funciona: </span>
                        O motor infere o domínio, atribui um papel e gera um prompt completo já <strong>pré-preenchido</strong> com valores sugeridos (marcados como <em>sugerido</em>). A seção final lista o que você deve <strong>revisar antes de enviar</strong>. Veja também os parâmetros recomendados do LLM.
                      </p>
                    </div>
                  </>
                ) : optimized ? (
                  <>
                    {/* Output toolbar */}
                    <div style={{ marginBottom:'1.25rem', display:'flex', flexWrap:'wrap', alignItems:'center', gap:'0.5rem', justifyContent:'space-between' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'0.84rem', flexWrap:'wrap' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                          <div aria-hidden="true" style={{ width:'0.5rem', height:'0.5rem', borderRadius:'9999px', background:'var(--ok)', animation:'qfade 1s ease infinite alternate' }} />
                          <span style={{ fontSize:'0.88rem', fontWeight:500 }}>Pronto e pré-preenchido · 5 seções</span>
                        </div>
                        <span title="Estimativa aproximada de tokens do prompt gerado" style={{ display:'flex', alignItems:'center', gap:'0.25rem', fontSize:'0.84rem', color:'var(--tx-d)', fontVariantNumeric:'tabular-nums' }}>
                          <Coins size={12} />~{tokenEst.toLocaleString('pt-BR')} tokens
                        </span>
                      </div>
                      <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap' }}>
                        <button onClick={handleExport}
                                style={{ display:'flex', alignItems:'center', gap:'0.375rem', padding:'0.5rem 0.875rem', borderRadius:'0.5rem', border:'1px solid var(--sbr)', background: exported ? 'var(--ok-bg)' : 'var(--sb)', color: exported ? 'var(--ok)' : 'var(--st)', fontFamily:'inherit', fontSize:'0.84rem', fontWeight:500, cursor:'pointer', transition:'all 200ms' }}>
                          {exported ? <><Check size={14} />Baixado</> : <><Download size={14} />Exportar .md</>}
                        </button>
                        <button onClick={handleCopy}
                                style={{ display:'flex', alignItems:'center', gap:'0.375rem', padding:'0.5rem 0.875rem', borderRadius:'0.5rem', border: copied ? '1px solid var(--ok-br)' : 'none', background: copied ? 'var(--ok-bg)' : `linear-gradient(to right,var(--af),var(--at))`, color: copied ? 'var(--ok)' : '#fff', fontFamily:'inherit', fontSize:'0.84rem', fontWeight:600, cursor:'pointer', boxShadow: copied ? 'none' : '0 6px 20px -8px var(--af)', transition:'all 200ms' }}>
                          {copied ? <><Check size={14} />Copiado!</> : <><Copy size={14} />Copiar Prompt</>}
                        </button>
                      </div>
                    </div>

                    {/* 4 Quadrantes */}
                    <div style={{ display:'flex', flexDirection:'column', gap:'0.84rem' }}>
                      <Quadrant num="1" icon={<Target size={14} />} title="Escopo e Objetivo Principal">
                        <Field label="Papel Atribuído">Atue como <span style={{ color:'var(--as)', fontWeight:500 }}>{optimized.persona}</span>.</Field>
                        <Field label="Ideia Original"><em style={{ color:'var(--tx-m)' }}>"{optimized.original}"</em></Field>
                        <Field label="Resultado Esperado">{optimized.resultado} <PreFill /></Field>
                      </Quadrant>
                      <Quadrant num="2" icon={<Zap size={14} />} title="Diretrizes Imperativas de Comportamento">
                        <DBlock verb="UTILIZE"     items={optimized.utilize} cssVar="--du" />
                        <DBlock verb="GARANTA"     items={optimized.garanta} cssVar="--dg" />
                        <DBlock verb="MANTENHA"    items={optimized.mantenha} cssVar="--dm" />
                        <DBlock verb="ABSTENHA-SE" items={optimized.abstenha} cssVar="--da" />
                      </Quadrant>
                      <Quadrant num="3" icon={<Palette size={14} />} title="Regras de Formatação e Design Visual">
                        <Field label="Estrutura de Saída">
                          <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:'0.25rem' }}>
                            {optimized.estrutura.map((e,i) => <li key={i} style={{ display:'flex', gap:'0.5rem' }}><span style={{ color:'var(--as)' }}>•</span>{e}</li>)}
                          </ul>
                        </Field>
                        <Field label="Tom">{optimized.tom.startsWith('[DADO') ? <span>Neutro-profissional <PreFill /></span> : optimized.tom}</Field>
                        <Field label="Comprimento">{optimized.comprimento} <PreFill /></Field>
                        <Field label="Idioma">Português (Brasil), salvo indicação contrária.</Field>
                      </Quadrant>
                      <Quadrant num="4" icon={<Shield size={14} />} title="Segregação de Contexto e Restrições">
                        <Field label="Restrições Críticas">
                          <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:'0.375rem' }}>
                            <li style={{ display:'flex', gap:'0.5rem' }}><span style={{ color:'var(--da)', fontWeight:700 }}>×</span><span>NÃO inventar dados sensíveis ou informações pessoais.</span></li>
                            <li style={{ display:'flex', gap:'0.5rem' }}><span style={{ color:'var(--da)', fontWeight:700 }}>×</span><span>NÃO ultrapassar o escopo definido.</span></li>
                            <li style={{ display:'flex', gap:'0.5rem' }}><span style={{ color:'var(--as)', fontWeight:700 }}>!</span><span>SE houver ambiguidade, listar suposições antes de responder.</span></li>
                          </ul>
                        </Field>
                        <Field label="Variáveis Externas (pré-preenchidas)">
                          <div style={{ display:'flex', flexDirection:'column', gap:'0.375rem' }}>
                            {[['Público-alvo',optimized.publico],['Profundidade',optimized.profundidade],['Referências/amostras',optimized.referencias],['Critérios de sucesso',optimized.criterios]].map(([k,v],i) => (
                              <div key={i}><span style={{ color:'var(--tx-d)', fontWeight:600 }}>{k}: </span><span style={{ color:'var(--tx)' }}>{v}</span></div>
                            ))}
                          </div>
                        </Field>
                      </Quadrant>
                      <Quadrant num="5" icon={<Check size={14} />} title="Verificação Final (revise antes de enviar)">
                        <Field label="Campos pré-preenchidos — confirme ou ajuste">
                          <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:'0.375rem' }}>
                            {['Papel/persona corresponde à especialidade desejada','Resultado esperado e comprimento estão corretos','Público-alvo e profundidade técnica conferem','Referências/amostras reais foram anexadas','Critérios de sucesso refletem seu "pronto"'].map((c,i) => (
                              <li key={i} style={{ display:'flex', gap:'0.5rem' }}><span style={{ color:'var(--as)', fontWeight:700, flexShrink:0 }}>☐</span><span>{c}</span></li>
                            ))}
                          </ul>
                        </Field>
                      </Quadrant>

                      {/* RECOMENDAÇÕES LLM */}
                      {recs && (
                        <div className="qf" style={{ background:'var(--card-i)', border:'1px solid var(--abr)', borderRadius:'0.84rem', overflow:'hidden' }}>
                          <div style={{ display:'flex', alignItems:'center', gap:'0.84rem', padding:'0.75rem 1rem', borderBottom:'1px solid var(--brd-s)' }}>
                            <Cpu size={14} style={{ color:'var(--as)' }} />
                            <span style={{ fontSize:'0.88rem', fontWeight:600, flex:1 }}>Configurações recomendadas para o LLM</span>
                            <span style={{ fontSize:'0.74rem', textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:700, padding:'0.125rem 0.5rem', borderRadius:'9999px', color:'var(--as)', background:'var(--abg)', border:'1px solid var(--abr)' }}>Extra · fora do prompt</span>
                          </div>
                          <div style={{ padding:'0.875rem', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(10rem,1fr))', gap:'0.625rem' }}>
                            {[
                              [<Cpu size={12}/>, 'Modelo', recs.modelo, false],
                              [<Thermometer size={12}/>, 'Temperatura', recs.temperatura, true],
                              [<Sliders size={12}/>, 'Top-p', recs.topP, true],
                              [<Hash size={12}/>, 'Max Tokens', recs.maxTokens, true],
                              [<Brain size={12}/>, 'Raciocínio', recs.raciocinio, false],
                              [<Layers size={12}/>, 'Perfil', DOMAIN_LABELS[optimized.domain] || 'Genérico', false],
                            ].map(([ico,lbl,val,mono],i) => (
                              <div key={i} style={{ background:'var(--ibg)', border:'1px solid var(--brd-s)', borderRadius:'0.5rem', padding:'0.625rem 0.75rem' }}>
                                <div style={{ display:'flex', alignItems:'center', gap:'0.375rem', marginBottom:'0.375rem', fontSize:'0.76rem', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:700, color:'var(--tx-d)' }}>
                                  <span style={{ color:'var(--as)' }}>{ico}</span>{lbl}
                                </div>
                                <div style={{ fontSize:'0.88rem', fontWeight:500, fontFamily: mono ? 'monospace' : 'inherit' }}>{val}</div>
                              </div>
                            ))}
                          </div>
                          <div style={{ padding:'0 0.875rem 0.875rem' }}>
                            <div style={{ fontSize:'0.76rem', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:700, color:'var(--tx-d)', marginBottom:'0.375rem' }}>Justificativa</div>
                            <p style={{ margin:0, fontSize:'0.84rem', color:'var(--tx-m)', lineHeight:1.6 }}>{recs.justificativa}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer actions */}
                    <div style={{ marginTop:'1.25rem', display:'flex', flexWrap:'wrap', gap:'0.84rem' }}>
                      <button onClick={() => setActiveTab('input')}
                              style={{ flex:1, minWidth:'9rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', padding:'0.84rem', background:'var(--sb)', border:'1px solid var(--sbr)', borderRadius:'0.84rem', color:'var(--st)', fontFamily:'inherit', fontSize:'0.875rem', fontWeight:500, cursor:'pointer' }}>
                        <ArrowLeft size={16} />Editar entrada
                      </button>
                      <button onClick={handleReset}
                              style={{ display:'flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.25rem', background:'var(--sb)', border:'1px solid var(--sbr)', borderRadius:'0.84rem', color:'var(--st)', fontFamily:'inherit', fontSize:'0.875rem', fontWeight:500, cursor:'pointer' }}>
                        <RotateCcw size={16} />Recomeçar
                      </button>
                    </div>
                  </>
                ) : (
                  <div style={{ padding:'4rem 0', textAlign:'center' }}>
                    <AlertCircle size={48} style={{ color:'var(--tx-d)', margin:'0 auto 1rem' }} />
                    <p style={{ color:'var(--tx-m)', fontSize:'0.875rem', margin:0, lineHeight:1.6 }}>
                      Nenhum prompt otimizado ainda.<br />
                      Insira uma ideia na aba <span style={{ color:'var(--tx)' }}>"Entrada"</span>.
                    </p>
                  </div>
                )}
              </div>

              <footer style={{ marginTop:'2rem', textAlign:'center', fontSize:'0.84rem', color:'var(--tx-d)' }}>
                Engenharia de Prompts · Imperativos Acionáveis · 100% client-side · Modelos Claude atualizados em mai/2026
              </footer>
            </main>
          </div>
        </>
      );
    }

    // ─── SUBCOMPONENTES ───────────────────────────────────────────
    function Quadrant({ num, icon, title, children }) {
      return (
        <div className="qf" style={{ background:'var(--card-i)', border:'1px solid var(--brd-s)', borderRadius:'0.84rem', overflow:'hidden' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.625rem', padding:'0.625rem 1rem', borderBottom:'1px solid var(--brd-s)' }}>
            <div aria-hidden="true" style={{ width:'1.625rem', height:'1.625rem', borderRadius:'0.375rem', background:`linear-gradient(135deg,var(--af),var(--at))`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'0.84rem', boxShadow:'0 4px 12px -4px var(--af)', flexShrink:0 }}>{num}</div>
            <span aria-hidden="true" style={{ color:'var(--as)' }}>{icon}</span>
            <h2 style={{ margin:0, fontSize:'0.88rem', fontWeight:600, letterSpacing:'-0.01em' }}>{title}</h2>
          </div>
          <div style={{ padding:'0.875rem', display:'flex', flexDirection:'column', gap:'0.875rem', fontSize:'0.88rem', lineHeight:1.6, color:'var(--tx-m)' }}>
            {children}
          </div>
        </div>
      );
    }

    function Field({ label, children }) {
      return (
        <div>
          <div style={{ fontSize:'0.74rem', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:700, color:'var(--tx-d)', marginBottom:'0.375rem' }}>{label}</div>
          <div style={{ color:'var(--tx)' }}>{children}</div>
        </div>
      );
    }

    function PreFill() {
      return (
        <span style={{ fontSize:'0.74rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--as)', background:'var(--abg)', border:'1px solid var(--abr)', borderRadius:'9999px', padding:'0.05rem 0.45rem', marginLeft:'0.35rem', whiteSpace:'nowrap', verticalAlign:'middle' }}>sugerido</span>
      );
    }

    function DBlock({ verb, items, cssVar }) {
      return (
        <div>
          <div style={{ fontSize:'0.74rem', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:700, color:`var(${cssVar})`, marginBottom:'0.375rem' }}>▸ {verb}:</div>
          <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:'0.25rem' }}>
            {items.map((it,i) => (
              <li key={i} style={{ display:'flex', gap:'0.5rem', color:'var(--tx-m)' }}>
                <span style={{ color:`var(${cssVar})`, flexShrink:0 }}>•</span><span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    function Chip({ children }) {
      return (
        <code style={{ display:'inline-block', fontSize:'0.84rem', padding:'0.125rem 0.5rem', borderRadius:'0.25rem', fontFamily:'monospace', color:'var(--as)', background:'var(--abg)', border:'1px solid var(--abr)' }}>
          [DADO A SER INFORMADO]: {children}
        </code>
      );
    }

    function GuideCard({ icon, title, children }) {
      return (
        <div className="qf" style={{ background:'var(--card-i)', border:'1px solid var(--brd-s)', borderRadius:'0.84rem', overflow:'hidden' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.625rem', padding:'0.625rem 1rem', borderBottom:'1px solid var(--brd-s)' }}>
            <span aria-hidden="true" style={{ color:'var(--as)', display:'flex' }}>{icon}</span>
            <h2 style={{ margin:0, fontSize:'0.88rem', fontWeight:600, letterSpacing:'-0.01em' }}>{title}</h2>
          </div>
          <div style={{ padding:'0.875rem', display:'flex', flexDirection:'column', gap:'0.84rem', fontSize:'0.88rem', lineHeight:1.6, color:'var(--tx-m)' }}>
            {children}
          </div>
        </div>
      );
    }

    // ─── ABA: CLAUDE & CLAUDE CODE ────────────────────────────────
    function ClaudeGuide() {
      const [plat, setPlat] = useState('geral');
      const [copiedTpl, setCopiedTpl] = useState(false);
      const sel = PLATFORMS.find(p => p.id === plat) || PLATFORMS[0];
      const PIcons = { globe:<Globe size={14} />, users:<Users size={14} />, box:<Box size={14} />, terminal:<Terminal size={14} /> };
      const copyTpl = async () => {
        try { await navigator.clipboard.writeText(sel.template); }
        catch { const t=document.createElement('textarea'); t.value=sel.template; document.body.appendChild(t); t.select(); try{document.execCommand('copy');}catch{} document.body.removeChild(t); }
        setCopiedTpl(true); setTimeout(()=>setCopiedTpl(false), 2000);
      };
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:'0.84rem' }}>

          {/* Modelos atuais */}
          <GuideCard icon={<Cpu size={14} />} title="Modelos Claude atuais (mai/2026)">
            <div style={{ display:'flex', flexDirection:'column', gap:'0.625rem' }}>
              {CLAUDE_MODELS.map((mod,i) => (
                <div key={i} style={{ background:'var(--ibg)', border:'1px solid var(--brd-s)', borderRadius:'0.5rem', padding:'0.84rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', flexWrap:'wrap', marginBottom:'0.375rem' }}>
                    <span style={{ fontSize:'0.85rem', fontWeight:600, color:'var(--tx)' }}>{mod.nome}</span>
                    <span style={{ fontSize:'0.74rem', textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:700, padding:'0.125rem 0.5rem', borderRadius:'9999px', color:'var(--as)', background:'var(--abg)', border:'1px solid var(--abr)' }}>{mod.tier}</span>
                  </div>
                  <p style={{ margin:'0 0 0.5rem', fontSize:'0.84rem', color:'var(--tx-m)' }}>{mod.melhor}</p>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(8.5rem,1fr))', gap:'0.375rem' }}>
                    {[['Contexto',mod.contexto],['Saída máx.',mod.saida],['Conhecimento',mod.cutoff],['Preço (in/out)',mod.preco],['Raciocínio',mod.raciocinio]].map(([k,v],j) => (
                      <div key={j} style={{ fontSize:'0.84rem' }}>
                        <div style={{ textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:700, color:'var(--tx-d)', fontSize:'0.74rem', marginBottom:'0.125rem' }}>{k}</div>
                        <div style={{ color:'var(--tx)' }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ margin:0, fontSize:'0.84rem', color:'var(--tx-d)', lineHeight:1.6 }}>
              Opus 4.7 e anteriores são <strong style={{ color:'var(--tx-m)' }}>legados</strong>; Claude Sonnet 4 e Opus 4 estão <strong style={{ color:'var(--da)' }}>descontinuados</strong> (retirada em 15/06/2026). Migre para os modelos acima.
            </p>
          </GuideCard>

          {/* Guia por ecossistema */}
          <GuideCard icon={<Layers size={14} />} title="Guia por ecossistema — anatomia + template">
            <div role="tablist" aria-label="Plataformas Claude" style={{ display:'flex', flexWrap:'wrap', gap:'0.375rem' }}>
              {PLATFORMS.map(p => {
                const on = p.id === plat;
                return (
                  <button key={p.id} role="tab" aria-selected={on} onClick={() => { setPlat(p.id); setCopiedTpl(false); }}
                          style={{ display:'flex', alignItems:'center', gap:'0.375rem', fontSize:'0.88rem', fontWeight:600, padding:'0.3rem 0.7rem', borderRadius:'9999px', cursor:'pointer', fontFamily:'inherit', whiteSpace:'nowrap', border:'1px solid '+(on?'transparent':'var(--sbr)'), color: on?'#fff':'var(--tx-m)', background: on?'linear-gradient(to right,var(--af),var(--at))':'var(--sb)', transition:'all 150ms' }}>
                    {PIcons[p.icon]}{p.nome}
                  </button>
                );
              })}
            </div>

            <p style={{ margin:0, fontSize:'0.84rem' }}><strong style={{ color:'var(--tx)' }}>Melhor para:</strong> {sel.melhor}</p>

            <div>
              <div style={{ fontSize:'0.74rem', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:700, color:'var(--tx-d)', marginBottom:'0.375rem' }}>Anatomia do prompt ideal</div>
              <ol style={{ margin:0, paddingLeft:'1.1rem', display:'flex', flexDirection:'column', gap:'0.2rem' }}>
                {sel.anatomia.map((a,i) => <li key={i} style={{ color:'var(--tx-m)' }}>{a}</li>)}
              </ol>
            </div>

            <div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.375rem' }}>
                <div style={{ fontSize:'0.74rem', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:700, color:'var(--tx-d)' }}>Template pronto (tags XML)</div>
                <button onClick={copyTpl}
                        style={{ display:'flex', alignItems:'center', gap:'0.3rem', fontSize:'0.76rem', fontWeight:600, padding:'0.25rem 0.6rem', borderRadius:'0.4rem', cursor:'pointer', fontFamily:'inherit', border: copiedTpl?'1px solid var(--ok-br)':'1px solid var(--sbr)', color: copiedTpl?'var(--ok)':'var(--st)', background: copiedTpl?'var(--ok-bg)':'var(--sb)', transition:'all 150ms' }}>
                  {copiedTpl ? <><Check size={12} />Copiado!</> : <><ClipboardCopy size={12} />Copiar template</>}
                </button>
              </div>
              <pre style={{ margin:0, padding:'0.84rem', borderRadius:'0.5rem', background:'var(--ibg)', border:'1px solid var(--brd-s)', overflowX:'auto', fontSize:'0.76rem', lineHeight:1.5 }}><code style={{ fontFamily:'monospace', color:'var(--tx)', whiteSpace:'pre' }}>{sel.template}</code></pre>
            </div>

            <div style={{ padding:'0.84rem', background:'var(--abg)', border:'1px solid var(--abr)', borderRadius:'0.5rem', display:'flex', gap:'0.5rem' }}>
              <Lightbulb size={16} style={{ color:'var(--as)', flexShrink:0, marginTop:'0.1rem' }} />
              <p style={{ margin:0, fontSize:'0.84rem', color:'var(--tx-m)', lineHeight:1.6 }}><strong style={{ color:'var(--as)' }}>Por que funciona: </strong>{sel.porque}</p>
            </div>
          </GuideCard>

          {/* Hiperparâmetros */}
          <GuideCard icon={<Sliders size={14} />} title="Hiperparâmetros de API por tarefa técnica">
            <div style={{ overflowX:'auto' }}>
              <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'0.88rem' }}>
                <thead>
                  <tr>
                    {['Tarefa','Temperatura','Top-P','Max Tokens','Stop Sequences'].map((h,i) => (
                      <th key={i} style={{ textAlign:'left', padding:'0.4rem 0.5rem', borderBottom:'1px solid var(--brd)', color:'var(--tx-d)', textTransform:'uppercase', letterSpacing:'0.06em', fontSize:'0.74rem', whiteSpace:'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {HYPERPARAMS.map((r,i) => (
                    <tr key={i}>
                      <td style={{ padding:'0.4rem 0.5rem', borderBottom:'1px solid var(--brd-s)', color:'var(--tx)', fontWeight:600 }}>{r.tarefa}</td>
                      <td style={{ padding:'0.4rem 0.5rem', borderBottom:'1px solid var(--brd-s)', color:'var(--tx-m)', fontFamily:'monospace' }}>{r.temp}</td>
                      <td style={{ padding:'0.4rem 0.5rem', borderBottom:'1px solid var(--brd-s)', color:'var(--tx-m)', fontFamily:'monospace' }}>{r.topP}</td>
                      <td style={{ padding:'0.4rem 0.5rem', borderBottom:'1px solid var(--brd-s)', color:'var(--tx-m)', fontFamily:'monospace' }}>{r.max}</td>
                      <td style={{ padding:'0.4rem 0.5rem', borderBottom:'1px solid var(--brd-s)', color:'var(--tx-m)', fontFamily:'monospace' }}>{r.stop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding:'0.84rem', background:'var(--abg)', border:'1px solid var(--abr)', borderRadius:'0.5rem', display:'flex', gap:'0.5rem' }}>
              <AlertCircle size={16} style={{ color:'var(--as)', flexShrink:0, marginTop:'0.1rem' }} />
              <p style={{ margin:0, fontSize:'0.88rem', color:'var(--tx-m)', lineHeight:1.6 }}>
                <strong style={{ color:'var(--as)' }}>Crítico: </strong>ajuste <em>temperature</em> OU <em>top_p</em>, nunca os dois ao mesmo tempo. Com <em>extended/adaptive thinking</em> ativo, mantenha <strong>temperature = 1</strong> — o modo de raciocínio não aceita amostragem customizada; controle a profundidade pelo orçamento de <em>thinking</em> ou pelo parâmetro <em>effort</em>.
              </p>
            </div>
          </GuideCard>

          {/* Claude Code */}
          <GuideCard icon={<Terminal size={14} />} title="Claude Code — o agente de código">
            <p style={{ margin:0 }}>
              Ferramenta agêntica que lê o codebase, edita arquivos, roda comandos e integra com suas ferramentas — no terminal, IDE, app Desktop e navegador. Instalação no terminal:
            </p>
            <code style={{ display:'block', fontFamily:'monospace', fontSize:'0.88rem', padding:'0.5rem 0.75rem', borderRadius:'0.5rem', background:'var(--ibg)', border:'1px solid var(--brd-s)', color:'var(--tx)', overflowX:'auto' }}>
              curl -fsSL https://claude.ai/install.sh | bash
            </code>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
              {CLAUDE_CODE.map((f,i) => (
                <div key={i} style={{ display:'flex', gap:'0.5rem' }}>
                  <Bot size={14} style={{ color:'var(--as)', flexShrink:0, marginTop:'0.125rem' }} />
                  <div>
                    <span style={{ fontWeight:600, color:'var(--tx)' }}>{f.titulo}. </span>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </GuideCard>

          {/* Boas práticas */}
          <GuideCard icon={<BookOpen size={14} />} title="Boas práticas de prompting para Claude">
            <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:'0.375rem' }}>
              {CLAUDE_TIPS.map((t,i) => (
                <li key={i} style={{ display:'flex', gap:'0.5rem' }}>
                  <span style={{ color:'var(--as)', fontWeight:700, flexShrink:0 }}>▸</span><span>{t}</span>
                </li>
              ))}
            </ul>
            <a href="https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer"
               style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', fontSize:'0.88rem', color:'var(--as)', textDecoration:'none', fontWeight:600 }}>
              <ExternalLink size={12} />Guia oficial de engenharia de prompts
            </a>
          </GuideCard>

        </div>
      );
    }

    // ─── MOUNT ────────────────────────────────────────────────────
    createRoot(document.getElementById('root')).render(<PromptOptimizer />);
