function solution() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const fillValue = (value) => {
        return value.toString().padStart(2, '0');
    }

    return `${year}년 ${fillValue(month)}월 ${fillValue(day)}일 ${fillValue(hour)}:${fillValue(minute)}:${fillValue(second)}`
}

console.log('오늘은 '+solution()+'입니다.') // 2020년 01월 01일