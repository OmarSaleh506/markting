function RadioButton() {
    return (
        <fieldset className="flex items-center gap-5 pt-5">
            <div className="flex items-center ">
                <input id="country-option-1" type="radio" name="countries" value="USA" className="h-5 w-5 border-gray-300 focus:ring-2 focus:ring-blue-300 " aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                <label htmlFor="country-option-1" className="text-xl font-medium text-gray-900 px-2 block">
                    اعلان
                </label>
            </div>
            <div className="flex items-center">
                <input id="country-option-1" type="radio" name="countries" value="USA" className="h-5 w-5 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                <label htmlFor="country-option-1" className="text-xl font-medium text-gray-900 px-2 block">
                    محتوى
                </label>
            </div>
        </fieldset>
    );
}

export default RadioButton;
