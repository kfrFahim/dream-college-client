import React from "react";
import Container from "../../../Componentss/Container";

const JobSearch = () => {
  return (
    <div>
      <Container>
        <div className="p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border-2 border-black "
          />{" "}
          <button className="btn btn-info">Search</button>
        </div>


      </Container>
    </div>
  );
};

export default JobSearch;


