import { useState } from "react";
import { HeadTrack } from "./components/home/head-track"

import HabitTracker from "./components/home/list-habit";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./schema/login-schema";
import Navbar from "./components/common/navbar";
import Layout from "./components/common/Layout";



type LoginSchemaType = z.infer<typeof LoginSchema>;

function App() {
  //  state
  // const [inputUsername, setInputUsername] = useState<string>("John");
  // const [inputId, _setInputId] = useState<string>("007");
  // const [inputPassword, setInputPassword] = useState<string>("");
  // const [error, setError] = useState<z.ZodError<LoginSchemaType> | null>(null);
  //  hooks / custom / import lib

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),

  });
  // const { makan, minum, ...rest } = props.props;

  const onSubmit = (data: LoginSchemaType) => {
    console.log("data", data);
  }


  return (
    <>

      <Layout>
        {/* End Header */}
        {/* List Habbit */}
        <HabitTracker />
        <div>
          <h2>Uncontrolled Form</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>
                ID:
                <input type="text"

                  {...register("id", { required: true })}
                  className="border-2 border-gray-300 rounded-md p-2" />
              </label>
              {
                errors && <p className="text-red-500">{errors.id?.message}</p>
              }
              <label>
                Name:
                <input type="text"
                  {...register("username", { required: true })}
                  className="border-2 border-gray-300 rounded-md p-2" />
              </label>
              {
                errors && <p className="text-red-500">{errors.username?.message}</p>
              }
              <label>
                password:
                <input type="password"
                  {...register("password", { required: true })}
                  className="border-2 border-gray-300 rounded-md p-2" />
              </label>
              {
                errors && <p className="text-red-500">{errors.password?.message}</p>
              }
            </div>



            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
          </form>
        </div>
      </Layout>

    </>
  )
}

export default App
