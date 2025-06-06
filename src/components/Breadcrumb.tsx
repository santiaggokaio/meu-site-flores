import React from 'react';
import Link from 'next/link';

 type BreadcrumbItem = {
   href: string;
   label: string;
   current?: boolean;
 };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
   return (
     <nav aria-label="Breadcrumb">
       <ol className="flex items-center gap-1 text-sm">
         {items.map((item, idx) => (
           <li key={idx} className="flex items-center">
             <Link
               href={item.href}
               aria-current={item.current ? 'page' : undefined}
             >
               {item.label}
             </Link>
             {idx < items.length - 1 && <span className="mx-1">/</span>}
           </li>
         ))}
       </ol>
     </nav>
   );
 }
