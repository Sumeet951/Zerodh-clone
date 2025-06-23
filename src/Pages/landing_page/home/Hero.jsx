 import heroImage from '../../../assets/Images/homeHero.png';
 function Hero() {
    return ( 
        <>
        <div className="flex flex-col justify-center items-center">
            <div className=""><img className='h-[45vh]' src={heroImage} alt="" /></div>
            <h1 className='text-[2.75rem] font-[500] text-[#424242]'>Invest in Everything</h1>
            <p className='text-[1.25rem] text-[#424242] font-[400] text-center w-[60%]'>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button className='bg-[#387ed1] text-[1.2em] text-3xl text-white p-3.5 rounded-[10px] mt-5'>Sign Up for free</button>

        </div>
        </>
     );
}

export default Hero;