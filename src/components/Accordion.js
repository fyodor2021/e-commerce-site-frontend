import {useState} from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import arzBrand from '../statics/arz-brand.png'

export default function Accordion({items}) {
    const [expandedIndex, setExpandedIndex]  = useState(null)
    const handleClick = (index) => {
        setExpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === index){
                return null;
            }else{
                return index;
            }
        });
    }
    const renderedItems = items.map((item, index) => {
        const expanded = index === expandedIndex
        const icon = <span className='text-2xl'>
           { expanded ? <GoChevronDown/> : <GoChevronUp/>}
        </span>
        return (
        <div key={index}>
            <div className='flex bg-gray-50 border-b items-center cursor-pointer' 
            onClick={() => handleClick(index)}>
                <div>{item.label}{icon}</div>
                <div>                
                    <div className='checkout-payment-method-wallet'>
                    <img src="data:image/jpg;base64,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" width="50" height="50" />
                    <div>
                        {item.brand} ending with {item.lastFourDigit}
                    </div>
                </div></div>
                </div>
            {expanded && 
            <div className='border-b p-5 payment-method-container'>
                <div className="payment-method">
                    <div>{item.bankName}</div>
                    <div className="arz-card-number">
                        **** **** **** {item.lastFourDigit}
                    </div>
                    <div>
                        <div className="arz-card-holder-name">{item.firstname} {item.lastname}</div>
                    </div>
                </div>
            </div>}
        </div>)
    })
    return <div className='border-x border-t rounded'>{renderedItems}</div>
}
