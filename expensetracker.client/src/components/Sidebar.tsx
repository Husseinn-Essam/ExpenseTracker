import React, { useState } from 'react';
import { PresentationChartBarIcon, BanknotesIcon,CurrencyDollarIcon,CreditCardIcon } from '@heroicons/react/20/solid';
export default function Sidebar() {
    const [selectedButton, setSelectedButton] = useState<string>('dashboard');

    const handleButtonClick = (button: string) => {
      setSelectedButton(button);
    };
  
  return (
    <div className='border-solid border border-slate-800 rounded-2xl h-3/4 ml-5 mt-5 flex content-center flex-col w-52 gap-5 bg-base-100 shadow-2xl'>
          <div className="avatar flex flex-row gap-2 mt-5 ml-5 rounded-2xl">
            <div className="flex flex-row w-12 h-12 rounded-2xl">
                <img src="https://th.bing.com/th/id/R.05208c284fe4c902f5be6b8dde947b5f?rik=q01m42bpKHRVfA&pid=ImgRaw&r=0" />
            </div>
                        
            <div className="flex flex-col">
                    <p className="font-bold">Hello, User!</p>
                    <p>Financial app</p>
                </div>      
        </div>
        <div className="flex flex-col gap-5 mt-4">
        <button
          className={` flex flex-row justify-center gap-2 ${selectedButton === 'dashboard' ? 'border-l-4 border-solid border-blue-600 text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('dashboard')}
        >
         <PresentationChartBarIcon className='w-6 h-6'/> Dashboard
        </button>
        <button
          className={`flex flex-row justify-center gap-2 ${selectedButton === 'income' ? ' border-l-4 border-solid border-blue-600 text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('income')}
        >
         <CurrencyDollarIcon className='w-6 h-6'/> Income
        </button>
        <button
          className={`flex flex-row justify-center gap-2 ${selectedButton === 'expenses' ? 'border-l-4 border-solid border-blue-600 text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('expenses')}
        >
         <BanknotesIcon className='w-6 h-6'/> Expenses
        </button>
        <button
          className={`flex flex-row justify-center gap-2  ${selectedButton === 'accounts' ? 'border-l-4 border-solid border-blue-600 text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('accounts')}
        >
          <CreditCardIcon className='w-6 h-6'/>Accounts
        </button>
      </div>
    </div>
  )
}
