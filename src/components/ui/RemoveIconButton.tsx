import React from 'react';

 type Props = {
   onClick: () => void;
   ariaLabel: string;
 };

export default function RemoveIconButton({ onClick, ariaLabel }: Props) {
   return (
     <button onClick={onClick} aria-label={ariaLabel} className="p-1">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         className="h-5 w-5 text-red-600"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M6 18L18 6M6 6l12 12"
         />
       </svg>
     </button>
   );
 }
