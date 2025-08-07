
import ExpenseRedord from './ExpenseRedord'

const ExpenseInput = ({allRecords, setAllRecords, setTitle, setAmount, setAmountType, handleAddExpense}) => {

    return (
        <>
         <div>
            <ul className="space-y-2 h-[200px]  overflow-auto mb-4">
                { allRecords && 
                allRecords.map(record => (
                  <ExpenseRedord key={record._id}
                  title={record.title}
                  amount={record.amount}
                  amountType={record.amountType}
                  id={record._id}
                  setAllRecords={setAllRecords}
                  />
                ))
                }
            </ul>
          </div>

            <div className=" w-[340px] flex flex-row justify-center items-center border rounded-md p-2">
                <div className="space-y-2">
                    <input onChange={e => setTitle(e.target.value)} className="outline-none border rounded-md px-2" type="text" placeholder="Title" />
                    <input onChange={e => setAmount(e.target.value)} className="outline-none border rounded-md px-2" type="number" placeholder="Amount" />
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
