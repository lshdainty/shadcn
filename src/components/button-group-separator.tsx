import { Button } from "@/components/shadcn-ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/shadcn-ui/button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  )
}
