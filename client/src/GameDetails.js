import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
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

      
        <Container className="text-center" style={{height: "100%", paddingTop:"100px", paddingBottom:"100px"}}>
            <Row>
            <Col xs={2} sm={0}></Col>
            <Col xs={10} sm={12} className="text-center">
              
                  <Game game={game} />
              
              <Row >
                <h2 className="text-center border border-5 border-light text-light bg-dark" style={{borderRadius: "10px"}}>Reviews for this Game</h2>
                {game.reviews.length > 0 ? game.reviews.map((review) => <ReviewNoImage review={review} key={review.id} />) : <h3 className="border border-5 border-light bg-dark text-white text-center" style={{borderRadius: "10px"}}>There are no reviews for this game!</h3>}
              </Row>
            </Col>
            
            </Row>
        </Container>
    );
}

export default GameDetails;

