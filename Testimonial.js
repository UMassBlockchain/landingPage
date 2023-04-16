import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Executive Board',
    paragraph: ''
  };

  const memeber_links = {
    mk: "https://www.linkedin.com/in/madhavkarwa/",
    dg: "https://www.linkedin.com/in/darsh-gondalia/",
    az: "https://www.linkedin.com/in/sean-gately/",
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="team">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <a href={memeber_links.mk}>
                <Image
                  src={require('./../../assets/images/members/madhav_karwa.jpg')}
                  alt="Open"
                  style={{"width":"auto", "height": "256px"}}
                  />
              </a>
                <br></br>

                <div className="testimonial-item-footer" style={{
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center"}}>
                  <a href={memeber_links.mk}>Madhav Karwa</a>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <a href={memeber_links.dg}>
                <Image
                  src={require('./../../assets/images/members/darsh_gondalia.jpeg')}
                  alt="Open"
                  style={{"width":"auto", "height": "256px"}}
                  />
              </a>
                <br></br>

                <div className="testimonial-item-footer" style={{
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center"}}>
                  <a href={memeber_links.sg}>Darsh Gondalia</a>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <a href={memeber_links.az}>
                <Image
                  src={require('./../../assets/images/members/darsh_gondalia.jpeg')}
                  alt="Open"
                  style={{"width":"auto", "height": "256px"}}
                  />
              </a>
                <br></br>

                <div className="testimonial-item-footer" style={{
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center"}}>
                  <a href={memeber_links.js}>Alex Zimmerman</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;