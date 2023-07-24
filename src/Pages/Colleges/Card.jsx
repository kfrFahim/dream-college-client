import React from 'react';
import Container from '../../Componentss/Container';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
     return (
          <div className="my-5 ">
          <Container>
            <div className="card w-96 md:h-[350px] bg-base-100 shadow-xl">
              <figure>
                <img src={item.college_image} alt="Shoes" />
              </figure>
             
              <div className="card-body">
                <h2 className="card-title">{item.college_name}</h2>
               <p>Rating : {item.college_rating}</p>
               <p>Admission date : {item.admission_date} </p>
               <p>Research Item : {item.research_count}</p>
    
                <div className="card-actions justify-end">
                <Link to={`/collegedetails/${item._id}`}>
                      <button className="btn btn-accent">Details</button>
               </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
     );
};

export default Card;