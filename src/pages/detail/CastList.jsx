import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'
import tmbdApi from '../../api/tmbApi'
import apiConfig from '../../api/apiConfig'

const CastList = props => {
    const {category} = useParams();

    const [cast, setCast] = useState([])

    useEffect(() => {
        const getCredits = async () =>{
            const response = await tmbdApi.credits(category, props.id);
            setCast(response.cast.slice(0,5));
        }
        getCredits();
    }, [category, props.id])
    
  return (
    <div className='casts'>
        {
            cast.map((item, i) =>(
                <div key={i} className="casts__item">
                    <div className='casts__item__img' style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                    <p className='casts__item__name'>{item.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CastList