// components/Footer.js

import Image from 'next/image';
import Link from 'next/link';


const socialLinks = [
  {
    src: "https://img.icons8.com/?size=100&id=44019&format=png&color=000000",
    alt: "LinkedIn icon",
    url: "https://www.linkedin.com/in/sukhdeep-singh-417a98184",
  },
  {
    src: "https://img.icons8.com/?size=100&id=43677&format=png&color=000000",
    alt: "WhatsApp icon",
    url: "https://whatsapp.com/yourprofile",
  },
  {
    src: "https://img.icons8.com/?size=100&id=bYzsf9Bmocst&format=png&color=000000",
    alt: "X (Twitter) icon",
    url: "https://x.com/ManiBhagat3",
  },
  {
    src: "https://img.icons8.com/?size=100&id=118501&format=png&color=000000",
    alt: "Facebook icon",
    url: "https://www.facebook.com/mani.bhagat.5623",
  },
  {
    src: "https://img.icons8.com/?size=100&id=43625&format=png&color=000000",
    alt: "Instagram icon",
    url: "https://www.instagram.com/sukhdeep_singh_bhagat/",
  },
  {
    src: "https://img.icons8.com/?size=100&id=114954&format=png&color=000000",
    alt: "Telegram icon",
    url: "https://web.telegram.org/@king_of_noting",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Follow Me</h2>
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={40}
                height={40}
                className="inline-block"
              />
            </a>
          ))}
        </div>
        <p className="text-gray-400">© {new Date().getFullYear()} Sukhdeep Singh. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4 text-gray-400 text-sm">
            <Link href="/terms">
          <p  className="hover:text-white">Terms of Use</p>
            </Link>
          <Link href="/Privacy">
          <p className="hover:text-white">Privacy Policy</p>
            </Link>
        </div>
      </div>
    </footer>
  );
}
