import { useState } from 'react'
import { AiFillCaretDown } from "react-icons/ai";
const Dropdown = ({options,isSelected,setIsSelected}) => {
    const [isOpen,setIsOpen] = useState(false);
    const handleClose = (option) => {
        setIsOpen(false)
        setIsSelected(option)
    }
  return (
    <div>
        <div onClick={() => setIsOpen((isOpen) => !isOpen)} className={`dropdown ${isOpen ? '' : 'margin'}`}><span>{isSelected.label || isSelected}</span><AiFillCaretDown className='dropdown-icon'/></div>
        <div className={`${isOpen ? 'drop-menu margin' : ''}`}>
        {isOpen && <div>{options.map((option) => {
            const {id,label,value} = option;
            return <div key={id} onClick={() => handleClose(option)} className='drop-item'>{label}</div>
        })}</div>}
        </div>
    </div>
  )
}

export default Dropdown