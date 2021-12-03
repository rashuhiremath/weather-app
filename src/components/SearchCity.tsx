import { FormEvent,  useState } from "react";
import { Form ,Navbar,Nav,NavDropdown,Button,FormControl} from "react-bootstrap";
import { Card , Container, Row, Col} from "react-bootstrap";
import { IApp } from "./interfaces/IApp";
import WeatherDisplay from "./WeatherDisplay";



const SearchCity = () => {
   const[city ,setCity]=useState("")
  const [weather, setWeather] = useState<IApp | undefined>(undefined);
 

  const theCityWeather = async (city:string) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=a49fd9a072b4bf6b6defd3f58f3e6d60`
      );
      if (response.ok) {
        let data: IApp = await response.json();
        

        console.log("here my data:",data);
       
        setWeather(data);
      } else {
        console.log("couldn't fetch the weather details");
      }
    } catch (error) {
      console.log(error);
    }
  };

   const handleSubmit = (e: FormEvent) =>{
e.preventDefault()
theCityWeather(city)
 } 

  return (
      <>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Weather-Forcast</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">City</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Data</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                   type="search"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   placeholder="type and press Enter"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
         

         { weather?
                <WeatherDisplay data={weather} />:null
         }
              
         
       
       </>
      
  );
};
export default SearchCity;
