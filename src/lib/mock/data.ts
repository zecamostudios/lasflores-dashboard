import {
  Cabana,
  Huesped,
  Reserva,
  Pago,
  Gasto,
  MetodoPago,
} from "@/lib/types";

export const cabanas: Cabana[] = [
  {
    id: "cab-premium",
    nombre: "Cabaña Premium",
    tipo: "Premium",
    capacidad: 4,
    precioNoche: 78000,
    amenities: ["Chimenea", "Vista al valle", "Cocina equipada", "Wi-Fi"],
    estado: "ocupada",
    imagen: "🏔️",
    descripcion:
      "Ventanal con vista al valle, chimenea y living propio. Para quedarse adentro mirando la sierra.",
  },
  {
    id: "cab-confort",
    nombre: "Cabaña Confort",
    tipo: "Confort",
    capacidad: 6,
    precioNoche: 64000,
    amenities: ["Parrilla privada", "Cocina equipada", "Estacionamiento", "Wi-Fi"],
    estado: "disponible",
    imagen: "🌲",
    descripcion:
      "Amplia y luminosa, con camas separadas y mucho espacio. La elegida por familias y grupos.",
  },
];

export const huespedes: Huesped[] = [
  { id: "h1", nombre: "Mariana Gómez", telefono: "+54 9 351 244-1187", email: "mariana.gomez@gmail.com", ciudad: "Córdoba", reservas: 3, ultimaEstadia: "2026-06-12" },
  { id: "h2", nombre: "Joaquín Ferreyra", telefono: "+54 9 381 567-2290", email: "joaco.ferreyra@gmail.com", ciudad: "San Miguel de Tucumán", reservas: 2, ultimaEstadia: "2026-06-20" },
  { id: "h3", nombre: "Lucía Sosa", telefono: "+54 9 387 410-9921", ciudad: "Salta", reservas: 1, ultimaEstadia: "2026-05-29" },
  { id: "h4", nombre: "Familia Robledo", telefono: "+54 9 11 6233-7745", email: "robledo.flia@gmail.com", ciudad: "Buenos Aires", reservas: 2, ultimaEstadia: "2026-06-24" },
  { id: "h5", nombre: "Diego Paz", telefono: "+54 9 385 228-3310", ciudad: "Santiago del Estero", reservas: 1, ultimaEstadia: "2026-07-05" },
  { id: "h6", nombre: "Carla Medina", telefono: "+54 9 261 339-4408", email: "carlamedina@hotmail.com", ciudad: "Mendoza", reservas: 1 },
  { id: "h7", nombre: "Tomás Aguirre", telefono: "+54 9 381 902-5567", ciudad: "Yerba Buena", reservas: 4, ultimaEstadia: "2026-06-08" },
  { id: "h8", nombre: "Valentina Ríos", telefono: "+54 9 388 144-7782", email: "vale.rios@gmail.com", ciudad: "San Salvador de Jujuy", reservas: 1 },
];

