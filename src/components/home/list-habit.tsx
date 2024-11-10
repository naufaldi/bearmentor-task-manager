
import ItemHabit from './item-habit'

export const ListHabbit = () => {
  const listHabbit = [
    { id: '1', nameHabbits: 'Habit 1' },
    { id: '2', nameHabbits: 'Habit 2' },
    { id: '3', nameHabbits: 'Habit 3' },
  ]
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> List Habbit</h1>
      <ul className="flex flex-col gap-4">
        {
          listHabbit.map((item) => (
            <ItemHabit key={item.id} nameHabbits={item.nameHabbits} id={item.id} />
          ))
        }

      </ul>
    </>
  )
}
