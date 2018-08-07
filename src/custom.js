/*
  NOTE: Custom version won't support those features below
  - Virtual
  - Keyboard
  - Mouse wheel
  - Zoom
  - Lazy load image
  - A11y
  - Parallax
  - History
  - Hash-navigation
  - Effect-cube
  - Effect-flip
  - Effect-coverflow

  #Referer link: http://idangero.us/swiper/api/#custom-build
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import objectAssign from 'object-assign';
import PropTypes from 'prop-types';
import Swiper from './swiper/custom';
import { cn } from './utils';

export default class ReactIdSwiper extends Component {
  // Default props
  static defaultProps = {
    containerClass: 'swiper-container',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    ContainerEl: 'div',
    WrapperEl: 'div',
    renderScrollbar: ({ scrollbar }) => <div className={cn(scrollbar.el)} />,
    renderPagination: ({ pagination }) => <div className={cn(pagination.el)} />,
    renderPrevButton: ({ navigation }) => <div className={cn(navigation.prevEl)} />,
    renderNextButton: ({ navigation }) => <div className={cn(navigation.nextEl)} />
  };

  // Proptypes
  static propTypes = {
    // react-id-swiper original parameters
    ContainerEl: PropTypes.string,
    WrapperEl: PropTypes.string,
    containerClass: PropTypes.string,
    wrapperClass: PropTypes.string,
    children: PropTypes.any,
    rebuildOnUpdate: PropTypes.bool,
    shouldSwiperUpdate: PropTypes.bool,
    activeSlideKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    renderScrollbar: PropTypes.func,
    renderPagination: PropTypes.func,
    renderPrevButton: PropTypes.func,
    renderNextButton: PropTypes.func,
    renderParallax: PropTypes.func,
    
    // keyboard
    keyboard: PropTypes.any,

    // swiper parameter
    init: PropTypes.bool,
    initialSlide: PropTypes.number,
    direction: PropTypes.string,
    rtl: PropTypes.bool,
    speed: PropTypes.number,
    setWrapperSize: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    autoHeight: PropTypes.bool,
    roundLengths: PropTypes.bool,
    nested: PropTypes.bool,
    uniqueNavElements: PropTypes.bool,
    effect: PropTypes.string,
    runCallbacksOnInit: PropTypes.bool,

    // slides grid
    spaceBetween: PropTypes.number,
    slidesPerView: PropTypes.any,
    slidesPerColumn: PropTypes.number,
    slidesPerColumnFill: PropTypes.string,
    slidesPerGroup: PropTypes.number,
    centeredSlides: PropTypes.bool,
    slidesOffsetBefore: PropTypes.number,
    slidesOffsetAfter: PropTypes.number,
    normalizeSlideIndex: PropTypes.bool,

    // grab cursor
    grabCursor: PropTypes.bool,

    // touches
    touchEventsTarget: PropTypes.string,
    touchRatio: PropTypes.number,
    touchAngle: PropTypes.number,
    simulateTouch: PropTypes.bool,
    shortSwipes: PropTypes.bool,
    longSwipes: PropTypes.bool,
    longSwipesRatio: PropTypes.number,
    longSwipesMs: PropTypes.number,
    followFinger: PropTypes.bool,
    allowTouchMove: PropTypes.bool,
    threshold: PropTypes.number,
    touchMoveStopPropagation: PropTypes.bool,
    iOSEdgeSwipeDetection: PropTypes.bool,
    iOSEdgeSwipeThreshold: PropTypes.number,
    touchReleaseOnEdges: PropTypes.bool,
    passiveListeners: PropTypes.bool,

    // touch resistance
    resistance: PropTypes.bool,
    resistanceRatio: PropTypes.number,

    // swiping / no swiping
    allowSlidePrev: PropTypes.bool,
    allowSlideNext: PropTypes.bool,
    noSwiping: PropTypes.bool,
    noSwipingClass: PropTypes.string,
    swipeHandler: PropTypes.any,

    // clicks
    preventClicks: PropTypes.bool,
    preventClicksPropagation: PropTypes.bool,
    slideToClickedSlide: PropTypes.bool,

    // freemode
    freeMode: PropTypes.bool,
    freeModeMomentum: PropTypes.bool,
    freeModeMomentumRatio: PropTypes.number,
    freeModeMomentumVelocityRatio: PropTypes.number,
    freeModeMomentumBounce: PropTypes.bool,
    freeModeMomentumBounceRatio: PropTypes.number,
    freeModeMinimumVelocity: PropTypes.number,
    freeModeSticky: PropTypes.bool,

    // progress
    watchSlidesProgress: PropTypes.bool,
    watchSlidesVisibility: PropTypes.bool,

    // images
    preloadImages: PropTypes.bool,
    updateOnImagesReady: PropTypes.bool,

    // loop
    loop: PropTypes.bool,
    loopAdditionalSlides: PropTypes.number,
    loopedSlides: PropTypes.number,
    loopFillGroupWithBlank: PropTypes.bool,

    // breakpoints
    breakpoints: PropTypes.object,

    // observer
    observer: PropTypes.bool,
    observeParents: PropTypes.bool,

    // namespace
    containerModifierClass: PropTypes.string,
    slideClass: PropTypes.string,
    slideActiveClass: PropTypes.string,
    slideDuplicatedActiveClass: PropTypes.string,
    slideVisibleClass: PropTypes.string,
    slideDuplicateClass: PropTypes.string,
    slideNextClass: PropTypes.string,
    slideDuplicatedNextClass: PropTypes.string,
    slidePrevClass: PropTypes.string,
    slideDuplicatedPrevClass: PropTypes.string,

    // autoplay
    autoplay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        delay: PropTypes.number,
        stopOnLast: PropTypes.bool,
        disableOnInteraction: PropTypes.bool
      })
    ]),

    // pagination
    pagination: PropTypes.shape({
      el: PropTypes.string,
      type: PropTypes.string,
      bulletElement: PropTypes.string,
      dynamicBullets: PropTypes.bool,
      hideOnClick: PropTypes.bool,
      clickable: PropTypes.bool,
      renderBullet: PropTypes.func,
      renderFraction: PropTypes.func,
      renderProgressbar: PropTypes.func,
      renderCustom: PropTypes.func,
      bulletClass: PropTypes.string,
      bulletActiveClass: PropTypes.string,
      modifierClass: PropTypes.string,
      currentClass: PropTypes.string,
      totalClass: PropTypes.string,
      hiddenClass: PropTypes.string,
      progressbarFillClass: PropTypes.string,
      clickableClass: PropTypes.string
    }),

    // scrollbar
    scrollbar: PropTypes.shape({
      el: PropTypes.any,
      hide: PropTypes.bool,
      draggable: PropTypes.bool,
      snapOnRelease: PropTypes.bool,
      dragSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),

    // navigation
    navigation: PropTypes.shape({
      nextEl: PropTypes.string,
      prevEl: PropTypes.string,
      hideOnClick: PropTypes.bool,
      disabledClass: PropTypes.string,
      hiddenClass: PropTypes.string
    }),

    // fadeEffect
    fadeEffect: PropTypes.shape({
      crossFade: PropTypes.bool
    }),

    // controller
    controller: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        control: PropTypes.any,
        inverse: PropTypes.bool,
        by: PropTypes.string
      })
    ]),

    // events
    on: PropTypes.shape({
      init: PropTypes.func,
      beforeDestroy: PropTypes.func,
      slideChange: PropTypes.func,
      slideChangeTransitionStart: PropTypes.func,
      slideChangeTransitionEnd: PropTypes.func,
      slideNextTransitionStart: PropTypes.func,
      slideNextTransitionEnd: PropTypes.func,
      slidePrevTransitionStart: PropTypes.func,
      slidePrevTransitionEnd: PropTypes.func,
      transitionStart: PropTypes.func,
      onTransitionEnd: PropTypes.func,
      touchStart: PropTypes.func,
      touchMove: PropTypes.func,
      touchMoveOpposite: PropTypes.func,
      sliderMove: PropTypes.func,
      touchEnd: PropTypes.func,
      click: PropTypes.func,
      tap: PropTypes.func,
      doubleTap: PropTypes.func,
      imagesReady: PropTypes.func,
      progress: PropTypes.func,
      reachBeginning: PropTypes.func,
      reachEnd: PropTypes.func,
      fromEdge: PropTypes.func,
      setTranslate: PropTypes.func,
      setTransition: PropTypes.func,
      resize: PropTypes.func
    })
  };

  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    this.buildSwiper();
  }

  componentDidUpdate() {
    if (typeof this.swiper === 'undefined') return;
    const { rebuildOnUpdate, shouldSwiperUpdate, activeSlideKey } = this.props;

    if (rebuildOnUpdate) {
      this.rebuildSwiper();
    } else if (shouldSwiperUpdate) {
      this.updateSwiper();

      const numSlides = this.swiper.slides.length;
      if (numSlides <= this.swiper.activeIndex) {
        const index = Math.max(numSlides - 1, 0);
        this.swiper.slideTo(index);
      }
    }

    if (activeSlideKey) {
      let activeSlideId = null;
      let id = 0;

      React.Children.forEach(this.props.children, child => {
        if (child) {
          if (child.key === activeSlideKey) {
            activeSlideId = id;
          }
          id += 1;
        }
      });

      if (activeSlideId !== null) {
        this.swiper.slideTo(activeSlideId);
      }
    }
  }

  componentWillUnmount() {
    if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
    delete this.swiper;
  }

  buildSwiper() {
    this.swiper = new Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
  }

  rebuildSwiper() {
    this.swiper.destroy(true, true);
    this.buildSwiper();
  }

  updateSwiper() {
    if (typeof this.swiper !== 'undefined') this.swiper.update();
  }

  renderContent(e) {
    if (!e) return false;

    const { slideClass, noSwiping } = this.props;
    const slideClassNames = [slideClass, e.props.className];
    if (noSwiping) slideClassNames.push('swiper-no-swiping');

    return React.cloneElement(e, {
      ...e.props,
      className: slideClassNames.join(' ').trim()
    });
  }

  render() {
    const {
      ContainerEl,
      WrapperEl,
      containerClass,
      wrapperClass,
      children,
      rtl,
      scrollbar,
      renderScrollbar,
      pagination,
      renderPagination,
      navigation,
      renderPrevButton,
      renderNextButton
    } = this.props;

    return (
      <ContainerEl className={containerClass} dir={rtl && 'rtl'}>
        <WrapperEl className={wrapperClass}>
          {React.Children.map(children, this.renderContent)}
        </WrapperEl>
        {pagination && pagination.el && renderPagination(this.props)}
        {scrollbar && scrollbar.el && renderScrollbar(this.props)}
        {navigation && navigation.nextEl && renderNextButton(this.props)}
        {navigation && navigation.prevEl && renderPrevButton(this.props)}
      </ContainerEl>
    );
  }
}
