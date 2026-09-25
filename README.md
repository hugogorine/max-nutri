# Nutrição para gestantes: landing page

Landing page de uma nutricionista que atende gestantes, do primeiro trimestre
ao pós-parto. O objetivo principal é gerar contatos pelo WhatsApp.

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui (Radix) · Motion

## Como rodar

```bash
npm install
cp .env.example .env.local   # preencha os valores
npm run dev                  # http://localhost:3000
```

Build de produção: `npm run build` e depois `npm start`.
Verificações: `npx tsc --noEmit` e `npm run lint`.

## Antes de publicar

Todos os dados reais ficam em dois lugares:

| O quê | Onde |
| --- | --- |
| Nome, CRN, formação, especialização, formato de atendimento, Instagram, e-mail, responsável pelos dados | `src/content/site.ts` |
| Número do WhatsApp e URL do site | `.env.local` (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SITE_URL`) |
| Todos os textos da página | `src/content/copy.ts` |

Valores entre colchetes, como `[Nome da Nutricionista]` e `CRN [XXXXX]`, são
placeholders. Enquanto o Instagram ou o e-mail estiverem com placeholder, o
rodapé mostra o texto sem gerar link quebrado.

**WhatsApp.** O número vai só com dígitos, com código do país e DDD
(ex.: `55` + DDD + número). Sem número configurado, os botões abrem o WhatsApp
com a mensagem pronta para a pessoa escolher o contato. A mensagem
pré-preenchida está em `site.contact.whatsappMessage`.

**Depoimentos.** Os três relatos são demonstrativos e aparecem com um aviso.
Troque por relatos reais, publicados com autorização por escrito, e mude
`testimonialsAreDemo` para `false`. O Código de Ética do CFN (Resolução
856/2026) veda divulgar resultados de pacientes, como imagens de antes e
depois, dados corporais ou exames; prefira relatos sobre a experiência do
acompanhamento.

**Políticas.** `/politica-de-privacidade` e `/politica-de-cookies` são
textos-modelo baseados na LGPD. Complete os campos entre colchetes e revise
com assessoria jurídica.

## Imagens

As fotos são do Unsplash (licença livre para uso comercial) e servem de
direção de arte até existirem fotos próprias. O retrato da seção "Sobre" é
ilustrativo: substitua pela foto da nutricionista antes de publicar.

| Arquivo em `src/assets/images` | Foto | Autor |
| --- | --- | --- |
| `gestante-recorte.png`, `gestante-detalhe.png` | [unsplash.com/photos/qH3kUl3JUxc](https://unsplash.com/photos/qH3kUl3JUxc) | Jeferson Santu |
| `figos-linho.jpg` | [unsplash.com/photos/2qtNPtuesIA](https://unsplash.com/photos/2qtNPtuesIA) | Auguste A |
| `retrato-nutricionista.jpg` | [unsplash.com/photos/fqc3wz8lpGM](https://unsplash.com/photos/fqc3wz8lpGM) | Danijel Škabić |
| `gestante-vestido-verde.jpg` | [unsplash.com/photos/7VqCnFPH1XY](https://unsplash.com/photos/7VqCnFPH1XY) | Vanessa |
| `limoes-linho.jpg` | [unsplash.com/photos/-bbhAFWtUMQ](https://unsplash.com/photos/-bbhAFWtUMQ) | Anna Doiun |

A hero depende de um **recorte com fundo transparente** (`gestante-recorte.png`):
é ele que fica na frente do "40". Ao trocar a foto, gere um novo PNG recortado
(por exemplo com [rembg](https://github.com/danielgatis/rembg)) com a figura
encostada na borda de baixo. `gestante-detalhe.png` é o mesmo recorte, cortado
do peito para baixo, usado no fechamento da página. Para o Open Graph existe
uma versão menor em `src/assets/og/`.

As imagens são importadas estaticamente: o `next/image` gera AVIF/WebP nos
tamanhos certos, com placeholder desfocado.

## Cookies e consentimento

O banner grava a escolha em `localStorage` e em um cookie (`cookie-consent`),
por 6 meses. Hoje o site não usa nenhuma ferramenta de medição. Para adicionar
uma, carregue o script só com consentimento:

```tsx
"use client";
import { useConsent } from "@/components/consent/consent-provider";

export function Analytics() {
  const { consent } = useConsent();
  if (!consent?.analytics) return null;
  return /* <Script ... /> da ferramenta */ null;
}
```

Depois, liste os cookies da ferramenta na tabela da Política de Cookies. Se
mudar as categorias, suba `CONSENT_VERSION` em `src/lib/consent.ts` para pedir
a escolha de novo.

## Estrutura

```
src/
  app/                  rotas, metadados, OG, sitemap, robots, 404 e erros
  components/
    sections/           seções da página (hero, sobre, acompanhamento...)
    site/               navegação, rodapé, CTA do WhatsApp, imagem editorial
    consent/            banner, preferências e contexto de cookies
    ui/                 componentes shadcn/ui adaptados à identidade
  content/              dados da profissional e textos
  lib/                  WhatsApp e contatos, consentimento, utilitários
```

## Direção de arte

A ideia central é **o tempo da gestação**: a página é tratada como uma edição
de revista de 40 semanas. A hero usa a lógica de pôster editorial do *Sakura
Editorial Poster* (título gigante atrás do sujeito, microtipografia, grão de
impressão), adaptada: o "40" das semanas de gestação fica atrás da gestante,
e só ela está na frente. Os mesmos elementos voltam ao longo da página: a
régua das semanas na hero, os numerais que sobem por trás da linha no
acompanhamento e a gestante em detalhe no fechamento, como contracapa.

- **Cores:** marfim `#F8F5EF` como base, verde profundo `#31483A` como cor de
  marca, sálvia `#9CAF88` e rosa queimado `#C98F87` só como apoio, terracota
  `#B8755F` em detalhes. Preto suave `#252522` para texto.
- **Tipografia:** Newsreader no corte de display (tamanho óptico 72, que dá
  o contraste fino dos títulos grandes) e Hanken Grotesk para textos e
  interface.
- **Movimento:** a entrada da hero é feita em CSS, para rodar no primeiro
  paint sem esperar o JavaScript. O Motion cuida do que responde à pessoa:
  menu, parallax do ponteiro, depoimentos e os numerais que entram na tela.
  Tudo respeita `prefers-reduced-motion`.

## Performance

- A Newsreader é auto-hospedada (`src/assets/fonts`) já instanciada no
  tamanho óptico de display, pesos 300 a 500, só com o subconjunto latino:
  ~117 KB no total, contra ~270 KB da versão variável completa.
- Os recursos de animação do Motion, o menu mobile e o diálogo de
  preferências de cookies (Radix Dialog) são carregados sob demanda.
- `cn` (`src/lib/utils.ts`) só junta classes, sem resolver conflitos do
  Tailwind. Para variar um componente, crie uma variante no `cva` em vez de
  sobrescrever classes.
- Imagens estáticas com `next/image` (AVIF/WebP, tamanhos responsivos e
  placeholder desfocado); a foto da hero é carregada com prioridade alta.
