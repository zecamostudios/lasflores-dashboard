// Tipos del dominio. Mapean 1:1 a las futuras tablas de Supabase.

export type EstadoReserva = "confirmada" | "pendiente" | "cancelada";

export interface Cabana {
  id: string;
  nombre: string;
  tipo: "Premium" | "Confort";
  capacidad: number;
  precioNoche: number; // ARS
  amenities: string[];
  estado: "disponible" | "ocupada" | "mantenimiento";
  imagen: string; // URL/emoji placeholder por ahora
  descripcion: string;
}

export interface Huesped {
  id: string;
  nombre: string;
  telefono: string;
  email?: string;
  ciudad: string;
  reservas: number;
  ultimaEstadia?: string; // ISO date
}

export interface Reserva {
  id: string;
  codigo: string; // ej. LF-0231
  huespedId: string;
  huespedNombre: string;
  cabanaId: string;
  cabanaNombre: string;
  checkIn: string; // ISO date
  checkOut: string; // ISO date
  huespedes: number;
  total: number; // ARS
  estado: EstadoReserva;
  canal: "WhatsApp" | "Instagram" | "Directo";
}

// ---- Finanzas ----
// Métodos de cobro/pago. Lista amplia por ahora; se recorta cuando el cliente
// confirme cómo cobra (la fase Supabase mapea esto a un enum).
export type MetodoPago = "Transferencia" | "Efectivo" | "Mercado Pago" | "Tarjeta";

// Un pago imputado a una reserva. Modela el esquema seña + saldo:
//   tipo "seña"  → adelanto al confirmar
//   tipo "saldo" → resto al check-in
//   tipo "total" → cobro único (si el cliente cobra todo junto)
export type TipoPago = "seña" | "saldo" | "total";

export interface Pago {
  id: string;
  reservaId: string;
  fecha: string; // ISO date
  monto: number; // ARS
  metodo: MetodoPago;
  tipo: TipoPago;
}

export type CategoriaGasto =
  | "Limpieza"
  | "Mantenimiento"
  | "Servicios" // luz, gas, agua, internet
  | "Insumos"
  | "Comisiones" // canales / pasarelas
  | "Marketing"
  | "Otros";

export interface Gasto {
  id: string;
  fecha: string; // ISO date
  categoria: CategoriaGasto;
  descripcion: string;
  monto: number; // ARS
  metodo: MetodoPago;
  cabanaId?: string; // opcional: gasto atribuible a una cabaña
}
