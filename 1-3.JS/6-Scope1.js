let x = 1;

function outerScope() {
    let x = 2;

    function innerScope() {
        let x = 3;
        console.log(x);
    }

    innerScope();
}

outerScope();
