import { Container, Row, Col, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";
import vizionLogo from '../assets/images/logo.svg';
import '../assets/scss/header.scss';

const Header = () => {
    const subRouters = [
        {path: '/', title: 'blog'},
        {path: '/', title: 'faq'},
        {path: '/', title: 'support'},
        {path: '/', title: 'about'},
        {path: '/', title: '3d'},
        {path: '/', title: 'account'},
    ];

    const routers = [
        {path: '/create', title: 'create'},
        {path: '/', title: 'gallery'},
        {path: '/', title: 'history'}
    ]

    return (
        <>
            <Container fluid className="v-header">
                <Row>
                    <Col className="top-bar">
                        {
                            subRouters.map(((router, index) => {
                                return (
                                    <Link to={router} key={index} className="item">{router.title}</Link>
                                )
                            }))
                        }
                    </Col>
                </Row>
            </Container>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={vizionLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                routers.map((router, index) => {
                                    return (
                                        <Link to={router.path} key={index}>{router.title}</Link>
                                    )
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;