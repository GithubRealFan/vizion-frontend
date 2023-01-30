import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo_white.svg';
import '../assets/scss/footer.scss';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDiscord, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <Container fluid className='v-footer mt-5'>
                <Container>
                    <Row className=''>
                        <Col lg={6} md={12} sm={12} xs={12} className="logo">
                            <img src={Logo} alt="" />
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12} className="content">
                            <Button className='btn-social'><BsInstagram /></Button>
                            <Button className='btn-social'><FaFacebookF /></Button>
                            <Button className='btn-social'><FaTwitter /></Button>
                            <Button className='btn-social'><FaLinkedinIn /></Button>
                            <Button className='btn-social'><FaDiscord /></Button>
                            <Button className='btn-social'><FaYoutube /></Button>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='mt-5'>
                        <Col lg={4} md={12} sm={12} xs={12}>
                            <div className='routers'>
                                <Link to="/create">create</Link>
                                <Link to="/gallery">gallery</Link>
                                <Link to="/history">history</Link>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className="d-flex align-items-end">
                            <div className='sub-routers'>
                                <div className='d-flex'>
                                    <Link to="">blog</Link>
                                    <Link to="">about</Link>
                                </div>
                                <div className='d-flex'>
                                    <Link to="">faq</Link>
                                    <Link to="">3d</Link>
                                </div>
                                <div className='d-flex'>
                                    <Link to="">support</Link>
                                    <Link to="">account</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <Row className='mt-1'>
                    <Col className='d-flex justify-content-between align-items-center'>
                        <div className="terms">
                            <Link to="/">vizions ©</Link>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Terms of Use</Link>
                        </div>
                        <div className='footer-desc'>website by magma.media</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;