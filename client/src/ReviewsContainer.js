import { useState, useEffect} from 'react';
import Review from "./Review"
import { Button, Row, Col, Container } from 'react-bootstrap';

function ReviewsContainer({ reviews }) {

    const [reviewSearch, setReviewSearch] = useState('');

    const search = reviews.filter((review)=>  {
        let reviewSearchCase = reviewSearch.toLowerCase()
        return (
            review.game.title.toLowerCase().includes(reviewSearchCase)
        )
    })

    return (
        <Container className="text-center pt-5" style={{ borderRadius: "30px", height: "100vh", width: "100vw"}}>
            <Container >
                <Row  className="bg-dark border border-5 border-dark justify-contents-center" style={{borderRadius: "30px"}}>
                    <Row className="my-2 text-center">
                        <div>
                            <input type="text" placeholder="Game Title Here" className="search" value={reviewSearch} onChange={(event) => setReviewSearch(prevState => prevState = event.target.value)} />
                            <button className="btn btn-outline-light mx-2" type="button">Search Reviews</button>
                        </div>
                    </Row>
                    {search.map((review) =>{
                        return(
                            <Col xs={3} className="my-2 text-dark d-flex justify-content-center" key={review.id}>                                
                                <Review className="" review={review} key={review.id} />                  
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>

    );
}

export default ReviewsContainer;
