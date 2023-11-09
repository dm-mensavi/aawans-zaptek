import { useState } from "react"
import { fadeIn } from '../variants';
import { motion } from "framer-motion";

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
            <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className='mb-8'
            >
                <input
                    className='mt-[8px] placeholder:text-[#333] border w-full block p-5 rounded-lg focus:outline-primary transition'
                    type='text'
                    name='firstname'
                    id='firstname'
                    value={formData.firstname}
                    onChange={updateForm}
                    required
                    placeholder="First name: "
                />
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className='mb-8'
            >            
                <input
                    className='mt-[8px] placeholder:text-[#333] border w-full block p-5 rounded-lg focus:outline-primary transition'
                    type='email'
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={updateForm}
                    required
                    placeholder="Email:"
                />
            </motion.div>
        </div>

        <div className='md:grid md:grid-cols-2 md:gap-5'>
            <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className='mb-8'
            >            
                <input
                    className='mt-[8px] placeholder:text-[#333] border w-full block p-5 rounded-lg focus:outline-primary transition'
                    type='tel'
                    name='phonenumber'
                    id='phonenumber'
                    value={formData.phonenumber}
                    onChange={updateForm}
                    required
                    placeholder="Phone:"
                />
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className='mb-8'
            >
                    <select 
                        className='mt-[8px] text-[#333] border w-full block p-5 rounded-lg focus:outline-primary transition'
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
            </motion.div>
        </div>
        
        <motion.div 
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className='mb-8'
        >
            <textarea
                className='mt-[8px] placeholder:text-[#333] border block w-full h-44 p-5 outline-5 rounded-lg focus:outline-primary transition'
                name='message'
                id='message'
                value={formData.message}
                onChange={updateForm}
                required
                placeholder="Write your message..."
            >
            </textarea>
        </motion.div>

        <motion.div
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            <button
                className='btn-primary mx-auto'
                onClick={handleSubmit}
            >
                Send Message
            </button>
        </motion.div>
    </form>
  )
}

export default ContactForm