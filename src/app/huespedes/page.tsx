import { Phone, Mail, MapPin, UserPlus } from "lucide-react";
import { huespedes } from "@/lib/mock/data";
import { formatFecha } from "@/lib/utils";

export default function HuespedesPage() {
  const items = [...huespedes].sort((a, b) => b.reservas - a.reservas);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">{items.length} huéspedes registrados</p>
        <button className="inline-flex items-center gap-2 rounded-full bg-terra px-4 py-2 text-sm font-semibold text-white hover:bg-terraD">
          <UserPlus size={16} /> Nuevo huésped
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((h) => (
          <article key={h.id} className="card p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-creamD font-serif text-lg font-semibold text-green">
                {h.nombre.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="truncate font-medium text-ink">{h.nombre}</div>
                <div className="flex items-center gap-1 text-xs text-muted">
                  <MapPin size={12} /> {h.ciudad}
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="font-serif text-xl font-semibold text-green">
                  {h.reservas}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted">
                  {h.reservas === 1 ? "reserva" : "reservas"}
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-1.5 border-t border-line pt-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Phone size={14} /> {h.telefono}
              </div>
              {h.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} /> <span className="truncate">{h.email}</span>
                </div>
              )}
            </div>

            {h.ultimaEstadia && (
              <div className="mt-3 text-xs text-muted">
                Última estadía: {formatFecha(h.ultimaEstadia)}
              </div>
            )}
          </article>
        ))}
      </div>

      <p className="text-xs text-muted">
        Datos de demostración — se conectarán a Supabase en la fase siguiente.
      </p>
    </div>
  );
}