export const reservas: Reserva[] = [
  { id: "r1", codigo: "LF-0231", huespedId: "h2", huespedNombre: "Joaquín Ferreyra", cabanaId: "cab-premium", cabanaNombre: "Cabaña Premium", checkIn: "2026-06-20", checkOut: "2026-06-24", huespedes: 4, total: 312000, estado: "confirmada", canal: "WhatsApp" },
  { id: "r2", codigo: "LF-0232", huespedId: "h4", huespedNombre: "Familia Robledo", cabanaId: "cab-confort", cabanaNombre: "Cabaña Confort", checkIn: "2026-06-24", checkOut: "2026-06-28", huespedes: 6, total: 256000, estado: "confirmada", canal: "WhatsApp" },
  { id: "r3", codigo: "LF-0233", huespedId: "h6", huespedNombre: "Carla Medina", cabanaId: "cab-premium", cabanaNombre: "Cabaña Premium", checkIn: "2026-06-27", checkOut: "2026-06-30", huespedes: 2, total: 234000, estado: "pendiente", canal: "Instagram" },
  { id: "r4", codigo: "LF-0234", huespedId: "h5", huespedNombre: "Diego Paz", cabanaId: "cab-confort", cabanaNombre: "Cabaña Confort", checkIn: "2026-07-05", checkOut: "2026-07-09", huespedes: 5, total: 256000, estado: "confirmada", canal: "Directo" },
  { id: "r5", codigo: "LF-0235", huespedId: "h8", huespedNombre: "Valentina Ríos", cabanaId: "cab-premium", cabanaNombre: "Cabaña Premium", checkIn: "2026-07-10", checkOut: "2026-07-13", huespedes: 3, total: 234000, estado: "pendiente", canal: "WhatsApp" },
  { id: "r6", codigo: "LF-0230", huespedId: "h1", huespedNombre: "Mariana Gómez", cabanaId: "cab-premium", cabanaNombre: "Cabaña Premium", checkIn: "2026-06-09", checkOut: "2026-06-12", huespedes: 2, total: 234000, estado: "confirmada", canal: "WhatsApp" },
  { id: "r7", codigo: "LF-0229", huespedId: "h7", huespedNombre: "Tomás Aguirre", cabanaId: "cab-confort", cabanaNombre: "Cabaña Confort", checkIn: "2026-06-05", checkOut: "2026-06-08", huespedes: 4, total: 192000, estado: "confirmada", canal: "WhatsApp" },
  { id: "r8", codigo: "LF-0236", huespedId: "h3", huespedNombre: "Lucía Sosa", cabanaId: "cab-confort", cabanaNombre: "Cabaña Confort", checkIn: "2026-07-18", checkOut: "2026-07-21", huespedes: 4, total: 192000, estado: "pendiente", canal: "Instagram" },
  { id: "r9", codigo: "LF-0228", huespedId: "h3", huespedNombre: "Lucía Sosa", cabanaId: "cab-premium", cabanaNombre: "Cabaña Premium", checkIn: "2026-05-26", checkOut: "2026-05-29", huespedes: 2, total: 234000, estado: "cancelada", canal: "WhatsApp" },
  { id: "r10", codigo: "LF-0237", huespedId: "h4", huespedNombre: "Familia Robledo", cabanaId: "cab-confort", cabanaNombre: "Cabaña Confort", checkIn: "2026-07-25", checkOut: "2026-07-30", huespedes: 6, total: 320000, estado: "confirmada", canal: "Directo" },
];

// ---- Métricas derivadas (mock) para el Resumen ----
export const metricas = {
  ocupacionMes: 72, // %
  reservasMes: 8,
  ingresosMes: 1486000, // ARS
  proximosCheckIns: 3,
  // ocupación últimos 6 meses (%) para el mini-gráfico
  ocupacionSerie: [
    { mes: "Ene", valor: 81 },
    { mes: "Feb", valor: 88 },
    { mes: "Mar", valor: 64 },
    { mes: "Abr", valor: 49 },
    { mes: "May", valor: 58 },
    { mes: "Jun", valor: 72 },
  ],
};

export function reservasOrdenadas(): Reserva[] {
  return [...reservas].sort((a, b) => a.checkIn.localeCompare(b.checkIn));
}

export function proximasReservas(limit = 5): Reserva[] {
  const hoy = "2026-06-21"; // "hoy" del mock
  return reservasOrdenadas()
    .filter((r) => r.estado !== "cancelada" && r.checkOut >= hoy)
    .slice(0, limit);
}

// ============================================================
//  FINANZAS (mock)
//  Modelado en el caso más completo: seña + saldo, ingresos y
//  gastos, varios métodos de pago. Cuando el cliente confirme
//  cómo cobra, la fase Supabase recorta lo que no use.
// ============================================================

const HOY = "2026-06-21";
const SENA_PCT = 0.4; // seña 40% al confirmar; saldo 60% al check-in

function addDias(iso: string, dias: number): string {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + dias);
  return d.toISOString().slice(0, 10);
}

function metodoSena(r: Reserva): MetodoPago {
  return r.canal === "Instagram" ? "Mercado Pago" : "Transferencia";
}

// Genera los pagos de una reserva. Solo las confirmadas tienen seña
// cobrada; el saldo se imputa cuando el huésped ya llegó (check-in pasado).
function pagosDeReserva(r: Reserva): Pago[] {
  if (r.estado !== "confirmada") return [];
  const sena = Math.round(r.total * SENA_PCT);
  const saldo = r.total - sena;
  const pagos: Pago[] = [
    {
      id: `${r.id}-sena`,
      reservaId: r.id,
      fecha: addDias(r.checkIn, -18),
      monto: sena,
      metodo: metodoSena(r),
      tipo: "seña",
    },
  ];
  if (r.checkIn <= HOY) {
    pagos.push({
      id: `${r.id}-saldo`,
      reservaId: r.id,
      fecha: r.checkIn,
      monto: saldo,
      metodo: "Efectivo",
      tipo: "saldo",
    });
  }
  return pagos;
}

