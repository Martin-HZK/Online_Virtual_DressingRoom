import React from 'react'
import { useState } from 'react';
import './SignUp.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import api from '../../api/axiosConfig';
const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const [accountType, setAccountType] = useState('user');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        console.log('Form data:', formData); // testing the formdata

        let url = '/api/v1/signup'; 
        if (accountType === 'retailer') {
            url = '/api/v1/retailer/signup';
        }
            
        try {
          const response = await api.post(url, formData);
          console.log('Server response:', response.data);
          if (response.data === true) {
            alert('Sign Up success!');
        } else {
            alert('Sign Up failed! Your username may have been taken!');
        }
        } catch (error) {
          console.error('Error submitting form:', error);
        }

        
    };

    const handleAccountTypeChange = (type) => {
        setAccountType(type);
    };



  return (
    <div className='signUp-page-container'>
        <div className='signUp-form-container'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div className='input-container'>
                <i className='fa-solid fa-user'></i>
                <input 
                    type='text' 
                    id='username' 
                    name='username' 
                    placeholder='Enter your username' 
                    value={formData.username}
                    onChange={handleChange}
                    />
            </div>
            <div className='input-container'>
                <i className='fa-solid fa-lock'></i>
                <input 
                    type='password' 
                    id='password' 
                    name='password' 
                    placeholder='Enter your password' 
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            <div className='input-container'>
                <i className='fa-solid fa-lock'></i>
                <input 
                    type='password' 
                    id='confirm-password' 
                    name='confirmPassword' 
                    placeholder='Confirm your password' 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </div>

            <div className='radio-container'>
            <label>
              <input
                type='radio'
                value='user'
                checked={accountType === 'user'}
                onChange={() => handleAccountTypeChange('user')}
              />
              Sign Up as User
            </label>
            <label>
              <input
                type='radio'
                value='retailer'
                checked={accountType === 'retailer'}
                onChange={() => handleAccountTypeChange('retailer')}
              />
              Sign Up as Retailer
            </label>
            </div>


            <button type='submit'>Sign Up</button>
            </form>
            
        </div>
    </div>
  )
}

export default SignUp