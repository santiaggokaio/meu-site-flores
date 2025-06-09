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
        <FunnelIcon className="h-5 w-5" />
        <span>Filtrar</span>
      </button>
      <aside
        className={`${
          open ? 'block' : 'hidden'
        } md:block w-full md:w-60 bg-white border-r mt-4 md:mt-0`}
      >
        <div className="p-4 space-y-4">
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
