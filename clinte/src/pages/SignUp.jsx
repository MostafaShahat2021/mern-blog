import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  // console.log(formData);
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill all fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/aouth/signup', {
        // http://localhost:3000/api/aouth/signup insted use proxy in vite.config.js
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data);
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      // console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
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
          <form className="flex flex-col gap-4" onSubmit={handelSubmit}>
            <div>
              <Label value="Name" />
              <TextInput
                type="text"
                placeholder="Your name"
                id="username"
                onChange={handelChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handelChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handelChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span className="text-sm">Already have an account?</span>
            <Link to="/sign-in" className="text-sm text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
