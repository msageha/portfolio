import React from 'react';
import BudouXText from './BudouXText';

const createBudouXComponent = (tag: keyof JSX.IntrinsicElements) => {
  const BudouXComponent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    children,
    className = '',
    ...props
  }) => {
    return (
      <BudouXText as={tag} className={className} {...props}>
        {children}
      </BudouXText>
    );
  };

  return BudouXComponent;
};

export const mdxComponents = {
  p: createBudouXComponent('p'),
  h1: createBudouXComponent('h1'),
  h2: createBudouXComponent('h2'),
  h3: createBudouXComponent('h3'),
  h4: createBudouXComponent('h4'),
  h5: createBudouXComponent('h5'),
  h6: createBudouXComponent('h6'),
  li: createBudouXComponent('li'),
  blockquote: createBudouXComponent('blockquote'),
};
