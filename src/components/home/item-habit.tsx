import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

const ItemHabit = ({ nameHabbits, id }: { nameHabbits: string, id: string }) => {
  return (
    <li className="flex gap-4" id={id}>
      <p>{nameHabbits}</p>
      <Checkbox id="terms1" />
      <Button variant="outline">Edit</Button>
      <Button variant="destructive">Delete</Button>
    </li>
  )
}
export default ItemHabit