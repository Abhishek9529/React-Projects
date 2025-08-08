const ExpenseInput = ({ setTitle, setAmount, setAmountType, handleAddExpense, title, amount }) => {

    return (
        <>
            <div className=" w-[340px] flex flex-row justify-center items-center border rounded-md p-2">
                <div className="space-y-2">
                    <input value={title} onChange={e => setTitle(e.target.value)} className="outline-none border rounded-md px-2" type="text" placeholder="Title" />
                    <input value={amount} onChange={e => setAmount(e.target.value)} className="outline-none border rounded-md px-2" type="number" placeholder="Amount" />
                </div>
                <div className="flex flex-col justify-center items-center px-2" >
                    <label className="flex flex-row justify-center items-center gap-2" >
                        <input onClick={e => setAmountType(e.target.value)} type="radio" id="income" name="type" value="income" />
                        Income
                    </label>

                    <label className="flex flex-row justify-center items-center gap-2">
                        <input onClick={e => setAmountType(e.target.value)} type="radio" id="expense" name="type" value="expense" />
                        Expense
                    </label>
                </div>
            </div>
            
            <div className='text-center mt-2'>
                <button onClick={handleAddExpense} className=" w-[40px] h-[40px] border rounded-3xl text-3xl font-bold pb-2" >+</button>
            </div>
        </>

    )
}

export default ExpenseInput
