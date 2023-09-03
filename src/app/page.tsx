import { Spinner, Button } from '@/components'

export default function Home() {
  return (
    <main>
      <h1>Boilerplate next 13</h1>

      <Button>
        <Spinner className="mr-2" />
        Custom text
      </Button>
    </main>
  )
}
