const CtaSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-2xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-regular text-gray-900 tracking-tight">
                Ready to Explore Norway?
              </h2>
              <p className="mt-3 text-md text-gray-600">
                Start your journey today with expert planning, seamless booking, and unforgettable experiences.
              </p>
            </div>

            <div className="
              flex-shrink-0 w-full md:w-auto 
              flex flex-col md:flex-row items-center 
              gap-4 mt-6 md:mt-0
            ">
              <button className="
                w-full md:w-auto
                order-2 md:order-1 /* Urutan ke-2 di mobile, ke-1 di desktop */
                text-gray-900 font-semibold py-3 px-6 rounded-full 
                border border-gray-400 
                hover:bg-gray-200 transition-colors duration-300
              ">
                Learn more
              </button>
              
              <button className="
                w-full md:w-auto
                order-1 md:order-2 /* Urutan ke-1 di mobile, ke-2 di desktop */
                bg-black text-white font-semibold py-3 px-6 rounded-full 
                hover:bg-gray-800 transition-colors duration-300
              ">
                Start Your Adventure
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;