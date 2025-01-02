export default function Header() {
    return (
        <div className="header h-[34vw] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
            <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
                <h2 className="font-medium text-white text-[max(4.5vw,22px)]">
                    Order your favourite food here
                </h2>
                <p className="text-white  text-[1vw]">
                    Each dish is thoughtfully prepared to deliver a perfect
                    balance of flavors, ensuring a memorable dining experience
                    that delights your taste buds and leaves you craving for
                    more.
                </p>
                <button className="border-0 text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]">
                    View Menu
                </button>
            </div>
        </div>
    );
}
