import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const fromRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = ({target:{name,value}})=> {
        setForm({...form,[name]:value})
    }
    const handleSubmit =  async(e)=> {
        e.preventDefault()
        setLoading(true)
        try {
             await emailjs.send('service_24aetaj','template_uhdlt3g',
                {
                    from_name: form.name,
                    to_name:'Sahil',
                    from_email: form.email,
                    to_email: 'sahil.628401@gmail.com',
                    message: form.message
                },
                'ZFzUs3sDhkipAyKft'
            )
            setLoading(false)
            alert('Your message has been sent!')
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert('Something went wrong!')
        }

    }
    //service_24aetaj
  return (
    <span className='c-space my-20' id='contact'>
        <div className='relative min-h-screen flex flex-col items-center justify-center'>
            <img src="/assets/terminal.png" className='absolute inset-0 min-h-screen' alt="" />
            <div className='contact-container'>
             <h3 className='head-text mt-20'>Let's Talk</h3>
             <p className='text-lg text-white-600 mt-3'>
                Whether You're looking to build a new website,improve your existing platform,or bring unique project to life, I'm here to help.
                <form ref ={fromRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                    
                    <input type="text"
                    name = "name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className='field-input'
                    placeholder='John Doe'
                    />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                    
                    <input type="email"
                    name = "email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className='field-input'
                    placeholder='Johndoe@gmail.com'
                    />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Your message</span>
                    
                    <textarea 
                    name = "message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='field-input'
                    placeholder="Hi, I wanna give you a job ..."
                    />
                    </label>
                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading? 'Sending...':'Send Message'}
                        <img src="/assets/arrow-up.png" className='field-btn_arrow' alt="" />
                    </button>
                </form>
             </p>

            </div>
        </div>
    </span>
  )
}

export default Contact