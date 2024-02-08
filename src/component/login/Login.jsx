import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate();

    const onSubmit = data => {
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully Login!',
                showConfirmButton: false,
                timer: 1500
            })
            reset();
            navigate('/dashboard');
        })
        .catch(error => {
            setError(error)
            console.log(error.message);
        })
    }

    return (
        <div className='p-2 md:m-4 mb-28 pb-10'>
            <div className=' p-5 lg:w-1/2 my-4 mx-auto rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-sm bg-slate-100 font-semibold w-1/2 mx-auto shadow-md p-5'>
                    <p className='text-center font-bold text-lg'>Login Please!!</p>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="">Email :</label>
                        <input type='email' className='input border rounded-lg p-1 px-2 mt-2 w-full' {...register("email")} placeholder='Enter Your Email' />
                    </div>
                    <div className='form-control flex flex-col mb-1'>
                        <label htmlFor="">Password :</label>
                        <input type='password' className='input border p-1 rounded-lg px-2 mt-2' {...register("password", )} placeholder='Enter password' />
                        
                    </div>
                    <div className='flex gap-4 mt-6'>
                        <p>Haven't an Account?</p>
                        <p className='hover:text-red-600'><Link to='/register'>Please SignUp</Link></p>
                    </div>
                    {
                        <span className='text-red-500 my-2'>{error && error.message}</span>
                    }
                
                    <div className='form-control'>
                        <input type="submit" className=' bg-gray-900 text-white p-2 w-full px-2 my-5  rounded-xl mb-4' value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;