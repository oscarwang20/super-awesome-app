'use client';

import Image from 'next/image';
import { useAuth } from '@/auth/AuthUserProvider';
import { signIn, signOut } from '@/auth/auth';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
    const { user } = useAuth();
    console.log(user);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const betterSignOut = () => {
        console.log('Signing user out!');
        // I will do this later
    };

    return (
        <div className='flex flex-row w-full justify-center p-4'>
            {user ? (
                <div className='flex flex-col items-center'>
                    <div
                        style={{
                            background: isHovered
                                ? 'linear-gradient(45deg, #ff0000, #00ff00)'
                                : 'linear-gradient(45deg, #ff0000, #0000ff)',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            color: 'white',
                            cursor: 'pointer',
                            trasition: 'background 0.3s ease',
                            display: isHovered ? 'inlineblock' : 'inline-block',
                        }}
                        onClick={betterSignOut}
                        onMouseEnter={() => (isHovered = true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        Sign out
                        <div
                            style={{
                                position: 'absolute',
                                zIndex: -1,
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                width: '100%',
                                height: '100%',
                                top: 0,
                                left: 0,
                            }}
                        >
                            Hover effect
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                    <Button className='w-fit' onClick={() => signIn()}>
                        <div className='flex flex-row p-1 space-x-2'>
                            <Image
                                src='/google.webp'
                                alt='Google'
                                width={20}
                                height={20}
                            />
                            <p>Sign in with Google</p>
                        </div>
                    </Button>
                </div>
            )}
        </div>
    );
}
