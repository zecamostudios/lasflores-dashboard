import { Plus, Filter } from "lucide-react";
import { EstadoBadge } from "@/components/ui";
import { reservasOrdenadas } from "@/lib/mock/data";
import { formatARS, formatFecha, noches } from "@/lib/utils";

export default function ReservasPage() {
  const items = reservasOrdenadas();

  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex gap-2">
          {["Todas", "Confirmadas", "Pendientes", "Canceladas"].map((f, i) => (
            <button
              key={f}
              className={
                i === 0
                  ? "rounded-full bg-green px-4 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-line bg-white px-4 py-1.5 text-sm text-muted hover:text-ink"
              }
            >
              {f}
            </button>
          ))}
        </div>
        <button className="ml-auto inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-muted hover:text-ink">
          <Filter size={15} /> Filtrar
        </button>
        <button className="inline-flex items-center gap-2 rounded-full bg-terra px-4 py-2 text-sm font-semibold text-white hover:bg-terraD">
          <Plus size={16} /> Nueva reserva
        </button>
      </div>

      {/* Tabla */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-creamD/40 text-left text-xs uppercase tracking-wider text-muted">
                <th className="px-5 py-3 font-semibold">Código</th>
                <th className="px-5 py-3 font-semibold">Huésped</th>
                <th className="px-5 py-3 font-semibold">Cabaña</th>
                <th className="px-5 py-3 font-semibold">Estadía</th>
                <th className="px-5 py-3 font-semibold">Canal</th>
                <th className="px-5 py-3 text-right font-semibold">Total</th>
                <th className="px-5 py-3 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {items.map((r) => (
                <tr key={r.id} className="hover:bg-cream/50">
                  <td className="px-5 py-3.5 font-mono text-xs text-muted">{r.codigo}</td>
                  <td className="px-5 py-3.5">
                    <div className="font-medium text-ink">{r.huespedNombre}</div>
                    <div className="text-xs text-muted">{r.huespedes} huéspedes</div>
                  </td>
                  <td className="px-5 py-3.5 text-ink">{r.cabanaNombre}</td>
                  <td className="px-5 py-3.5">
                    <div className="text-ink">
                      {formatFecha(r.checkIn)} → {formatFecha(r.checkOut)}
                    </div>
                    <div className="text-xs text-muted">
                      {noches(r.checkIn, r.checkOut)} noches
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-muted">{r.canal}</td>
                  <td className="px-5 py-3.5 text-right font-medium text-ink">
                    {formatARS(r.total)}
                  </td>
                  <td className="px-5 py-3.5">
                    <EstadoBadge estado={r.estado} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-muted">
        {items.length} reservas · datos de demostración (se conectarán a Supabase en la
        fase siguiente).
      </p>
    </div>
  );
}
