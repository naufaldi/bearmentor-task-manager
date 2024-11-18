import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Habit } from "@/type/habit"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// HabitChart component
export default function HabitChart({ habits }: { habits: Habit[] }) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const chartData = daysOfWeek.map((day, index) => ({
    name: day,
    completed: habits.reduce((acc, habit) => acc + (habit.completed[index] ? 1 : 0), 0),
  }))

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Daily Habit Completion</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#8884d8" name="Habits Completed" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}