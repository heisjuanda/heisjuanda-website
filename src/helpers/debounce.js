export const debounce = (callBack, waitTime) => {
    let timeout;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(() => callBack.apply(context,args), waitTime);
    }
};