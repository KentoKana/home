import { ReactNode } from "react";

interface IBaseSectionProps {
  children: ReactNode;
  sectionClassName?: string;
}
export const BaseSection = ({
  children,
  sectionClassName,
}: IBaseSectionProps) => {
  return <section className={`${sectionClassName ?? ""}`}>{children}</section>;
};
