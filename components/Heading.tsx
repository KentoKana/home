type Type = "primary" | "secondary";
interface IHeading {
  headingLabel: string;
  className?: string;
  headingType: Type;
  color?: Type;
  size?: "sm" | "md" | "lg";
}
export const Heading = ({
  headingLabel,
  className,
  headingType,
  color,
  size = "sm",
}: IHeading) => {
  const colorClassName = color ? "text--" + color : "";
  return (
    <h2
      style={{
        fontSize:
          size === "sm"
            ? "1em"
            : size === "md"
            ? "1.3em"
            : size === "lg"
            ? "2em"
            : "1em",
        lineHeight: 1.4,
      }}
      className={`${className ?? ""} ${
        "heading--" + headingType
      } ${colorClassName}`}
    >
      {headingLabel}
    </h2>
  );
};
