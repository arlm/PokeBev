import { useEffect, useState } from "react";
import PokeLoagind from "./loading.gif";
import styles from "./Games.module.css";
import cardMenor  from "./Games.module.css" ;
import { Card, ListGroup, Modal } from "react-bootstrap";

function Games() {
  const [generations, setGenerations] = useState<any>();
  const [generation, setGeneration] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const pegaGeracoes = async () => {
      const resposta = await fetch("https://pokeapi.co/api/v2/generation");
      const objGenerations = await resposta.json();
      setGenerations(objGenerations.results);
    };
    pegaGeracoes();
  }, []);

  const getGeneration = async (nameGeneration: any) => {
    setLoading(true);
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/generation/${nameGeneration}`
      );
      const objGeneration = await resposta.json();
      setGeneration(objGeneration.pokemon_species);
      setLoading(false);
    } catch (error) {}
  };

  const closeModal = () => {
    setGeneration(null);
  };

  return (
    <div className={styles.Games}>
      {generations && !generation && !loading && (
        <>
          <Card style={{ width: "60rem" }}>
            <Card.Header className={styles.headerCard}>
              Gerações dos Pokemons
            </Card.Header>
            <Card.Body className={styles.card}>
              <ListGroup variant="flush">
                {generations.map((gen: any) => (
                  <ListGroup.Item
                    key={gen.name}
                    onClick={() => getGeneration(gen.name)}
                  >
                    {gen.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </>
      )}

      {loading && (
        <div className={styles.loading}>
          <img src={PokeLoagind} alt="Loading" />
          <h1>Carregando... </h1>
        </div>
      )}

      {generation && (
           
           <div className="container mb-5">
           <div className="row d-flex flex-row py-5 ">
             <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between ">
               <div className="d-flex flex-row align-items-center flex-wrap d-flex justify-content-evenly ">
          
               {generation.map((pokemons: any) => (
                 <Card className="border border-5 border-secondary"  key={pokemons.name} style={{ width: "18rem" }}>
                   <Card.Img variant="top" src="holder.js/100px180" />
                   <Card.Body>
                     <Card.Title  className={styles.bodyModal}
                       > {pokemons.name}</Card.Title>
                     <Card.Text>
                       Some quick example text to build on the card title and make up
                       the bulk of the card's content.
                     </Card.Text>
                    </Card.Body>
                 </Card>
))}        
</div>
</div>
</div>
       </div>
      )}
    </div>

)
};

export default Games;
