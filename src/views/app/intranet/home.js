import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import GlideComponentThumbs from "../../../components/carousel/GlideComponentThumbs"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

import HomeNews from "../../../components/intranet/homeNews";

import "./home.css";

const loremimg = 'https://image.shutterstock.com/image-photo/popular-photographers-attraction-braies-lake-600w-705417145.jpg';

// Carousel: https://mdbootstrap.com/docs/react/advanced/carousel

export default class Home extends Component {

  render() {
    return (
      <Fragment>
        <MDBContainer fluid={true}>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView className="carouselView">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="First slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Light mask</h3>
                  <p>First text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView className="carouselView">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>Second text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView className="carouselView">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Slight Mast</h3>
                  <p>Third text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>


        <Row className="mt-5 text-center">
          <Colxx xxs="12" className="mb-4">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className="text-muted">Magni laborum quaerat assumenda, ipsa atque minus aliquam, adipisci ab vel asperiores aspernatur at obcaecati facere consequuntur voluptate quae saepe et soluta.</p>
          </Colxx>
        </Row>

        <Row className="mt-2 text-left">
          <Colxx xxs="12" className="mb-4">
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />            
            <HomeNews
              src={loremimg}
              title={'Lorem ipsum dolor sit amet'}
              description={'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'}
            />

            <section>
              
            </section>
   
          </Colxx>
        </Row>

      </Fragment>
    )
  }
}