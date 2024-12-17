import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your logic to store contact details here
  };

  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 mb-8">
        <div className="max-w-screen-lg container mx-auto md:px-20 px-4">
          <div className="mt-12 items-center justify-center text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-700 dark:text-white">
              Contact Us
            </h2>
            <form
              className="mt-12 space-y-4 max-w-lg mx-auto shadow-lg p-6 bg-slate-100 dark:bg-gray-700 rounded-lg"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control">
                <label
                  className="label text-gray-900 dark:text-dark-mode"
                  htmlFor="name"
                >
                  <span className="label-text dark:text-white">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-start py-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label
                  className="label text-gray-900 dark:text-dark-mode"
                  htmlFor="email"
                >
                  <span className="label-text  dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Your Email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-start py-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label
                  className="label text-gray-900 dark:text-dark-mode"
                  htmlFor="message"
                >
                  <span className="label-text  dark:text-white">Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea textarea-bordered w-full"
                  placeholder="Your Message"
                  rows="4"
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-start py-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
