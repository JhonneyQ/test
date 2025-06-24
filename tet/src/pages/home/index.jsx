import React, { useState } from 'react'
import "./index.scss"

const Home = () => {
  const [cardinfo, setCardinfo] = useState([
    {
      "id": 0,
      "name": "Dahlia",
      "price": 45,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ01djuNc7OUIfhjwUE1XC0Gq3LjlZk3GNJQ&s"
    },
    {
      "id": 1,
      "name": "Mazus",
      "price": 45,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ01djuNc7OUIfhjwUE1XC0Gq3LjlZk3GNJQ&s"
    },
    {
      "id": 2,
      "name": "Pansies",
      "price": 45,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ01djuNc7OUIfhjwUE1XC0Gq3LjlZk3GNJQ&s"
    },
    {
      "id": 3,
      "name": "Dahlia",
      "price": 45,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ01djuNc7OUIfhjwUE1XC0Gq3LjlZk3GNJQ&s"
    },
    {
      "id": 4,
      "name": "Mazus",
      "price": 45,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ01djuNc7OUIfhjwUE1XC0Gq3LjlZk3GNJQ&s"
    },
    {
      "id": 5,
      "name": "Pansies",
      "price": 45,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ01djuNc7OUIfhjwUE1XC0Gq3LjlZk3GNJQ&s"
    }
  ]
  )
  return (
    <>
      <main>
        <section className='pricing'>
          <div className="container">
            <div className="pricingdiv">
              <p>Devoted to wonderfull beauty</p>
              <h1>Flowers Pricing</h1>
              <div className="cards">
                {
                  cardinfo.map(({ name, price, image, id }) => {
                    return <div className="card" key={id}>
                      <img src={image} alt="Flower" />
                      <h2>{name}</h2>
                      <p>{"$" + price}</p>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home