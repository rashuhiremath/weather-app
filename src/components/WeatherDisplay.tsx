import { Card, Button , Container, Row, Col,Table} from "react-bootstrap";
import { IApp } from "./interfaces/IApp";
interface IProps{
    data:IApp | undefined
}
const WeatherDisplay = ({data}: IProps) => {
  return (
    <Container>
      <Row className="my-5">
        <Col md={6}>
          <Card >
            <Card.Header>{data?.name}</Card.Header>
            <Card.Body>
              <Card.Title>{data?.sys.country}</Card.Title>
              <Card.Text>
              {data?.weather.map((w)=>(w.description))}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{data?.timezone}</Card.Footer>
          </Card>
        </Col>
        <Col>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>fels_like</th>
      <th>humidity</th>
      <th>pressure</th>
      <th>temp</th>
      <th>temp_max</th>
      <th>temp_min</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data?.main.feels_like}</td>
      <td>{data?.main.humidity}</td>
      <td>{data?.main.pressure}</td>
      <td>{data?.main.temp}</td>
      <td>{data?.main.temp_max}</td>
      <td>{data?.main.temp_min}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherDisplay;
