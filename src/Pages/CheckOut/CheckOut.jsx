import React, { useContext } from "react";
import Container from "../../Componentss/Container";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  //  const { user } = useContext(AuthContext);

  //  useTtile("Add a toy")

  //  const notify = () => toast("Added Successfully");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://dream-college-server-kappa.vercel.app/admissions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    reset();
    return false;
  };

  return (
    <div className="pt-20">
      <Container>
        <h1 className="text-3xl text-center my-5 font-bold">
          Admission Going on
        </h1>

        <div className="shadow-xl p-5 my-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="grid grid-cols md:grid-cols-2 gap-5">
              <input
                className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
                placeholder="Candidate Name"
                {...register("name")}
              />

              <input
                className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
                // value={user?.name}
                placeholder="Subject"
                defaultValue=""
                {...register("subject")}
              />

              <input
                className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
                placeholder="Photo URL"
                defaultValue=""
                {...register("image")}
              />

              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="email"
                // value={user?.email}
                className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
                placeholder="Candidate Email"
                {...register("email")}
              />
              <input
                type="number"
                className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
                placeholder="Candidate Phone Number"
                {...register("phonenumber")}
              />
              <input
                type="date"
                // value={user?.email}
                className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
                placeholder="Date of Birth"
                {...register("date")}
              />

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div className="flex justify-center">
              <input
                className="btn bg-blue-300 text-black px-8 py-3 my-6"
                type="submit"
                // onClick={notify}
              />
              {/* <ToastContainer /> */}
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
