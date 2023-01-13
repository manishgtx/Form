import {useState} from 'react'
import Input from './Input'
import Button from './Button'
import Selection from './Selection'
import Dropdown from './Dropdown'
import {options} from '../meta/data';
const Form = () => {
    const [isSelected,setIsSelected] = useState('Select');
  return (
    <form onClick={(e) => e.preventDefault()}>
            <label htmlFor="">Company name</label>
            <Input placeholder="e.g. Example Inc"/>
            <label htmlFor="">Industry</label>
            <Dropdown options={options} isSelected={isSelected} setIsSelected={setIsSelected}/>
            <label htmlFor="">Company size</label>
            <Selection/>
            <Button className='btn'>Get Started</Button>
    </form>
  )
}

export default Form