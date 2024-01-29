import { useState, ChangeEvent, FormEvent } from 'react';
import IncomeCard from './IncomeCard';

interface IncomeData {
  source: string;
  amount: string;
  date: string;
  frequency: string;
  paymentMethod: string;
}

interface ValidationErrors {
  source?: string;
  amount?: string;
  date?: string;
  frequency?: string;
  paymentMethod?: string;
}

export default function IncomePage() {
  const [incomeData, setIncomeData] = useState<IncomeData>({
    source: '',
    amount: '',
    date: '',
    frequency: '',
    paymentMethod: '',
  });
  // will remove later 
  const sampleIncomeData = {
    source: 'Salary',
    amount: '5000',
    date: '2023-02-15',
    frequency: 'Monthly',
    paymentMethod: 'Bank Transfer',
  };

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setIncomeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: ValidationErrors = {};

   
    if (!incomeData.source.trim()) {
      errors.source = 'Income source is required';
    }

    if (!incomeData.amount.trim() || isNaN(Number(incomeData.amount))) {
      errors.amount = 'Valid income amount is required';
    }

    if (!incomeData.date.trim()) {
      errors.date = 'Date is required';
    }

    if (!incomeData.frequency.trim()) {
      errors.frequency = 'Frequency is required';
    }

    if (!incomeData.paymentMethod.trim()) {
      errors.paymentMethod = 'Payment method is required';
    }

    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

   

    
    setIncomeData({
      source: '',
      amount: '',
      date: '',
      frequency: '',
      paymentMethod: '',
    });
    setValidationErrors({});
  };

  return (
    <div className="p-6 bg-base-100 flex h-full w-full flex-col gap-2 rounded-md">
      <h1 className="text-gray font-bold text-3xl">Income</h1>
      <div className="flex flex-col">
        <div id="display-income" className="bg-base-200 w-full p-4 rounded-lg font-bold flex justify-center text-2xl">
          Total income = $
        </div>
        <div id="income-Form-display" className="flex flex-row border-solid border-red-500 border-2 gap-4">
          <form className="form-control flex flex-col gap-3 p-2 w-1/3" onSubmit={handleSubmit}>
            <input
              className={`input input-bordered w-full ${validationErrors.source && 'input-error'}`}
              type="text"
              placeholder="Income source"
              name="source"
              value={incomeData.source}
              onChange={handleInputChange}
            />
            {validationErrors.source && <span className="text-error">{validationErrors.source}</span>}

            <input
              className={`input input-bordered w-full ${validationErrors.amount && 'input-error'}`}
              type="number"
              placeholder="Income amount"
              name="amount"
              value={incomeData.amount}
              onChange={handleInputChange}
            />
            {validationErrors.amount && <span className="text-error">{validationErrors.amount}</span>}

            <input
              type="date"
              name="date"
              id=""
              className={`rounded p-2 bg-base-200 ${validationErrors.date && 'input-error'}`}
              value={incomeData.date}
              onChange={handleInputChange}
            />
            {validationErrors.date && <span className="text-error">{validationErrors.date}</span>}

            <select
              className={`select select-bordered w-full max-w-xs ${validationErrors.frequency && 'input-error'}`}
              name="frequency"
              value={incomeData.frequency}
              onChange={handleInputChange}
            >
              <option disabled selected>
                Frequency
              </option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
            {validationErrors.frequency && <span className="text-error">{validationErrors.frequency}</span>}

            <select
              className={`select select-bordered w-full max-w-xs ${validationErrors.paymentMethod && 'input-error'}`}
              name="paymentMethod"
              value={incomeData.paymentMethod}
              onChange={handleInputChange}
            >
              <option disabled selected>
                Payment Method
              </option>
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
            </select>
            {validationErrors.paymentMethod && <span className="text-error">{validationErrors.paymentMethod}</span>}

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
          <div id='display-income-cards' className='flex flex-col p-2 w-full'>
          <IncomeCard
            source={sampleIncomeData.source}
            amount={sampleIncomeData.amount}
            date={sampleIncomeData.date}
            frequency={sampleIncomeData.frequency}
            paymentMethod={sampleIncomeData.paymentMethod}
      />
          </div>
        </div>
      </div>
    </div>
  );
}
