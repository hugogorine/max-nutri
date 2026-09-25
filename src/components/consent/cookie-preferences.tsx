"use client";

import { useId, useState } from "react";

import { useConsent } from "@/components/consent/consent-provider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import type { ConsentPreferences } from "@/lib/consent";

const categories = [
  {
    key: "necessary",
    title: "Essenciais",
    text: "Necessários para o site funcionar e para lembrar a sua escolha sobre cookies. Não podem ser desativados.",
  },
  {
    key: "analytics",
    title: "Medição",
    text: "Ajudam a entender, de forma agregada, quais páginas são visitadas e como o site é usado.",
  },
  {
    key: "marketing",
    title: "Marketing",
    text: "Permitem medir campanhas e mostrar conteúdos mais relevantes em outras plataformas.",
  },
] as const;

export function CookiePreferences() {
  const { consent, save, acceptAll, preferencesOpen, setPreferencesOpen } =
    useConsent();

  return (
    <Dialog open={preferencesOpen} onOpenChange={setPreferencesOpen}>
      <DialogContent>
        {preferencesOpen && (
          <PreferencesForm
            initial={{
              analytics: consent?.analytics ?? false,
              marketing: consent?.marketing ?? false,
            }}
            onSave={save}
            onAcceptAll={acceptAll}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

function PreferencesForm({
  initial,
  onSave,
  onAcceptAll,
}: {
  initial: ConsentPreferences;
  onSave: (preferences: ConsentPreferences) => void;
  onAcceptAll: () => void;
}) {
  const [preferences, setPreferences] = useState(initial);
  const baseId = useId();

  return (
    <>
      <DialogHeader>
        <DialogTitle>Preferências de cookies</DialogTitle>
        <DialogDescription>
          Escolha quais categorias você permite. Você pode mudar de ideia a
          qualquer momento pelo link no rodapé.
        </DialogDescription>
      </DialogHeader>

      <ul className="divide-y divide-line border-y border-line">
        {categories.map((category) => {
          const id = `${baseId}-${category.key}`;
          const isNecessary = category.key === "necessary";
          const checked = isNecessary ? true : preferences[category.key];
          return (
            <li key={category.key} className="flex items-start gap-5 py-5">
              <div className="flex-1">
                <label htmlFor={id} className="font-medium text-ink">
                  {category.title}
                </label>
                <p id={`${id}-text`} className="mt-1 text-small text-ink-soft">
                  {category.text}
                </p>
              </div>
              <Switch
                id={id}
                checked={checked}
                disabled={isNecessary}
                aria-describedby={`${id}-text`}
                onCheckedChange={(value) => {
                  if (isNecessary) return;
                  setPreferences((current) => ({
                    ...current,
                    [category.key]: value,
                  }));
                }}
                className="mt-0.5"
              />
            </li>
          );
        })}
      </ul>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onAcceptAll}>
          Aceitar todos
        </Button>
        <Button type="button" onClick={() => onSave(preferences)}>
          Salvar preferências
        </Button>
      </DialogFooter>
    </>
  );
}
