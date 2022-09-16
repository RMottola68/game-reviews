import { useState, useEffect} from 'react';
import Game from "./Game"
import { Button, Row, Col, Container } from 'react-bootstrap';
import Games from "./assets/games.png"

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
        
        <Container className="text-center pt-2" style={{ height: "100%", width: "100vw"}}>
            
                <Row  className="bg-muted justify-content-center" style={{height: "100%", paddingBottom:"100px"}}>
                    
                    
                        <Row className="my-2 border-light border border-5 text-center justify-content-center bg-dark" style={{borderRadius: "30px"}}>
                            <img src={Games} style={{width:"auto"}} />
                            <div>
                                <input type="text" placeholder="Search Games by Title" className="search" value={gameSearch} onChange={(event) => setGameSearch(prevState => prevState = event.target.value)} />
                                <button className="btn btn-outline-light mx-2" type="button">Search Titles</button>
                            </div>
                        </Row>
                        
                        {search.map((game) =>{
                            return(
                                <Col xs={12} md={6} lg={4} className="my-2 d-flex justify-content-center" key={game.id} >                                s
                                    <Game className="" game={game} key={game.id} />                  
                                </Col>
                            )
                        })}
                        
                    
                </Row>
            
        </Container>
        

    );
}

export default GamesContainer;
