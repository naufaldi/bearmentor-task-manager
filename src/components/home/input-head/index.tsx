import React from 'react'

import { useContext, useState } from 'react';
import { HabbitContext } from '@/main';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function InputHead() {
  const { habitsGlobal, setHabitsGlobal } = useContext(HabbitContext);
  const [valueInput, setValueInput] = useState<string>('');
  console.log("valueInput", valueInput);
  const handleAddHabbit = () => {
    setHabitsGlobal(prevHabits => [...prevHabits, { id: Date.now().toString(), nameHabbits: valueInput, variant: 'progress' }]);
  }
  return (
    <>
      <div className="flex">
        <Input onChange={(e) => setValueInput(e.target.value)} value={valueInput} />
        <Button onClick={() => handleAddHabbit()}>Add</Button>
      </div>
    </>
  )
}

export default InputHead