const initReceiveAllData = () => {
    let data = [];
    for (var i = 0; i < 256; i++) {
        data.push("FF");
    }
    return data;
};

 export default initReceiveAllData()
