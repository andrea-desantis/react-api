import { useEffect, useState } from 'react'

import './App.css'
import Cards from './components/Cards';
import axios from "axios";


function App() {
  const [attrici, setAttrici] = useState([]);

  useEffect(() => {
    axios
      .get(
        " https://lanciweb.github.io/demo/api/actresses/"
      )
      .then((resp) => {
        setAttrici(resp.data)
      });
  }, []);



  return (
    <>
      <header><h1>Attrici</h1></header>
      <main className='container'>
        <div className='row g-3'>
          {attrici.map((attrice, id) => (
              <div className="d-flex col-12 col-sm-6 col-md-4 col-lg-3" key={attrice.id}>
          <Cards
            name={attrice.name}
            year={attrice.birth_year}
            nationality={attrice.nationality}
            biography={attrice.biography}
            img={attrice.image}
            awards={attrice.awards}
          />
              </div>
        ))}
        </div>
        


      </main>

    </>
  )
}

export default App
