import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutesObj } from "src/app.paths";
import { VscClose } from 'react-icons/vsc';
import { RxHamburgerMenu } from 'react-icons/rx';
function NaveBar() {
    const navigate = useNavigate();
    const contactUsPage: string = appRoutesObj.getContactUsPagePath();
    const aboutUs: string = appRoutesObj.getAboutUsPagePath();
    const LandingPage: string = appRoutesObj.getBasePath();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [active, setActive] = useState(false);
    const [routeIndex, setRouteIndex] = useState(0);

    const activeColor = (routeIndex: number, route: string) => {
        navigate(route);
        setRouteIndex(routeIndex);
        if (routeIndex) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    return (
        <>
            <div className="pt-20 sm:hidden">
                <div className="container  mx-auto  bg-gradient-to-r from-[#313860] to-[#151928] py-7 rounded-lg px-4  ">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center  gap-8 text-[14px] ">
                            <img src="/assets/images/logo.png" alt="" />
                            <h1 className={`${routeIndex === 1 && active ? 'text-[#F66800]' : 'text-[#F66800]'}`} onClick={() => activeColor(1, LandingPage,)}>الصفحة الرئيسية</h1>
                            <h1 className={`${routeIndex === 2 && active ? 'text-[#F66800]' : 'text-white'}`} onClick={() => activeColor(2, contactUsPage,)}>تواصل معنا</h1>
                            <h1 className={`${routeIndex === 3 && active ? 'text-[#F66800]' : 'text-white'}`} onClick={() => activeColor(3, aboutUs,)}>عن سوقلي</h1>
                        </div>
                        <div className="flex bg-white px-3 py-1 rounded-lg text-[#F66800]">
                            تسجيل الدخول
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="flex justify-between px-2 bg-gradient-to-r  from-[#313860] to-[#151928] w-full h-auto py-5 2xl:hidden xl:hidden lg:hidden md:hidden ">
                <img src="/assets/images/logo.png" alt="" />
                {
                    <div onClick={() => setToggleMenu(!toggleMenu)}> {toggleMenu ? <VscClose className='text-[30px] text-white' /> : <RxHamburgerMenu className="text-[30px] text-white" />}</div>
                }
            </div>
            {
                toggleMenu ? <div className="2xl:hidden xl:hidden lg:hidden md:hidden">
                    <div className="bg-[#515882] w-full flex flex-col items-start  pb-10 pt-5">
                        <div className="flex flex-col items-start justify-between pr-3 text-white gap-3 text-[14px]">
                            <h1 className={`${routeIndex === 1 && active ? 'text-[#F66800]' : 'text-white'}`} onClick={() => activeColor(1, LandingPage,)}>الصفحة الرئيسية</h1>
                            <h1 className={`${routeIndex === 2 && active ? 'text-[#F66800]' : 'text-white'}`} onClick={() => activeColor(2, contactUsPage,)}>تواصل معنا</h1>
                            <h1 className={`${routeIndex === 3 && active ? 'text-[#F66800]' : 'text-white'}`} onClick={() => activeColor(3, aboutUs,)}>عن سوقلي</h1>
                            <div className=" bg-white max-w-max px-3 py-1 rounded-lg text-[#F66800]">
                                تسجيل الدخول
                            </div>
                        </div>

                    </div>
                </div> : <div></div>
            }
        </>
    );
}

export default NaveBar;