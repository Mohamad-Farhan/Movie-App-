import React from 'react';

// import components
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import SerchBar from './elements/SearchBar';

const Home = () => (
    <>
        <HeroImage />
        <SerchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
    </>
)

export default Home;