function spacey(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if(i === 0) {
            newArray[i] = array[i];
        } else {
            newArray[i] = `${newArray[i-1]}${array[i]}`;
        }
    }
    console.log(newArray);
}

spacey(['kevin', 'has','no','space']);
spacey(['this','cheese','has','no','holes']);
