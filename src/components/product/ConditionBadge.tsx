import type { Condition } from "@/types";

const conditionColors: Record<Condition, string> = {
  BNWT: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Like New": "bg-blue-100 text-blue-800 border-blue-200",
  Good: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Fair: "bg-orange-100 text-orange-800 border-orange-200",
};

export function ConditionBadge({ condition }: { condition: Condition }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${conditionColors[condition]}`}
    >
      {condition}
    </span>
  );
}
