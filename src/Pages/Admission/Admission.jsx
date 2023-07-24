import React, { useEffect, useState } from 'react';
import Container from '../../Componentss/Container';
import { Link } from 'react-router-dom';

const Admission = () => {
     
     const [colleges , setCollege] = useState([])

     useEffect(() => {
          fetch("http://localhost:5000/colleges")
          .then(res => res.json())
          .then(data => setCollege(data) )     
     })

     
     
     return (
          <div className='pt-20'>
              <Container>
              {
                    colleges.map(college =><Link to={`/checkout/${college._id}`}><p className='btn btn-warning mr-6 my-5'>{college.college_name}</p> </Link> )
               }
              </Container>
          </div>
     );
};

export default Admission;