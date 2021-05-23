interface IImageContainerProps {
  src: string;
  alt: string;
  rounded?: boolean;
}
export const ImageContainer = ({
  src,
  alt,
  rounded = false,
}: IImageContainerProps) => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        overflow: "hidden",
        borderRadius: rounded ? "0.25em" : undefined,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          objectFit: "cover",
          width: "100%",
        }}
      />
    </div>
  );
};
