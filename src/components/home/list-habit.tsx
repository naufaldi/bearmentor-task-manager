
import { useState, } from 'react';
import ItemHabit from './item-habit'

type HabitVariant = 'progress' | 'done' | 'planned';

// function, data, handle data, handle event List Habbit
// itemHabbit hanya mendaptkan data dari listHabbit
export const ListHabbit = () => {
  const listHabbit: Array<{
    id: string;
    nameHabbits: string;
    variant: HabitVariant;
  }> = [
      { id: '1', nameHabbits: 'Habit 1', variant: 'progress' },
      { id: '2', nameHabbits: 'Habit 2', variant: 'done' },
      { id: '3', nameHabbits: 'Habit 3', variant: 'planned' },
      { id: '4', nameHabbits: 'Habit 4', variant: 'planned' },
      { id: '5', nameHabbits: 'Habit 5', variant: 'planned' },
    ]
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  // const [editHabbit, setEditHabbit] = useState<{ [key: string]: string }>({});
  const handleCheckedChange = (id: string, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: checked
    }));
  };
  console.log("checkedItems", checkedItems);
  const [date, setDate] = useState<string>('Jumat');
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> List Habbit All</h1>
      <ul className="flex flex-col gap-4">
        {
          listHabbit.map((item) => (
            <ItemHabit
              date={date}
              setDate={setDate}
              key={item.id}
              nameHabbits={item.nameHabbits}
              id={item.id}
              variant={item.variant}
              checked={checkedItems[item.id] || false}
              onCheckedChange={(checked) => handleCheckedChange(item.id, checked)}
              onEdit={() => { alert(`Edit ${item.nameHabbits}`) }}
              onDelete={() => { alert(`Delete ${item.nameHabbits}`) }}
            />
          ))
        }

      </ul>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> List Habbit Progress</h1>
      <ul className="flex flex-col gap-4">
        {
          listHabbit.filter((item) => item.variant === 'progress').map((item) => (
            <ItemHabit key={item.id} nameHabbits={item.nameHabbits} id={item.id} variant={item.variant} />
          ))
        }

      </ul>
    </>
  )
}
