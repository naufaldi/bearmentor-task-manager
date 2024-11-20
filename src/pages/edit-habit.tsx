import Layout from '@/components/common/Layout'
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function EditHabit() {
  const { id } = useParams();
  console.log("id", id);
  const arrayHabbit = [
    { id: "1", nameHabbits: "Makan", variant: "progress" },
    { id: "2", nameHabbits: "Minum", variant: "done" },
  ]
  const data = arrayHabbit.find((item) => item.id === id);
  console.log("data", data);
  const [dataTodo, setDataTodo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setDataTodo(json))

  }, [])
  console.log("dataTodo", dataTodo);
  const handleFetchData = () => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => setDataTodo(json))
  }
  return (
    <>
      <Layout>
        <div>EditHabit</div>
        <Button onClick={handleFetchData}>
          Fetch data baru
        </Button>
        {
          dataTodo && isLoading ? (
            <div>
              <h3 className='text-xl font-bold'>Data {dataTodo.id}</h3>
              <h1 className='text-2xl font-bold'>{dataTodo.title}</h1>
              <p className='text-2xl font-bold'>{dataTodo.completed ? "Completed" : "Not Completed"}</p>
            </div>
          ) : (
            <div className='flex justify-center items-center h-screen'>Loading...</div>
          )
        }
      </Layout>
    </>
  )
}

export default EditHabit