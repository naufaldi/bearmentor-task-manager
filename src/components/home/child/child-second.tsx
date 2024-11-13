import { Card } from '@/components/ui/card'
import React from 'react'
import ChildThree from './child-three'

function ChildSecond({ nameHabbits }: { nameHabbits: string }) {
  return (
    <>
      <Card>Child 2 : {nameHabbits}</Card>
      <ChildThree nameHabbits={nameHabbits} />
    </>
  )
}

export default ChildSecond