import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal, Pagination } from 'react-bootstrap';

const News = ({ country, category }) => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(8);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        const fetchnews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: country,
                        category: category,
                        apiKey: '487d77dc696b498a9c4414a52952234c',
                    },
                });
                setArticles(response.data.articles);
                setCurrentPage(1); // reset pagination when criteria change
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchnews();
    }, [country, category]);

    //pagination logic
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <Container>

            <h1 className='my-4'>Top Headlines</h1>
            <Row>
                {currentArticles.map((article, index) => (
                    <Col key={index} sm={12} md={6} lg={3} className='mb-4'>
                        <Card onClick={() => setSelectedArticle(article)}>
                            <Card.Img variant='top' src={article.urlToImage || 'https://via.placeholder.com/300'} />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                                <Button variant='primary' href='' target='_blank' rel='noopener noreferrer'>Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Pagination>
                {Array.from(
                    { length: Math.ceil(articles.length / articlesPerPage) },
                    (_, i) => (
                        <Pagination.Item
                            key={i + 1}
                            active={i + 1 === currentPage}
                            onClick={() => paginate(i + 1)}
                        >
                            {i + 1}
                        </Pagination.Item>
                    )
                )}
            </Pagination>
            {selectedArticle && (
                <Modal show={true} onHide={() => setSelectedArticle(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedArticle.title || "Selected Article"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={selectedArticle.urlToImage || 'https://via.placeholder.com/300'}
                            className="img-fluid"
                            alt="Selected Article"
                        />
                        <p>{selectedArticle.content}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setSelectedArticle(null)}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            href={selectedArticle.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read Full Article
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    );
};
export default News;
