# Cabañas Las Flores · Dashboard

Panel de administración de **Cabañas Las Flores** (Tafí del Valle, Tucumán). Reservas,
calendario de disponibilidad, cabañas y huéspedes.

> Desarrollado por **[Zecamo Studios](https://zecamostudios.com)**.

## Estado
**v0.1.0 — fase visual.** Toda la UI funciona con **datos mock**. La persistencia
(Supabase) y el login (Clerk) se agregan en la fase siguiente.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v3 (design system del sitio: verde sierra / crema / terracota)
- lucide-react (iconos)

## Correr en local
```bash
npm install
npm run dev
```
Abrí http://localhost:3000

## Build
```bash
npm run build && npm start
```

## Estructura
```
src/
├── app/
│   ├── layout.tsx          → shell + fuentes
│   ├── page.tsx            → Resumen
│   ├── reservas/           → Reservas
│   ├── calendario/         → Calendario de disponibilidad
│   ├── cabanas/            → Cabañas (2 unidades)
│   └── huespedes/          → Huéspedes
├── components/
│   ├── app-shell.tsx       → sidebar + topbar
│   └── ui.tsx              → StatCard, SectionCard, EstadoBadge, Chip
└── lib/
    ├── types.ts            → modelo (mapea a Supabase)
    ├── utils.ts            → formatters (ARS, fechas)
    └── mock/data.ts        → datos de demostración
```

## Próxima fase
- Conectar **Supabase** (reservas reales, disponibilidad, huéspedes).
- Integrar **Clerk** (login del staff). Variables en `.env.example`.
- Secciones: Consultas (WhatsApp), Reportes, Configuración.

---
© Cabañas Las Flores · Desarrollado por [Zecamo Studios](https://zecamostudios.com)
