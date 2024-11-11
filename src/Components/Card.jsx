import { Button, Card as BootstrapCard, Col, Row, Container } from "react-bootstrap";
import { cardData } from "../Utils/CardData";
import { useNavigate } from "react-router";

const Card = () => {
  const navigate = useNavigate();

  const routes = ["/DepositPage", "/Balance", "/Withdrawl"];

  return (
    <Container className="flex items-center justify-center absolute top-[80%]">
      <Row className="gy-4 flex justify-content-center">
        {cardData.map((item, index) => (
          <Col
            key={index}
            xs={10}
            sm={6}
            md={4}
            className="d-flex justify-content-center"
            onClick={() => navigate(routes[index])}
          >
            <BootstrapCard style={{ width: "100%" }}>
              <BootstrapCard.Img variant="top" src={item.Image} className="h-[30vh]" />
              <BootstrapCard.Body>
                <BootstrapCard.Title>{item.name}</BootstrapCard.Title>
                <BootstrapCard.Text>{item.Para}</BootstrapCard.Text>
                <Button variant="primary">Learn More</Button>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;
