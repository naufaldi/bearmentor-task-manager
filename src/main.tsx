import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import App from './App.tsx'

// context, 1 context untuk 1 data
export const HabbitContext = createContext(null);
export const MenuContext = createContext(null);
type HabitVariant = 'progress' | 'done' | 'planned';

function Root() {
  const [habitsGlobal, setHabitsGlobal] = useState<Array<{ id: string; nameHabbits: string; variant: HabitVariant }>>([
    { id: '1', nameHabbits: 'Habit 1', variant: 'progress' },
    { id: '2', nameHabbits: 'Habit 2', variant: 'done' },
    { id: '3', nameHabbits: 'Habit 3', variant: 'planned' },
    { id: '4', nameHabbits: 'Habit 4', variant: 'planned' },
    { id: '5', nameHabbits: 'Habit 5', variant: 'planned' },
  ]);
  const props = {
    makan: 'Makan',
    minum: 'Minum',
    lari: 'Lari',
    duduk: 'Duduk',
    tidur: 'Tidur'
  }
  return (
    <StrictMode>
      <HabbitContext.Provider value={{
        habitsGlobal,
        setHabitsGlobal,
      }}>
        <MenuContext.Provider value={{
          menu: 'Menu 1'
        }}>
          <App props={props} />
        </MenuContext.Provider>
      </HabbitContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);