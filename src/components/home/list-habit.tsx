
import { useContext, useState, } from 'react';
import ItemHabit from './item-habit'
import { HabbitContext } from '@/main';


// function, data, handle data, handle event List Habbit
// itemHabbit hanya mendaptkan data dari listHabbit


export const ListHabbit = () => {
  const { habitsGlobal, setHabitsGlobal } = useContext(HabbitContext);

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  // const [editHabbit, setEditHabbit] = useState<{ [key: string]: string }>({});
  const handleCheckedChange = (id: string, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: checked
    }));
  };

  const [date, setDate] = useState<string>('Jumat');
  const handleEditChange = (id: string) => {

    setHabitsGlobal(prevHabits => prevHabits.map(item =>
      item.id === id ? { ...item, nameHabbits: 'Habit Baru' } : item
    ));

  }
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> List Habbit All</h1>
      <ul className="flex flex-col gap-4">
        {
          habitsGlobal.map((item) => (
            <ItemHabit
              date={date}
              setDate={setDate}
              key={item.id}
              nameHabbits={item.nameHabbits}
              id={item.id}
              variant={item.variant}
              checked={checkedItems[item.id] || false}
              onCheckedChange={(checked) => handleCheckedChange(item.id, checked)}
              onEdit={() => handleEditChange(item.id)}
              onDelete={() => { alert(`Delete ${item.nameHabbits}`) }}
            />
          ))
        }

      </ul>
      {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> List Habbit Progress</h1>
      <ul className="flex flex-col gap-4">
        {
          listHabbit.filter((item) => item.variant === 'progress').map((item) => (
            <ItemHabit key={item.id} nameHabbits={item.nameHabbits} id={item.id} variant={item.variant} />
          ))
        }

      </ul> */}
    </>
  )
}
