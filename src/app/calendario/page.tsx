import { ChevronLeft, ChevronRight } from "lucide-react";
import { cabanas, reservas } from "@/lib/mock/data";

// Mes del mock: junio 2026
const YEAR = 2026;
const MONTH = 5; // 0-indexed → junio
const HOY = "2026-06-21";

function iso(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function ocupada(cabanaId: string, fecha: string): boolean {
  return reservas.some(
    (r) =>
      r.cabanaId === cabanaId &&
      r.estado !== "cancelada" &&
      r.checkIn <= fecha &&
      fecha < r.checkOut
  );
}

export default function CalendarioPage() {
  const diasEnMes = new Date(YEAR, MONTH + 1, 0).getDate();
  // getDay(): 0=Dom..6=Sáb → convertir a lunes-primero (0=Lun..6=Dom)
  const primerDia = (new Date(YEAR, MONTH, 1).getDay() + 6) % 7;
  const celdas: (number | null)[] = [
    ...Array(primerDia).fill(null),
    ...Array.from({ length: diasEnMes }, (_, i) => i + 1),
  ];
  const semanas = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  return (
    <div className="space-y-5">
      {/* Cabecera mes + leyenda */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-muted hover:text-ink">
            <ChevronLeft size={16} />
          </button>
          <span className="font-serif text-2xl font-semibold text-green">Junio 2026</span>
          <button className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-muted hover:text-ink">
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="ml-auto flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <i className="h-3 w-3 rounded-sm bg-terra/70" /> Premium ocupada
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="h-3 w-3 rounded-sm bg-sage/70" /> Confort ocupada
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="h-3 w-3 rounded-sm border border-line bg-white" /> Libre
          </span>
        </div>
      </div>

      <div className="card p-4 lg:p-6">
        {/* Encabezado días */}
        <div className="grid grid-cols-7 gap-2 pb-2">
          {semanas.map((d) => (
            <div
              key={d}
              className="text-center text-xs font-semibold uppercase tracking-wider text-muted"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Celdas */}
        <div className="grid grid-cols-7 gap-2">
          {celdas.map((dia, idx) => {
            if (dia === null) return <div key={`e${idx}`} />;
            const fecha = iso(YEAR, MONTH, dia);
            const esHoy = fecha === HOY;
            return (
              <div
                key={fecha}
                className={`min-h-[78px] rounded-lg border bg-white p-2 ${
                  esHoy ? "border-terra ring-1 ring-terra/40" : "border-line"
                }`}
              >
                <div
                  className={`mb-2 text-sm font-medium ${
                    esHoy ? "text-terraD" : "text-ink"
                  }`}
                >
                  {dia}
                </div>
                <div className="space-y-1">
                  {cabanas.map((c) => {
                    const occ = ocupada(c.id, fecha);
                    const color =
                      c.tipo === "Premium" ? "bg-terra/70" : "bg-sage/70";
                    return (
                      <div
                        key={c.id}
                        className={`h-2 rounded-sm ${
                          occ ? color : "border border-dashed border-line bg-transparent"
                        }`}
                        title={`${c.nombre}: ${occ ? "ocupada" : "libre"}`}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-muted">
        Disponibilidad calculada desde las reservas de demostración. La edición y el bloqueo
        de fechas llegan con la fase de reservas.
      </p>
    </div>
  );
}
