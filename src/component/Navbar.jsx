import logo from '../assets/Images/logo.svg';
function Navbar() {
    return ( <>
<div className="w-full fixed bg-white">
    <div className="w-full justify-between flex items-center py-4 px-20 ">
        {/* left */}
        <div className=" w-[160px] h-[50px]">
            <img className='w-[160px] h-[50px]' src={logo} alt="" />
        </div>
        {/* right */}
        <div>
            <ul className="flex justify-end items-center gap-5">
                <li className="text-[#444] text-[0.9rem] font-[400]">Signup</li>
                <li className="text-[#444] text-[0.9rem] font-[400]">About</li>
                <li className="text-[#444] text-[0.9rem] font-[400]">Products</li>
                <li className="text-[#444] text-[0.9rem] font-[400]">Price</li>
                <li className="text-[#444] text-[0.9rem] font-[400]">Support</li>
                
                </ul>

        </div>
    </div>
</div>
    </> );
}

export default Navbar ;