import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GroupData } from "../Models/interfaces";

function Home() {
  const grupos: GroupData[] = [
    {
      name: "Bulbasaur",
      image: "https://pngimg.com/uploads/pokemon/pokemon_PNG52.png"
    },
    {
      name: "Squirtle",
      image: "https://pngimg.com/uploads/pokemon/pokemon_PNG116.png"
    },
    {
      name: "Charmander",
      image: "https://pngimg.com/uploads/pokemon/pokemon_PNG154.png "
    },
    {
      name: "Jigglypuff",
      image: "https://static.wikia.nocookie.net/36ac4426-f1bb-4a13-bd03-ed79476b1b52 "
    }
  ];
  return (
    <>
      <h1>Oi, você está no Pokebev</h1>
      {
        grupos.map(
          (grupo) => (
            <Link to={`/GroupDetails/${grupo.name}`}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={grupo.image} />
                <Card.Body>
                  <Card.Title>Grupo {grupo.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          )
        )
      }
    </>
  )
};

export default Home;