'use client';

import { FC } from 'react';

type RemoveIconButtonProps = {
  onClick: () => void;
  ariaLabel: string;
};

const RemoveIconButton: FC<RemoveIconButtonProps> = ({ onClick, ariaLabel }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="
        rounded
        p-1
        text-red-600
        transition-colors
        hover:text-red-800
        focus:outline-none
        focus:ring-2
        focus:ring-red-500
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        className="size-5"
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
};

export default RemoveIconButton;
