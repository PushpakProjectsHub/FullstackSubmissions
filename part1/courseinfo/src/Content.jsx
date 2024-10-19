import Part from "./Part";


const Content=(props)=>{

    return(
    <>
    
    {props.contents.map((eactpart,index)=>{ return <Part key={index} part={eactpart.part} excercise={eactpart.excercise}/>})}
 
    </>
 )


}

export default Content;