import { EstadoReserva } from "@/lib/types";
import { cn } from "@/lib/utils";

export function EstadoBadge({ estado }: { estado: EstadoReserva }) {
  const map: Record<EstadoReserva, string> = {
    confirmada: "bg-sage/15 text-sageD border-sage/30",
    pendiente: "bg-terra/12 text-terraD border-terra/30",
    cancelada: "bg-muted/10 text-muted border-muted/25 line-through",
  };
  const label: Record<EstadoReserva, string> = {
    confirmada: "Confirmada",
    pendiente: "Pendiente",
    cancelada: "Cancelada",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        map[estado]
      )}
    >
      {label[estado]}
    </span>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-creamD/60 px-2.5 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}

export function StatCard({
  label,
  value,
  delta,
  icon,
}: {
  label: string;
  value: string;
  delta?: { value: string; positive?: boolean };
  icon?: React.ReactNode;
}) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <span className="eyebrow">{label}</span>
        {icon && <span className="text-terra">{icon}</span>}
      </div>
      <div className="mt-3 font-serif text-3xl font-semibold text-green">{value}</div>
      {delta && (
        <div
          className={cn(
            "mt-1 text-xs font-medium",
            delta.positive ? "text-sageD" : "text-terraD"
          )}
        >
          {delta.value}
        </div>
      )}
    </div>
  );
}

export function SectionCard({
  title,
  action,
  children,
  className,
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("card", className)}>
      {(title || action) && (
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          {title && (
            <h2 className="font-serif text-xl font-semibold text-green">{title}</h2>
          )}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
