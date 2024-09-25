function solution({email, idNumber, phone, site}) {
    return `<html>
    <body>
    <h1>코드캠프님 가입을 환영합니다.</h1>
    <hr/>
    <div>이메일:${email}</div>
    <div>주민번호:${idNumber}</div>
    <div>휴대폰 번호:${phone}</div>
    <div>내가 좋아하는 사이트:${site}</div>
    </body>
</html>`
}

const data = {
    email: 'wodus331@gmail.com',
    idNumber: '123456-1234567',
    phone: '010-1234-5678',
    site: 'https://www.naver.com'
}
console.log(solution(data)) // 2020년 01월 01일