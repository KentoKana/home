import { Container } from "reactstrap";

export const Footer = () => {
  return (
    <footer className="primary-footer">
      <Container>
        <hr />
        <div className="text-center my-3">
          &copy; {new Date().getFullYear()} Kento Kanazawa
        </div>
      </Container>
    </footer>
  );
};
