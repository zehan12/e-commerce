const Header = () => {
    return (<nav id="nav" class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent">
        <div class="p-4">
            <div class="font-extrabold tracking-widest text-xl"><a href="#" class="transition duration-500 hover:text-indigo-500">App</a></div>
        </div>

        {/* <div class="p-4 flex flex-row justify-between font-bold">
        <a id="hide-after-click" href="#home" class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Home</a>
        <a href="#about" class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">About</a>
        <a href="#contactus" class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Contact Us</a>
        <a href="#products" class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Products</a>
    </div> */}
    </nav>)
}

export default Header;