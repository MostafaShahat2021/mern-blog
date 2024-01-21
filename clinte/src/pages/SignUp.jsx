import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* lift side */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              EgLink
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo blog app made with React, TailwindCSS, and mongoDB,
            you can sign up with your Email & Password or with Google, and
            create your own blog posts
          </p>
        </div>

        {/* right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label value="Name" />
              <TextInput
              type="text"
              placeholder="Your name"
              id='username'
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
              type="text"
              placeholder="name@company.com"
              id='email'
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
              type="text"
              placeholder='Password'
              id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' className='w-full' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span className="text-sm">Already have an account?</span>
            <Link to="/sign-in" className="text-sm text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
