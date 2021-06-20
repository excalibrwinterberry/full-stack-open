import React, {useState} from 'react'

// const Header = (props) =>{
//   return(
//     <h1>{props.course.name}</h1>
//   )
// }

// const Part = (props) => {
//   return <p>{props.name} {props.excercises}</p>
// }


// const Content = (props) =>{
//   return(
//     <>
//     <Part name={props.course.parts[0].name} excercises={props.course.parts[0].exercises}/>
//     <Part name={props.course.parts[1].name} excercises={props.course.parts[1].exercises}/>
//     <Part name={props.course.parts[2].name} excercises={props.course.parts[2].exercises}/>
//     </>
//   )
// }

// const Total =(props) =>{
//   return(
//     <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises +props.course.parts[2].exercises}</p>

//   )
// }


// const App=() => {

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//      <Header course={course} />
//      <Content course={course}/>
//      <Total course={course}/>
//     </div>
//   );
// }

// const Hello = ({name="ark",age=20}) => {
// const age = props.age
// const name = props.name
//   const bornYear =() => new Date().getFullYear()-age
//   return(
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         Probably born in {bornYear()}
//       </p>
//     </div>
//   )
// }


// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// const Display = ({counter}) =><div>{counter}</div>


// const Button = ({text, handleClick}) =>{
//   return(
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }
// const App = () => {
//   const [counter,setCounter]=useState(0)

//   const increaseByOne = () => setCounter(counter+1)

//   const setToZero = () => setCounter(0)

//   const decreaseByOne = () => setCounter(counter-1)

//   return(
//     <>
//       <Display counter={counter} />
//       <Button text='PLUS' handleClick={increaseByOne} />
//       <Button text='ZERO' handleClick={setToZero} />
//       <Button text='MINUS' handleClick={decreaseByOne} />
//     </>
//   )
// }

// const History = (props) =>{
//   if(props.allClicks.length === 0){
//     return (
//       <div>
//         The App is Used by pressing buttons
//       </div>
//     )

//   }
//   return (
//     <div>
//       Button press history : {props.allClicks.join(' ')}
//     </div>
//   )
// }

// debugger

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll([...allClicks,'L'])
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// const App = ()=>{
//   let value=0;
//   return(
//     <div>
//       {value}
//       {console.log('Before',value)}
//       <button onClick={()=>console.log('print')}>Inc</button>
//     </div>
//   )
// }


// const Button =({text, handleClick}) =><button onClick={handleClick}>{text}</button>

// const Avg =({text,data})=>{
// let avg=0
// if(data[2]!==0){
//   avg=(data[0]-data[1])/(data[2])
// }
// return(
//   <p>
//     {text} {avg}
//   </p>
// )
// }

// const Positive=({text,data})=>{
// let pos=0
// if(data[1] !== 0){
//   pos=data[0]/data[1]*100
// }
// return(
//   <p>
//     {text} {pos}%
//   </p>
// )
// }


// const Stats = ({text,data}) =><tr><td>{text}</td><td>{data}</td></tr>

// const Statistics=({text,data})=>{
// if(data[3] === 0){
//   return <p>No feedback given</p>
  
// }
// return(
//   <div>
//     <h1>statistcs</h1>
//     <p/>
//     <table>
//       <tbody>
//     <Stats text={text[0]} data={data[0]}/>
//     <Stats text={text[1]} data={data[1]}/>
//     <Stats text={text[2]} data={data[2]}/>
//     <Stats text={text[3]} data={data[3]}/>
//     </tbody>
//     </table>
//     <Avg text={text[4]} data={[data[0],data[1],data[3]]} />
//     <Positive text={text[5]} data={[data[0],data[3]]} />
//   </div>
// )

// }


// const App =()=>{
// const [good,setGood]=useState(0)
// const [neutral,setNeutral]=useState(0)
// const [bad,setBad]=useState(0)
// const [all,setAll]=useState(0)
// const text=["good","neutral","bad","all","average","positive"]

// const handleGood =()=> {
//   setGood(good+1)
//   setAll(all+1)
// }
// const handleNeutral =()=> {
//   setNeutral(neutral+1)
//   setAll(all+1)
// }
// const handleBad =()=> {
//   setBad(bad+1)
//   setAll(all+1)
// }


// return(
//   <>
//   <div>
//     <h1>give feedback</h1>
//     <p/>
//     <Button text={text[0]} handleClick={handleGood}/>
//     <Button text={text[1]} handleClick={handleNeutral}/>
//     <Button text={text[2]} handleClick={handleBad}/>
//   </div>
//     <Statistics text={text} data={[good,neutral,bad,all]} />
//   </>
// )

// }

// 

function Component() {
  const [newChange, setNewChange] = useState("")

  return (<input value={newChange} onChange={(e) => setNewChange(e.target.value)} />)
}

const App = ()=>{
  return(
    <form>
      <Component />
    </form>
  )
}



export default App;
