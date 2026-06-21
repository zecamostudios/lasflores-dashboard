# CLAUDE.md — Dashboard Cabañas Las Flores (Zecamo Studios)

Reglas para cualquier IA/IDE que trabaje este proyecto. **Obligatorias.**

## Identidad
- **Cliente:** Cabañas Las Flores (Tafí del Valle, Tucumán)
- **Repo:** https://github.com/zecamostudios/lasflores-dashboard (público)
- **Hermano:** sitio público estático en `zecamostudios/lasflores-web`.
- **Stack:** Next.js 15 (App Router) + TS + Tailwind v3 + lucide-react.
- **Fase actual:** SOLO VISUAL con datos mock. Supabase + Clerk vienen después.

## Mandamientos clave
1. NO ALUCINARÁS — solo lo pedido.
2. SEPARARÁS LÓGICA DE ESTILOS — Tailwind para estilos, lógica en TS.
7. USARÁS EL DESIGN SYSTEM — colores/fuentes de `tailwind.config.ts`; no hardcodear hex sueltos.
8. PROTEGERÁS CREDENCIALES — `.env` jamás se commitea; ver `.env.example`.
9. TIPARÁS TODO — cero `any`. Modelo en `src/lib/types.ts`.
13. PROTEGERÁS AL CLIENTE — al sumar datos reales, compliance + consentimiento.
14. HUELLA ZECAMO — atribución en el sidebar.

## Convenciones
- Datos mock en `src/lib/mock/data.ts`; tipos en `src/lib/types.ts` (mapean a Supabase).
- Formatters (ARS, fechas) en `src/lib/utils.ts`.
- Componentes compartidos en `src/components/`. Páginas en `src/app/<ruta>/page.tsx`.
- Colores Tailwind: `green sage terra cream creamD ink muted line`. Serif = títulos, sans = cuerpo.

## Próxima fase (no implementar sin pedido)
- Supabase: reemplazar imports de `mock/data` por queries; mantener las interfaces.
- Clerk: middleware + login + protección de rutas; actualizar compliance.

## Flujo de trabajo
`brainstorming → writing-plans → using-git-worktrees → subagent-driven-development →
verification-before-completion → requesting-code-review → finishing-a-development-branch`.
Verificar SIEMPRE con `npm run build` antes de cerrar.
