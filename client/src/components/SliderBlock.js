import React, { Component } from 'react';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Card } from 'antd';

const { Meta } = Card;

class SliderBlock extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.slider.next();
  }
  previous() {
    this.slider.prev();
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      //centerPadding: '100px',
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Carousel ref={(c) => (this.slider = c)} {...settings} arrows>
          <div key={1}>
            <Card
              style={{ width: 220,  backgroundColor: 'transparent' }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Nazar Verhun" description="Art-Director" />
            </Card>
          </div>
          <div key={2}>
            <Card
              style={{ width: 220,  backgroundColor: 'transparent' }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Daniel Andrushev..." description="UX/UI Designer" />
            </Card>
          </div>
          <div key={3}>
            <Card
              style={{ width: 220,  backgroundColor: 'transparent' }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Vitaly Fateev" description="FullStack Developer" />
            </Card>
          </div>
          <div key={4}>
            <Card
              style={{ width: 220,  backgroundColor: 'transparent' }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Igor Ichyk" description="Photoshop" />
            </Card>
          </div>
          <div key={5}>
            <Card
              style={{ width: 220,  backgroundColor: 'transparent' }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Vasily Ilba" description="Java Script Coder" />
            </Card>
          </div>
          <div key={6}>
            <Card
              style={{ width: 220,  backgroundColor: 'transparent' }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </Carousel>
        <div>
          <svg className="arrows-slider" onClick={this.previous} style={{ marginRight: '3em', marginTop: '1em' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7228 20.9977C15.0207 20.9983 15.3094 20.8939 15.5388 20.7026C15.6679 20.5949 15.7746 20.4627 15.8528 20.3134C15.931 20.1641 15.9792 20.0008 15.9946 19.8328C16.01 19.6648 15.9923 19.4953 15.9425 19.3342C15.8928 19.1731 15.8119 19.0234 15.7045 18.8938L9.99287 12.0176L15.5005 5.12859C15.6064 4.99736 15.6855 4.84637 15.7332 4.6843C15.781 4.52222 15.7964 4.35225 15.7786 4.18416C15.7608 4.01607 15.7102 3.85317 15.6297 3.70482C15.5492 3.55647 15.4403 3.4256 15.3093 3.31974C15.1774 3.20295 15.0229 3.11486 14.8556 3.06099C14.6882 3.00713 14.5116 2.98865 14.3368 3.00672C14.162 3.02479 13.9929 3.07901 13.8399 3.16599C13.6869 3.25298 13.5535 3.37083 13.4479 3.51217L7.29003 11.2094C7.10251 11.4389 7 11.7269 7 12.024C7 12.3212 7.10251 12.6091 7.29003 12.8386L13.6646 20.5358C13.7925 20.6911 13.955 20.8138 14.1389 20.8941C14.3227 20.9743 14.5228 21.0098 14.7228 20.9977Z" fill="black"/></svg>
          <svg className="arrows-slider" onClick={this.next} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.27717 20.9977C8.97928 20.9983 8.69059 20.8939 8.46122 20.7026C8.33212 20.5949 8.22541 20.4627 8.14719 20.3134C8.06897 20.1641 8.02078 20.0008 8.00538 19.8328C7.98999 19.6648 8.00769 19.4953 8.05747 19.3342C8.10724 19.1731 8.18812 19.0234 8.29548 18.8938L14.0071 12.0176L8.49946 5.12859C8.39356 4.99736 8.31448 4.84637 8.26675 4.6843C8.21903 4.52222 8.20361 4.35225 8.22138 4.18416C8.23916 4.01607 8.28977 3.85317 8.37031 3.70482C8.45085 3.55647 8.55973 3.4256 8.6907 3.31974C8.82261 3.20295 8.97709 3.11486 9.14444 3.06099C9.31179 3.00713 9.4884 2.98865 9.66318 3.00672C9.83796 3.02479 10.0071 3.07901 10.1601 3.16599C10.3131 3.25298 10.4465 3.37083 10.5521 3.51217L16.71 11.2094C16.8975 11.4389 17 11.7269 17 12.024C17 12.3212 16.8975 12.6091 16.71 12.8386L10.3354 20.5358C10.2075 20.6911 10.045 20.8138 9.86113 20.8941C9.67728 20.9743 9.47721 21.0098 9.27717 20.9977Z" fill="black"/></svg>
        </div>
      </div>
    );
  }
}

export default SliderBlock;
