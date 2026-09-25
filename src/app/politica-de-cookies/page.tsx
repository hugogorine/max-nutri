import type { Metadata } from "next";
import Link from "next/link";

import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Quais cookies e tecnologias de armazenamento este site usa e como gerenciar as suas preferências.",
  alternates: { canonical: "/politica-de-cookies" },
};

/*
 * Mantenha a tabela abaixo em dia: ao instalar uma ferramenta de medição ou
 * marketing, liste os cookies dela e carregue-a só com consentimento
 * (veja o README, seção "Cookies e consentimento").
 */
export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Cookies são pequenos arquivos que um site guarda no seu navegador. Aqui você encontra quais deles este site usa, para quê, e como mudar a sua escolha."
    >
      <h2>Categorias</h2>
      <ul>
        <li>
          <strong>Essenciais:</strong> necessários para o site funcionar e
          para lembrar a sua escolha sobre cookies. Não dependem de
          consentimento.
        </li>
        <li>
          <strong>Medição:</strong> ajudam a entender, de forma agregada,
          como o site é usado. Só são ativados se você permitir.
        </li>
        <li>
          <strong>Marketing:</strong> permitem medir campanhas e mostrar
          conteúdos relevantes em outras plataformas. Só são ativados se você
          permitir.
        </li>
      </ul>

      <h2>Cookies em uso</h2>
      <div className="-mx-1 overflow-x-auto px-1">
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Categoria</th>
              <th scope="col">Finalidade</th>
              <th scope="col">Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap">cookie-consent</td>
              <td>Essencial</td>
              <td>
                Guarda a sua escolha sobre cookies (cookie e armazenamento
                local).
              </td>
              <td>6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        No momento, nenhuma ferramenta de medição ou de marketing está
        instalada. Se isso mudar, esta tabela será atualizada e a ferramenta
        só funcionará com a sua permissão.
      </p>

      <h2>Como mudar a sua escolha</h2>
      <p>
        Você pode rever as suas preferências a qualquer momento:{" "}
        <CookieSettingsButton className="font-medium text-ink underline decoration-1 underline-offset-[0.2em]">
          abrir preferências de cookies
        </CookieSettingsButton>
        . Também é possível apagar ou bloquear cookies nas configurações do
        seu navegador; nesse caso, o aviso de cookies aparecerá de novo.
      </p>

      <h2>Mais informações</h2>
      <p>
        Para saber como os dados pessoais são tratados de forma geral, leia a{" "}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>
    </LegalPage>
  );
}
