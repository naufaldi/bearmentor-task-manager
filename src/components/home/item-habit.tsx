import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import ChildSecond from "./child/child-second";

interface ItemHabitProps {
  nameHabbits: string;
  id: string;
  variant: 'progress' | 'done' | 'planned';
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onEdit: () => void;
  onDelete: () => void;
  date: string;
  setDate: (date: string) => void;
}

//  UI Components, Data dari props
const ItemHabit = ({ nameHabbits, id, variant, checked, onCheckedChange, onEdit, onDelete, date, setDate }: ItemHabitProps) => {
  const progress = variant === 'progress';
  // ini state [get, set]
  // const [checked, setChecked] = useState(false);
  // const [Habbits, setHabbits] = useState('habiits');
  // const [edit, setEdit] = useState(false);
  // const [inputNameHabbits, setInputNameHabbits] = useState('test');



  return (
    <li className={cn("flex gap-4 ",
      variant === 'progress' && 'bg-green-500',
      variant === 'done' && 'bg-red-500',
      variant === 'planned' && 'bg-blue-500')} id={id} >
      <p>Child 1 {nameHabbits}</p>
      <p>{variant === 'progress' && 'Progress'}</p>
      <p>{variant === 'done' && 'Done'}</p>
      <p>{variant === 'planned' && 'Planned'}</p>
      <p>{date}</p>
      <Button variant="outline" onClick={() => setDate('Senin')}>Change Date</Button>
      <ChildSecond nameHabbits={nameHabbits} />
      <Checkbox
        name={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <Button variant="outline" onClick={onEdit}>Edit</Button>
      <Button variant="destructive" onClick={onDelete}>Delete</Button>
    </li>
  )
}
export default ItemHabit