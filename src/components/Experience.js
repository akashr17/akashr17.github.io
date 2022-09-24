import { Nav, Tab, Container, Row, Col } from "react-bootstrap"

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div className="experience-bx">
                            <h2>Experience</h2>
                            <p>Here is a list of my current work experience</p>
                            <Tab.Container id="experience-tabs" defaultActiveKey="first">
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Promag Enviro Systems</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"> Intel </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"> Cadex Electronics </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <div className="tab-description-divider"/>
                                <span>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <h3>Promag Enviro Systems</h3>
                                        <h6>Full-Stack Developer</h6>
                                        <h6 className="experience-header-spacing">May 2022 - August 2022</h6>
                                        <ul className="list">
                                            <li>
                                                Progressed the initial MVP of the mobile app from ~25% completition at the start of my co-op to ~90% by the end.
                                            </li>
                                            <li>
                                                Worked with a Single Board Computer (SBC) that interacts with hardware to monitor water data using Python
                                            </li>
                                            <li>
                                                Designed an interactive UI/UX for customers to monitor water data from SBC via HTTP and Bluetooth using Flutter
                                            </li>
                                            <li>
                                                Implemented API endpoints in Django to communicate with SBC's PostgreSQL database through AWS IoT Core using MQTT communication protocol to increase data transfer frequency from 10 minutes to 5 seconds
                                            </li>
                                            <li>
                                                Created a secure provisioning script in Python that creates a Thing on AWS IoT Core with a shadow document containing SBC's configuration settings
                                            </li>
                                            <li>
                                                Constructed an SBC Bluetooth command to receive a registration Bluetooth request from the frontend so that an SBC can be registered to a user account providing device ownership
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h3>Intel</h3>
                                        <h6>ASIC Developer</h6>
                                        <h6 className="experience-header-spacing">January 2021 - August 2021</h6>
                                        <ul className="list">
                                            <li>
                                                Developed code for various blocks on a new IP in System Verilog.

                                            </li>
                                            <li>
                                                Developed test-benches and universal verification components.

                                            </li>
                                            <li>
                                                Utilized Universal Verification Methodology (UVM) to test multiple blocks.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h3>Cadex Electronics</h3>
                                        <h6>Software Developer Developer</h6>
                                        <h6 className="experience-header-spacing">September 2020 - December 2020</h6>
                                        <ul className="list">
                                            <li>
                                                Hardware and Firmware Testing and Development
                                            </li>
                                            <li>
                                                Developed tools for data capturing and analysis using Python. 
                                            </li>
                                            <li>
                                                Converted the power supply & load communication and data collection code from Python to C#.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                                </span>
                            </Tab.Container>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}