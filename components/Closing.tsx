import { BaseSection } from "./BaseSection";
import { Container } from "reactstrap";
import React from "react";
import { Heading } from "./Heading";

export const Closing = () => {
  return (
    <BaseSection sectionClassName="closing d-flex align-items-center">
      <Container>
        <div className="d-flex flex-column justify-content-center text-center align-items-center">
          <Heading
            headingLabel="I'm Available For Freelance Projects"
            headingType="primary"
            color="primary"
            size="lg"
            className="mb-5"
          />
          <p className="closing__remarks">
            Need a landing page? An e-commerce site? I'm open to work on
            anything interesting. Feel free to contact me at{" "}
            <a href="mailto:kento@kentokanazawa.com">kento@kentokanazawa.com</a>
          </p>
        </div>
      </Container>
    </BaseSection>
  );
};
