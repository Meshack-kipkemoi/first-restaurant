import type { H2Props, Paragraph, WithChildrenAndClass } from "../types/index";
import { cn } from "@/lib/utils";

const PictureText = ({
  children,
  className,
  ...props
}: WithChildrenAndClass) => {
  return (
    <div
      className={cn(
        `grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 lg:p-4  items-start ${className}`
      )}
      {...props}
    >
      {children}
    </div>
  );
};

function Section({
  children,
  className = "",
  ...props
}: WithChildrenAndClass & H2Props) {
  return (
    <section
      aria-labelledby="why-choose-us"
      className={cn(
        "flex flex-col gap-8 md:gap-10 lg:gap-12 px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function Header({
  children,
  className = "",
  ...props
}: WithChildrenAndClass & H2Props) {
  return (
    <div
      className={cn(`flex flex-col items-center gap-2 ${className}`)}
      {...props}
    >
      {children}
    </div>
  );
}

function Heading({
  children,
  className = "",
  ...props
}: WithChildrenAndClass & H2Props) {
  return (
    <h2
      className={cn(
        `text-2xl text-center lg:text-4xl font-semibold ${className}`
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

function Paragraph({
  children,
  className = "",
  ...props
}: WithChildrenAndClass & Paragraph) {
  return (
    <p className={cn(`text-xl text-start mb-4 ${className}`)} {...props}>
      {children}
    </p>
  );
}

export { Section, Header, Heading, PictureText, Paragraph };
