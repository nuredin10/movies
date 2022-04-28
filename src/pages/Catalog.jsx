import React from 'react'

import { useParams } from 'react-router-dom'
import PageHeader from '../components/page-header/PageHeader';
import { category as cate} from '../api/tmbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {

  const {category} = useParams();


  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className='section mb-3'>
        <MovieGrid category={category}></MovieGrid>
      </div>
    </>
  )
}

export default Catalog