var x = 10;

function printX() {
    console.log(x);
}

function changeX() {
    var x = 20;
    // printX()는 호출된 위치가 아니라
    // 선언된 위치를 기준으로 상위 스코프를 결정한다.
    printX();
}

changeX();