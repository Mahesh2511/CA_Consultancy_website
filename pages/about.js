import { Users, Target, Eye } from 'lucide-react';

export default function About() {
  const teamMembers = [
    { name: 'CA. Ankita Mane', role: 'Founder & Principal Consultant', imageUrl: `https://placehold.co/400x400/FBF9F1/0F5132?text=AM` },
    { name: 'Rohan Sharma', role: 'Senior Tax Associate', imageUrl: `https://placehold.co/400x400/FBF9F1/0F5132?text=RS` },
    { name: 'Priya Desai', role: 'Audit Assistant', imageUrl: `https://placehold.co/400x400/FBF9F1/0F5132?text=PD` },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl">About Gauri CA Consultancy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Navigating your finances with precision, integrity, and care.
          </p>
        </div>
      </div>

      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl mb-4">Our Founder's Vision</h2>
            <p className="text-gray-600 mb-4">
              Gauri CA Consultancy was founded by CA. Ankita Mane with a clear mission: to demystify the complexities of financial regulations for individuals and businesses. After years in the industry, Ankita saw a need for a client-focused firm that combines expert knowledge with personalized service.
            </p>
            <p className="text-gray-600">
              We are committed to fostering financial discipline and empowering our clients to achieve their goals through sound advice and meticulous compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white">
                <Target />
              </div>
              <div className="ml-4">
                <h3 className="text-xl">Our Mission</h3>
                <p className="mt-1 text-gray-600">To provide reliable, ethical, and expert financial and taxation services that enable our clients' success and ensure their peace of mind.</p>
              </div>
            </div>
             <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white">
                <Eye />
              </div>
              <div className="ml-4">
                <h3 className="text-xl">Our Approach</h3>
                <p className="mt-1 text-gray-600">We believe in building long-term partnerships. Our approach is proactive, ensuring you are always compliant and well-informed about your financial standing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Led by experienced professionals dedicated to your financial health.
            </p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <div key={person.name} className="text-center">
                <img className="mx-auto h-32 w-32 rounded-full object-cover" src={person.imageUrl} alt={person.name} />
                <h3 className="mt-4 text-xl">{person.name}</h3>
                <p className="text-accent font-semibold">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}