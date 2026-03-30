import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/shadcn-ui/button"
import { Calendar } from "@/components/shadcn-ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn-ui/popover"

function App() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold text-foreground">DatePicker Test</h1>

        {/* DatePicker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        {/* Calendar 단독 */}
        <div className="rounded-lg border border-border p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>

        {date && (
          <p className="text-foreground">
            Selected: <strong>{format(date, "yyyy-MM-dd")}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

export default App
