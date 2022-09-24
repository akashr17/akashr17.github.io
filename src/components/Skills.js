import { Container, Row, Col } from 'react-bootstrap';
import CLogo from '../assets/img/c.png';
import CppLogo from '../assets/img/cpp.png';
import JavaLogo from '../assets/img/java.png';
import PythonLogo from '../assets/img/python.png';
import HTMLLogo from '../assets/img/html.png';
import CSSLogo from '../assets/img/css.png';
import JavaScriptLogo from '../assets/img/javascript.png';
import ReactLogo from '../assets/img/react.png';
import FlutterLogo from '../assets/img/flutter-removebg-preview.png';
import GitLogo from '../assets/img/git.png';

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Here is a list of programming languages and technologies I have worked with.
                            </p>
                            <Col>
                                <Row>
                                    <Col><img src={CLogo} alt="CLogo"/><p>C</p></Col>
                                    <Col><img src={CppLogo} alt="CppLogo"/><p>C++</p></Col>
                                    <Col><img src={JavaLogo} alt="JavaLogo"/><p>Java</p></Col>
                                    <Col><img src={PythonLogo} alt="PythonLogo"/><p>Python</p></Col>
                                </Row>
                                <Row>
                                    <Col><img src={HTMLLogo} alt="HTMLLogo"/><p>HTML</p></Col>
                                    <Col><img src={CSSLogo} alt="CSSLogo"/><p>CSS</p></Col>
                                    <Col><img src={JavaScriptLogo} alt="JavaScriptLogo"/><p>JavaScript</p></Col>
                                    <Col><img src={ReactLogo} alt="ReactLogo"/><p>React</p></Col>
                                </Row>
                                <Row>
                                    <Col><img src={FlutterLogo} alt="FlutterLogo"/><p>Flutter</p></Col>
                                    <Col><img src={GitLogo} alt="GitLogo"/><p>Git</p></Col>
                                </Row>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}