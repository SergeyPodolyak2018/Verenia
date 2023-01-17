import React, {useEffect, useState} from 'react'
import {getProducts} from './helpers'
import {Header} from './components/header'
import './App.scss';
import Spinner from 'react-bootstrap/Spinner';
import {Customer} from './components/customer';
import {ProductTable} from './components/table'

function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [reccord, setReccord] = useState({});

  useEffect(() => {
    if(products.length===0) {
      getProducts('https://run.mocky.io/v3/066f2a99-252b-4744-ae58-17382be9c462')
        .then((resp)=>{
          const temp = JSON.parse(resp);
          return temp;
        })
        .then((data)=>{
          const {record, items} = data;
          setProducts(items);
          setReccord(record);
          setLoading(false);
        })
        .catch((err) => setError(true))
    }
  }, [])

  return (
    <div className="content">
      <Header/>
      <div className="custom-info-header">
        <p>Quote & Customer Information</p>
      </div>
      <div className="content-wrapper">
      {loading?<Spinner animation="border" role="status" style={{margin:'auto auto'}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>:<><Customer reccord={reccord}/><ProductTable product={products}/></>}
      </div>
    </div>
  );
}

export default App;
