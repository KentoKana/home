import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "reactstrap";

export const Header = (): JSX.Element => {
  return (
    <>
      <header className="primary-header d-flex align-items-center">
        <Container>
          <ul className="d-flex justify-content-between primary-menu align-items-center">
            <li>Kento Kanazawa</li>
            <li>
              <ul className="d-flex menu-items">
                <li className="mx-2">
                  <a
                    href="https://www.linkedin.com/in/kentokana/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://github.com/kentokana/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Container>
      </header>
    </>
  );
};