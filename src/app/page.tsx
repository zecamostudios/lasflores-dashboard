import Link from "next/link";
import { CalendarCheck, TrendingUp, Wallet, LogIn, ArrowRight } from "lucide-react";
import { StatCard, SectionCard, EstadoBadge } from "@/components/ui";
import { metricas, proximasReservas, cabanas } from "@/lib/mock/data";
import { formatARS, formatFechaCorta, noches } from "@/lib/utils";

export default function ResumenPage() {
  const proximas = proximasReservas(5);
  const maxOcup = Math.max(...metricas.ocupacionSerie.map((d) => d.valor));

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Ocupación del mes"
          value={`${metricas.ocupacionMes}%`}
          delta={{ value: "+14% vs. mayo", positive: true }}
          icon={<TrendingUp size={18} />}
        />
        <StatCard
          label="Reservas del mes"
          value={String(metricas.reservasMes)}
          delta={{ value: "+2 vs. mayo", positive: true }}
          icon={<CalendarCheck size={18} />}
        />
        <StatCard
          label="Ingresos del mes"
          value={formatARS(metricas.ingresosMes)}
          delta={{ value: "+9% vs. mayo", positive: true }}
          icon={<Wallet size={18} />}
        />
        <StatCard
          label="Próximos check-ins"
          value={String(metricas.proximosCheckIns)}
          delta={{ value: "en los próximos 7 días" }}
          icon={<LogIn size={18} />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Próximas reservas */}
        <SectionCard
          title="Próximas reservas"
          action={
            <Link
              href="/reservas"
              className="inline-flex items-center gap-1 text-sm font-medium text-terraD hover:text-terra"
            >
              Ver todas <ArrowRight size={15} />
            </Link>
          }
        >
          <ul className="divide-y divide-line">
            {proximas.map((r) => (
              <li
                key={r.id}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-cream/50"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-creamD font-serif text-base font-semibold text-green">
                  {r.huespedNombre.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium text-ink">{r.huespedNombre}</div>
                  <div className="text-sm text-muted">
                    {r.cabanaNombre} · {r.huespedes} huésp.
                  </div>
                </div>
                <div className="hidden text-right text-sm text-muted sm:block">
                  {formatFechaCorta(r.checkIn)} → {formatFechaCorta(r.checkOut)}
                  <div className="text-xs">{noches(r.checkIn, r.checkOut)} noches</div>
                </div>
                <EstadoBadge estado={r.estado} />
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Ocupación 6 meses + estado cabañas */}
        <div className="space-y-6">
          <SectionCard title="Ocupación (6 meses)">
            <div className="flex items-end justify-between gap-3 px-5 py-6">
              {metricas.ocupacionSerie.map((d) => (
                <div key={d.mes} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-32 w-full items-end">
                    <div
                      className="w-full rounded-t-md bg-sage/80"
                      style={{ height: `${(d.valor / maxOcup) * 100}%` }}
                      title={`${d.valor}%`}
                    />
                  </div>
                  <span className="text-[11px] text-muted">{d.mes}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Cabañas">
            <ul className="divide-y divide-line">
              {cabanas.map((c) => (
                <li key={c.id} className="flex items-center gap-3 px-5 py-3.5">
                  <span className="text-2xl">{c.imagen}</span>
                  <div className="flex-1">
                    <div className="font-medium text-ink">{c.nombre}</div>
                    <div className="text-sm text-muted">
                      {formatARS(c.precioNoche)} / noche
                    </div>
                  </div>
                  <span
                    className={
                      c.estado === "disponible"
                        ? "text-sm font-medium text-sageD"
                        : c.estado === "ocupada"
                        ? "text-sm font-medium text-terraD"
                        : "text-sm font-medium text-muted"
                    }
                  >
                    {c.estado === "disponible"
                      ? "Disponible"
                      : c.estado === "ocupada"
                      ? "Ocupada"
                      : "Mantenimiento"}
                  </span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
