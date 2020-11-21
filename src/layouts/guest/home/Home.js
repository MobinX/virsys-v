import React from "react";
import './Home.css';
import { chunk } from "lodash";
import { Container, Row, Col } from 'react-grid-system';
import img from "./assets/img-path.png";
import ico_hd_vid from "./assets/ico-hd-vid.png";
import ico_five_star from "./assets/ico-five -star.png";
import ico_hand_shake from "./assets/ico-hand-shake.png";
import ico_head_phn from "./assets/ico-head-phn.png";
import ico_security from "./assets/ico-security.png";
import ico_call from "./assets/ico-call.png";
import img_bussiness_persons from "./assets/img-business-persons.png"

const Grid = ({ cols, children }) => {

    const colWidth = 12 / cols;
    const rows = chunk(React.Children.toArray(children), cols);
    return (
        <Container>

            {rows.map((cols) => (
                <Row>
                    {cols.map((col) => (
                        <Col sm={colWidth}>
                            {col}
                        </Col>
                    ))}
                </Row>
            ))}

        </Container>
    )
}


const data = {
    whyVirsys: [
        { cardImg: ico_hd_vid, cardTxt: "High Quality Video" },
        { cardImg: ico_head_phn, cardTxt: "High Quality Video" },
        { cardImg: ico_security, cardTxt: "High Quality Video" },
        { cardImg: ico_call, cardTxt: "High Quality Video" },
        { cardImg: ico_five_star, cardTxt: "High Quality Video" },
        { cardImg: ico_hand_shake, cardTxt: "High Quality Video" },



    ],
}


function Home() {

    return (
        <>
            <div className="header">
                <div className="header-col-lt">
                    <h1>Introducing Virsys</h1>
                    <p>The Next Generation Meeting Platform That Providing High Quality Cloud Meeting</p>
                    <div className="btn">
                        <p>Get Started</p>
                    </div>
                </div>
                <div className="header-col-rt">

                </div>

            </div> 
            <div className="block-a">
                    <img className='img-business-persons' src={img_bussiness_persons} />
                    <div className="block-a-rt">
                        <h1>Perfect Match With Your Business</h1>
                        <p>We have brought every thing that need for a perfect business meeting.Meeting like in realtitime conference.</p>
                    </div>
                </div>
            <div className="block-b">
                <h1>Why Virsys </h1>
                <Grid cols={2}>
                    {data.whyVirsys.map((items) =>
                        <div className="card-cont">
                            <img className="card-img" src={items.cardImg} style={{ background: "./assets/img-path.png" }} />
                            <div className="card-txt">{items.cardTxt}</div>
                        </div>
                    )}
                </Grid>
               
            </div>
        </>
    )
}



export default Home;