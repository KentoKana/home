import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
interface ITileProps {
  title?: string;
  subTitle?: string;
  bodyText?: string;
  img?: string;
  imgAlt?: string;
}
export const Tile = ({
  title,
  subTitle,
  bodyText,
  img,
  imgAlt,
}: ITileProps) => {
  return (
    <Card className="border-0">
      {img && (
        <CardImg
          top
          width="100%"
          src={img}
          alt={imgAlt ?? ""}
          style={{ maxHeight: 140 }}
        />
      )}
      <CardBody>
        {title && (
          <CardTitle tag="h5" className="text--primary">
            {title}
          </CardTitle>
        )}
        {subTitle && (
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {subTitle}
          </CardSubtitle>
        )}
        {bodyText && <CardText>{bodyText}</CardText>}
      </CardBody>
    </Card>
  );
};
