import React from 'react';
import Gallery from '../Gallery/Gallery';
import CollegeSearch from '../CollegeSearch/CollegeSearch';
import TopCollege from '../../TopCollege/TopCollege';
import Reviews from '../Reviews/Reviews';

const Home = () => {
     return (
          <div className="pt-20" >
               <CollegeSearch></CollegeSearch>
               <TopCollege></TopCollege>
               <Gallery></Gallery>
               <Reviews></Reviews>
          </div>
     );
};

export default Home;