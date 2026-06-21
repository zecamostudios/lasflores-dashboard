# Spec — Dashboard Cabañas Las Flores (fase visual)

**Fecha:** 2026-06-21 · **Estado:** implementado (v0.1.0)

## Objetivo
Panel de administración para Cabañas Las Flores con el mismo lenguaje visual del sitio
público. Esta fase es **solo visual** (datos mock); la persistencia (Supabase) y el login
(Clerk) se agregan en fases siguientes.

## Decisiones
- **Stack:** Next.js 15 (App Router) + TypeScript + Tailwind v3. Iconos: lucide-react.
- **Repo separado:** `zecamostudios/lasflores-dashboard` (el sitio público estático queda intacto).
- **Sin auth ni DB todavía.** Datos mock tipados con interfaces que mapean 1:1 a Supabase.
- **Calendario hecho a mano** (CSS grid), sin librería, para matchear el estilo.

## Design system
- Colores (Tailwind): `green #1A2B1C`, `sage #6E8F6F`, `terra #BF6A4A`, `cream #F7F2EA`, `line #e6ddcf`.
- Tipos: Cormorant Garamond (serif/títulos) + Hanken Grotesk (sans/cuerpo) vía `next/font`.
- Componentes: `AppShell` (sidebar+topbar), `StatCard`, `SectionCard`, `EstadoBadge`, `Chip`.

## Pantallas (alcance de esta fase)
1. **Resumen** (`/`): KPIs (ocupación, reservas, ingresos, próximos check-ins), gráfico de
   ocupación 6 meses (barras CSS), próximas reservas, estado de las 2 cabañas.
2. **Reservas** (`/reservas`): tabla con código, huésped, cabaña, estadía, canal, total, estado.
   Filtros + "Nueva reserva" (mock).
3. **Calendario** (`/calendario`): grilla mensual (junio 2026) con disponibilidad de las 2
   cabañas por día + leyenda.
4. **Cabañas** (`/cabanas`): cards de las 2 unidades (Premium/Confort) con capacidad, precio,
   amenities, estado.
5. **Huéspedes** (`/huespedes`): grid de fichas con contacto, ciudad, # reservas, última estadía.

## Modelo de datos (mock → Supabase)
`Cabana`, `Huesped`, `Reserva` (con `EstadoReserva`) en `src/lib/types.ts`. Mock en
`src/lib/mock/data.ts`. Al conectar Supabase, estas interfaces se vuelven los row types.

## Fuera de alcance (fases siguientes)
- **Reservas reales:** CRUD + disponibilidad sobre Supabase, registrar/cancelar.
- **Auth:** Clerk (login del staff, protección de rutas) — ver `.env.example`.
- Consultas (WhatsApp), Reportes, Configuración, Login estilado.

## Verificación
`npm run build` ✓ (6 rutas, tipos y lint OK). Dev server: 5/5 rutas → HTTP 200.
