import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../components/common/CustomBootstrap";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
// Hero Carousel: https://mdbootstrap.com/docs/react/advanced/carousel

import MaterialIcon from 'material-icons-react';

import ScrollMenu from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";

import HomeNews from "../../../components/intranet/homeNews";

import "./home.css";

////////////////////////////////////// END OF IMPORTS //////////////////////////////////////

const loremimg =
  "http://placehold.it/600x415";

const list = [
  { name: "Leonardo", dia: 15, mes: 2 },
  { name: "Thiago", dia: 15, mes: 2 },
  { name: "Fernando", dia: 15, mes: 2 },
  { name: "Erick", dia: 15, mes: 2 },
  { name: "Lucas", dia: 15, mes: 2 },
  { name: "Lucca", dia: 15, mes: 2 },
  { name: "Felipe", dia: 15, mes: 2 }
];

const MenuItem = ({ text, selected }) => {
  return (
    <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>
  );
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name, dia, mes } = el;
    const onClick = () => console.log("original onClick ", name);
    return (
      <MenuItem text={`${name} | ${dia}/${mes}`} key={name} selected={selected} onClick={onClick} />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "❰", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: "❯", className: "arrow-next" });

export default class Home extends Component {
  state = {
    alignCenter: false,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    selected: "item1",
    scrollToSelected: false,
    translate: undefined,
    transition: 0.4,
    wheel: false,
    showList: true,
    inertiascrolling: false,
    slowdownFactor: 0.25
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew && this.menu) {
      this.menu.setInitial();
      this.menu.forceUpdate();
      this.forceUpdate();
    }
  }

  onUpdate = ({ translate }) => {
    // console.log(
    //   `onUpdate: translate: ${translate}`
    // );
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSlowdownFactor = ev => {
    this.setState({ slowdownFactor: ev.target.value });
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  toggle = () => {
    this.setState({ showList: !this.state.showList });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      selected,
      translate,
      transition,
      wheel,
      showList,
      scrollToSelected,
      inertiascrolling,
      slowdownFactor
    } = this.state;

    const menu = this.menuItems;

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
                    src="http://placehold.it/1320x580"
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
                    src="http://placehold.it/1320x580"
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
                    src="http://placehold.it/1320x580"
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
            <p className="text-muted">
              Magni laborum quaerat assumenda, ipsa atque minus aliquam,
              adipisci ab vel asperiores aspernatur at obcaecati facere
              consequuntur voluptate quae saepe et soluta.
            </p>
          </Colxx>
        </Row>

        <Row className="mt-2 text-left">
          <Colxx xxs="12" className="mb-4">
            <HomeNews
              src={loremimg}
              title={
                "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
              }
            />
            <HomeNews
              src={loremimg}
              title={
                "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
              }
            />
            <HomeNews
              src={loremimg}
              title={
                "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
              }
            />
            <HomeNews src={loremimg} title={"Lorem ipsum dolor sit amet"} />
            <HomeNews src={loremimg} title={"Lorem ipsum dolor sit amet"} />
            <HomeNews src={loremimg} title={"Lorem ipsum dolor sit amet"} />
            <HomeNews src={loremimg} title={"Lorem ipsum dolor sit amet"} />
            <HomeNews src={loremimg} title={"Lorem ipsum dolor sit amet"} />
            <HomeNews src={loremimg} title={"Lorem ipsum dolor sit amet"} />
            <HomeNews src={loremimg} title={"Lorem ipsum dolor sit amet"} />
          </Colxx>
        </Row>

        <Row className="mt-2">
          <Colxx xxs="12">
            {showList && (
              <ScrollMenu
                ref={el => (this.menu = el)}
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                hideArrows={hideArrows}
                hideSingleArrow={!hideSingleArrow}
                transition={+transition}
                onUpdate={this.onUpdate}
                onSelect={this.onSelect}
                scrollToSelected={scrollToSelected}
                selected={selected}
                scrollBy={0}
                translate={translate}
                alignCenter={alignCenter}
                dragging={dragging}
                clickWhenDrag={clickWhenDrag}
                wheel={wheel}
                inertiaScrolling={inertiascrolling}
                inertiaScrollingSlowdown={slowdownFactor}
                rtl={false}
              />
            )}
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
