import React, { useEffect, useState } from "react";
import Container from "../../Componentss/Container";
import { Link, useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();

  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(`https://dream-college-server-kappa.vercel.app/colleges/${id}`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  });

  return (
    <div className="pt-20">
      <Container>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="flex justify-center">
            <div className="w-1/2">
              <figure>
                <img
                  className="h-[350px]"
                  src={colleges.college_image}
                  alt="Shoes"
                />
              </figure>
            </div>

            <div className="card-body">
              <h2 className="card-title">{colleges.college_name}</h2>
              <p>Rating : {colleges.college_rating}</p>
              <p>Admission date : {colleges.admission_date} </p>
              <p>Research Item : {colleges.research_count}</p>
              <div>
                <span className="font-bold">Events :</span>
                {colleges.details?.events.map((event, i) => (
                  <p key={i}> {event} </p>
                ))}{" "}
              </div>
              <div>
                <span className="font-bold">Sports :</span>{" "}
                {colleges.details?.sports_facilities.map((event, i) => (
                  <p key={i}> {event} </p>
                ))}{" "}
              </div>

              <div className="card-actions justify-end">
                <Link to="/colleges">
                  <button className="btn btn-accent">All Colleges</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CollegeDetails;
