const ContactMe = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:min-h-screen bg-gradient-to-br from-black to-purple-900 text-white">
      <h1 className="text-5xl font-bold mb-10">Contact me</h1>
      <form className="w-full max-w-lg space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full name *
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name ..."
            className="w-full px-4 py-2 rounded-md bg-purple-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email ..."
            className="w-full px-4 py-2 rounded-md bg-purple-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            placeholder="Enter your message ..."
            rows={4} // Use braces to pass a number
            className="w-full px-4 py-2 rounded-md bg-purple-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            See all
          </button>
        </div>
      </form>

      {/* Arrow */}
      
    </div>
  );
};

export default ContactMe;
