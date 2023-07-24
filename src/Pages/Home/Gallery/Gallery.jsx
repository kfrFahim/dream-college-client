import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../../Componentss/Container";

const Gallery = () => {

  useEffect(()=> {
    AOS.init();
},[])

  return (
  <div>
     <Container>
     <div>
     <div className="my-12">
          <h1 className="text-2xl md:text-5xl font-semibold text-black text-center my-4">Take a look around</h1>
          <hr className="w-[10%] h-1 bg-black mx-auto" />

          <div className="flex justify-center">
          <FaAngleDown className="text-2xl"></FaAngleDown>
          </div>
     </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div>
          {" "}
          <img
            className="w-[240px] h-[240px] mx-auto border-4 rounded-md"
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
            data-aos="fade-left"
          />
       
        </div>
        <div>
          {" "}
          <img
            className="w-[240px] h-[240px] mx-auto border-4 rounded-md"
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-right"
          />
        
        </div>

        <div>
          {" "}
          <img
            className="w-[240px] h-[240px] mx-auto border-4 rounded-md"
            src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-left"
          />
          
        </div>

        <div>
          {" "}
          <img
            className="w-[240px] h-[240px] mx-auto border-4 rounded-md"
            src='https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt=""
            data-aos="fade-right"
          />
          
        </div>

        <div>
          {" "}
          <img
            className="w-[240px] h-[240px] mx-auto border-4 rounded-md"
            src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-left"
          />
          
        </div>
        <div>
          {" "}
          <img
            className="w-[240px] h-[240px] mx-auto border-4 rounded-md"
            src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-right"
          />
          
        </div>

        <div>
          {" "}
          <img
            className="w-[240px] h-[240px] mx-auto border-4 rounded-md"
            src="https://images.unsplash.com/photo-1627556704243-5f0771d90783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-left"
          />
          
        </div>

        <div>
          {" "}
          <img
            className="w-[240px] h-[240px] mx-auto border-4 rounded-md"
            src="https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-left"
          />
      
        </div>

      </div>
    </div>
     </Container>
  </div>
  );
};

export default Gallery;