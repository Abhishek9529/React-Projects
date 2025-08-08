const ExpenseRedord = ({ title, amount, amountType, id, setAllRecords }) => {

    // delete expense record on delete button click
    const handleDelete = (id) => {
        const allRecords = JSON.parse(localStorage.getItem('expenseRecorde')) || []
        const index = allRecords.findIndex((record) => record._id === id)
        allRecords.splice(index, 1)
        localStorage.setItem('expenseRecorde', JSON.stringify(allRecords))
        setAllRecords(allRecords)
    }
    
    return (
        <li className="  flex flex-row justify-between items-center space-x-4 border px-2 py-1  rounded"  >
            <div className=" w-[200px]  flex flex-row justify-between items-center ">
                <p>{title}: </p>
                <h1 className={`${amountType === 'income' ? 'text-green-500' : 'text-red-500'}`}>${amount}</h1>
            </div>
            <button onClick={() => handleDelete(id)} className="border-l-1 pl-2">D</button>
        </li>
    )
}

export default ExpenseRedord
