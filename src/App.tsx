import { useEffect, useReducer, useState } from "react";
import { HeadTrack } from "./components/home/head-track"

import HabitTracker from "./components/home/list-habit";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./schema/login-schema";
import Navbar from "./components/common/navbar";
import Layout from "./components/common/Layout";
import { Button } from "./components/ui/button";



type LoginSchemaType = z.infer<typeof LoginSchema>;

function App() {
  const initialState = { count: 0 };
  // const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const reducer = (state: { count: number }, action: { mode: string }) => {
    console.log("action", action);
    switch (action.mode) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "modulo":
        return { count: state.count % 2 };
      case "percentage":
        return { count: state.count * 100 };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);



  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),

  });
  // const { makan, minum, ...rest } = props.props;

  const onSubmit = (data: LoginSchemaType) => {
    console.log("data", data);
  }

  console.log("state", state);
  async function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  const [dataListJson, setDataListJson] = useState<any>([]);
  const [loadingDataJson, setLoadingDataJson] = useState<boolean>(false);
  const [errorDataJson, setErrorDataJson] = useState<any>(null);
  const getDataListJson = async () => {
    setLoadingDataJson(true);
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setLoadingDataJson(false);
      setDataListJson(json);
      console.log(json);
    } catch (error) {
      console.error(error.message);
      setErrorDataJson(error);
    }
  }
  useEffect(() => {
    getDataListJson();

  }, [])
  // const filterData = data.filter((item: any) => item.id < 10);
  console.log("data", data);

  const initialListData = {
    loading: false,
    data: [],
    error: null
  }
  // reducer
  const fetchReducer = (state: any, action: any) => {
    console.log("action", action);
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };

      default:
        return state;
    }
  };
  const [listData, dispatchListData] = useReducer(fetchReducer, initialListData);
  const getDataListJsonReducer = async () => {
    dispatchListData({ type: 'FETCH_START' })
    console.log("fetch start", listData);

    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      dispatchListData({ type: 'FETCH_SUCCESS', payload: json })
      console.log("fetch success", listData);
    } catch (error) {
      dispatchListData({ type: 'FETCH_ERROR', payload: error })
      console.log("fetch error", listData);
    }
  }
  useEffect(() => {
    getDataListJsonReducer();
  }, [])
  return (
    <>

      <Layout>
        <h1 className="text-2xl font-bold">{state.count}</h1>
        <Button onClick={() => dispatch({ mode: "increment" })}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ mode: "decrement" })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ mode: "modulo" })}>
          Modulo
        </Button>
        <Button onClick={() => dispatch({ mode: "percentage" })}>
          Percentage
        </Button>
        <Button onClick={getData}>  Get Data </Button>
        {listData.loading && <p>Loading...</p>}
        {listData.error && <p>Error: {listData.error.message}</p>}
        {listData.data && (
          <ul>
            {listData?.data?.slice(0, 10).map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
        {loadingDataJson && <p>Loading...</p>}
        {errorDataJson && <p>Error: {dataListJson.error.message}</p>}
        {dataListJson && (
          <ul>
            {dataListJson.slice(0, 10).map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
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
