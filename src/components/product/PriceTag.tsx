import { formatPHP } from "@/lib/format";

export function PriceTag({
  centavos,
  className = "",
}: {
  centavos: number;
  className?: string;
}) {
  return (
    <span className={`font-bold text-gray-900 ${className}`}>
      {formatPHP(centavos)}
    </span>
  );
}
