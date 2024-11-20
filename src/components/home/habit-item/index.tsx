import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Habit } from "@/type/habit"

import { Pencil, Trash2 } from "lucide-react"
import { useState } from "react"

// HabitItem component
export default function HabitItem({
  habit,
  onToggle,
  onEdit,
  onDelete,
}: {
  habit: Habit
  onToggle: (id: number, day: number) => void
  onEdit: (id: number, newName: string) => void
  onDelete: (id: number) => void
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(habit.name)

  const handleEdit = () => {
    if (isEditing) {
      onEdit(habit.id, editName)
    }
    setIsEditing(!isEditing)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {isEditing ? (
            <Input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleEdit()}
              className="max-w-sm"
            />
          ) : (
            habit.name
          )}
        </CardTitle>
        <div>
          <Button variant="ghost" size="icon" onClick={handleEdit}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => onDelete(habit.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {habit.completed.map((done, index) => (
              <Checkbox
                key={index}
                checked={done}
                onCheckedChange={() => onToggle(habit.id, index)}
                aria-label={`Day ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