export const pagos: Pago[] = reservas.flatMap(pagosDeReserva);

export const gastos: Gasto[] = [
  { id: "g1", fecha: "2026-06-02", categoria: "Limpieza", descripcion: "Limpieza profunda post check-out", monto: 18000, metodo: "Efectivo", cabanaId: "cab-premium" },
  { id: "g2", fecha: "2026-06-04", categoria: "Servicios", descripcion: "Factura de luz — mayo", monto: 34500, metodo: "Transferencia" },
  { id: "g3", fecha: "2026-06-07", categoria: "Mantenimiento", descripcion: "Reparación de calefón Confort", monto: 42000, metodo: "Transferencia", cabanaId: "cab-confort" },
  { id: "g4", fecha: "2026-06-10", categoria: "Insumos", descripcion: "Reposición amenities y ropa blanca", monto: 28700, metodo: "Mercado Pago" },
  { id: "g5", fecha: "2026-06-12", categoria: "Servicios", descripcion: "Internet + gas envasado", monto: 21300, metodo: "Transferencia" },
  { id: "g6", fecha: "2026-06-15", categoria: "Marketing", descripcion: "Campaña Instagram Ads", monto: 25000, metodo: "Tarjeta" },
  { id: "g7", fecha: "2026-06-18", categoria: "Limpieza", descripcion: "Servicio de limpieza quincenal", monto: 30000, metodo: "Efectivo" },
  { id: "g8", fecha: "2026-06-20", categoria: "Comisiones", descripcion: "Comisión Mercado Pago", monto: 9400, metodo: "Mercado Pago" },
];

const enMes = (iso: string, mes: string) => iso.startsWith(mes);

// Lo ya pagado por una reserva (suma de sus pagos).
export function pagadoDeReserva(reservaId: string): number {
  return pagos
    .filter((p) => p.reservaId === reservaId)
    .reduce((acc, p) => acc + p.monto, 0);
}

// Reservas activas con saldo pendiente de cobro (no canceladas).
export interface CobranzaPendiente {
  reserva: Reserva;
  pagado: number;
  pendiente: number;
}

export function cobranzasPendientes(): CobranzaPendiente[] {
  return reservas
    .filter((r) => r.estado !== "cancelada")
    .map((r) => {
      const pagado = pagadoDeReserva(r.id);
      return { reserva: r, pagado, pendiente: r.total - pagado };
    })
    .filter((c) => c.pendiente > 0)
    .sort((a, b) => a.reserva.checkIn.localeCompare(b.reserva.checkIn));
}

// Métricas del mes en curso (junio 2026) para la pantalla de Finanzas.
const MES_ACTUAL = "2026-06";

export const finanzas = {
  mesLabel: "Junio 2026",
  ingresosCobradosMes: pagos
    .filter((p) => enMes(p.fecha, MES_ACTUAL))
    .reduce((a, p) => a + p.monto, 0),
  gastosMes: gastos
    .filter((g) => enMes(g.fecha, MES_ACTUAL))
    .reduce((a, g) => a + g.monto, 0),
  get resultadoNetoMes() {
    return this.ingresosCobradosMes - this.gastosMes;
  },
  pendienteCobroTotal: cobranzasPendientes().reduce((a, c) => a + c.pendiente, 0),

  // Ingresos facturados vs gastos, últimos 6 meses (mock).
  serie: [
    { mes: "Ene", ingresos: 1320000, gastos: 240000 },
    { mes: "Feb", ingresos: 1480000, gastos: 255000 },
    { mes: "Mar", ingresos: 980000, gastos: 210000 },
    { mes: "Abr", ingresos: 760000, gastos: 195000 },
    { mes: "May", ingresos: 1150000, gastos: 225000 },
    { mes: "Jun", ingresos: 1486000, gastos: 208900 },
  ],
};

// Distribución de lo cobrado en el mes por método de pago.
export function cobradoPorMetodoMes(): { metodo: MetodoPago; monto: number }[] {
  const acc = new Map<MetodoPago, number>();
  for (const p of pagos.filter((p) => enMes(p.fecha, MES_ACTUAL))) {
    acc.set(p.metodo, (acc.get(p.metodo) ?? 0) + p.monto);
  }
  return [...acc.entries()]
    .map(([metodo, monto]) => ({ metodo, monto }))
    .sort((a, b) => b.monto - a.monto);
}

// Gastos del mes ordenados por fecha (más recientes primero).
export function gastosDelMes(): Gasto[] {
  return gastos
    .filter((g) => enMes(g.fecha, MES_ACTUAL))
    .sort((a, b) => b.fecha.localeCompare(a.fecha));
}

