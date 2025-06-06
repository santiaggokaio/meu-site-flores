import React, { useState } from 'react';

 type Tab = {
   label: string;
   content: React.ReactNode;
 };

export default function Tabs({ tabs }: { tabs: Tab[] }) {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
     <div>
       <div role="tablist" aria-label="Guia de navegação">
         {tabs.map((tab, idx) => (
           <button
             key={idx}
             role="tab"
             aria-selected={activeIndex === idx}
             aria-controls={`tabpanel-${idx}`}
             id={`tab-${idx}`}
             onClick={() => setActiveIndex(idx)}
             className={`px-4 py-2 font-semibold ${
               activeIndex === idx ? 'border-b-2' : ''
             }`}
           >
             {tab.label}
           </button>
         ))}
       </div>
       <div>
         {tabs.map((tab, idx) => (
           <div
             key={idx}
             role="tabpanel"
             id={`tabpanel-${idx}`}
             aria-labelledby={`tab-${idx}`}
             hidden={activeIndex !== idx}
             className="p-4"
           >
             {tab.content}
           </div>
         ))}
       </div>
     </div>
   );
 }
