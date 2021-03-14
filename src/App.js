import Layout from './Layout.js'
import Beer from './Beer.js'
import React, { useState, useEffect } from 'react'

function App() {

  const [beers, setBeers ] = useState([]);
  const [ abvFilter, setabvFilter] = useState("");
  const [ ibuFilter, setibuFilter] = useState("");
  const [ page, setPage ] = useState(1);

  useEffect(() => {
      async function fetchData() {
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&${abvFilter}&${ibuFilter}`);
      const json = await res.json();

      setBeers(json);
    };

    fetchData();
  }, [ abvFilter, ibuFilter, page ]);

  function abvChange(e){
    setPage(1);
    const value = e.target.value;
    
    switch(value){
      case "all":
        setabvFilter("");
        break;
      case "weak":
        setabvFilter("abv_lt=4.6");
        break;
      case "medium":
        setabvFilter("abv_gt=4.5&abv_lt=7.6");
        break;
      case "strong":
        setabvFilter("abv_gt=7.5");
        break;
    }
    
  }

  function ibuChange(e){
    setPage(1);
    const value = e.target.value;
    
    switch(value){
      case "all":
        setibuFilter("");
        break;
      case "weak":
        setibuFilter("ibu_lt=35");
        break;
      case "medium":
        setibuFilter("ibu_gt=34&ibu_lt=75");
        break;
      case "strong":
        setibuFilter("ibu_gt=74");
        break;
    }
    
  }

  function pageChange(value){
    if(value == "next"){
      setPage(page + 1);
      console.log(page);
    } else {
      setPage(page - 1);
    }
  }

  return (
    <div className="App">

      <Layout 
        handleABVChange={abvChange} 
        handleIBUChange={ibuChange} 
        currentPage={page} 
        pageChange={pageChange}>

        <div className="beers">
          
          {beers.map(beer => (<Beer beer={beer} />))}
          
        </div>

      </Layout>
    </div>
  );
}

export default App;
