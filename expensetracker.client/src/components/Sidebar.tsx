import React, { useState } from 'react';
import { PresentationChartBarIcon, BanknotesIcon,CurrencyDollarIcon,CreditCardIcon } from '@heroicons/react/20/solid';
import ThemeButton from './ThemeButton';
export default function Sidebar() {
    const [selectedButton, setSelectedButton] = useState<string>('dashboard');

    const handleButtonClick = (button: string) => {
      setSelectedButton(button);
    };
  
  return (
    <div className=' rounded-2xl h-3/4 ml-5 mt-5 flex content-center flex-col w-72 gap-1  bg-base-100 shadow-2xl'>
          <div className="avatar flex flex-row gap-2 mt-5 ml-5 rounded-2xl">
            <div className="flex flex-row w-12 h-12 rounded-2xl">
                <img src="https://th.bing.com/th/id/R.05208c284fe4c902f5be6b8dde947b5f?rik=q01m42bpKHRVfA&pid=ImgRaw&r=0" />
            </div>
                    <div className="text-gray-500 flex flex-col">
                            <p className="font-bold text-blue-500 font-bold">Hello, User!</p>
                            <p>Financial app</p>
                    </div>      
            </div>
               
                     
        
        <div className="text-lg flex flex-col gap-5 ">
        <button
          className={` flex flex-row  gap-2 ${selectedButton === 'dashboard' ? 'border-l-4 border-solid border-blue-600 text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('dashboard')}
        >
            <div className='ml-5 flex gap-2'>
                 <PresentationChartBarIcon className='w-6 h-6'/> Dashboard
            </div>
        </button>
        <button
          className={`flex flex-row gap-2  ${selectedButton === 'income' ? ' border-l-4 border-solid border-blue-600 text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('income')}
        >
            <div className='ml-5 flex fle-row gap-2'>
             <CurrencyDollarIcon className='w-6 h-6'/> Income
            </div>
        </button>
        <button
          className={`flex flex-row  gap-2 ${selectedButton === 'expenses' ? 'border-l-4 border-solid border-blue-600 text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('expenses')}
        >
            <div className='ml-5 flex fle-row gap-2'>

         <BanknotesIcon className='w-6 h-6'/> Expenses
            </div>
        </button>
        <button
          className={`flex flex-row gap-2  ${selectedButton === 'accounts' ? 'border-l-4 border-solid border-blue-600 text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('accounts')}
        >
            <div className='ml-5 flex fle-row gap-2'>

          <CreditCardIcon className='w-6 h-6'/>Accounts
            </div>
        </button>
      </div>
      <div className='self-center mt-40'>

      <ThemeButton/>
      </div>
     
    
    </div>
  )
}
