import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-hot-pink" />
        ) : (
          <ChevronDown className="w-5 h-5 text-hot-pink" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white/5">
          <div className="text-gray-300">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;