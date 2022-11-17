const numberToCurrency = (num) => {
    return num.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

export default numberToCurrency;