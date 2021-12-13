import React from 'react'

interface IProps {
  item: string,
  imageUrl: string,
  description: string,
  contact: string,
  location: string,
  price: string,
  category: string
}

const Card: React.FC<IProps> = ({ item, imageUrl, description, contact, location, price, category }) => {
  return (
    <div className='items'>
      <div className='items__card'>
        <img className='card__img' alt='product-img' src={imageUrl} />
        <h3>{item}</h3>
        <div className='card__midcontent'>
          <h4>Price: {price} sek</h4>
          <h4>Description: {description}</h4>
        </div>
        <div className='card__lowerContent'>
          <p>Contact: {contact}</p>
          <p>Location: {location}</p>
          <p>Category: {category}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
