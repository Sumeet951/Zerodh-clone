import ecosystem from "../../../assets/Images/ecosystem.png"
function Award() {
    return ( 
        <>
        <div className="container">
           
            <div className="flex p-10 justify-between items-center ">
                 {/* left container */}
                 <div className="flex flex-col ">
                    <h1 className="mb-[40px] text-[2rem] text-[#424242] font-[500] ">Trust with confidence</h1>
                    <div className="flex flex-col gap-5">
                        <div >
                        <h3 className="text-[1.25rem] font-[500]">Customer-First always</h3>
                        <p className="w-[310px] leading-normal"><span class="client-count">1.6+ crore</span>
                        1.6+ crore That's why customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                     <div >
                        <h3 className="text-[1.25rem] font-[500]">No spam or gimmicks</h3>
                        <p className="w-[310px] leading-normal">
                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>
                    </div>
                     <div >
                        <h3 className="text-[1.25rem] font-[500]">Customer-First always</h3>
                        <p className="w-[310px] leading-normal"><span class="client-count">1.6+ crore</span>
                        1.6+ crore That's why customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                     <div >
                        <h3 className="text-[1.25rem] font-[500]">Customer-First always</h3>
                        <p className="w-[310px] leading-normal"><span class="client-count">1.6+ crore</span>
                        1.6+ crore That's why customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    </div>
                 </div>
                 {/* right container */}
                 <div>
                    <img src={ecosystem} alt="" />
                 </div>
            </div>
        </div>
        </>
     );
}

export default Award;