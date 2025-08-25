import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/explore', label: 'Explore' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];
  const legalLinks = ['Terms', 'Privacy', 'Cookies'];

  return (
    <footer className="bg-white py-6 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-gray-300 rounded-2xl p-8 sm:p-12">
          
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            
            <div className="flex flex-col gap-8 lg:w-1/2">
              <div>
                <Link href="/">
                  <Image
                    src="/img/logo.png"
                    alt="Spherule Logo"
                    width={100} 
                    height={100}
                    className="h-auto" 
                  />
                </Link>
                <p className="mt-4 max-w-sm text-gray-400">
                  We help travelers explore Norway's wonders effortlessly with smart planning and expert guides.
                </p>
              </div>
              
              <nav className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-x-6 gap-y-2 text-white w-full max-w-xs">
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="hover:text-gray-300 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="w-full lg:max-w-md">
              <h3 className="font-semibold text-white">Stay up to date</h3>
              
              <form className="mt-4 flex flex-col gap-4">
                <div className="relative flex items-center bg-gray-900 border border-gray-700 rounded-full focus-within:ring-2 focus-within:ring-white transition-shadow">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-transparent py-3 px-5 text-white placeholder-gray-500 focus:outline-none"
                    aria-label="Email address"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-white text-black font-semibold rounded-full py-3 px-6 hover:bg-gray-200 transition-colors w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr className="border-t border-gray-800 my-8 sm:my-10" />

          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} TinyUI. All rights reserved.
            </p>
            <div className="flex gap-x-6 text-sm text-gray-400">
              {legalLinks.map((link) => (
                  <a key={link} href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;