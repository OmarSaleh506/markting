interface IProps {
    text: string;
    value: string | number | readonly string[] | undefined;
    fun?: React.ChangeEventHandler<HTMLInputElement>;
}
function RadioButton(props: IProps) {
    return (
        <div className="flex items-center ">
            <input onChange={props.fun} id="option-1" type="radio" name="countries" value={props.value} className="h-5 w-5 border-gray-300 focus:ring-2 focus:ring-blue-300 " aria-labelledby="option-1" aria-describedby="option-1" />
            <label htmlFor="option-1" className="text-xl font-medium text-gray-900 px-2 block">
                {props.text}
            </label>
        </div>
    );
}

export default RadioButton;
