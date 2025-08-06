import Link from 'next/link';
import { Linkedin, Twitter, Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <Link href="/">
              <span className="flex items-center space-x-2 cursor-pointer">
                <Scale className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-primary">Gauri CA Consultancy</span>
              </span>
            </Link>
            <p className="text-gray-500 text-base">
              Your trusted partner in financial compliance and growth.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Gauri CA Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}