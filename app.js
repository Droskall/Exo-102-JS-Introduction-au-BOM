let button = document.getElementById('button');
let close = document.getElementById('close');

button.addEventListener('click', () => {
    let feature = "menubar=no, scrollbars=yes, width=600, height=700, status=no, toolbar=no";
    let myWindow = window.open('https://www.wwe.com/', '', feature)

    myWindow.moveBy(200, 200);
    myWindow.resizeBy(400, 500);

    close.addEventListener('click', () => {
        myWindow.close();
    })
});
