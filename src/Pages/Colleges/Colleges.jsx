import React, { useEffect, useState } from 'react';
import Container from '../../Componentss/Container';
import Card from './Card';

const Colleges = () => {

     const [colleges , setCollege] = useState([])

     useEffect(() => {
          fetch("http://localhost:5000/colleges")
          .then(res => res.json())
          .then(data => setCollege(data) )     
     })

     return (
          <div className="pt-20" >
              <Container >
              <div className="grid grid-cols-1 md:grid-cols-3 w-[95%]">
        {colleges.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
              </Container>
          </div>
     );
};

export default Colleges;