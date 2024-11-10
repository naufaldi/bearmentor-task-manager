import { HeadTrack } from "./components/home/head-track"
import { ListHabbit } from "./components/home/list-habit"

function App() {
  // Dump terlebih dahulu
  // Commit
  // Pecah 
  // Commit
  return (
    <>
      <div className="container mx-auto w-full">
        {/* Header */}
        <HeadTrack />
        {/* End Header */}
        {/* List Habbit */}
        <ListHabbit />
        {/* End List Habbit */}
      </div>
    </>
  )
}

export default App
