function customRegistrationNumber(str) {
    let [one,two] = [str.slice(0,7), str.slice(7)];

    const isInValidFormat = one.slice(6)!=='-'
    if (isInValidFormat){
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
        return;
    }
    const isLengthInValid = one.length !== 7 || two.length !== 7;
    if (isLengthInValid){
        console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
        return;
    }
    two = two.slice(0,1).padEnd(7, '*');
    console.log(one + two);
}


customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");