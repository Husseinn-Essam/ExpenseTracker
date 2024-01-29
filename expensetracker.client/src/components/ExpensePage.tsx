import  { useState, ChangeEvent, FormEvent } from 'react';
import ExpenseCard from './ExpenseCard'; // Assuming you have an ExpenseCard component

interface ExpenseData {
  category: string;
  amount: string;
  date: string;
  frequency: string;
  paymentMethod: string;
}

interface ValidationErrors {
  category?: string;
  amount?: string;
  date?: string;
  frequency?: string;
  paymentMethod?: string;
}

export default function ExpensePage() {
  const [expenseData, setExpenseData] = useState<ExpenseData>({
    category: '',
    amount: '',
    date: '',
    frequency: '',
    paymentMethod: '',
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExpenseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: ValidationErrors = {};

    if (!expenseData.category.trim()) {
      errors.category = 'Expense category is required';
    }

    if (!expenseData.amount.trim() || isNaN(Number(expenseData.amount))) {
      errors.amount = 'Valid expense amount is required';
    }

    if (!expenseData.date.trim()) {
      errors.date = 'Date is required';
    }

    if (!expenseData.frequency.trim()) {
      errors.frequency = 'Frequency is required';
    }

    if (!expenseData.paymentMethod.trim()) {
      errors.paymentMethod = 'Payment method is required';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setExpenseData({
      category: '',
      amount: '',
      date: '',
      frequency: '',
      paymentMethod: '',
    });
    setValidationErrors({});
  };

  return (
    <div className="p-6 bg-base-100 flex h-full w-full flex-col gap-2 rounded-md">
      <h1 className="text-gray font-bold text-3xl">Expenses</h1>
      <div className="flex flex-col">
        <div id="display-expenses" className="bg-base-200 w-full p-4 rounded-lg font-bold flex justify-center text-2xl">
          Total expenses = $
        </div>
        <div id="expense-Form-display" className="flex flex-row gap-4">
          <form className="form-control flex flex-col gap-3 p-2 w-1/3" onSubmit={handleSubmit}>
            <input
              className={`input input-bordered w-full ${validationErrors.category && 'input-error'}`}
              type="text"
              placeholder="Expense title"
              name="category"
              value={expenseData.category}
              onChange={handleInputChange}
            />
            {validationErrors.category && <span className="text-error">{validationErrors.category}</span>}

            <input
              className={`input input-bordered w-full ${validationErrors.amount && 'input-error'}`}
              type="number"
              placeholder="Expense amount"
              name="amount"
              value={expenseData.amount}
              onChange={handleInputChange}
            />
            {validationErrors.amount && <span className="text-error">{validationErrors.amount}</span>}

            <input
              type="date"
              name="date"
              id=""
              className={`rounded p-2 bg-base-200 ${validationErrors.date && 'input-error'}`}
              value={expenseData.date}
              onChange={handleInputChange}
            />
            {validationErrors.date && <span className="text-error">{validationErrors.date}</span>}

            <select
              className={`select select-bordered w-full max-w-xs ${validationErrors.frequency && 'input-error'}`}
              name="frequency"
              value={expenseData.frequency}
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
              value={expenseData.paymentMethod}
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
          <div id='display-expense-cards' className='flex flex-col p-2 w-full'>
            <ExpenseCard
              title="title"
              amount="100"
              date="2023-03-01"
              frequency="Monthly"
              paymentMethod="Credit Card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
