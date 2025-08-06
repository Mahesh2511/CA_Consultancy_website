import { FileText, Landmark, Building, BookOpen, Shield, HandCoins } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: 'Income Tax',
      description: 'Comprehensive ITR filing for individuals (salaried, business owners), HUFs, and partnership firms. We also provide tax planning, TDS/TCS compliance, and representation services.'
    },
    {
      icon: <Landmark className="h-8 w-8 text-white" />,
      title: 'GST (Goods & Services Tax)',
      description: 'Complete GST solutions, including new registrations, monthly/quarterly return filings (GSTR-1, GSTR-3B), annual returns, and GST audit assistance.'
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: 'Company & LLP Compliance',
      description: 'Services for incorporation of new companies and LLPs, ROC filings, director changes, share transfers, and ensuring full compliance with the Companies Act, 2013.'
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: 'Audit & Assurance',
      description: 'Conducting statutory audits, tax audits, internal audits, and providing assurance services to ensure financial accuracy and regulatory compliance.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: 'Accounting & Bookkeeping',
      description: 'Maintaining accurate books of accounts, financial statement preparation, bank reconciliation, and providing outsourced accounting services for small to medium businesses.'
    },
    {
      icon: <HandCoins className="h-8 w-8 text-white" />,
      title: 'Financial & Business Advisory',
      description: 'Advisory services for project financing, business valuation, due diligence, and strategic planning to help your business grow and thrive.'
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl">Our Professional Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A complete range of financial services for individuals and businesses.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => (
            <div key={service.title} className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  {service.icon}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium">{service.title}</h3>
                <p className="mt-2 text-base text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}