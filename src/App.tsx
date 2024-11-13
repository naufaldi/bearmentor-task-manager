import { useState } from "react";
import { HeadTrack } from "./components/home/head-track"
import { ListHabbit } from "./components/home/list-habit"
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  // Dump terlebih dahulu
  // Commit
  // Pecah 
  // Commit
  const [count, setCount] = useState(0); // ini state
  // syarat state 
  // 1. state harus di dalam function component
  // 2. data di state bisa diubah / sering berubah
  const dataHabit = ['progress', 'done', 'planned']; // ini variable constant
  const date = ['2024-01-01', '2024-01-02', '2024-01-03']; // ini variable let
  return (
    <>
      <div className="container mx-auto w-full">
        {/* Header */}
        <HeadTrack />
        {/* End Header */}
        {/* List Habbit */}
        <ListHabbit />
        {/* End List Habbit */}
        <p className="text-4xl font-extrabold tracking-tight lg:text-5xl">{count}</p>
        <Button variant="default" onClick={() => setCount(count + 1)}>Tambah</Button>
        <Button variant="default" onClick={() => setCount(count - 1)}>Kurang</Button>
        <Input onChange={(e) => console.log(e.target.value)} />
      </div>
    </>
  )
}

export default App
