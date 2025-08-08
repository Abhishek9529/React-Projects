import ExpenseRedord from "./components/ExpenseRedord"
import ExpenseInput from "./components/ExpenseInput"
import { nanoid } from 'nanoid'
import { useEffect, useState, useMemo, useCallback } from 'react'


function App() {
  const [allRecords, setAllRecords] = useState([])
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [amountType, setAmountType] = useState('')
  const [totalAmount, setTotalAmount] = useState(0)

  // load expense records from initial render
  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('expenseRecorde')) || []
    if (records) {
      setAllRecords(records)
    }
  }, [])

  //  update total balance 
  useMemo(() => {
    const records = JSON.parse(localStorage.getItem('expenseRecorde')) || []
    const incomeRec = records.filter((record) => record.amountType === 'income')
    const expenseRec = records.filter((record) => record.amountType === 'expense')
    let totalExpense = 0
    let totalIncome = 0
    incomeRec.map((record) => {
      totalIncome += Number(record.amount)
    })
    expenseRec.map((record) => {
      totalExpense -= Number(record.amount)
    })
    setTotalAmount(totalIncome + totalExpense)
  }, [allRecords])


  // add expense record (obj) in localeStorage and allRecords array 
  const handleAddExpense = useCallback(() => {

    if (!title || !amount || !amountType) {
      alert('please enter all feilds...')
      return;
    }
    const record = { title, amount, amountType, _id: nanoid() }

    const setRecordes = [record, ...allRecords]

    localStorage.setItem('expenseRecorde', JSON.stringify(setRecordes))
    setAllRecords(setRecordes)
    setTitle('')
    setAmount('')
  }, [title, amount, amountType])


  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <div className="border w-[370px] h-[400px] p-4 rounded-md flex flex-col justify-center items-center gap-4">
          <div>
            Total Expense : {totalAmount}
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
