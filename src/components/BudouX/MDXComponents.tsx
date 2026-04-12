import React from "react";
import BudouXText from "./BudouXText";

function getTextContent(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (typeof child === "number") return String(child);
      if (React.isValidElement(child)) {
        return getTextContent(
          (child.props as { children?: React.ReactNode }).children
        );
      }
      return "";
    })
    .join("");
}

function generateId(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const createBudouXComponent = (tag: keyof JSX.IntrinsicElements) => {
  const BudouXComponent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    children,
    className = "",
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

const createHeadingComponent = (
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
) => {
  const HeadingComponent: React.FC<
    React.HTMLAttributes<HTMLHeadingElement>
  > = ({ children, className = "", id, ...props }) => {
    const resolvedId = id ?? generateId(getTextContent(children));
    const idProp = resolvedId ? { id: resolvedId } : {};
    return (
      <BudouXText as={tag} className={className} {...idProp} {...props}>
        {children}
      </BudouXText>
    );
  };

  return HeadingComponent;
};

export const mdxComponents = {
  p: createBudouXComponent("p"),
  h1: createHeadingComponent("h1"),
  h2: createHeadingComponent("h2"),
  h3: createHeadingComponent("h3"),
  h4: createHeadingComponent("h4"),
  h5: createHeadingComponent("h5"),
  h6: createHeadingComponent("h6"),
  li: createBudouXComponent("li"),
  blockquote: createBudouXComponent("blockquote"),
};
