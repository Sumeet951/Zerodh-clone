function Education() {
    return ( 
        <>
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-10">
      {/* Left Side: Image/Illustration */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/path-to-your-image.png" // Replace with actual image path or import
          alt="Varsity Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Free and open market education
        </h2>

        <p className="text-gray-700 text-lg">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline flex items-center space-x-1"
        >
          <span>Varsity</span>
          <span>→</span>
        </a>

        <p className="text-gray-700 text-lg">
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline flex items-center space-x-1"
        >
          <span>TradingQ&amp;A</span>
          <span>→</span>
        </a>
      </div>
    </div>

        </>
     );
}

export default Education;