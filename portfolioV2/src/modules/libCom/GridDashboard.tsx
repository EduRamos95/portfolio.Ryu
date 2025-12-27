// GridDashboard.tsx
import React from 'react'

const GridDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-4">
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-screen">
        {/* Sidebar izquierdo */}
        <div className="col-span-1 row-span-6 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
          {/* Contenido sidebar */}
        </div>

        {/* CONTENEDOR WRAPPER para Dungeon Dragon (col 3-9, row 1-6) */}
        <div className="col-start-3 col-span-7 row-start-1 row-span-6 relative">
          {/* Fondo y borde del contenedor con forma de L invertida usando clip-path */}
          <div
            className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 42.8% 100%, 42.8% 66.6%, 0 66.6%)'
            }}
          />

          {/* Grid interno para posicionar contenido */}
          <div className="relative h-full grid grid-cols-7 grid-rows-6 gap-4 p-4">
            {/* Contenido Dungeon Dragon - parte superior izquierda */}
            <div className="col-span-3 row-span-4 text-white p-2">
              <h1 className="text-5xl font-bold">Dungeon Dragon 2</h1>
              {/* Contenido adicional aquí */}
            </div>

            {/* Contenido Dungeon Dragon - parte derecha */}
            <div className="col-start-4 col-span-4 row-span-6 text-white p-2 relative">
              {/* Más contenido de Dungeon Dragon */}

              {/* Card de fecha DENTRO */}
              <div className="absolute bottom-4 left-4 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-xl p-6">
                <div className="text-center text-white">
                  <p className="text-xs text-white/60 mb-1">Oct, 2024</p>
                  <p className="text-5xl font-bold">02</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promo - INDEPENDIENTE (col 3-5, row 5-6) */}
        <div className="col-start-3 col-span-3 row-start-5 row-span-2 backdrop-blur-xl bg-white/5 rounded-bl-3xl rounded-br-3xl border-l border-b border-r border-white/10 shadow-2xl p-6 z-10">
          <h3 className="text-white/60 mb-2 text-sm">Promo</h3>
          <p className="text-white text-4xl font-bold">
            24<span className="text-sm ml-1 text-white/60">ready</span>
          </p>
          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-white/10 rounded-full text-white text-xs border border-white/20">
              20% off
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-white text-xs border border-white/20">
              Free Popcorn
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-white text-xs border border-white/20">
              5% off
            </span>
          </div>
        </div>

        {/* PANEL DERECHO - Columna derecha completa */}
        <div className="col-span-4 row-span-6 flex flex-col gap-4">
          {/* Slot (superior) */}
          <div className="flex-[2] backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-2xl font-bold">Slot</h2>
              <div className="text-white/60 text-xs text-right">
                <p>Cy cinema,</p>
                <p>23 Acantha St.</p>
              </div>
            </div>
            {/* Grid de asientos */}
          </div>

          {/* Casting (inferior) */}
          <div className="flex-1 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-bold">Casting</h3>
              <div className="flex gap-2">
                <button className="text-white/60 hover:text-white transition-colors">←</button>
                <button className="text-white/60 hover:text-white transition-colors">→</button>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
              <img
                src="/casting-image.jpg"
                alt="Casting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridDashboard
