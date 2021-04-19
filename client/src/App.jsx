
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signout } from './helpers/auth';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import './font/stylesheet.css';
import 'antd/dist/antd.css';
import './forApp.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { Layout, Row, Col, List, Typography, Image } from 'antd';

import { SliderBlock } from './components';
import SiderBlock from './components/Sider/Sider';

const { Header } = Layout;

const servicelist = [
  'UX/UI Design',
  'Frontend Development',
  'Backend Development',
  'Graphic design',
  'Illustrations',
  'Social Media Marketing',
];

const anchors = ['Home', 'About', 'Services', 'Portfolio', 'Trusted', 'Team', 'Contact'];

function App({ history }) {
  return (
    <Layout>
    <SiderBlock/>
    <Header
      style={{ position: 'absolute', right: '0', top: '47px', backgroundColor: 'transparent' }}>
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45 0H0V45H45V0ZM22.5 32C27.7467 32 32 27.7467 32 22.5C32 17.2533 27.7467 13 22.5 13C17.2533 13 13 17.2533 13 22.5C13 27.7467 17.2533 32 22.5 32Z"
          fill="#292929"
        />
      </svg>
    </Header>
    <ReactFullpage
      //fullpage options
      anchors={anchors}
      navigation //
      navigationTooltips={anchors} //
      autoScrolling={true}
      fitToSection={false}
      licenseKey={'YOUR_KEY_HERE'}
      lockAnchors={false}
      callbacks={'onLeave, afterRender'}
      scrollOverflow={true}
      scrollOverflowReset={false}
      scrollOverflowOptions={null}
      touchSensitivity={15}
      scrollingSpeed={1000} /* Options here */
      onLeave={(index, nextIndex, direction) => {
        // console.log(nextIndex.anchor);
        document.getElementsByClassName('rotateMenu-text')[0].innerText = nextIndex.anchor;
        return true;
      }}
      // afterRender={(fullpageApi)=> {
      //   setTimeout( ()=> {
      //       const elementsMenu = document.getElementsByClassName('menuH2');
      //       for (let i = 0; i<elementsMenu.length; i++) {
      //         elementsMenu[i].onclick =()=> {
      //           fullpageApi.moveTo(i+1)
      //     }}
      //   } ,5000)
      //   }}
      render={({ state, fullpageApi }) => {
        // console.log("render prop change", state);
        return (
          <div>    
            
            <ReactFullpage.Wrapper>
              <div className="section container1">
                <Row>
                  <Col xs={24} sm={24} md={12} xl={12}>
                    <h1>
                      Digital solutions <span>that deliver results.</span>
                    </h1>
                    <p className="main-text">
                      MyPlanet Design if a full-service design agency operating globaly. We provide
                      quality user interface and user experience solutions to help you in designing,
                      branding, development and marketing your digital products.
                    </p>
                    <div className="estimation-btn">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.5" cy="22.5" r="18.5" stroke="#FFD84E" stroke-width="8" />
                      </svg>
                      Get free estimation
                    </div>
                  </Col>
                  <Col value={100} xs={24} sm={24} md={12} xl={12}>
                    <svg
                      width="419"
                      height="421"
                      viewBox="0 0 419 421"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 359H71V421H6V359Z" fill="#3D6DA7" />
                      <path
                        d="M59 390C59 401.046 49.8218 410 38.5 410C27.1782 410 18 401.046 18 390C18 378.954 27.1782 370 38.5 370C49.8218 370 59 378.954 59 390Z"
                        fill="white"
                      />
                      <path
                        d="M105 313C91.2112 313 77.5574 310.465 64.8182 305.54C52.0791 300.615 40.5039 293.397 30.7538 284.296C21.0036 275.196 13.2694 264.393 7.99265 252.503C2.71591 240.613 1.53468e-07 227.87 0 215L105 215L105 313Z"
                        fill="#763DAC"
                      />
                      <path
                        d="M157 182.5C157 189.404 151.404 195 144.5 195C137.596 195 132 189.404 132 182.5C132 175.596 137.596 170 144.5 170C151.404 170 157 175.596 157 182.5Z"
                        fill="#763DAC"
                      />
                      <path
                        d="M87 244.5C87 251.404 81.6274 257 75 257C68.3726 257 63 251.404 63 244.5C63 237.596 68.3726 232 75 232C81.6274 232 87 237.596 87 244.5Z"
                        fill="white"
                      />
                      <path d="M105 215H227V421H105V215Z" fill="#FFD84E" />
                      <path d="M227 135H419V307H227V135Z" fill="#3D6DA7" />
                      <path
                        d="M178 155C178 145.807 179.785 136.705 183.252 128.212C186.72 119.719 191.802 112.003 198.21 105.503C204.617 99.0024 212.223 93.8463 220.595 90.3284C228.966 86.8106 237.939 85 247 85L247 155L178 155Z"
                        fill="#FFD84E"
                      />
                      <path
                        d="M396 195C396 215.987 379.211 233 358.5 233C337.789 233 321 215.987 321 195C321 174.013 337.789 157 358.5 157C379.211 157 396 174.013 396 195Z"
                        fill="white"
                      />
                      <path d="M227 307H319V421H227V307Z" fill="#FFD84E" />
                      <path
                        d="M227 228C237.506 228 247.909 230.043 257.615 234.014C267.321 237.984 276.14 243.803 283.569 251.139C290.997 258.474 296.89 267.183 300.91 276.768C304.931 286.353 307 296.626 307 307L227 307L227 228Z"
                        fill="white"
                      />
                      <path
                        d="M227 215C239.082 215 251.045 217.38 262.207 222.003C273.369 226.627 283.511 233.403 292.054 241.946C300.597 250.489 307.373 260.631 311.997 271.793C316.62 282.955 319 294.918 319 307L227 307L227 215Z"
                        fill="white"
                      />
                      <path
                        d="M227 377C217.807 377 208.705 375.189 200.212 371.672C191.719 368.154 184.003 362.998 177.503 356.497C171.002 349.997 165.846 342.281 162.328 333.788C158.811 325.295 157 316.193 157 307L227 307L227 377Z"
                        fill="white"
                      />
                      <path d="M227 307H250V335H227V307Z" fill="#292929" />
                      <path d="M204 279H227V307H204V279Z" fill="#292929" />
                      <path d="M319 307H419V421H319V307Z" fill="#763DAC" />
                      <path d="M372 367H395V390H372V367Z" fill="white" />
                      <path
                        d="M357 381C357 377.192 357.724 373.421 359.131 369.902C360.539 366.384 362.601 363.187 365.201 360.494C367.801 357.801 370.888 355.665 374.285 354.207C377.682 352.75 381.323 352 385 352L385 381L357 381Z"
                        fill="#292929"
                      />
                      <path d="M0 136H79V215H0V136Z" fill="#FFD84E" />
                      <path
                        d="M69 155.5C69 160.747 64.7467 165 59.5 165C54.2533 165 50 160.747 50 155.5C50 150.253 54.2533 146 59.5 146C64.7467 146 69 150.253 69 155.5Z"
                        fill="white"
                      />
                      <path
                        d="M410 46C410 67.5391 392.763 85 371.5 85C350.237 85 333 67.5391 333 46C333 24.4609 350.237 7 371.5 7C392.763 7 410 24.4609 410 46Z"
                        fill="#763DAC"
                      />
                      <path d="M372 0H419V47H372V0Z" fill="#FFD84E" />
                      <path
                        d="M407 23C407 29.6274 401.627 35 395 35C388.373 35 383 29.6274 383 23C383 16.3726 388.373 11 395 11C401.627 11 407 16.3726 407 23Z"
                        fill="#292929"
                      />
                      <path
                        d="M372 71C368.717 71 365.466 70.3792 362.433 69.1731C359.4 67.967 356.644 66.1992 354.322 63.9706C352.001 61.742 350.159 59.0962 348.903 56.1844C347.647 53.2726 347 50.1517 347 47L372 47L372 71Z"
                        fill="white"
                      />
                      <path
                        d="M227 124.5C227 129.747 222.747 134 217.5 134C212.253 134 208 129.747 208 124.5C208 119.253 212.253 115 217.5 115C222.747 115 227 119.253 227 124.5Z"
                        fill="white"
                      />
                    </svg>
                  </Col>
                </Row>
              </div>
              <div className="section container2">
                <Row>
                  <Col span={12}>
                    <h1>
                      Keeping up with <span>digital trends.</span>
                    </h1>
                    <p className="main-text">
                      We help you design unique and engaging digital products or build resilient
                      brands by aligning your strategy with UI/UX your users desire. Functioning as
                      a part of your team, we create quality solutions, so you achieve real,
                      scalable results.{' '}
                    </p>
                    <svg
                      width="538"
                      height="336"
                      viewBox="0 0 538 336"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M529 92C529 113.539 511.763 131 490.5 131C469.237 131 452 113.539 452 92C452 70.4609 469.237 53 490.5 53C511.763 53 529 70.4609 529 92Z"
                        fill="#763DAC"
                      />
                      <path d="M491 46H538V93H491V46Z" fill="#FFD84E" />
                      <path
                        d="M526 69C526 75.6274 520.627 81 514 81C507.373 81 502 75.6274 502 69C502 62.3726 507.373 57 514 57C520.627 57 526 62.3726 526 69Z"
                        fill="#292929"
                      />
                      <path
                        d="M491 117C487.717 117 484.466 116.379 481.433 115.173C478.4 113.967 475.644 112.199 473.322 109.971C471.001 107.742 469.159 105.096 467.903 102.184C466.647 99.2726 466 96.1517 466 93L491 93L491 117Z"
                        fill="white"
                      />
                      <path d="M0 274H65V336H0V274Z" fill="#3D6DA7" />
                      <path
                        d="M53 305C53 316.046 43.8218 325 32.5 325C21.1782 325 12 316.046 12 305C12 293.954 21.1782 285 32.5 285C43.8218 285 53 293.954 53 305Z"
                        fill="white"
                      />
                      <path
                        d="M151 97.5C151 104.404 145.404 110 138.5 110C131.596 110 126 104.404 126 97.5C126 90.5964 131.596 85 138.5 85C145.404 85 151 90.5964 151 97.5Z"
                        fill="#763DAC"
                      />
                      <path d="M99 130H221V336H99V130Z" fill="#FFD84E" />
                      <path d="M221 50H413V222H221V50Z" fill="#3D6DA7" />
                      <path
                        d="M172 70C172 60.8075 173.785 51.705 177.252 43.2122C180.72 34.7194 185.802 27.0026 192.21 20.5025C198.617 14.0024 206.223 8.84626 214.595 5.32842C222.966 1.81059 231.939 -6.83724e-06 241 -7.62939e-06L241 70L172 70Z"
                        fill="#FFD84E"
                      />
                      <path
                        d="M390 110C390 130.987 373.211 148 352.5 148C331.789 148 315 130.987 315 110C315 89.0132 331.789 72 352.5 72C373.211 72 390 89.0132 390 110Z"
                        fill="white"
                      />
                      <path d="M221 222H313V336H221V222Z" fill="#FFD84E" />
                      <path
                        d="M221 143C231.506 143 241.909 145.043 251.615 149.014C261.321 152.984 270.14 158.803 277.569 166.139C284.997 173.474 290.89 182.183 294.91 191.768C298.931 201.353 301 211.626 301 222L221 222L221 143Z"
                        fill="white"
                      />
                      <path
                        d="M221 130C233.082 130 245.045 132.38 256.207 137.003C267.369 141.627 277.511 148.403 286.054 156.946C294.597 165.489 301.373 175.631 305.997 186.793C310.62 197.955 313 209.918 313 222L221 222L221 130Z"
                        fill="white"
                      />
                      <path
                        d="M221 292C211.807 292 202.705 290.189 194.212 286.672C185.719 283.154 178.003 277.998 171.503 271.497C165.002 264.997 159.846 257.281 156.328 248.788C152.811 240.295 151 231.193 151 222L221 222L221 292Z"
                        fill="white"
                      />
                      <path d="M221 222H244V250H221V222Z" fill="#292929" />
                      <path d="M198 194H221V222H198V194Z" fill="#292929" />
                      <path d="M313 222H413V336H313V222Z" fill="#763DAC" />
                      <path d="M366 282H389V305H366V282Z" fill="white" />
                      <path
                        d="M351 296C351 292.192 351.724 288.421 353.131 284.902C354.539 281.384 356.601 278.187 359.201 275.494C361.801 272.801 364.888 270.665 368.285 269.207C371.682 267.75 375.323 267 379 267L379 296L351 296Z"
                        fill="#292929"
                      />
                      <path
                        d="M221 39.5C221 44.7467 216.747 49 211.5 49C206.253 49 202 44.7467 202 39.5C202 34.2533 206.253 30 211.5 30C216.747 30 221 34.2533 221 39.5Z"
                        fill="white"
                      />
                    </svg>
                  </Col>
                  <Col className="col-counter" span={12}>
                    <div className="about-counter">
                      <div className="about-counter-head">15</div>
                      <div className="about-counter-title">experts in one agile team</div>
                    </div>
                    <div className="about-counter">
                      <div className="about-counter-head">100%</div>
                      <div className="about-counter-title">remote emloyees</div>
                    </div>
                    <div className="about-counter">
                      <div className="about-counter-head">100%</div>
                      <div className="about-counter-title">digital needs met</div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="section">
                <Row>
                  <Col span="12">
                    <h1>
                      Our services<span>.</span>
                    </h1>
                    <p className="main-text">
                      We help you design unique and engaging digital products or build resilient
                      brands by aligning your strategy with UI/UX your users desire. Functioning as
                      a part of your team, we create quality solutions, so you achieve real,
                      scalable results.{' '}
                    </p>
                    <List
                      className="service-list"
                      dataSource={servicelist}
                      renderItem={(item) => (
                        <List.Item>
                          <Typography.Text className="service-list-item">{item}</Typography.Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col span="12" className="vertical-center">
                    <div>
                      <h2>UX/UI Design</h2>
                      <p className="main-text">
                        We help you design unique and engaging digital products or build resilient
                        brands by aligning your strategy with UI/UX your users desire. Functioning
                        as a part of your team, we create quality solutions, so you achieve real,
                        scalable results.{' '}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="section fp-auto-height fp-auto-height-responsive fp-scrollable">
                <Row>
                  <Col span="10">
                    <h1 id="title-portfolio">
                      Create impactful brand with meaningful <span>digital solutions.</span>
                    </h1>
                    <div className="portfolio-block">
                      <Image
                        height={'100%'}
                        src="/danik_shop_portfolio.png"
                        fallback="data:image/png;base64,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"
                      />
                      <p className="smallText">UI/UX design for mobile applications</p>
                    </div>
                    <div>
                      <div className="avatar-portfolio-block">
                        <Image
                          height={54}
                          width={54}
                          className="avatar-portfolio"
                          src="/avatar_portfolio.png"
                          fallback="data:image/png;base64,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"
                        />
                        <div className="avatar-portfolio">
                          <p>Arthur Strakhov,</p>
                          <p>YouTube CTPAXOFF</p>
                        </div>
                      </div>
                      <div className="avatar-portfolio-bigText">
                        “We enjoyed their process immensely and saw almost daily progress.”
                      </div>
                    </div>
                    <div className="portfolio-block portfolio-block_second">
                      <p className="smallText smallText-top">
                        UI/UX design for mobile applications
                      </p>
                      <Image
                        width={'100%'}
                        src="/video_portfolio.png"
                        fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                      />
                    </div>
                  </Col>
                  <Col span="14" className="vertical-center">
                    <div>
                      <div className="portfolio-block portfolio-block_third">
                        <Image
                          width={'100%'}
                          src="/video_portfolio.png"
                          fallback="data:image/png;base64,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"
                        />
                        <p className="smallText">UI/UX design for mobile applications</p>
                      </div>
                      <div className="portfolio-block portfolio-block_fourth">
                        <Image
                          height={'100%'}
                          src="/danik_shop_portfolio.png"
                          fallback="data:image/png;base64,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"
                        />
                        <p className="smallText" style={{ textAlign: 'left' }}>
                          UI/UX design for mobile applications
                        </p>
                      </div>
                      <div className="estimation-btn" id="portfolio-estimation">
                        <svg
                          width="45"
                          height="45"
                          viewBox="0 0 45 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle cx="22.5" cy="22.5" r="18.5" stroke="#FFD84E" stroke-width="8" />
                        </svg>
                        Get free estimation
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="section">
                <Row>
                  <Col span="12">
                    <h1>
                      Trusted by <span>.</span>
                    </h1>
                    <p className="main-text">
                      MyPlanet Design is a full-service design agency operating globally. We provide
                      quality user interface and user experience solutions to help you in designing,
                      branding and marketing your digital products.{' '}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <div>
                      <h2>SolVe</h2>
                      <p className="description-text active">
                        Outsourcing industry-leader based in Ukraine, providing software and product
                        development, services for aerospace, healthcare, education, and clinical
                        study industries.{' '}
                      </p>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <h2 className="deactive">Fenster</h2>
                      <p className="description-text">
                        Outsourcing industry-leader based in Ukraine, providing software and product
                        development, services for aerospace, healthcare, education, and clinical
                        study industries.{' '}
                      </p>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <h2 className="deactive">Webezy</h2>
                      <p className="description-text">
                        Outsourcing industry-leader based in Ukraine, providing software and product
                        development, services for aerospace, healthcare, education, and clinical
                        study industries.{' '}
                      </p>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <h2 className="deactive">DataArt</h2>
                      <p className="description-text">
                        Outsourcing industry-leader based in Ukraine, providing software and product
                        development, services for aerospace, healthcare, education, and clinical
                        study industries.{' '}
                      </p>
                    </div>
                  </Col>
                  <div>
                    <div className="review">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M35 25.2059C35 27.0588 34.2959 28.6716 32.8876 30.0441C31.4793 31.348 29.7357 32 27.6568 32C25.3097 32 23.3649 31.1422 21.8225 29.4265C20.3471 27.7108 19.6095 25.4461 19.6095 22.6324C19.6095 16.799 21.1183 12.3382 24.1361 9.25C27.1538 6.16177 30.4734 4.41177 34.0947 4V9.66177C32.0828 10.0049 30.2722 11.0686 28.6627 12.8529C27.1203 14.6373 26.3156 16.6275 26.2485 18.8235C26.9191 18.4804 27.5897 18.3088 28.2604 18.3088C30.2722 18.3088 31.8817 18.9608 33.0888 20.2647C34.3629 21.5 35 23.1471 35 25.2059ZM16.3905 25.2059C16.3905 27.0588 15.6864 28.6716 14.2781 30.0441C12.8698 31.348 11.1262 32 9.04734 32C6.7002 32 4.75542 31.1422 3.21302 29.4265C1.73767 27.7108 1 25.4461 1 22.6324C1 16.799 2.47535 12.3382 5.42604 9.25C8.44379 6.09314 11.7968 4.34314 15.4852 4V9.66177C13.4063 10.0049 11.5621 11.0686 9.95266 12.8529C8.41026 14.6373 7.60552 16.6275 7.53846 18.8235C8.20907 18.4804 8.91321 18.3088 9.65089 18.3088C11.5957 18.3088 13.2051 18.9608 14.4793 20.2647C15.7535 21.5 16.3905 23.1471 16.3905 25.2059Z"
                          fill="#FFD84E"
                        />
                      </svg>
                      <p className="body-review">
                        MyPlanet Design is a full-service design agency operating globally. We
                        provide quality user interface and user experience solutions to help you in
                        designing, branding and marketing your digital products.
                      </p>
                    </div>
                    <div className="review-author">
                      <p className="review-author">Skye Khilji, CEO at Profit Partnerships</p>
                    </div>
                  </div>
                </Row>
              </div>
              <div className="section team">
                <Row>
                  <Col span="12">
                    <h1>
                      Our team <span>.</span>
                    </h1>
                    <p className="main-text">
                      MyPlanet Design is a full-service design agency operating globally. We provide
                      quality user interface and user experience solutions to help you in designing,
                      branding and marketing your digital products.{' '}
                    </p>
                  </Col>
                  <Col span="22">
                    <SliderBlock />
                  </Col>
                </Row>
              </div>
              <div className="section contact-section">
                <Row>
                  <Col span="16">
                    <h1>
                      Let us start planning your UI/UX solution <span>.</span>
                    </h1>
                    <p className="main-text">
                      MyPlanet Design is a full-service design agency operating globally. We provide
                      quality user interface and user experience solutions to help you in designing,
                      branding and marketing your digital products.{' '}
                    </p>
                    <div className="estimation-btn">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.5" cy="22.5" r="18.5" stroke="#FFD84E" stroke-width="8" />
                      </svg>
                      Get in touch
                    </div>
                  </Col>
                  <Col span="8">
                    <div className="sections-name">
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">Home</span>
                      </a>
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">About</span>
                      </a>
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">Services</span>
                      </a>
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">Portfolio</span>
                      </a>
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">Trusted</span>
                      </a>
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">Our Team</span>
                      </a>
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">Contact</span>
                        <span>.</span>
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span="16">
                    <div className="social-Networks">
                      <ul style={{ margin: '0' }} className="social-Networks-section">
                        <li className="social-Networks--Blocks">
                          <a
                            style={{ lineHeight: '110%' }}
                            className="social-Networks-text"
                            href="https://google.com">
                            Dribble
                          </a>
                        </li>
                        <li className="social-Networks--Blocks">
                          <a
                            style={{ lineHeight: '110%' }}
                            className="social-Networks-text"
                            href="https://google.com">
                            Behance
                          </a>
                        </li>
                        <li className="social-Networks--Blocks">
                          <a
                            style={{ lineHeight: '110%' }}
                            className="social-Networks-text"
                            href="https://google.com">
                            Linkedin
                          </a>
                        </li>
                        <li className="social-Networks--Blocks">
                          <a
                            style={{ lineHeight: '110%' }}
                            className="social-Networks-text"
                            href="https://google.com">
                            Upwork
                          </a>
                        </li>
                        <li className="social-Networks--Blocks">
                          <a
                            style={{ lineHeight: '110%' }}
                            className="social-Networks-text"
                            href="https://google.com">
                            Instagram
                          </a>
                        </li>
                        <li className="social-Networks--Blocks">
                          <a
                            style={{ lineHeight: '110%' }}
                            className="social-Networks-text"
                            href="https://google.com">
                            Facebook
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col span="8">
                    <div style={{ position: 'absolute', bottom: '0' }} className="sections-name">
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">Privacy Policy</span>
                      </a>
                      <a className="sections-name-blocks">
                        <span className="sections-name-text">Terms & Conditions</span>
                      </a>
                      <p style={{ padding: '0' }}>
                        <span className="sections-name-text watermark">
                          @MyPlanet Design 2020. All rights reserved
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </ReactFullpage.Wrapper>
          </div>
        );
      }}
    />
  </Layout>
  );
}

export default App;