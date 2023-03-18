function ContentAnswer() {
    return (
        <div className="container mx-auto pt-20 flex flex-col pb-40">
            <div className="flex flex-col  justify-center items-center ">
                <div className="flex flex-col items-start">
                    <h1 className="text-[#F66800] min-w-max ">الصفحة الرئيسية / محتوى الصفحة /</h1>
                    <textarea className="w-[1120px] mx-auto h-[556px] lg:w-[700px] lg:h-[500px] md:w-[400px] md:h-[150px] sm:w-[250px] sm:h-[300px] rounded-lg border mt-10"
                        rows={5}
                    />
                </div>
                <div className="flex items-end justify-end gap-10 pt-16">
                    <div className="flex items-center justify-center  bg-gradient-to-r  from-[#313860] to-[#151928] text-white py-2 w-[174px]  rounded-lg ">
                        تحديث
                    </div>
                    <div className="flex items-center justify-center  bg-gradient-to-r  from-[#313860] to-[#151928] text-white py-2 w-[174px] rounded-lg ">
                        نسخ
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContentAnswer;