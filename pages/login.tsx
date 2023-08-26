import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
	return (
		<>
			<div className='bg-gray-200 min-w-full min-h-screen py-10'>
				<div className='login-container h-96 border-1 border-red-50 p-4 bg-white max-w-sm mx-auto rounded-md shadow-md'>
					<div className='flex justify-center'>
						<h2 className='text-2xl font-semibold'>IGAG</h2>
					</div>
					
					<div className='my-4 flex justify-center space-x-4'>
						<button>
							<Image
								src='/github.svg'
								alt='Login with github'
								width={24}
								height={24} />
						</button>
					</div>
					
					<div className='form-control my-4'>
						<div className='flex flex-col'>
							<label htmlFor='email' className='font-semibold'>
								Email
							</label>
							<input
								className='border-2 border-gray-300 px-2 py-1 rounded-sm'
								type='email'
								id='email' />
						</div>
						
						<div className='flex flex-col my-4'>
							<div className='flex justify-between'>
								<label htmlFor='password' className='font-semibold'>
									Password
								</label>
								
								<Link href='/forgot-password' className='text-blue-600'>
									Forgot password?
								</Link>
							</div>
							<input
								className='border-2 border-gray-300 px-2 py-1 rounded-sm'
								type='password'
								id='password' />
						</div>
						<div className='my-2 flex justify-center'>
							<button className='px-6 py-2 bg-blue-600 min-w-full text-white rounded-sm'>
								Login
							</button>
						</div>
					</div>
				</div>
				<div className='max-w-sm mx-auto my-6'>
					<div className='flex justify-center space-x-2'>
						<span>{'Don\'t have an account?'} </span>
						<Link href='/register' className='text-blue-600'>
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
