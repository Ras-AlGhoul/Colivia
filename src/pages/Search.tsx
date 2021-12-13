import React, { useState} from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import { Product } from '../utils/types';

const Search: React.FC = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState<Product[]>([]);
  
  const handleChange = ({target: {value}}: any) => {
    setInput(value)
  };

  const fetchItems = async() =>{
  await fetch(`http://localhost:4000/api/items/${input}`)
  .then(res => res.json())
  .then(res => setSearch(res));
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchItems();
  };

  return (
    <div className='app'>
      <Nav />
      <form onSubmit={handleSubmit}>
        <input placeholder='search by category... ex:parts' className='search' value={input} onChange={handleChange}/>
      </form>
      <div className='products'>
      {search.map((i, index) => 
            <Card
            key={index}
            item={i.item}
            price={i.price}
            description={i.description}
            contact={i.contact}
            location={i.location}
            category={i.category}
            imageUrl={i.imageUrl} />).reverse()}
      </div>
    </div>
  )
}

export default Search
