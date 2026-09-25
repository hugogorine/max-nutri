import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/site/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como os dados pessoais são tratados neste site, com base na Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade" },
};

/*
 * Texto-modelo baseado na LGPD (Lei nº 13.709/2018). Revise com assessoria
 * jurídica e complete os campos entre colchetes antes de publicar.
 */
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Esta política explica quais dados pessoais podem ser tratados quando você visita este site ou entra em contato, para que eles são usados e como você pode exercer os seus direitos."
    >
      <h2>Quem é a responsável pelos dados</h2>
      <p>
        O controlador dos dados pessoais tratados por meio deste site é{" "}
        <strong>{site.legal.controller}</strong>, {site.profession.toLowerCase()}{" "}
        inscrita no {site.registry}. Dúvidas e pedidos sobre privacidade podem
        ser enviados para <strong>{site.contact.email}</strong>.
      </p>

      <h2>Quais dados podem ser tratados</h2>
      <ul>
        <li>
          <strong>Dados que você envia ao entrar em contato</strong>, como
          nome, telefone e o conteúdo das mensagens trocadas pelo WhatsApp,
          por e-mail ou pelo Instagram.
        </li>
        <li>
          <strong>Dados técnicos de navegação</strong>, como endereço IP, data
          e hora de acesso e tipo de navegador, registrados pelo provedor de
          hospedagem para manter o site seguro e funcionando.
        </li>
        <li>
          <strong>Preferências de cookies</strong>, guardadas no seu navegador
          para lembrar a escolha que você fez no aviso de cookies.
        </li>
      </ul>
      <p>
        Este site não tem formulários e não pede dados de saúde. Informações
        de saúde compartilhadas durante o atendimento são dados sensíveis e
        ficam protegidas pelo sigilo profissional, dentro da relação de
        cuidado, e não por este site.
      </p>

      <h2>Para que os dados são usados</h2>
      <ul>
        <li>
          Responder ao seu contato e agendar consultas, com base em
          procedimentos preliminares à prestação do serviço que você
          solicitou (art. 7º, V, da LGPD).
        </li>
        <li>
          Manter a segurança e o funcionamento do site, com base no legítimo
          interesse (art. 7º, IX).
        </li>
        <li>
          Medir a audiência ou campanhas, somente se você der consentimento
          no aviso de cookies (art. 7º, I). Você pode retirar esse
          consentimento quando quiser.
        </li>
      </ul>

      <h2>Com quem os dados podem ser compartilhados</h2>
      <p>
        Os dados não são vendidos. Eles podem ser tratados por fornecedores
        que viabilizam o site e o contato, como o provedor de hospedagem e as
        plataformas de mensagem (por exemplo, o WhatsApp), que seguem as suas
        próprias políticas de privacidade. Também podem ser compartilhados
        quando houver obrigação legal ou ordem de autoridade competente.
      </p>

      <h2>Por quanto tempo os dados ficam guardados</h2>
      <p>
        Os dados são mantidos apenas pelo tempo necessário para as finalidades
        descritas acima ou para cumprir obrigações legais. A preferência de
        cookies fica salva no seu navegador por até seis meses, e então a
        escolha é pedida de novo.
      </p>

      <h2>Seus direitos</h2>
      <p>
        De acordo com o art. 18 da LGPD, você pode pedir, a qualquer momento:
      </p>
      <ul>
        <li>confirmação de que existe tratamento dos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>portabilidade dos dados a outro fornecedor de serviço;</li>
        <li>informação sobre com quem os dados foram compartilhados;</li>
        <li>revogação do consentimento, quando ele for a base do tratamento.</li>
      </ul>
      <p>
        Para exercer esses direitos, escreva para{" "}
        <strong>{site.contact.email}</strong>. Você também pode apresentar
        reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>Cookies</h2>
      <p>
        Os detalhes sobre cookies e armazenamento local estão na{" "}
        <Link href="/politica-de-cookies">Política de Cookies</Link>.
      </p>

      <h2>Mudanças nesta política</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças no site ou
        na legislação. A data da última atualização fica sempre no topo desta
        página.
      </p>
    </LegalPage>
  );
}
