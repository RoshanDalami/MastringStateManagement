import Image from 'next/image'
import Counter from '@/Components/Counter'
import Input from '@/Components/Input'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-5 p-24">
      <Counter/>
      <Input/>
    </main>
  )
}
