import React,{useState} from 'react'
import './SearchBarStyle.scss'
import { FaSearch } from 'react-icons/fa';
import RecommendationBody from '../RecommendationBody/RecommendationBody';
import SearchResults from '../SearchResults/SearchResults';
import { ecom } from '../../api/api'

function SearchBar() {
  const [value, setValue] = useState()
  const [array, setArray] = useState(ecom)
  const [recommend, setRecommend] = useState(null)
  onchange =(e)=>{
    
    const search =  e.target.value.toLowerCase();
    setValue(search)
    const searchArray = ecom.filter((x,i)=>
    x.name.toLowerCase().includes(search))
    setArray(searchArray)
    setRecommend(searchArray)
  }

  return (
    <>
    <div className="searchBody" >
    <div className="search-bar">
        <form>
          <input
            type="search"
            placeholder="Search..."
            className='input'
            value={value}
            onChange={onchange}
          />
          <button type="submit" className='searchBtn'>
            <FaSearch/>
          </button>
        </form>
        {!recommend  ? <RecommendationBody/> :
          <SearchResults ecom={array}/>}
     
      </div>
      </div>
    </>
  )
}

export default SearchBar