import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// FilterComponent
export default function FilterComponent({ filter, setFilter }: { filter: string; setFilter: (filter: string) => void }) {
  return (
    <div className="mb-4">
      <Select value={filter} onValueChange={setFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter habits" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Habits</SelectItem>
          <SelectItem value="completed">Completed Today</SelectItem>
          <SelectItem value="incomplete">Incomplete Today</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
