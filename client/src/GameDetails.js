import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import Game from './Game';



function GameDetails() {

    
    const [game, setGame] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    
    const { id } = useParams();

    useEffect(() => {
      fetch(`/games/${id}`)
        .then((r) => r.json())
        .then((game) => {
          setGame(game);
          setIsLoaded(true)
        });
    }, [id]);
  
    if (!isLoaded) return <h2>Loading...</h2>

    // const { title, developer, publisher, genre, release_date, image  } = game

    return(

      <div className="justify-contents-center p-5" style={{borderRadius: "30px", height: "100vh", width: "100vw"}}>
        <Container>
            <Row >
                
                <Game game={game}/>
            </Row>
        </Container>
    </div>
    );
}

export default GameDetails;

