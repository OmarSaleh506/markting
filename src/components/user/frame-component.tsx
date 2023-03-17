function Frame() {
    return (
        <GridComponent />
    );
}

export default Frame;
interface IText {
    text: string;
    image: string;
}

const FrameContent: IText[] = [
    {
        text: 'عيادات',
        image: 'bg-A1',

    },
    {
        text: 'مطاعم',
        image: 'bg-A2',

    },
    {
        text: 'شركات',
        image: 'bg-A3',

    },
    {
        text: 'مدارس',
        image: 'bg-A4',

    },
    {
        text: 'مطاعم',
        image: 'bg-A5',

    },
    {
        text: 'اخرى',
        image: 'bg-A6',

    },
]

function GridComponent() {
    return (
        <div className="grid grid-cols-3 gap-10 pt-20 sm:flex sm:flex-col">
            {
                FrameContent.map((item, index) => <div key={index} className={`${item.image} w-[352px] h-[180px] lg:w-[300px] lg:h-[160px] md:w-[250px] md:h-[130px] bg-cover bg-no-repeat flex items-center justify-center rounded-xl`}>
                    <p className="text-white text-[32px]">
                        {item.text}
                    </p>
                </div>)
            }
        </div>
    );
}
