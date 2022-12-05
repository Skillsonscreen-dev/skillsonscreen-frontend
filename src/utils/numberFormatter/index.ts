const formatNumber = (num: number) => {
    return { 
        toPrice: () => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        pad: (size: number) => {
            let ret = num.toString();
            while(ret.length < size) ret = '0' + ret;
            return ret;
        }
    }
}

export default formatNumber;