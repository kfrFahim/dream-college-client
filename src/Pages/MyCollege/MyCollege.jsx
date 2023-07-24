import React, { useEffect, useState } from "react";
import Container from "../../Componentss/Container";

const MyCollege = () => {
  const [colleges, setCollege] = useState([]);

  useEffect(() => {
    fetch("https://dream-college-server-kappa.vercel.app/admission")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  });

  return (
    <div className="pt-20">
      <Container>
        <div className="w-full">
          <h3 className="text-3xl font-semibold my-4">
            Total Admission: {colleges.length}
          </h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Phone No.</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((college, index) => (
                  <tr key={college._id}>
                    <th>{index + 1}</th>
                    <td>
                      {" "}
                      <img
                        className="rounded w-24 h-24"
                        src={college.image}
                        alt=""
                      />{" "}
                    </td>
                    <td>{college.name}</td>
                    <td>{college.email}</td>
                    <td>{college.subject}</td>
                    <td>{college.phonenumber}</td>
                    <td>{college.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyCollege;
