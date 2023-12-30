import React from 'react';
import Link from 'next/link';  // Import Link from next/link
import { EmailOutlined, ArrowBackOutlined, KeyboardArrowDownOutlined } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative">
      <div className="mb-8 mx-2">
        <Link href="/login">  {/* Use Link for navigation */}
          <a>
            <ArrowBackOutlined style={{ fontSize: '24px', marginBottom: '-4px' }} className='mt-6 ml-1' />
          </a>
        </Link>
        <h3 className="text-2xl font-bold mt-4 mb-1 ml-1">Enter Your</h3>
        <h3 className="text-2xl font-bold mb-4 ml-1">E-mail ID/Phone Number</h3>
        
        {/* Email ID Input field */}
        <TextField
          type="text"
          variant="outlined"
          className="h-12 w-full mt-20"
          placeholder="Enter your Email ID"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined style={{ fontSize: '28px' }} />
              </InputAdornment>
            ),
          }}
        />
        
        {/* "or" text with horizontal lines */}
        <div className="flex items-center mt-9 mb-3 ml-1 mr-1">
          <hr className="flex-grow border-t border-gray-400" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        
        {/* Phone Number Input field with larger Indian flag, +91, and KeyboardArrowDownOutlined icon */}
        <TextField
          type="text"
          variant="outlined"
          className="h-12 w-full mt-4"
          placeholder="Phone Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span role="img" aria-label="Indian Flag" style={{ fontSize: '28px' }}>🇮🇳</span> +91 <KeyboardArrowDownOutlined style={{ fontSize: '28px' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Next Button */}
        <button className="bg-[#188389] w-full text-white text-lg font-semibold h-14 mt-32 rounded-md">
          Next
        </button>
        <p className='text-sm text-center mt-5'>Company not registered? <a href="/signup" className='text-[#188389] font-semibold'>Sign Up</a></p>
      </div>
    </div>
  );
};
