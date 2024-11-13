import { HabbitContext } from '@/main';
import React, { useContext } from 'react'

function ChildThree({ nameHabbits }: { nameHabbits: string }) {
  const { nameHabbits: HabitsGlobal, id, variant } = useContext(HabbitContext);
  return (
    <>
      <div>Child 3 : {nameHabbits}</div>
      <div>Child Global : {HabitsGlobal}</div>
      <div>Child Global ID : {id}</div>
      <div>Child Global Variant : {variant}</div>
    </>
  )
}

export default ChildThree