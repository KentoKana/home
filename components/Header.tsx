import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { Button, Container } from "reactstrap";

export const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="primary-header d-flex align-items-center">
        <Container>
          <ul className="d-flex justify-content-between primary-menu align-items-center">
            <li>
              <Link href={"/"} shallow>
                <a>
                  <img
                    className="d-none d-lg-block"
                    src={"/images/logo.png"}
                    alt={"Kento Kanazawa logo"}
                    style={{ height: 100 }}
                  />
                  <img
                    className="d-lg-none d-block"
                    src={"/images/logo_small.png"}
                    alt={"Kento Kanazawa logo"}
                    style={{ height: 70 }}
                  />
                </a>
              </Link>
            </li>
            <li className="d-block d-md-none m-2 position-relative">
              {/* Mobile Menu */}
              <Link href="#">
                <a onClick={() => setMobileMenuOpen((prev) => !prev)}>
                  <FontAwesomeIcon icon={faBars} />
                </a>
              </Link>
              {mobileMenuOpen && (
                <>
                  <ul className="menu-items--mobile text-center">
                    <li className="mb-3">
                      <Link href={"/"} shallow>
                        <a onClick={() => setMobileMenuOpen(false)}>Home</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href={"/about"} shallow>
                        <a onClick={() => setMobileMenuOpen(false)}>About</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <a
                        href="https://resume.kentokanazawa.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Resume
                      </a>
                    </li>
                    <li>
                      <ul className="d-flex justify-content-center">
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
                  <Button
                    className="menu-items__close-mobile-menu-bg-button"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Close
                  </Button>
                </>
              )}
            </li>
            <li className="d-md-block d-none">
              <ul className="d-flex menu-items">
                <li className="mx-4">
                  <ul className="d-flex">
                    <li className="mx-2">
                      <Link href={"/"} shallow>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="mx-2">
                      <Link href={"/about"} shallow>
                        <a>About</a>
                      </Link>
                    </li>
                    <li className="mx-3">
                      <a
                        href="https://resume.kentokanazawa.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Resume
                      </a>
                    </li>
                  </ul>
                </li>
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
