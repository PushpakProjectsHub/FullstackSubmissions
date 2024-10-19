

const Total=(props)=>{

return (
<>


<p> Total number of Exercises {props.total.reduce((acc,current)=> acc+current,0 )}</p>
{/* <p> Total number of Exercises {Math.sum(...props.total)}</p> */}
</>




)

}

export default Total