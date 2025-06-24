import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
const Home = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <main>
      <section>

        <div className="hero">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {/* Slide 1 */}
            <Carousel.Item className='firstslide'>
              <div
                style={{
                  backgroundImage: `url('https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '800px',
                  width: '100%',
                  position: 'relative',

                }}
                className='fslidetext'
              >
                <div className='firstslide' style={{
                  position: 'absolute',
                  bottom: '50%',
                  left: '50%',

                  transform: "translate(-50%)",
                  color: '#fff',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: '10px',
                  borderRadius: '5px',
                  objectFit: 'cover',

                }}>
                  <div className="firstslidetext">
                    <h3>Birinci Slayd</h3>
                    <p>Bu birinci slaydın açıqlamasıdır.</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <div
                style={{
                  backgroundImage: `url('https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '800px',
                  width: '100%',
                  position: 'relative',
                  objectFit: 'cover'
                }}
              >
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  color: '#fff',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: '10px',
                  borderRadius: '5px',
                }}>
                  <div className="secondslidetext">
                    <h3>Birinci Slayd</h3>
                    <p>Bu birinci slaydın açıqlamasıdır.</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <div
                style={{
                  backgroundImage: `url('https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '800px',
                  width: '100%',
                  position: 'relative',
                  objectFit: 'cover'
                }}
              >
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  color: '#fff',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: '10px',
                  borderRadius: '5px',
                }}>
                  <div className="threeslidetext">
                    <h3>Birinci Slayd</h3>
                    <p>Bu birinci slaydın açıqlamasıdır.</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

      </section>
    </main>
  )
}

export default Home
