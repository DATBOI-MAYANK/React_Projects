function Hero() {
    return(
        <div className="flex justify-center mt-10">
        <div className="w-3/4 h-[30rem]  flex" >
            <div className="w-1/2 ">
            <div className="text-7xl font-extrabold">Your Feet</div>
            <div className="text-7xl font-extrabold">Deserves</div>
            <div className="text-7xl font-extrabold">The Best</div>
            <p className="w-96 my-11 text-base">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div >
                <button className="bg-red-700 text-white p-1">Shop Now</button>
                <button className="ml-5  p-1 border-2 border-black">Category</button>
            </div>
            <p className="mt-8">Also Available on</p>
            <div className="w-20 h-8 flex gap-4">
              <img src="/images/amazon.png" alt="" />
              <img src="/images/flipkart.png" alt="" />
            </div>
            </div>
            <div className="w-1/2">
            <img src="/images/shoe_image.png" alt="shoe" />
            </div>
        </div>
        </div>
    )
}


export default Hero