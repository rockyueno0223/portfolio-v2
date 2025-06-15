import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit = () => {
    if (!formRef.current) return;

    // Send the form data using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError('');
          reset(); // Reset the form fields
        },
        (error) => {
          console.error('Error: Failed to send email by email js', error.text);
          setError('Failed to send message. Please try again later.');
          setSuccess(false);
        }
      );
  };

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='w-full max-w-2xl rounded-lg bg-neutral-100 p-4 flex flex-col gap-4'>
        <div className='text-3xl'>Contact me</div>

        {/* Success message */}
        {success && (
          <div className='text-green-500 font-semibold text-center'>
            Message sent successfully!
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className='text-red-500 font-semibold text-center'>{error}</div>
        )}

        {/* Contact form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-between gap-4'
        >
          {/* Name */}
          <div className=''>
            <label
              htmlFor='name'
              className='block mb-2 text-lg font-medium text-gray-500'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className='border-2 border-gray-300 bg-neutral-100 text-gray-900 text-sm rounded-lg w-full p-2'
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
                maxLength: {
                  value: 50,
                  message: 'Name must be less than 50 characters',
                },
              })}
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className=''>
            <label
              htmlFor='email'
              className='block mb-2 text-lg font-medium text-gray-500'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='border-2 border-gray-300 bg-neutral-100 text-gray-900 text-sm rounded-lg w-full p-2'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
                maxLength: {
                  value: 100,
                  message: 'Email must be less than 100 characters',
                },
              })}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div className=''>
            <label
              htmlFor='message'
              className='block mb-2 text-lg font-medium text-gray-500'
            >
              Message
            </label>
            <textarea
              rows={6}
              id='message'
              className='border-2 border-gray-300 bg-neutral-100 text-gray-900 text-sm rounded-lg w-full p-2'
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
                maxLength: {
                  value: 500,
                  message: 'Message must be less than 500 characters',
                },
              })}
            />
            {errors.message && (
              <p className='text-red-500 text-sm'>{errors.message.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type='submit'
            className='w-full bg-gray-300 font-semibold py-2 rounded-lg hover:bg-gray-400 transition-colors'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
