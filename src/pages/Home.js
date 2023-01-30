import { Container, Row, Carousel, Col, Form, Button } from 'react-bootstrap';
import '../assets/scss/home.scss';
import ArtistImg1 from '../assets/images/artist1.jpg';
import ArtistImg2 from '../assets/images/artist2.jpg';
import ArtistImg3 from '../assets/images/artist3.jpg';

const Home = () => {
    const bannerDatas = [
        {subDatas: [
            {avartar: require('../assets/images/Slider_1920.jpg')},
        ]},
        {subDatas: [
            {avartar: require('../assets/images/Slider_1920.jpg')},
        ]},
        {subDatas: [
            {avartar: require('../assets/images/Slider_1920.jpg')},
        ]},
    ]
    return (
        <section className='v-home mt-4'>
            <Container fluid>
                <Row className='banner'>
                    <Carousel>
                        {
                            bannerDatas.map(((bannerData, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        {
                                            bannerData.subDatas.map((subData, subIndex) => {
                                                return (
                                                        <img
                                                            className=""
                                                            src={subData.avartar}
                                                            alt="First slide"
                                                            key={subIndex}
                                                        />
                                                )
                                            })
                                        }
                                        <div className='desc desc-1'>generate free AI images</div>
                                        <div className='desc desc-2'>many fine-tuned models</div>
                                        <div className='desc desc-3'>generate free AI images</div>
                                    </Carousel.Item>
                                )
                            }))
                        }
                    </Carousel>
                </Row>
            </Container>
            <Container>
                <Row className='create-ai mt-5'>
                    <Form.Text className="create-ai-title">create like an artist with AI art</Form.Text>
                    <Col lg={6} md={12} sm={12} xs={12} className="mt-4">
                        <Form.Text className='create-ai-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Form.Text>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} className="mt-4">
                        <Form.Text className='create-ai-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Form.Text>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className='be-the-artist mt-5 mb-5'>
                    <Col lg={{offset: 3, span: 3}} md={12} sm={12} xs={12} className="d-flex align-items-center">
                        <div>
                            <Form.Text className='title'>be the artist</Form.Text>
                            <Form.Text className='desc'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </Form.Text>
                            <Button className="btn-learn-more mt-4">learn more</Button>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <img src={ArtistImg1} alt="" width="100%" height="100%" />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className='be-the-artist mt-5'>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <img src={ArtistImg2} alt="" width="100%" height="100%" />
                    </Col>
                    <Col lg={{span: 3}} md={12} sm={12} xs={12} className="d-flex align-items-center">
                        <div>
                            <Form.Text className='title'>be the artist</Form.Text>
                            <Form.Text className='desc'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </Form.Text>
                            <Button className="btn-learn-more mt-4">learn more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='bg-shin mt-5'>
                <Row className='be-the-artist'>
                    <Col lg={{offset: 2, span: 3}} md={12} sm={12} xs={12}>
                        <div>
                            <Form.Text className='title'>be the artist</Form.Text>
                            <Form.Text className='desc'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </Form.Text>
                            <Button className="btn-learn-more mt-4">learn more</Button>
                        </div>
                    </Col>
                    <Col lg={{offset: 1, span: 3}} md={12} sm={12} xs={12}>
                        <div>
                            <Form.Text className='title'>be the artist</Form.Text>
                            <Form.Text className='desc'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </Form.Text>
                            <Button className="btn-learn-more mt-4">learn more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className='be-the-artist mt-5'>
                    <Col lg={{offset: 3, span: 3}} md={12} sm={12} xs={12} className="d-flex align-items-center">
                        <div>
                            <Form.Text className='title'>be the artist</Form.Text>
                            <Form.Text className='desc'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </Form.Text>
                            <Button className="btn-learn-more mt-4">learn more</Button>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <img src={ArtistImg3} alt="" width="100%" height="100%" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;