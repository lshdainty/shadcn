import Link from "next/link"

import { Button } from "@/components/shadcn-ui/button"

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
