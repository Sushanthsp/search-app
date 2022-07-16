import React,{useState,useEffect}  from 'react'
import './RecommendationBodyStyle.scss'
import Cards from '../Cards/Cards'
import RecommendationText from '../RecommendationText/RecommendationText'
import { recomendation,text } from '../../api/api'

function RecommendationBody() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let  no = 6;

  if(windowWidth < 630)
  {
    no = 2 
  }
  else if(windowWidth < 800 && windowWidth > 630 )
  {
    no = 3 
  }
  else if(windowWidth < 909 && windowWidth > 800 )
  {
    no = 4 
  }
  else if( windowWidth > 909   && windowWidth <1000 )
  {
    no = 5
  }

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  });

  return (
    <div className='body'>
      <div className="top">
        <div className="heading">
          Latest Trends
        </div>
        <div className="cards">
        {recomendation.slice(0,no).map((x,index)=>  <Cards key={index} src={x.src} text={x.text} />  )}
        </div>
      </div>
      <div className="bottom">
        <div className="heading">
          Popular suggestions
        </div>
        <div className="suggestions">
         {text.map((x,index)=> <RecommendationText key={index} text={x}/>)}
        </div>
      </div>
    </div>
  )
}

export default RecommendationBody