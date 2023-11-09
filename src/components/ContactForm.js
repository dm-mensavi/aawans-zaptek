import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    "firstname": '',
    "subject": 'none',
    "email": '',
    "phonenumber": '',
    "message": '',
  })

  const updateForm = (event) => {
    const {name, value} = event.target
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  }


  const handleSubmit = (event) => {
    console.log(formData);
  }

  return (
    <form className='lg:col-span-2'>
        <div className='md:grid md:grid-cols-2 md:gap-5'>
            <div className='mb-8'>
                <input
                    className='mt-[8px] placeholder:text-[#333] border w-full block p-5 rounded-lg focus:outline-primary'
                    type='text'
                    name='firstname'
                    id='firstname'
                    value={formData.firstname}
                    onChange={updateForm}
                    required
                    placeholder="First name: "
                />
            </div>

            <div className='mb-8'>            
            <input
                className='mt-[8px] placeholder:text-[#333] border w-full block p-5 rounded-lg focus:outline-primary'
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={updateForm}
                required
                placeholder="Email:"
            />
        </div>
        </div>

        <div className='md:grid md:grid-cols-2 md:gap-5'>
            <div className='mb-8'>            
                <input
                    className='mt-[8px] placeholder:text-[#333] border w-full block p-5 rounded-lg focus:outline-primary'
                    type='tel'
                    name='phonenumber'
                    id='phonenumber'
                    value={formData.phonenumber}
                    onChange={updateForm}
                    required
                    placeholder="Phone:"
                />
            </div>

            <div className='mb-8'>
                    <select 
                        className='mt-[8px] text-[#333] border w-full block p-5 rounded-lg focus:outline-primary'
                        name='subject'
                        id='subject'
                        value={formData.subject}
                        onChange={updateForm}
                        required
                    >
                        <option value={'none'}>Subject: </option>
                        <option value={'firstChoice'}>First Choice</option>
                        <option value={'secondChoice'}>Second Choice</option>
                        <option value={'thirdChoice'}>Third Choice</option>
                    </select>
            </div>
        </div>
        
        <div className='mb-8'>
            <textarea
                className='mt-[8px] placeholder:text-[#333] border block w-full h-44 p-5 outline-5 rounded-lg focus:outline-primary'
                name='message'
                id='message'
                value={formData.message}
                onChange={updateForm}
                required
                placeholder="Write your message..."
            >
            </textarea>
        </div>

        <button
            className='font-bold bg-primary text-white py-4 px-2 w-full rounded-lg hover:bg-[#1E3A8A] hover:text-[#89B4E5] transition'
            onClick={handleSubmit}
        >
            Message us
        </button>
    </form>
  )
}

export default ContactForm