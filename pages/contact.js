import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We’re here to help. Reach out to us for a consultation.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white"><Mail /></div>
              <div className="ml-4">
                <h3 className="text-xl">Email Us</h3>
                <p className="mt-1 text-gray-600">For inquiries and support.</p>
                <a href="mailto:contact@gauriconsultancy.com" className="text-primary hover:underline">contact@gauriconsultancy.com</a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white"><Phone /></div>
              <div className="ml-4">
                <h3 className="text-xl">Call Us</h3>
                <p className="mt-1 text-gray-600">Mon-Sat from 10am to 6pm.</p>
                <a href="tel:+918652297317" className="text-primary hover:underline">+91 8652297317</a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white"><MapPin /></div>
              <div className="ml-4">
                <h3 className="text-xl">Our Office</h3>
                <p className="mt-1 text-gray-600">Bhandup, Mumbai, India</p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}