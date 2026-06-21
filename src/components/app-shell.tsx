"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  CalendarCheck,
  CalendarDays,
  TreePine,
  Users,
  Search,
  Menu,
  X,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Resumen", icon: LayoutDashboard },
  { href: "/reservas", label: "Reservas", icon: CalendarCheck },
  { href: "/calendario", label: "Calendario", icon: CalendarDays },
  { href: "/cabanas", label: "Cabañas", icon: TreePine },
  { href: "/huespedes", label: "Huéspedes", icon: Users },
];

const titulos: Record<string, string> = {
  "/": "Resumen",
  "/reservas": "Reservas",
  "/calendario": "Calendario",
  "/cabanas": "Cabañas",
  "/huespedes": "Huéspedes",
};

function Brand() {
  return (
    <div className="flex items-center gap-3 px-6 py-6">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-cream">
        <TreePine size={20} className="text-terra" />
      </div>
      <div className="leading-none">
        <div className="font-serif text-[22px] font-semibold text-white">Las Flores</div>
        <div className="mt-1 text-[9px] uppercase tracking-[0.26em] text-cream/55">
          Tafí del Valle
        </div>
      </div>
    </div>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="flex-1 space-y-1 px-3">
      {nav.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-4 py-2.5 text-[14.5px] font-medium transition-colors",
              active
                ? "bg-white/10 text-white"
                : "text-cream/70 hover:bg-white/5 hover:text-white"
            )}
          >
            <Icon size={18} className={active ? "text-terra" : "text-cream/60"} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const titulo = titulos[pathname] ?? "Panel";

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[264px_1fr]">
      {/* Sidebar desktop */}
      <aside className="sticky top-0 hidden h-screen flex-col bg-green lg:flex">
        <Brand />
        <NavLinks />
        <div className="border-t border-white/10 px-6 py-4 text-[11px] text-cream/45">
          Desarrollado por{" "}
          <a
            href="https://zecamostudios.com"
            target="_blank"
            rel="noopener"
            className="text-cream/70 hover:text-terra"
          >
            Zecamo Studios
          </a>
        </div>
      </aside>

      {/* Sidebar mobile (overlay) */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-72 flex-col bg-green">
            <div className="flex items-center justify-between pr-4">
              <Brand />
              <button
                onClick={() => setOpen(false)}
                className="text-cream/70 hover:text-white"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>
            <NavLinks onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      {/* Columna principal */}
      <div className="flex min-h-screen flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-40 flex items-center gap-4 border-b border-line bg-cream/85 px-5 py-3.5 backdrop-blur lg:px-8">
          <button
            onClick={() => setOpen(true)}
            className="text-ink lg:hidden"
            aria-label="Abrir menú"
          >
            <Menu size={22} />
          </button>
          <h1 className="font-serif text-2xl font-semibold text-green">{titulo}</h1>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm text-muted sm:flex">
              <Search size={16} />
              <input
                placeholder="Buscar…"
                className="w-32 bg-transparent outline-none placeholder:text-muted/70"
              />
            </div>
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-muted hover:text-ink"
              aria-label="Notificaciones"
            >
              <Bell size={17} />
            </button>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-sage font-semibold text-white">
              LF
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 py-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
