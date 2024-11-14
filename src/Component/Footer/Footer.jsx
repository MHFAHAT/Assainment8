

const Footer = () => {
    return (
        <div className="bg-gray-100 py-10 pt-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-6 text-center">

                <h1 className="font-bold text-xl">Gadget Heaven</h1>
                <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <div className="border-t border-gray-300 mt-8">
                <div className="max-w-6xl mx-auto grid grid-cols-3 gap-y-4 text-center text-gray-600 py-6">
                    <nav>
                        <h6 className="text-lg font-bold mb-2">Services</h6>
                        <a href="#" className="block hover:underline">Product Support</a>
                        <a href="#" className="block hover:underline">Order Tracking</a>
                        <a href="#" className="block hover:underline">Shipping & Delivery</a>
                        <a href="#" className="block hover:underline">Returns</a>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-bold mb-2">Company</h6>
                        <a href="#" className="block hover:underline">About Us</a>
                        <a href="#" className="block hover:underline">Careers</a>
                        <a href="#" className="block hover:underline">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-bold mb-2">Legal</h6>
                        <a href="#" className="block hover:underline">Terms of Service</a>
                        <a href="#" className="block hover:underline">Privacy Policy</a>
                        <a href="#" className="block hover:underline">Cookie Policy</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;