import React from 'react'
import web from "../assets/image/web.jpg"
import Swal from 'sweetalert2'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8429fc39-681b-409b-b393-241809d81024");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success !",
        text: "Message sent successfully !!",
        icon: "success"
      });
    }
  };

  return (
    <div>
      <div className='flex justify-center gap-20'>
        <div>
          <h1 className='text-[40px] text-center font-bold'>Contact <span className='text-[#FF8A00]'>Us !</span></h1>
          <div className=''>
          <form action="" className='mt-6' onSubmit={onSubmit}>
            <div className=''>
            <input type="name" name='name' placeholder='Full Name' className='h-[50px] w-[250px] border rounded-md mt-2 px-3 py-3 bg-gray-600 text-white' />
            <input type="email" name='email' placeholder='Email Address' className='ml-2 h-[50px] w-[250px] border rounded-md mt-2 px-3 py-3 bg-gray-600 text-white' />
            </div>
            <div>
            <input type="number" name='number' placeholder='Mobile Number' className='h-[50px] w-[250px] border rounded-md mt-2 px-3 py-3 bg-gray-600 text-white' />
            <input type="text" name='subject' placeholder='Email Subject' className='ml-2 h-[50px] w-[250px] border rounded-md mt-2 px-3 py-3 bg-gray-600 text-white' />
            </div>
            <div>
              <textarea name="message" placeholder='Your Message' id="" className='h-[250px] w-[510px] border rounded-md mt-2 px-3 py-3 bg-gray-600 text-white' ></textarea>
            </div>
            <button className='mt-6 ml-40 items-center rounded-full bg-gray-700 lg:w-[180px] lg:h-[45px] text-white'>Send Message</button>
          </form>
          </div>
        </div>
        <div className='mt-6'>
          <img src={web} alt="" width={600} />
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Contact
