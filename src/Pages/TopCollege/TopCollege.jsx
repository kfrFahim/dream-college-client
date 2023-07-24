import React, { useEffect, useState } from 'react';
import Container from '../../Componentss/Container';
import { FaAngleDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import TopCollegeCard from './TopCollegeCard';

const TopCollege = () => {

     const [colleges , setCollege] = useState([])

     useEffect(() => {
          fetch("http://localhost:5000/colleges")
          .then(res => res.json())
          .then(data => setCollege(data) )     
     })

     return (
          <div>
                 <div className="pt-20" >
              <Container >

              <div className="my-12">
          <h1 className="text-2xl md:text-5xl font-semibold text-black text-center my-4">Top Colleges</h1>
          <hr className="w-[10%] h-1 bg-black mx-auto" />

          <div className="flex justify-center">
          <FaAngleDown className="text-2xl"></FaAngleDown>
          </div>
     </div>

              <div className="grid grid-cols-1 md:grid-cols-3 w-[95%]">
        {colleges.slice(0,3).map((item) => (
          <TopCollegeCard key={item._id} item={item}></TopCollegeCard>
        ))}
      </div>
              </Container>
          </div>
          </div>
     );
};

export default TopCollege;