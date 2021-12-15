import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import Form from '../components/Form';
import Products from '../components/Products';
import { Product } from '../utils/types';

const Home: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [items, setItems] = useState<Product[]>([]);
  const fetchItems = async () => {
    await fetch('http://localhost:4000/api/items')
      .then(res => res.json())
      .then(res => setItems(res));
  };

  useEffect(() => {
    fetchItems()
    return () => {
    }
  }, [refresh]);

  return (
    <div className='app'>
      <Nav />
      <Form setRefresh={setRefresh} />
      <Products items={items} />
    </div>
  )
}

export default Home
