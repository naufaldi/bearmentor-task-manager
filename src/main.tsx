import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import App from './App.tsx'

// context, 1 context untuk 1 data
export const HabbitContext = createContext(null);
export const MenuContext = createContext(null);

function Root() {
  const [habitsGlobal, setHabitsGlobal] = useState('Habbit Global');

  return (
    <StrictMode>
      <HabbitContext.Provider value={{
        habitsGlobal,
        setHabitsGlobal,
        id: 700,
        variant: 'progress'
      }}>
        <MenuContext.Provider value={{
          menu: 'Menu 1'
        }}>
          <App />
        </MenuContext.Provider>
      </HabbitContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);