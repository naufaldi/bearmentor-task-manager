"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Plus } from 'lucide-react'
import { Habit } from "@/type/habit"
import FilterComponent from "./habit-filter"
import HabitChart from "./habit-track"
import HabitItem from "./habit-item"

// Habit type definition


// Main HabitTracker component
export default function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [filter, setFilter] = useState("all")

  // Load habits from localStorage on component mount
  useEffect(() => {
    const savedHabits = localStorage.getItem("habits")
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits))
    }
  }, [])

  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now(),
      name,
      completed: Array(7).fill(false),
    }
    setHabits([...habits, newHabit])
  }

  const toggleHabit = (id: number, day: number) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCompleted = [...habit.completed]
          newCompleted[day] = !newCompleted[day]
          return { ...habit, completed: newCompleted }
        }
        return habit
      })
    )
  }

  const editHabit = (id: number, newName: string) => {
    setHabits(habits.map((habit) => (habit.id === id ? { ...habit, name: newName } : habit)))
  }

  const deleteHabit = (id: number) => {
    setHabits(habits.filter((habit) => habit.id !== id))
  }

  const filteredHabits = habits.filter((habit) => {
    if (filter === "all") return true
    if (filter === "completed") return habit.completed[habit.completed.length - 1]
    if (filter === "incomplete") return !habit.completed[habit.completed.length - 1]
    return true
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Habit Tracker</h1>
      <AddHabitForm onAdd={addHabit} />
      <FilterComponent filter={filter} setFilter={setFilter} />
      <HabitList habits={filteredHabits} onToggle={toggleHabit} onEdit={editHabit} onDelete={deleteHabit} />
      <HabitChart habits={habits} />
    </div>
  )
}

// AddHabitForm component
function AddHabitForm({ onAdd }: { onAdd: (name: string) => void }) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onAdd(name.trim())
      setName("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New habit name"
        className="flex-grow"
      />
      <Button type="submit">
        <Plus className="mr-2 h-4 w-4" /> Add Habit
      </Button>
    </form>
  )
}


// HabitList component
function HabitList({
  habits,
  onToggle,
  onEdit,
  onDelete,
}: {
  habits: Habit[]
  onToggle: (id: number, day: number) => void
  onEdit: (id: number, newName: string) => void
  onDelete: (id: number) => void
}) {
  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}


