import ExpenseRedord from "./components/ExpenseRedord"
import ExpenseInput from "./components/ExpenseInput"
import { nanoid } from 'nanoid'
import { useEffect, useState, useMemo, useCallback } from 'react'

const updateTotalAmount = (records) => {
  const incomeRec = records.filter((record) => record.amountType === 'income')
  const expenseRec = records.filter((record) => record.amountType === 'expense')
  const totalIncome = incomeRec.reduce((sum, record) => sum + Number(record.amount), 0)
  const totalExpense = expenseRec.reduce((sum, record) => sum + Number(record.amount), 0)
  return totalIncome - totalExpense
}

function App() {
  const [allRecords, setAllRecords] = useState([])
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [amountType, setAmountType] = useState('')

  //get Local data
  const getLocalData = useCallback(() => {
    console.log('this is getLocaleData Function');
    return JSON.parse(localStorage.getItem('expenseRecorde')) || []
  }, [])

  // load expense records from initial render
  useEffect(() => {
    console.log('this is useEffect Function run on first render');
    const records = getLocalData()
    setAllRecords(records)
  }, [])

  //  update total balance 
  const totalAmount = useMemo(() => updateTotalAmount(allRecords), [allRecords]);

  // add expense record (obj) in localeStorage and allRecords array 
  const handleAddExpense = useCallback(() => {
    console.log('this is handleAddExpense Function');
    if (!title.trim() || isNaN(amount) || Number(amount) <= 0 || !amountType) {
      alert('please enter all feilds...')
      return;
    }
    const record = { title, amount, amountType, _id: nanoid() }

    // set records to the allrecords 
    setAllRecords(prev => {
      const newRecordes = [record, ...prev]
      localStorage.setItem('expenseRecorde', JSON.stringify(newRecordes))
      return newRecordes;
    });
    setTitle('')
    setAmount('')
  }, [title, amount, amountType])

  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <div className="border w-[370px] h-[400px] p-4 rounded-md flex flex-col justify-center items-center gap-4">
          <div className={`${totalAmount < 0 ? 'text-red-500' : 'text-green-500'}`}>
            Total Balance : {totalAmount}
          </div>
          <div className="">
            <ul className=" space-y-2 h-[200px]  overflow-y-auto ">
              {allRecords &&
                allRecords.map(record => (
                  <ExpenseRedord key={record._id}
                    title={record.title}
                    amount={record.amount}
                    amountType={record.amountType}
                    id={record._id}
                    setAllRecords={setAllRecords}
                  />
                ))}
            </ul>
          </div>

          <div >
            <ExpenseInput
              setAllRecords={setAllRecords}
              allRecords={allRecords}
              handleAddExpense={handleAddExpense}
              setTitle={setTitle}
              setAmount={setAmount}
              setAmountType={setAmountType}
              title={title}
              amount={amount}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
