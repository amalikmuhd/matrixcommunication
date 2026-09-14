import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-gradient-to-r from-primary to-primary1 ">

            <div className="container relative flex justify-end  h-full">
                <div
                    className="h-[1240px] w-full bg-contain bg-right bg-no-repeat opacity-40 md:h-[1020px] md:w-[799px] lg:h-[860px] xl:h-[840px]"
                    style={{ backgroundImage: "url(/images/header-bg.svg)" }}
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Header;
