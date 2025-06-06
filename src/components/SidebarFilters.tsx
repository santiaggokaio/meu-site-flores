import React from 'react';

export default function SidebarFilters() {
  return (
    <aside aria-label="Filtros de produtos" className="bg-white rounded-card shadow-card p-6 mb-8">
      <h2 className="text-lg font-semibold text-textDark mb-4 uppercase">Filtros</h2>

      {/* Filtro por Categoria */}
      <div className="mb-6">
        <label htmlFor="category" className="block text-textDark font-medium mb-2">
          Categoria
        </label>
        <select
          id="category"
          aria-label="Selecione uma categoria"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
        >
          <option value="">Todas</option>
          {/* Popule dinamicamente conforme categorias */}
        </select>
      </div>

      {/* Filtro por Faixa de Preço */}
      <div>
        <label htmlFor="price" className="block text-textDark font-medium mb-2">
          Faixa de Preço
        </label>
        {/* Aqui entraria um componente PriceRangeSlider, estilizado assim: */}
        <div className="w-full">
          {/* Exemplo de mock de slider (substitua pelo seu PriceRangeSlider) */}
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="1000"
            className="w-full h-2 bg-grayLight rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-textDark mt-1">
            <span>R$ 0</span>
            <span>R$ 1.000</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
