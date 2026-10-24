import type { ReactNode } from "react";

export function emphasizePresenter(
  text: string,
  presenterName?: string,
): ReactNode {
  if (!presenterName || !text.toLowerCase().includes(presenterName.toLowerCase())) {
    return text;
  }

  const escapedName = presenterName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escapedName})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === presenterName.toLowerCase() ? (
      <strong key={`${index}-${part}`}>{part}</strong>
    ) : (
      part
    ),
  );
}
