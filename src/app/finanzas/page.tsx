import {
  Plus,
  Wallet,
  TrendingDown,
  Scale,
  Clock,
  Download,
  Receipt,
  BedDouble,
  Moon,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { StatCard, SectionCard, Chip } from "@/components/ui";
import {
  finanzas,
  facturadoMes,
  indicadoresMes,
  cobranzasPendientes,
  cobradoPorMetodoMes,
  rentabilidadPorCabana,
  ingresosPorCanal,
  gastosPorCategoria,
  movimientosMes,
} from "@/lib/mock/data";
import { formatARS, formatFechaCorta } from "@/lib/utils";

const maxSerie = Math.max(
  ...finanzas.serie.map((d) => Math.max(d.ingresos, d.gastos))
);

// Lista de barras horizontales reutilizable (canal, categoría, método).
function BarList({
  items,
  color = "bg-sage/80",
}: {
  items: { label: string; monto: number }[];
  color?: string;
}) {
  const total = items.reduce((a, i) => a + i.monto, 0);
  if (total === 0)
    return (
      <p className="px-5 py-6 text-center text-sm text-muted">Sin datos este mes.</p>
    );
  return (
    <ul className="divide-y divide-line">
      {items.map((i) => {
        const pct = Math.round((i.monto / total) * 100);
        return (
          <li key={i.label} className="px-5 py-3.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-ink">{i.label}</span>
              <span className="text-muted">
                {formatARS(i.monto)} · {pct}%
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-creamD">
              <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function MiniStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card flex items-center gap-3 px-4 py-3.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-creamD text-terra">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="eyebrow">{label}</div>
        <div className="font-serif text-lg font-semibold text-green">{value}</div>
      </div>
    </div>
  );
}

export default function FinanzasPage() {
  const facturado = facturadoMes();
  const ind = indicadoresMes();
  const cobranzas = cobranzasPendientes();
  const rentabilidad = rentabilidadPorCabana();
  const movimientos = movimientosMes();
  const neto = finanzas.resultadoNetoMes;

  return (
    <div className="space-y-6">
      {/* Encabezado de período */}
      <div className="flex flex-wrap items-center gap-3">
        <Chip>{finanzas.mesLabel}</Chip>
        <span className="text-sm text-muted">Resumen financiero del mes en curso</span>
        <button className="ml-auto inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-muted hover:text-ink">
          <Download size={15} /> Exportar
        </button>
        <button className="inline-flex items-center gap-2 rounded-full bg-terra px-4 py-2 text-sm font-semibold text-white hover:bg-terraD">
          <Plus size={16} /> Registrar gasto
        </button>
      </div>

      {/* KPIs principales */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Facturado del mes"
          value={formatARS(facturado)}
          delta={{ value: `${ind.reservas} reservas`, positive: true }}
          icon={<Receipt size={18} />}
        />
        <StatCard
          label="Ingresos cobrados"
          value={formatARS(finanzas.ingresosCobradosMes)}
          delta={{ value: "señas + saldos", positive: true }}
          icon={<Wallet size={18} />}
        />
        <StatCard
          label="Gastos del mes"
          value={formatARS(finanzas.gastosMes)}
          delta={{ value: `${gastosPorCategoria().length} categorías` }}
          icon={<TrendingDown size={18} />}
        />
        <StatCard
          label="Resultado neto"
          value={formatARS(neto)}
          delta={{ value: neto >= 0 ? "ganancia" : "pérdida", positive: neto >= 0 }}
          icon={<Scale size={18} />}
        />
      </div>

      {/* Strip de indicadores operativos */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MiniStat
          label="Pendiente de cobro"
          value={formatARS(finanzas.pendienteCobroTotal)}
          icon={<Clock size={16} />}
        />
        <MiniStat
          label="Ticket promedio"
          value={formatARS(ind.ticketPromedio)}
          icon={<Receipt size={16} />}
        />
        <MiniStat
          label="Noches vendidas"
          value={String(ind.nochesVendidas)}
          icon={<Moon size={16} />}
        />
        <MiniStat
          label="Tarifa/noche prom."
          value={formatARS(ind.tarifaNocheProm)}
          icon={<BedDouble size={16} />}
        />
      </div>

      {/* Ingresos vs gastos + métodos de pago */}
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <SectionCard title="Ingresos vs. gastos (6 meses)">
          <div className="px-5 py-6">
            <div className="flex items-end justify-between gap-3">
              {finanzas.serie.map((d) => (
                <div key={d.mes} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-36 w-full items-end justify-center gap-1">
                    <div
                      className="w-1/2 rounded-t-md bg-sage/80"
                      style={{ height: `${(d.ingresos / maxSerie) * 100}%` }}
                      title={`Ingresos ${formatARS(d.ingresos)}`}
                    />
                    <div
                      className="w-1/2 rounded-t-md bg-terra/70"
                      style={{ height: `${(d.gastos / maxSerie) * 100}%` }}
                      title={`Gastos ${formatARS(d.gastos)}`}
                    />
                  </div>
                  <span className="text-[11px] text-muted">{d.mes}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-5 text-xs text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-sage/80" /> Ingresos
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-terra/70" /> Gastos
              </span>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Cobrado por método">
          <BarList
            items={cobradoPorMetodoMes().map((m) => ({ label: m.metodo, monto: m.monto }))}
          />
        </SectionCard>
      </div>

      {/* Rentabilidad por cabaña + canal/categoría */}
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <SectionCard title="Rentabilidad por cabaña">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-creamD/40 text-left text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-3 font-semibold">Cabaña</th>
                  <th className="px-5 py-3 text-right font-semibold">Ingresos</th>
                  <th className="px-5 py-3 text-right font-semibold">Gastos</th>
                  <th className="px-5 py-3 text-right font-semibold">Neto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rentabilidad.map((c) => (
                  <tr key={c.cabanaId} className="hover:bg-cream/50">
                    <td className="px-5 py-3.5 font-medium text-ink">{c.nombre}</td>
                    <td className="px-5 py-3.5 text-right text-ink">
                      {formatARS(c.ingresos)}
                    </td>
                    <td className="px-5 py-3.5 text-right text-terraD">
                      {formatARS(c.gastosAtribuidos)}
                    </td>
                    <td className="px-5 py-3.5 text-right font-semibold text-sageD">
                      {formatARS(c.neto)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-line px-5 py-3 text-xs text-muted">
            Solo gastos atribuibles a cada cabaña; los gastos generales no se prorratean.
          </p>
        </SectionCard>

        <div className="space-y-6">
          <SectionCard title="Facturación por canal">
            <BarList
              items={ingresosPorCanal().map((c) => ({ label: c.canal, monto: c.monto }))}
            />
          </SectionCard>
          <SectionCard title="Gastos por categoría">
            <BarList
              items={gastosPorCategoria().map((c) => ({
                label: c.categoria,
                monto: c.monto,
              }))}
              color="bg-terra/70"
            />
          </SectionCard>
        </div>
      </div>

      {/* Cobranzas pendientes + libro de caja */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Cobranzas pendientes">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-creamD/40 text-left text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-3 font-semibold">Reserva</th>
                  <th className="px-5 py-3 font-semibold">Check-in</th>
                  <th className="px-5 py-3 text-right font-semibold">Pendiente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {cobranzas.map((c) => (
                  <tr key={c.reserva.id} className="hover:bg-cream/50">
                    <td className="px-5 py-3.5">
                      <div className="font-medium text-ink">{c.reserva.huespedNombre}</div>
                      <div className="font-mono text-xs text-muted">{c.reserva.codigo}</div>
                    </td>
                    <td className="px-5 py-3.5 text-muted">
                      {formatFechaCorta(c.reserva.checkIn)}
                    </td>
                    <td className="px-5 py-3.5 text-right font-medium text-terraD">
                      {formatARS(c.pendiente)}
                    </td>
                  </tr>
                ))}
                {cobranzas.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-5 py-6 text-center text-muted">
                      Todo cobrado. 🎉
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="Libro de caja del mes">
          <div className="max-h-[360px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0">
                <tr className="border-b border-line bg-creamD/60 text-left text-xs uppercase tracking-wider text-muted backdrop-blur">
                  <th className="px-5 py-3 font-semibold">Fecha</th>
                  <th className="px-5 py-3 font-semibold">Concepto</th>
                  <th className="px-5 py-3 text-right font-semibold">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {movimientos.map((m) => (
                  <tr key={m.id} className="hover:bg-cream/50">
                    <td className="px-5 py-3.5 whitespace-nowrap text-muted">
                      {formatFechaCorta(m.fecha)}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2 text-ink">
                        {m.tipo === "ingreso" ? (
                          <ArrowUpRight size={14} className="text-sageD" />
                        ) : (
                          <ArrowDownRight size={14} className="text-terraD" />
                        )}
                        {m.concepto}
                      </div>
                      <div className="ml-6 text-xs text-muted">
                        {m.detalle} · {m.metodo}
                      </div>
                    </td>
                    <td
                      className={
                        "px-5 py-3.5 text-right font-medium " +
                        (m.tipo === "ingreso" ? "text-sageD" : "text-terraD")
                      }
                    >
                      {m.tipo === "ingreso" ? "+" : "−"}
                      {formatARS(Math.abs(m.monto))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>

      <p className="text-xs text-muted">
        Datos de demostración. La seña se asume en 40% al confirmar y el saldo al check-in;
        los métodos de cobro y el esquema de pago se ajustarán cuando el cliente los confirme
        (fase Supabase).
      </p>
    </div>
  );
}
