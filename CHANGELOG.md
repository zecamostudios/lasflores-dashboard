# Changelog — Dashboard Cabañas Las Flores

## [0.1.0] — 2026-06-21

### Added
- Inicialización del dashboard (Método Zecamo, repo-first en `zecamostudios/lasflores-dashboard`).
- Stack Next.js 15 + TypeScript + Tailwind v3 con el design system del sitio público
  (verde sierra / crema / terracota, Cormorant Garamond + Hanken Grotesk).
- `AppShell`: sidebar verde con navegación + topbar (búsqueda/avatar mock), responsive.
- Pantallas (datos mock): **Resumen** (KPIs + ocupación + próximas reservas), **Reservas**
  (tabla), **Calendario** (disponibilidad mensual de las 2 cabañas), **Cabañas** (2 unidades),
  **Huéspedes** (fichas).
- Modelo de dominio tipado (`Cabana`, `Huesped`, `Reserva`) preparado para Supabase.
- Spec en `docs/superpowers/specs/2026-06-21-dashboard-fase-visual-design.md`.

### Verificación
- `npm run build` ✓ — 6 rutas, tipos y lint OK. Rutas en dev: 5/5 → 200.

### Pendiente (próxima fase)
- Supabase (persistencia de reservas) + Clerk (login). Secciones Consultas / Reportes / Configuración.
