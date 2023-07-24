import React, { useEffect, useState } from 'react';
import Container from '../../../Componentss/Container';
import Card from '../../Colleges/Card';

const CollegeSearch = () => {


  const [colleges, setCollege] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://dream-college-server-kappa.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  });


  const handleSearch = () => {
    fetch(`https://dream-college-server-kappa.vercel.app/getCollegeByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCollege(data);
      });
  };


     return (
          
               <div>
      <Container>
      <div className=" p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border-2"
          />{" "}
          <button className='btn' onClick={handleSearch}>Search</button>
        </div>


<div className="grid grid-cols-1 md:grid-cols-3 w-[95%]">
          {colleges.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>


      </Container>
    </div>
          
     );
};

export default CollegeSearch;