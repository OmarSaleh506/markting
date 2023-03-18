import { useState } from "react";
import { fetchImage } from "src/services/api";
import Loader from "./loder";

function AdvertisementComponent() {
    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [completedSentence, setCompletedSentence] = useState([]);
    const [hidden, setHidden] = useState(false);
    const [lodging, setLodging] = useState(false);
    const [show, setShow] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipBoard = async (copyMe: string) => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 1000);
        } catch (err) {
            setCopySuccess(false);
        }
    };
    async function handleClick() {
        try {
            setHidden(true)
            setLodging(true);
            const imageUrl = await fetchImage(input, input2);
            console.log(imageUrl.data[0].url)
            setCompletedSentence(imageUrl.data[0].url);
            setLodging(false);
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    }
    async function handleClick2() {
        try {
            setShow(false)
            setLodging(true);
            const imageUrl = await fetchImage(input, input2);
            console.log(imageUrl.data[0].url)
            setCompletedSentence(imageUrl.data[0].url);
            setLodging(false);
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            {lodging ? <Loader /> : <div></div>}
            {
                hidden ? <div></div> : <div className="container mx-auto pt-20 flex flex-col">
                    <h1 className="text-[#F66800] min-w-max ">الصفحة الرئيسية /  اعلان /</h1>
                    <div className="flex flex-col  justify-center items-center pt-16">
                        <div className="flex flex-col items-start">
                            <h1 className="text-[24px] text-[#313860] tracking-wide text-center mx-2">اسم المنشئة</h1>
                            <input value={input}
                                onChange={(event) => setInput(event.target.value)} className="w-[771px] md:w-[500px] sm:w-[250px] mx-auto h-[40px] rounded-lg border border-black px-2"
                                placeholder="اسم المنشأة"
                            />
                            <div className="flex flex-col items-start py-10">
                                <h1 className="text-[32px] text-[#313860] tracking-wide text-center mx-2"> الألوان</h1>
                                <div className="flex gap-5">
                                    <div className="flex border border-black px-3 py-2 rounded-lg justify-center items-center gap-3">
                                        <div className="text-black">FFDE59</div>
                                        <div className="w-[31px] h-[31px] bg-[#FFDE59] rounded-lg"></div>
                                    </div>
                                    <div className="flex border border-black px-3 py-2 rounded-lg justify-center items-center gap-3">
                                        <div className="text-black">8D4121</div>
                                        <div className="w-[31px] h-[31px] bg-[#8D4121] rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-[24px] text-[#313860] tracking-wide text-center mx-2 "> محتوى</h1>
                            <textarea className="w-[771px] mx-auto h-[189px] md:w-[500px] md:h-[150px] sm:w-[250px] rounded-lg border border-black px-2"
                                value={input2}
                                onChange={(event) => setInput2(event.target.value)}
                                rows={5}
                                placeholder="المحتوى"
                            />
                        </div>
                        <div onClick={() => handleClick()} className="flex items-center justify-center  bg-gradient-to-r  from-[#313860] to-[#151928] text-white py-2 w-[206px] rounded-lg mt-10">
                            انشاء
                        </div>
                    </div>
                </div>
            }
            {
                show ? <div className="container mx-auto pt-20 flex flex-col pb-40">
                    <div className="flex flex-col  justify-center items-center ">
                        <div className="flex flex-col items-start">
                            <h1 className="text-[#F66800] min-w-max ">الصفحة الرئيسية / محتوى الصفحة /</h1>
                            <div className="flex justify-center  w-[1120px]  h-[556px] lg:w-[700px] lg:h-[500px] md:w-[400px] md:h-[250px] sm:w-[250px] sm:h-[300px] rounded-lg border mt-10 px-5 pt-5 text-right">
                                <img className="bg-cover bg-no-repeat " src={`${completedSentence}`} alt="" />
                            </div>
                        </div>
                        {/* {
                            copySuccess ?
                                <div className="flex justify-center items-center">
                                    <div className=" absolute text-[15px] text-white px-5 py-3 bg-gradient-to-r from-[#313860] to-[#151928] rounded-lg">
                                        Copied!!
                                    </div>
                                </div>
                                : <div></div>
                        } */}
                        <div className="flex items-end justify-end gap-10 pt-16">
                            <div onClick={() => handleClick2()} className="flex items-center justify-center  bg-gradient-to-r  from-[#313860] to-[#151928] text-white py-2 w-[174px]  rounded-lg ">
                                تحديث
                            </div>
                            <div className="flex items-center justify-center  bg-gradient-to-r  from-[#313860] to-[#151928] text-white py-2 w-[174px] rounded-lg ">
                                حفظ
                            </div>
                        </div>
                    </div>
                </div> : <div></div>
            }
        </>
    );
}

export default AdvertisementComponent;