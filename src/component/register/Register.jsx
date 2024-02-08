import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const { error, setError } = useState(null);
    const navigate = useNavigate();

    const onSubmit = data => {
        const { name, phoneNumber, email, password,age} = data;
        const userInfo = {name, email, phoneNumber, password,age};
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                
            }).catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className='p-2 md:m-4 mb-28 pb-10'>
            <div className=' p-5 lg:w-1/2 my-4 mx-auto rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-1 text-sm text-gray-500 bg-slate-100 font-semibold w-1/2 mx-auto shadow-md p-5'>
                    <p className='text-center font-bold text-lg'>Register Please!!</p>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="">Name :</label>
                        <input type='string' className='input border rounded-lg p-1 px-2 mt-1 w-full' {...register("name", {required: true})} placeholder='Enter Your Email' />
                        {errors.name && <span className='mt-2 text-red-400'>Name is Required!</span>}
                    </div>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="">Email :</label>
                        <input type='email' className='input border rounded-lg p-1 px-2 mt-1 w-full' {...register("email",{required: true})} placeholder='Enter Your Email' />
                        {errors.email && <span className='mt-2 text-red-400'>Email is Required!</span>}
                    </div>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="">Phone Number :</label>
                        <input className='input border rounded-md px-2 p-1' type="number" {...register("phoneNumber",{required: true})} placeholder='Enter your number' />
                    </div>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="">Age :</label>
                        <input className='input border rounded-md p-1 px-2' type="number" {...register("age",{required: true})} placeholder='Enter your Age' />
                    </div>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="">Password :</label>
                        <input className='input border p-1 px-2' type='password' {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder='Enter your password' />
                        {errors.password?.type == 'required' && <span className='mt-2 text-red-600'>Password field required</span>}
                        {errors.password?.type === 'minLength' && <span className='mt-2 text-red-600'>Password must be 6 characters long</span>}
                        {errors.password?.type === 'maxLength' && <span className='mt-2 text-red-600'>Password must be less than 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span className='mt-2 text-red-600'>Password must have one upperCase, one lowerCase, one number and one special characters</span>}
                    </div>
                    
                    <div className='flex gap-4 mt-6'>
                        <p>Have an Account?</p>
                        <p className='hover:text-red-600'><Link to='/login'>Please Login</Link></p>
                    </div>
                    {
                        <span className='text-red-500 my-2'>{error && error.message}</span>
                    }

                    <div className='form-control'>
                        <input type="submit" className=' bg-gray-900 text-white p-2 w-full px-2 my-5  rounded-xl mb-4' value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;