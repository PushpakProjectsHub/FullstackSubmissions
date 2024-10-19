import { useState } from "react"
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 
  const myContents =[
    {part:part1,excercise:exercises1},
    {part:part2,excercise:exercises2},
    {part:part3,excercise:exercises3},
  ]

  

  
  const exercises=[exercises1,exercises2,exercises3]
  return (
    <div>
        <Header course={course}/>
        <Content contents={myContents} />
        <Total total={exercises}/>
    </div>
  )
}

export default App