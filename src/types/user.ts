import React from "react";

interface ClassName {
  className?: string;
}

interface Children {
  children: React.ReactNode;
}

interface WithChildrenAndClass extends Children, ClassName {}

type DivProps = React.ComponentProps<"div">;
type H2Props = React.ComponentProps<"h2">;
type H3Props = React.ComponentProps<"h3">;
type Paragraph = React.ComponentProps<"p">;

type DivWithChildrenAndClass = DivProps;

export type {
  ClassName,
  Children,
  WithChildrenAndClass,
  DivProps,
  H2Props,
  H3Props,
  DivWithChildrenAndClass,
  Paragraph,
};
