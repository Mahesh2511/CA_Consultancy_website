import Link from 'next/link';
import { FileText, Landmark, Building, Users, ShieldCheck, Handshake } from 'lucide-react';
import TaxQueryAssistant from '../components/TaxQueryAssistant';

export default function Home() {
  const services = [
    { icon: <FileText className="h-10 w-10 text-primary" />, title: 'Income Tax Filing', description: 'Accurate and timely ITR filing for individuals, HUFs, and businesses to ensure compliance.' },
    { icon: <Landmark className="h-10 w-10 text-primary" />, title: 'GST Compliance', description: 'End-to-end GST services including registration, return filing, and reconciliation.' },
    { icon: <Building className="h-10 w-10 text-primary" />, title: 'Company Registration', description: 'Expert guidance for registering Private Limited, OPC, LLP, and other business structures.' }
  ];

  return (
    <>
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Your Trusted Partner for
            <span className="block text-primary">Financial Excellence & Compliance</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            We provide expert Chartered Accountancy services to help you navigate the complexities of taxation and finance with confidence.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <span className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-hover transition shadow-lg cursor-pointer">
                Schedule a Consultation
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TaxQueryAssistant />
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl">Our Core Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Comprehensive solutions to meet all your financial and regulatory needs.
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <div key={service.title} className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary mx-auto">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl text-center">{service.title}</h3>
                <p className="mt-4 text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl">Why Choose Gauri CA Consultancy?</h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto"/>
              <h3 className="mt-4 text-xl">Expert Guidance</h3>
              <p className="mt-2 text-gray-600">Leverage our deep expertise in Indian tax laws and accounting standards for accurate and insightful advice.</p>
            </div>
             <div className="text-center">
              <ShieldCheck className="h-10 w-10 text-primary mx-auto"/>
              <h3 className="mt-4 text-xl">Integrity & Trust</h3>
              <p className="mt-2 text-gray-600">We operate with the highest ethical standards, ensuring your financial data is handled with confidentiality and care.</p>
            </div>
             <div className="text-center">
              <Handshake className="h-10 w-10 text-primary mx-auto"/>
              <h3 className="mt-4 text-xl">Client-Centric Approach</h3>
              <p className="mt-2 text-gray-600">We are dedicated to understanding your unique needs and providing tailored solutions that drive your success.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}