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
