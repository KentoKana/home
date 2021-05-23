import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Container } from "reactstrap";
import { useRouter } from "next/router";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Header = (): JSX.Element => {
  return (
    <>
      <header className="primary-header d-flex align-items-center">
        <Container>
          <ul className="d-flex justify-content-between primary-menu align-items-center">
            <li>
              <Link href={"/"}>
                <a>Kento Kanazawa</a>
              </Link>
            </li>
            <li>
              <ul className="d-flex menu-items">
                <li>
                  <ul className="">
                    <li className="mx-2">
                      <Link href={"/about"}>
                        <a>
                          <FontAwesomeIcon icon={faUser} title={"About"} />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.linkedin.com/in/kentokana/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} title={"LinkedIn"} />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://github.com/kentokana/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} title={"GitHub"} />
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
