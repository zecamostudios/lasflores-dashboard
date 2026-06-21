import { Plus, Wallet, TrendingDown, Scale, Clock, Download } from "lucide-react";
import { StatCard, SectionCard, Chip } from "@/components/ui";
import {
  finanzas,
  cobranzasPendientes,
  cobradoPorMetodoMes,
  gastosDelMes,
} from "@/lib/mock/data";
import { formatARS, formatFechaCorta } from "@/lib/utils";

const maxSerie = Math.max(
  ...finanzas.serie.map((d) => Math.max(d.ingresos, d.gastos))
);

const totalMetodos = cobradoPorMetodoMes().reduce((a, m) => a + m.monto, 0);

export default function FinanzasPage() {
  const cobranzas = cobranzasPendientes();
  const metodos = cobradoPorMetodoMes();
  const egresos = gastosDelMes();
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

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Ingresos cobrados"
          value={formatARS(finanzas.ingresosCobradosMes)}
          delta={{ value: "señas + saldos del mes", positive: true }}
          icon={<Wallet size={18} />}
        />
        <StatCard
          label="Gastos del mes"
          value={formatARS(finanzas.gastosMes)}
          delta={{ value: `${egresos.length} movimientos` }}
          icon={<TrendingDown size={18} />}
        />
        <StatCard
          label="Resultado neto"
          value={formatARS(neto)}
          delta={{ value: neto >= 0 ? "ganancia" : "pérdida", positive: neto >= 0 }}
          icon={<Scale size={18} />}
        />
        <StatCard
          label="Pendiente de cobro"
          value={formatARS(finanzas.pendienteCobroTotal)}
          delta={{ value: `${cobranzas.length} reservas` }}
          icon={<Clock size={18} />}
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
          <ul className="divide-y divide-line">
            {metodos.map((m) => {
              const pct = totalMetodos ? Math.round((m.monto / totalMetodos) * 100) : 0;
              return (
                <li key={m.metodo} className="px-5 py-3.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{m.metodo}</span>
                    <span className="text-muted">{formatARS(m.monto)}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-creamD">
                    <div
                      className="h-full rounded-full bg-sage/80"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
            {metodos.length === 0 && (
              <li className="px-5 py-6 text-center text-sm text-muted">
                Sin cobros registrados este mes.
              </li>
            )}
          </ul>
        </SectionCard>
      </div>

      {/* Cobranzas pendientes + gastos */}
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
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="Gastos del mes">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-creamD/40 text-left text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-3 font-semibold">Fecha</th>
                  <th className="px-5 py-3 font-semibold">Concepto</th>
                  <th className="px-5 py-3 text-right font-semibold">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {egresos.map((g) => (
                  <tr key={g.id} className="hover:bg-cream/50">
                    <td className="px-5 py-3.5 whitespace-nowrap text-muted">
                      {formatFechaCorta(g.fecha)}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="text-ink">{g.descripcion}</div>
                      <div className="mt-0.5">
                        <Chip>{g.categoria}</Chip>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-right font-medium text-ink">
                      {formatARS(g.monto)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>

      <p className="text-xs text-muted">
        Datos de demostración. La seña se asume en {Math.round(0.4 * 100)}% al confirmar y
        el saldo al check-in; los métodos de cobro y el esquema de pago se ajustarán cuando
        el cliente los confirme (fase Supabase).
      </p>
    </div>
  );
}
