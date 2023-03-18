import Frame from "src/components/user/frame-component";

function LandingPageContainer() {
    return (
        <div className="flex  justify-center items-center pt-10">
            <div className="flex flex-col items-center">
                <h1 className="text-[40px] text-[#313860] tracking-wide text-center mx-2"> إعلانات منشأتك أصبحت أسرع </h1>
                <Frame />
            </div>
        </div>
    );
}

export default LandingPageContainer;