import { Cabana, Huesped, Reserva } from "@/lib/types";

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
