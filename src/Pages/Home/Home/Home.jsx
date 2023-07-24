import React from 'react';
import JobSearch from '../JobSearch/JobSearch';
import Gallery from '../Gallery/Gallery';

const Home = () => {
     return (
          <div className="pt-20" >
               <JobSearch></JobSearch>
               <Gallery></Gallery>
          </div>
     );
};

export default Home;