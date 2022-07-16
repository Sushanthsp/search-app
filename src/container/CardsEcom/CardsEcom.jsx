import React, { useState } from 'react'
import './CardsEcomStyle.scss'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';


function CardsEcom({ name, src, price, ePrice, ratings }) {

    const [like, setLike] = useState(false)
    return (
        <div className="hover-cards">
            <div className='image-cards'>
                <div className="imgph">
                    <img src={src} alt="" className='img'>
                    </img><div className="ph">
                        <div className="hover">View Product</div>
                    </div>
                </div>

                <div className="font">{name}</div>
                <div className="price"><div className="priceOne">Rs.{ePrice}</div><div className="priceTwo">Rs.{price}</div></div>
                <div className="ratings">
                    {/* {Array.from(Array(ratings), (e, i) => {
    return   <AiFillStar key={i}/> })} */}
                    {[...Array(ratings)].map((e, i) => {
                        return <AiFillStar key={i} />
                    })}
                    <span>{ratings}</span>
                </div>
                <div className="heartBody">
                    <div className="heart" onClick={() => setLike(!like)}><div className="in">
                        {like ? <FaRegHeart /> : <FaHeart />}
                    </div> </div>
                </div>
            </div>
        </div>

    )
}

export default CardsEcom