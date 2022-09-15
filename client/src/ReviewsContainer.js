import { useState, useEffect} from 'react';
import Review from "./Review"
import { Button, Row, Col, Container } from 'react-bootstrap';
import Reviews from "./assets/reviews.png"

function ReviewsContainer({ reviews }) {

    const [reviewSearch, setReviewSearch] = useState('');

    const search = reviews.filter((review)=>  {
        let reviewSearchCase = reviewSearch.toLowerCase()
        return (
            review.game.title.toLowerCase().includes(reviewSearchCase)
        )
    })

    return (
        <Container className="text-center pt-2" style={{ borderRadius: "30px", height: "100%", width: "100vw"}}>
            <Container >
                <Row className="bg-muted justify-content-center" >
                    <Row className="my-2 border-light border border-5 text-center justify-content-center bg-dark" style={{borderRadius: "30px"}}>
                        <img src={Reviews} style={{width:"auto"}} />
                        <div>
                            <input type="text" placeholder="Search Reviews by Title" className="search" value={reviewSearch} onChange={(event) => setReviewSearch(prevState => prevState = event.target.value)} />
                            <button className="btn btn-outline-light mx-2" type="button">Search Reviews</button>
                        </div>
                    </Row>
                    {search.map((review) =>{
                        return(
                            <Col xs={12} md={6} lg={4} className="my-2 text-dark d-flex justify-content-center" key={review.id}>                                
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
