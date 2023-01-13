import {useState} from 'react'
import Button from './Button'
import {data} from '../meta/data'
const Selection = () => {
  const [selected,setSelected] = useState(null); 

  return (
    <div className='selection'>
      {data.map((item)=> {
        const {id,value} = item;
        return <Button key={id} className={`small-btn ${id === selected && 'selected'}`} onClick={() => setSelected(id)}>{value}</Button>
      })}
    </div>
  )
}

export default Selection