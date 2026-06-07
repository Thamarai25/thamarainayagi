import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
       <Child name="Thamarai" age={100} 
       mark={[10,20,30,40,50]} 
       person={{name:"Thamarai",dept:["Bsc.CT"]}}
       />
    </div>
  )
}

export default Parent