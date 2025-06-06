import React, { useState } from 'react';

export default function PriceRangeSlider() {
   const [min, setMin] = useState(0);
   const [max, setMax] = useState(1000);

   return (
     <div
       role="slider"
       aria-valuemin={0}
       aria-valuemax={1000}
       aria-valuenow={max}
       className="w-full"
     >
       <input
         type="range"
         min={0}
         max={1000}
         value={min}
         onChange={(e) => setMin(Number(e.target.value))}
         aria-label="Valor mínimo"
       />
       <input
         type="range"
         min={0}
         max={1000}
         value={max}
         onChange={(e) => setMax(Number(e.target.value))}
         aria-label="Valor máximo"
       />
       <div>
         <span>R$ {min}</span> - <span>R$ {max}</span>
       </div>
     </div>
   );
 }
