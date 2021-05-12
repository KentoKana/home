import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
interface ITileProps {
  title: string;
  subTitle: string;
  bodyText: string;
  img: string;
}
export const Tile = ({ title, subTitle, bodyText, img }: ITileProps) => {
  return (
    <Card className="border-0">
      <CardImg top width="100%" src={img} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5" className="text--primary">
          {title}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {subTitle}
        </CardSubtitle>
        <CardText>{bodyText}</CardText>
      </CardBody>
    </Card>
  );
};
