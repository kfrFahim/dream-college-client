import React from 'react';
import Gallery from '../Gallery/Gallery';
import CollegeSearch from '../CollegeSearch/CollegeSearch';

const Home = () => {
     return (
          <div className="pt-20" >
               <CollegeSearch></CollegeSearch>
               <Gallery></Gallery>
          </div>
     );
};

export default Home;