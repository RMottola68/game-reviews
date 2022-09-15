import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import ReviewNoImage from "./ReviewNoImage"
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

      
        <Container className="text-center" style={{height: "100vh", borderRadius: "30px"}}>
            <Row className="text-center " style={{marginLeft: "35%", marginRight: "auto"}} >
                <Game game={game} />
            </Row>
            <Row>
              <h2 className="text-center border border-5 border-light text-light bg-dark" style={{borderRadius: "10px"}}>Reviews for this Game</h2>
              {game.reviews.length > 0 ? game.reviews.map((review) => <ReviewNoImage review={review} key={review.id} />) : <h3 className="text-center">There are no reviews!</h3>}
            </Row>
        </Container>
    );
}

export default GameDetails;

