
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useContext, useState } from 'react';
import { HabbitContext } from '@/main';

export const HeadTrack = () => {
  const { habitsGlobal, setHabitsGlobal } = useContext(HabbitContext);
  const [valueInput, setValueInput] = useState<string>('');
  console.log("valueInput", valueInput);
  const handleAddHabbit = () => {
    setHabitsGlobal(prevHabits => [...prevHabits, { id: Date.now().toString(), nameHabbits: valueInput, variant: 'progress' }]);
  }
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> Habit Tracking App</h1>
      <div className="flex">
        <Input onChange={(e) => setValueInput(e.target.value)} value={valueInput} />
        <Button onClick={() => handleAddHabbit()}>Add</Button>
      </div>
    </>
  )
}
