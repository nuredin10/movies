import React from 'react'
import './movie-list.scss'

import {Link} from 'react-router-dom'
import Button from '../button/Button'

import { category } from '../../api/tmbApi'
import apiConfig from '../../api/apiConfig'

const MovieCard = props => {

    const item = props.item;
    const link = '/'+category[props.category]+'/'+item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)


    return (
    <Link to={link}>
        <div className='movie-card' style={{backgroundImage: `url(${bg})`}}>
            <Button>
                <i className='bx bx-play'></i>
            </Button>
        </div>
        <div>{item.title || item.name}</div>
    </Link>
  )
}

MovieCard.propTypes = {}

export default MovieCard