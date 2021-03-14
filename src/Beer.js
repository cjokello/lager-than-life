import React from 'react'

function Beer({ beer }) {

  const bottlePlaceholderImage = `https://cdn.pixabay.com/photo/2014/12/22/00/04/bottle-576717_960_720.png`;

  return (
    <div className="beer-wrapper card">

      <div className="beer">
        <img className="beer__img" src={`${beer.image_url != null ? beer.image_url : bottlePlaceholderImage}`} />
        <h3>{beer.name}</h3>
        <span className="beer__info">
          <span>ABV: {beer.abv}%</span>
          <span>IBU: {beer.ibu}</span>
        </span>
      </div>

      <div className="beer__content">
        <div className="beer__name">{beer.name}</div>
        <div className="beer__tagline">{beer.tagline}</div>
        <div className="beer__description">{beer.description}</div>
        <div className="beer__food-pairing"> Pair with: {beer.food_pairing.join(', ')}</div>
      </div>

    </div>
  )
}

export default Beer