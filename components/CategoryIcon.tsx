import {
  faCode,
  faHeart,
  faPencilRuler,
  faStickyNote,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EBlogCategories } from "../enums/BlogCategories";

interface ICategoryIcon {
  category: EBlogCategories;
}
export const CategoryIcon = ({ category }: ICategoryIcon) => {
  switch (category) {
    case EBlogCategories.Uncategorized:
      return <FontAwesomeIcon icon={faStickyNote} />;
    case EBlogCategories.Development:
      return <FontAwesomeIcon icon={faCode} />;
    case EBlogCategories.Design:
      return <FontAwesomeIcon icon={faPencilRuler} />;
    case EBlogCategories.Miscellaneous:
      return <FontAwesomeIcon icon={faToolbox} />;
    case EBlogCategories.Updates:
      return <FontAwesomeIcon icon={faHeart} />;
    default:
      return <FontAwesomeIcon icon={faStickyNote} />;
  }
};
