import React, { useState } from "react";
import "../css/Home.css";
//Bootstrap
import { Carousel, Container, Col, Row, Card, Button } from "react-bootstrap";
//image
import CarouselImageOne from "../Picture/1.jfif";
import CarouselImageTwo from "../Picture/2.jfif";
import example from "../Picture/poster.jpg";
//component

function Home() {
  return (
    <Container>
      <Carousel id="Carousel">
        <Carousel.Item>
          <img
            src={CarouselImageOne}
            alt="هدر دادن زمان با گوشی"
            id="Carousel"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={CarouselImageTwo}
            alt="هدر دادن زمان با گوشی"
            id="Carousel"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h3 className="ceremony">مراسم های در پیش</h3>
      <Row>
        <Col>
          <img src={example} className="cerimage" />
        </Col>
        <Col>
          <img src={example} className="cerimage" />
        </Col>
        <Col>
          <img src={example} className="cerimage" />
        </Col>
      </Row>
      <h3 className="news">اخبار و رویداد ها</h3>
      <Row>
        <Col>
          <Card style={{ width: "38vw" }} className="NewsOne">
            <Card.Img
              variant="top"
              src="https://www.leader.ir/media/album/original/57/87/85787_723.jpg"
            />
            <Card.Body>
              <Card.Title className="Card-Text">
                لورم ایپسوم متن ساختگی{" "}
              </Card.Title>
              <Card.Text className="Card-Text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              </Card.Text>
              <Button variant="primary"className="Card-Button">
                لینک مقاله
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "38vw" }} className="NewsOne">
            <Card.Img
              variant="top"
              src="https://www.leader.ir/media/album/original/58/60/85860_917.jpg"
            />
            <Card.Body>
              <Card.Title className="Card-Text">
                لورم ایپسوم متن ساختگی{" "}
              </Card.Title>{" "}
              <Card.Text className="Card-Text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              </Card.Text>
              <Button variant="primary"className="Card-Button">
                لینک مقاله
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h3 className="Prayer-Text">اوقات نماز</h3>
      <div className="Prayer-div">
        <h3 className="Prayer-h3">نماز صبح : 5:30</h3>
        <h3 className="Prayer-h3">نماز ظهر و عصر : 12:30</h3>
        <h3 className="Prayer-h3">نماز مغرب و اعشا : 18:30</h3>
      </div>
      <h3 id="map-text">لوکیشن مسجد</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25009199.319871083!2d86.80297851562501!3d40.07807142745015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8ac850a81d4375%3A0x2dd5ed43d9e6a3d!2z2YXYs9is2K8g2LTZh9iv2Kc!5e0!3m2!1sfa!2snl!4v1738372303060!5m2!1sfa!2snl"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        id="map"
      ></iframe>
      {/* <div className="Speack"><h3>s</h3></div> */}
    </Container>
  );
}

export default Home;
