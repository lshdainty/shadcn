import { SearchIcon } from "lucide-react"

import { Button } from "@/components/shadcn-ui/button"
import { ButtonGroup } from "@/components/shadcn-ui/button-group"
import { Input } from "@/components/shadcn-ui/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
