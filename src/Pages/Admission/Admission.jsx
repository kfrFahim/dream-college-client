import React, { useEffect, useState } from "react";
import Container from "../../Componentss/Container";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Admission = () => {
  const [colleges, setCollege] = useState([]);

  useEffect(() => {
    fetch("https://dream-college-server-kappa.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  });

  return (
    <div className="pt-20">
      <Container>

      <div className="my-12">
          <h1 className="text-2xl md:text-5xl font-semibold text-black text-center my-4">Admission Going On</h1>
          <hr className="w-[10%] h-1 bg-black mx-auto" />

          <div className="flex justify-center">
          <FaAngleDown className="text-2xl"></FaAngleDown>
          </div>
     </div>

        {colleges.map((college) => (
          <Link to={`/checkout/${college._id}`}>
            <p className="btn btn-warning mr-6 my-5">{college.college_name}</p>{" "}
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default Admission;
