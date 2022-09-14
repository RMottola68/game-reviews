import { useState, useEffect} from 'react';
import Game from "./Game"
import { Button, Row, Col, Container } from 'react-bootstrap';

function GamesContainer({ games, setGames }) {

    const [gameSearch, setGameSearch] = useState('');

    useEffect(()=>{
        fetch('/games')
          .then(res=>res.json())
          .then(gamesData => setGames(gamesData))
    },[])

    const search = games.filter((game)=>  {
        let gameSearchCase = gameSearch.toLowerCase()
        return (
            game.title.toLowerCase().includes(gameSearchCase)
        )
    })

    return (
        <Container className="text-center pt-5" style={{ borderRadius: "30px", height: "100vh", width: "100vw"}}>
            <Container >
                <Row  className="bg-dark border border-5 border-dark justify-contents-center" style={{borderRadius: "30px"}}>
                    <Row className="my-2 text-center">
                        <div>
                            <input type="text" placeholder="Title Here" className="search" value={gameSearch} onChange={(event) => setGameSearch(prevState => prevState = event.target.value)} />
                            <button className="btn btn-outline-light mx-2" type="button">Search Titles</button>
                        </div>
                    </Row>
                    {search.map((game) =>{
                        return(
                            <Col xs={4} className="my-2 text-dark d-flex justify-content-center" key={game.id}>                                
                                <Game className="" game={game} key={game.id} />                  
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>

    );
}

export default GamesContainer;
