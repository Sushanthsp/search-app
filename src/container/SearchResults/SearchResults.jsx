import React from 'react'
import './SearchResultsStyle.scss'
import CardsEcom from '../CardsEcom/CardsEcom'
import Accordion from '../Accordin/According'

function SearchResults({ecom}) {
  return (
    <div className="ecom-body">
      <div className="leftGrid">
        <div className="text">
          <div className="topping">
            <Accordion 
            title="BRAND" 
            ecom={ecom}/>
            <Accordion
              title="PRICE RANGE"
              ecom={ecom} />
            <Accordion
              title="RATINGS" 
              ecom={ecom}/>
          </div>
        </div>
      </div>
      <div className="rightGrid">
        <div className="cards">
       {ecom.map((x,index) => <CardsEcom key={index} name={x.name }src={x.src} price={x.price} ePrice={x.ePrice} ratings={x.ratings}/>)}   
           
        </div>
      </div>
    </div>
  )
}

export default SearchResults