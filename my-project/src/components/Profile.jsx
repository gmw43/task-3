import React from 'react'
// import image from '../assets/images/image'
import img from '../assets/images/image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    return (
        <>

            <div className="flex justify-center w-full bg-green-200">
                <div className='w-1/3 bg-red-100'>
                    <div className='relative'>
                        <div className="text-white bg-black h-20 flex items-center justify-center">
                            <h1 >Company Name</h1>

                        </div>
                        <div className='absolute inset-0  h-4 mx-auto my-auto w-36 h-36 '>
                           
 
                        </div>

                        <div className='h-12 bg-indigo-400 flex justify-center'>
                        <img src={img} className='rounded-full h-36 w-36 mt-[-2rem] border-4 border-white-600' />
                        </div>

                    </div>

                    <div className='text-center mt-12'>
                        <h1 className='text-2xl'>Laura <span className='font-bold'> Anderson</span></h1>
                        <p className='text-sm'>Web Design & Developer</p>
                    </div>

                    <div className='mt-8 flex justify-center'>
                      
                         <div className='flex flex-col mx-8 '>
                            <label htmlFor="id" className='my-2'>ID</label>
                            <label htmlFor="dob" className='my-2'>DOB</label>
                            <label htmlFor="phone" className='my-2'>Phone</label>
                            <label htmlFor="email" className='my-2'>E-mail</label>
                            <label htmlFor="join" className='my-2'>Join</label>
                            <label htmlFor="expire" className='my-2'>Expire</label>
                        </div>

                        <div className='flex flex-col mx-8' >
                            <input type="number" id="id" className='bg-gray-200 display my-2 ' />
                            <input type="date" id="dob" className='bg-gray-200 display my-2 ' />
                            <input type="number" id="phone" className='bg-gray-200 display my-2 ' />
                            <input type="email" id="email" className='bg-gray-200 display my-2 ' />
                            <input type="date" id="join" className='bg-gray-200 display my-2' />
                            <input type="date" id="expire" className='bg-gray-200 display my-2' />

                        </div> 


                    </div>
                    

                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                    brandname
                    </div>
            </div>

        </>
    )
}

export default Profile