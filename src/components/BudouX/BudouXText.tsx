import React, { useEffect, useRef } from 'react';
import { loadDefaultJapaneseParser } from 'budoux';

interface BudouXTextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const BudouXText: React.FC<BudouXTextProps> = ({
  children,
  className = '',
  as: Component = 'span'
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const applyBudouX = async () => {
      if (!elementRef.current) return;

      const parser = loadDefaultJapaneseParser();
      const element = elementRef.current;

      const processTextNode = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent) {
          const text = node.textContent;
          if (text.trim()) {
            const result = parser.parse(text);
            const fragment = document.createDocumentFragment();

            result.forEach((chunk, index) => {
              fragment.appendChild(document.createTextNode(chunk));
              if (index < result.length - 1) {
                const wbr = document.createElement('wbr');
                fragment.appendChild(wbr);
              }
            });

            node.parentNode?.replaceChild(fragment, node);
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const childNodes = Array.from(node.childNodes);
          childNodes.forEach(processTextNode);
        }
      };

      const childNodes = Array.from(element.childNodes);
      childNodes.forEach(processTextNode);
    };

    applyBudouX();
  }, [children]);

  return React.createElement(
    Component,
    { ref: elementRef, className },
    children
  );
};

export default BudouXText;
