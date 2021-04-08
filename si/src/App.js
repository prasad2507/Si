import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        // console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(items);
  return (
    <div className="app">
      <Container>
        <PlayerCard items={items} />
      </Container>
    </div>
  );
}

export default App;
