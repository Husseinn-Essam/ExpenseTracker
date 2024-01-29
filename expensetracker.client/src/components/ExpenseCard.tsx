import { CurrencyDollarIcon, TrashIcon , CalendarIcon, ClockIcon , CreditCardIcon } from "@heroicons/react/20/solid";

interface ExpenseProps {
  title: string;
  amount: string;
  date: string;
  frequency: string;
  paymentMethod: string;
}

export default function ExpenseCard({ title, amount, date, frequency, paymentMethod }: ExpenseProps) {
  return (
    <div className="flex flex-col md:flex-row bg-base-200 w-full h-fit gap-2 rounded-lg p-2">
      <CurrencyDollarIcon className="w-12 h-12 text-red-800" />
      <div className='flex flex-col'>
        <p> {title}</p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <p className="flex items-center gap-2">
            <CurrencyDollarIcon className="w-4 h-4" />
            Amount: {amount}
          </p>
          <p className="flex items-center gap-2"><CalendarIcon className="w-4 h-4" /> {date}</p>
          <p className="flex items-center gap-2"><ClockIcon className="w-4 h-4"/> {frequency}</p>
          <p className="flex items-center gap-2"><CreditCardIcon className="w-4 h-4"/> {paymentMethod}</p>
        </div>
      </div>
      <button className="md:ml-auto">
        <TrashIcon className="w-8 h-8 text-red-800" />
      </button>
    </div>
  );
}
