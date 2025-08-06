import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid.";
    }
    if (!formData.message) formErrors.message = "Message is required.";
    return formErrors;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setErrors({});
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-primary focus:border-primary h-32"></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <div>
        <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400">
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status === 'success' && <p className="text-green-600 text-center">Message sent successfully! We'll be in touch soon.</p>}
      {status === 'error' && <p className="text-red-600 text-center">Something went wrong. Please try again.</p>}
    </form>
  );
}