// pages/terms.tsx

import React from 'react';
import Header from "@/components/ui/Header";
import Link from "next/link";
import {Teko} from "next/font/google";
import Footer from '@/components/ui/Footer';


const NewFontType = Teko({
  weight: ['700', ],

  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',})
const TermsOfService: React.FC = () => {
  return (
    <main className={`${NewFontType.className} min-h-screen  sm:pt-5 bg-gradient-to-r  via-purple-900 from-violet-800 to-black`}>
        <Header />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4  text-white text-center">Terms of Service</h1>
      <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
        These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to comply with these terms.
      </p>

      <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
        By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
      </p>

      <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-2">2. Changes to Terms</h2>
      <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
        We reserve the right to modify or replace these Terms at any time. Continued use of our services after changes implies acceptance of the new terms.
      </p>

      <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-2">3. User Responsibilities</h2>
      <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
        You agree not to misuse our services or help anyone else do so.
      </p>

      <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
        We are not liable for any indirect, incidental, or consequential damages resulting from the use of our services.
      </p>

      <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-2">5. Governing Law</h2>
      <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
        These Terms are governed by the laws of your jurisdiction, without regard to its conflict of law provisions.
      </p>

      <p className="  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-white text-center animate-gradient mt-8 sm:text-2xl">
        If you have any questions about these Terms, please contact us at 
        <a href="mailto:sukhdeepsingh141414@gmail.com" className="text-blue-500 underline"> sukhdeepsingh141414@gmail.com</a>.
      </p>
    </div>
    <div className="flex justify-center">
        <Link 
          href='/'
        >
        <button className="text-center rounded-2xl border  bg-yellow-600 hover:bg-yellow-700 hover:text-black p-5 text-white">Go Back To Home Page </button>
        </Link>
      </div>
     <Footer />
          </main>
  );
};

export default TermsOfService;
