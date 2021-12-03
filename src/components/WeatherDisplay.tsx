import { Card, Button , Container, Row, Col,Table} from "react-bootstrap";
import { IApp } from "./interfaces/IApp";
import "./style.css"
interface IProps{
    data:IApp | undefined
}
const WeatherDisplay = ({data}: IProps) => {
  return (
    <>
     <div className="box">
    <div className="wave -one" />
    <div className="wave -two" />
    <div className="wave -three" />
    <div className="weathercon">
      <i className="fas fa-sun" style={{ color: "#d36326" }} />
    </div>
    <div className="info">
      <h2 className="location">{data?.weather.map((w)=>(w.description))}</h2>
      <p className="date">{data?.timezone}</p>
      <h1 className="temp">{data?.main.feels_like}</h1>
    </div>
  </div>
  <span>Enable location to see yours! :)</span>
        
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>feels_like</th>
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
   
  </tbody>
</Table>
   
    
 
</>

  
  );
};

export default WeatherDisplay;
