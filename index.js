function func (a) {
    if (a ===1) console.log('A:', a);
    else {
        console.log('B:', a);
        func(a -1);
        console.log('C:', a);
    }
}

func(4)