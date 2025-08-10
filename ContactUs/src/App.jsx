import { useRef, useState } from "react"

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const handleSubmit = (e) => {
     e.preventDefault();
     if(validateForm()){
      console.log('Form Submitted:', {name, email, message});
      setName('');
      setEmail('');
      setMessage('');
      setErrors('');
     }
  };

  const validateForm = () => {

    let newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors)

    // Focus first invalid field 
    if (Object.keys(newErrors).length > 0) {
      if (newErrors.name) {
        nameRef.current.focus()
      } else if (newErrors.email) {
        emailRef.current.focus()
      } else if (newErrors.message) {
        messageRef.current.focus()
      }
      return false; // stop submission
    }
    return true; // form is valid 
  };

  return (
    <>
      <div className="bg-[#0c0c0c] flex items-center justify-center min-h-screen p-4 text-white">
        <div className="border border-[#6b7280] p-6 w-full max-w-xs">
          <h2 className="text-white font-semibold text-lg mb-3 text-center">Contact Us</h2>
          <hr className="border-[#6b7280] mb-4" />

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                ref={nameRef}
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="First Name:"
                className="w-full border border-white bg-transparent text-[#6b7280] font-semibold text-base px-2 py-1 outline-none"
              />
              <span className="text-red-500 text-sm ">
                {errors.name ? errors.name : ''}
              </span>
            </div>

            <div>
              <input
                ref={emailRef}
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Email:"
                className="w-full border border-white bg-transparent text-white text-base px-2 py-1 outline-none"
              />
              <span className="text-red-500 text-sm ">
                {errors.email ? errors.email : ''}
              </span>
            </div>

            <div>
              <textarea
                ref={messageRef}
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows="6"
                placeholder="Message:"
                className="w-full border border-white bg-transparent text-[#6b7280] font-semibold text-base px-2 py-1 resize-none outline-none"
              ></textarea>
              <span className="text-red-500 text-sm ">
                {errors.message ? errors.message : ''}
              </span>
            </div>
            <button
              type="submit"
              className="border border-white text-[#6b7280] font-semibold text-base px-4 py-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
