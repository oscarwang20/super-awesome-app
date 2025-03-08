'use client';

import Image from 'next/image';
import { useAuth } from '@/auth/AuthUserProvider';
import { signIn, signOut } from '@/auth/auth';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
  const { user } = useAuth();
  console.log(user);

  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleQuizSubmit = () => {
    if (answer.trim().toLowerCase() === 'lily') {
      setMessage('✅ Correct! Lily is the best dev lead!');
    } else {
      setMessage('❌ Incorrect. Try again!');
    }
  };

  return (
    <div className='flex flex-row w-full justify-center p-4'>
      {user ? (
        <div className='flex flex-col items-center space-y-4'>
          <h2 className='text-lg font-bold'>Welcome, {user.displayName}!</h2>
          <p className='text-md'>Who is your favorite dev lead?</p>
          <input
            type='text'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className='border p-2 rounded-md'
            placeholder='Enter name'
          />
          <Button onClick={handleQuizSubmit}>Submit</Button>
          {message && <p className='mt-2'>{message}</p>}
          <div className='flex flex-col items-center'>
            <Button onClick={() => signOut()}>Sign out</Button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <Button className='w-fit' onClick={() => signIn()}>
            <div className='flex flex-row p-1 space-x-2'>
              <Image src='/google.webp' alt='Google' width={20} height={20} />
              <p>Sign in with Google</p>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