// Reservas con check-in dentro del mes en curso (excluye canceladas).
export function reservasDelMes(): Reserva[] {
  return reservas.filter(
    (r) => r.estado !== "cancelada" && enMes(r.checkIn, MES_ACTUAL)
  );
}

// Facturado del mes (total de las reservas del mes, cobrado o no).
export function facturadoMes(): number {
  return reservasDelMes().reduce((a, r) => a + r.total, 0);
}

// Indicadores operativos del mes derivados de las reservas.
export function indicadoresMes() {
  const delMes = reservasDelMes();
  const noches = delMes.reduce(
    (a, r) =>
      a +
      Math.max(
        1,
        Math.round(
          (new Date(r.checkOut).getTime() - new Date(r.checkIn).getTime()) /
            86400000
        )
      ),
    0
  );
  const facturado = facturadoMes();
  return {
    reservas: delMes.length,
    nochesVendidas: noches,
    ticketPromedio: delMes.length ? Math.round(facturado / delMes.length) : 0,
    tarifaNocheProm: noches ? Math.round(facturado / noches) : 0,
  };
}

// Ingresos facturados del mes por cabaña, con gastos atribuidos y neto.
export interface RentabilidadCabana {
  cabanaId: string;
  nombre: string;
  ingresos: number;
  gastosAtribuidos: number;
  neto: number;
}

export function rentabilidadPorCabana(): RentabilidadCabana[] {
  const delMes = reservasDelMes();
  return cabanas.map((c) => {
    const ingresos = delMes
      .filter((r) => r.cabanaId === c.id)
      .reduce((a, r) => a + r.total, 0);
    const gastosAtribuidos = gastos
      .filter((g) => g.cabanaId === c.id && enMes(g.fecha, MES_ACTUAL))
      .reduce((a, g) => a + g.monto, 0);
    return {
      cabanaId: c.id,
      nombre: c.nombre,
      ingresos,
      gastosAtribuidos,
      neto: ingresos - gastosAtribuidos,
    };
  });
}

// Facturación del mes por canal de venta.
export function ingresosPorCanal(): { canal: Reserva["canal"]; monto: number }[] {
  const canales: Reserva["canal"][] = ["WhatsApp", "Instagram", "Directo"];
  return canales
    .map((canal) => ({
      canal,
      monto: reservasDelMes()
        .filter((r) => r.canal === canal)
        .reduce((a, r) => a + r.total, 0),
    }))
    .sort((a, b) => b.monto - a.monto);
}

// Gastos del mes agrupados por categoría.
export function gastosPorCategoria(): { categoria: Gasto["categoria"]; monto: number }[] {
  const acc = new Map<Gasto["categoria"], number>();
  for (const g of gastosDelMes()) {
    acc.set(g.categoria, (acc.get(g.categoria) ?? 0) + g.monto);
  }
  return [...acc.entries()]
    .map(([categoria, monto]) => ({ categoria, monto }))
    .sort((a, b) => b.monto - a.monto);
}

// Libro de caja del mes: pagos entrantes (+) y gastos salientes (−) mezclados.
export interface Movimiento {
  id: string;
  fecha: string;
  concepto: string;
  detalle: string;
  metodo: MetodoPago;
  monto: number; // positivo = ingreso, negativo = egreso
  tipo: "ingreso" | "egreso";
}

export function movimientosMes(): Movimiento[] {
  const ingresos: Movimiento[] = pagos
    .filter((p) => enMes(p.fecha, MES_ACTUAL))
    .map((p) => {
      const r = reservas.find((x) => x.id === p.reservaId);
      return {
        id: `mov-${p.id}`,
        fecha: p.fecha,
        concepto: p.tipo === "seña" ? "Seña de reserva" : "Saldo de reserva",
        detalle: r ? `${r.huespedNombre} · ${r.codigo}` : p.reservaId,
        metodo: p.metodo,
        monto: p.monto,
        tipo: "ingreso" as const,
      };
    });
  const egresos: Movimiento[] = gastosDelMes().map((g) => ({
    id: `mov-${g.id}`,
    fecha: g.fecha,
    concepto: g.categoria,
    detalle: g.descripcion,
    metodo: g.metodo,
    monto: -g.monto,
    tipo: "egreso" as const,
  }));
  return [...ingresos, ...egresos].sort((a, b) => b.fecha.localeCompare(a.fecha));
}
