import ExpenseRedord from "./components/ExpenseRedord"
import ExpenseInput from "./components/ExpenseInput"
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'


function App() {
  const [allRecords, setAllRecords] = useState([])
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [amountType, setAmountType] = useState('')
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('expenseRecorde')) || []
    if (records) {
      setAllRecords(records)
    }
  }, [])

  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('expenseRecorde')) || []
    const incomeRec = records.filter((record) => record.amountType === 'income')
    let total = 0
    incomeRec.map((record) => {

      total += Number(record.amount)
    })
    setTotalAmount(total)
  }, [allRecords])


  const handleAddExpense = () => {

    if (!title || !amount || !amountType) {
      alert('please enter all feilds...')
      return;
    }

    const record = {
      title,
      amount,
      amountType,
      _id: nanoid()
    }
    const setRecordes = [record, ...allRecords]
    localStorage.setItem('expenseRecorde', JSON.stringify(setRecordes))
    setAllRecords(setRecordes)
  }


  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <div className="border w-[370px] h-[400px] p-4 rounded-md flex flex-col justify-center items-center gap-4">
          <div>
            Total Balance : {totalAmount}
          </div>

          {/* <div>
            <ul className="space-y-2 h-[200px]  overflow-auto">
              <ExpenseRedord/>
            </ul>
          </div> */}

          <div >
            <ExpenseInput
              setAllRecords={setAllRecords}
              allRecords={allRecords}
              handleAddExpense={handleAddExpense}
              setTitle={setTitle}
              setAmount={setAmount}
              setAmountType={setAmountType}
            />
          </div>


        </div>
      </div>

    </>
  )
}

export default App
