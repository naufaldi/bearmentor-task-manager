
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const HeadTrack = () => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> Habit Tracking App</h1>
      <div className="flex">
        <Input />
        <Button>Add</Button>
      </div>
    </>
  )
}
