import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import '../assets/scss/create.scss';

const Create = () => {
    const photos = ['photo', 'illustration', 'stable 1.5', 'stable 2.1', 'midjourney 1', 'midjourney 2', 'anime', 'pixar', 'ghibli', 'arcane'];
    const gallerys = [
        {img: require('../assets/images/art1.jpg'), grid: 324},
        {img: require('../assets/images/art2.jpg'), grid: 324},
        {img: require('../assets/images/art3.jpg'), grid: 324},
        {img: require('../assets/images/art4.jpg'), grid: 324},
        {img: require('../assets/images/art5.jpg'), grid: 648},
        {img: require('../assets/images/art4.jpg'), grid: 324},
        {img: require('../assets/images/art4.jpg'), grid: 324},
        {img: require('../assets/images/art1.jpg'), grid: 324},
        {img: require('../assets/images/art2.jpg'), grid: 324},
        {img: require('../assets/images/art3.jpg'), grid: 324},
        {img: require('../assets/images/art4.jpg'), grid: 324},
        {img: require('../assets/images/art5.jpg'), grid: 648},
        {img: require('../assets/images/art4.jpg'), grid: 324},
        {img: require('../assets/images/art4.jpg'), grid: 324},
    ];
    return (
        <section className="v-create">
            <Container>
                <Row className="search">
                    <Col lg={12} md={12} sm={12} xs={12} className="describe-title">
                        Describe your image
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="describe-search">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    photo
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        photos.map((photo, index) => {
                                            return (
                                                <Dropdown.Item href="#/action-1" key={index}>{photo}</Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Control type="text" placeholder="An Elephant in the snow with sunset" />
                            <Button className="btn-create">create</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="gallery">
                    <Col lg={12} md={12} sm={12} xs={12} className="gallery-artists text-center">
                        {
                            gallerys.map((gallery, index) => {
                                return (
                                    <img src={gallery.img} alt="" width={gallery.grid} height="324px" key={index} />
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Create;