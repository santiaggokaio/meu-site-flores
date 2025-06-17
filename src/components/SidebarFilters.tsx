'use client'

import { useState } from 'react'
import { FunnelIcon } from '@heroicons/react/24/outline'

export default function SidebarFilters() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 md:hidden"
      >
        <FunnelIcon className="size-5" />
        <span>Filtrar</span>
      </button>
      <aside
        className={`${
          open ? 'block' : 'hidden'
        } mt-4 w-full border-r bg-white md:mt-0 md:block md:w-60`}
      >
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-semibold text-gray-900">Categorias</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Buquês</span>
              </label>
            </li>
            {/* ... demais itens ... */}
          </ul>
        </div>
      </aside>
    </>
  )
}
