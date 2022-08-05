import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

function Home_Carousel() {
  return (
    <Carousel fade style={{
      width: "100%",
      verticalAlign: "center",
    }}>
      <Carousel.Item>
        <img
          className="d-block w-100 adjust heightAdjust"
          src="https://pbs.twimg.com/media/E8kJAD6VgAMoZyd.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 adjust heightAdjust"
          src="http://static.businessworld.in/article/article_extra_large_image/1632564416_Jzk0PW_sabka_saath_sab_ka_wikas.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 adjust heightAdjust"
          src="https://www.mygov.in/sites/all/themes/mygov/images/digitalindia/bannerv1.jpg"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default Home_Carousel