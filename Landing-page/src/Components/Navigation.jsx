


function Navigation (){
   return(
    <div>
        <nav className=" flex justify-between items-center ">
            <div className="" >
            <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul className="flex gap-9 text-xl ">
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>

            <button className="p-2 m-2 text-xl rounded-lg bg-red-700">Sign Up</button>
        </nav>
    </div>
   )
}

export default Navigation