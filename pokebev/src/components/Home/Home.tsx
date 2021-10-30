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
      <div className="d-flex flex-row">{
        grupos.map(
          (grupo) => (
            <Link key={grupo.name} className="text-decoration-none" to={`/GroupDetails/${grupo.name}`}>
              <Card className="p-4 m-2 d-flex justify-content-center align-items-center" style={{ width: '18rem', height: '24rem' }}>
                <Card.Img className="h-75" variant="top" src={grupo.image} />
                <Card.Body>
                  <Card.Title className="text-warning ">Grupo {grupo.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          )
        )
      }
      </div>
    </>
  )
};

export default Home;
