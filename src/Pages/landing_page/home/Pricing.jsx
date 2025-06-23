export default function Pricing() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 md:px-20 py-16 space-y-8 md:space-y-0">
      {/* Left Side: Text */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-4xl font-semibold text-gray-900">Unbeatable pricing</h2>
        <p className="text-gray-600 text-lg">
          We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
        </p>
        <a href="#" className="text-blue-600 font-medium hover:underline flex items-center space-x-1">
          <span>See pricing</span>
          <span>→</span>
        </a>
      </div>

      {/* Right Side: Pricing Highlights */}
      <div className="md:w-1/2 flex flex-wrap justify-center md:justify-end gap-8">
        <div className="text-center">
          <div className="text-orange-500 text-6xl font-semibold">₹0</div>
          <p className="text-gray-600 mt-2">Free account<br />opening</p>
        </div>
        <div className="text-center">
          <div className="text-orange-500 text-6xl font-semibold">₹0</div>
          <p className="text-gray-600 mt-2">Free equity delivery<br />and direct mutual funds</p>
        </div>
        <div className="text-center">
          <div className="text-orange-500 text-6xl font-semibold">₹20</div>
          <p className="text-gray-600 mt-2">Intraday and<br />F&amp;O</p>
        </div>
      </div>
    </div>
  );
}
