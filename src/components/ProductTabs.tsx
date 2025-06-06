import React, { useState } from 'react';

 type Props = {
   description: string;
   specifications: Record<string, string>;
   reviews: { id: string; author: string; text: string; rating: number }[];
 };

export default function ProductTabs({ description, specifications, reviews }: Props) {
   const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

   return (
     <div>
       <div role="tablist" aria-label="Informações do produto">
         <button
           role="tab"
           aria-selected={activeTab === 'description'}
           aria-controls="tabpanel-description"
           id="tab-description"
           onClick={() => setActiveTab('description')}
           className={`px-4 py-2 ${
             activeTab === 'description' ? 'border-b-2' : ''
           }`}
         >
           Descrição
         </button>
         <button
           role="tab"
           aria-selected={activeTab === 'specs'}
           aria-controls="tabpanel-specs"
           id="tab-specs"
           onClick={() => setActiveTab('specs')}
           className={`px-4 py-2 ${activeTab === 'specs' ? 'border-b-2' : ''}`}
         >
           Especificações
         </button>
         <button
           role="tab"
           aria-selected={activeTab === 'reviews'}
           aria-controls="tabpanel-reviews"
           id="tab-reviews"
           onClick={() => setActiveTab('reviews')}
           className={`px-4 py-2 ${
             activeTab === 'reviews' ? 'border-b-2' : ''
           }`}
         >
           Avaliações
         </button>
       </div>

       <div>
         {activeTab === 'description' && (
           <div
             role="tabpanel"
             id="tabpanel-description"
             aria-labelledby="tab-description"
             className="p-4"
           >
             <p>{description}</p>
           </div>
         )}
         {activeTab === 'specs' && (
           <div
             role="tabpanel"
             id="tabpanel-specs"
             aria-labelledby="tab-specs"
             className="p-4"
           >
             <ul>
               {Object.entries(specifications).map(([key, value]) => (
                 <li key={key}>
                   <strong>{key}:</strong> {value}
                 </li>
               ))}
             </ul>
           </div>
         )}
         {activeTab === 'reviews' && (
           <div
             role="tabpanel"
             id="tabpanel-reviews"
             aria-labelledby="tab-reviews"
             className="p-4"
           >
             {reviews.length === 0 ? (
               <p>Nenhuma avaliação ainda.</p>
             ) : (
               <ul>
                 {reviews.map((r) => (
                   <li key={r.id} className="border-b py-2">
                     <p>
                       <strong>{r.author}</strong> – Nota: {r.rating}/5
                     </p>
                     <p>{r.text}</p>
                   </li>
                 ))}
               </ul>
             )}
           </div>
         )}
       </div>
     </div>
   );
 }
