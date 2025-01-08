// pages/privacy.js
import Footer from "@/components/ui/Footer";
import {Teko} from "next/font/google";
import Header from "@/components/ui/Header";
import Link from "next/link";

const NewFontType = Teko({
  weight: ['700', ],

  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',})

export default function PrivacyPolicy() {
    return (
      <main className={`${NewFontType.className} min-h-screen  sm:pt-5 bg-gradient-to-r  via-purple-900 from-violet-800 to-black`}>
        <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4  text-white text-center">Privacy Policy</h1>
       <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
        </p>
        
        <h2 className="text-2xl text-white text-center font-semibold mt-6 mb-2">1. Information We Collect</h2>
       <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
          We may collect personal information such as your name, email address, and other contact details when you interact with our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-white text-center mb-2">2. How We Use Your Information</h2>
       <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
          We use your information to improve our services, respond to inquiries, and provide a better user experience.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-white text-center mb-2">3. Cookies</h2>
        <p className="sm:text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent  text-center animate-gradient mb-4">
          Our website may use cookies to enhance your experience. You can adjust your browser settings to decline cookies if you prefer.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-white text-center mb-2">4. Third-Party Services</h2>
       <p className="sm:text-2xl  text-center bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
          We may use third-party services to analyze website usage and improve our services.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-white text-center mb-2">5. Changes to This Policy</h2>
        <p className="sm:text-2xl bg-gradient-to-r text-center from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient mb-4">
          We reserve the right to update this Privacy Policy at any time. Please review this page periodically for changes.
        </p>
        
        <p className="  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-white text-center animate-gradient mt-8 sm:text-2xl">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sukhdeepsingh141414@gmail.com" className="text-blue-500 underline">sukhdeepsingh141414@gmail.com</a>.</p>
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
  }
  