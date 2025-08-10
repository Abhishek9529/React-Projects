
const ExpenseRedord = ({ title, amount, amountType, id, onDelete }) => {

    return (
        <li className="  flex flex-row justify-between items-center space-x-4 border px-2 py-1  rounded"  >
            <div className=" w-[200px]  flex flex-row justify-between items-center ">
                <p>{title}: </p>
                <h1 className={`${amountType === 'income' ? 'text-green-500' : 'text-red-500'}`}>${amount}</h1>
            </div>
            <button onClick={() => onDelete(id)} className="border-l-1 pl-2">D</button>
        </li>
    )
}

export default ExpenseRedord
