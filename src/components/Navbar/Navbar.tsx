import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

export const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem); // Cập nhật trạng thái khi click
    };

    return (
        <div className=" navbar py-5 flex justify-between items-center ">
            <img src={assets.logo} alt="Logo" className="logo w-[150px]" />
            <ul className="navbar-menu flex list-none gap-5 text-[#49557e] text-lg">
                {["Home", "Menu", "Mobile-app", "Contact us"].map(
                    (menuItem) => (
                        <li
                            key={menuItem}
                            className={`cursor-pointer ${
                                menu === menuItem
                                    ? "border-b-2 border-[#49557e]"
                                    : "hover:border-b-2 hover:border-gray-300"
                            }`}
                            onClick={() => handleMenuClick(menuItem)}
                        >
                            {menuItem}
                        </li>
                    )
                )}
            </ul>
            <div className="navbar-right flex items-center gap-10 ">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon relative">
                    <img src={assets.basket_icon} alt="" />
                    <div className="absolute min-w-3 min-h-3 bg-red-400 rounded-md -top-2 -right-2"></div>
                </div>
                <button className="bg-transparent text-base text-[#49557e] border border-red-400 py-2 px-7 rounded-full cursor-pointer transition-all hover:bg-[#fff4f2]">
                    Sign in
                </button>
            </div>
        </div>
    );
};
