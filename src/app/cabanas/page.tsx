import { Users, Pencil, BedDouble } from "lucide-react";
import { Chip } from "@/components/ui";
import { cabanas } from "@/lib/mock/data";
import { formatARS } from "@/lib/utils";

const estadoLabel = {
  disponible: { txt: "Disponible", cls: "bg-sage/15 text-sageD border-sage/30" },
  ocupada: { txt: "Ocupada", cls: "bg-terra/12 text-terraD border-terra/30" },
  mantenimiento: { txt: "Mantenimiento", cls: "bg-muted/10 text-muted border-muted/25" },
} as const;

export default function CabanasPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">
          Dos unidades independientes — privacidad total.
        </p>
        <button className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-muted hover:text-ink">
          <BedDouble size={16} /> Agregar unidad
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {cabanas.map((c) => {
          const est = estadoLabel[c.estado];
          return (
            <article key={c.id} className="card overflow-hidden">
              {/* "Foto" placeholder */}
              <div className="relative grid h-44 place-items-center bg-gradient-to-br from-greenSoft to-green text-6xl">
                {c.imagen}
                <span
                  className={`absolute right-4 top-4 inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium ${est.cls}`}
                >
                  {est.txt}
                </span>
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-0.5 text-xs font-semibold text-green">
                  {c.tipo}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h2 className="font-serif text-2xl font-semibold text-green">
                    {c.nombre}
                  </h2>
                  <button className="text-muted hover:text-terra" aria-label="Editar">
                    <Pencil size={17} />
                  </button>
                </div>

                <div className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <Users size={15} /> Hasta {c.capacidad} huéspedes
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {c.descripcion}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.amenities.map((a) => (
                    <Chip key={a}>{a}</Chip>
                  ))}
                </div>

                <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
                  <div>
                    <div className="eyebrow">Precio por noche</div>
                    <div className="font-serif text-2xl font-semibold text-green">
                      {formatARS(c.precioNoche)}
                    </div>
                  </div>
                  <button className="rounded-full bg-green px-4 py-2 text-sm font-medium text-white hover:bg-greenSoft">
                    Ver detalle
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
