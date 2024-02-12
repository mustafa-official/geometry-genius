function calculateTriangle() {
    // get triangleBase
    const triangleBase = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBase);


    // get triangle-height
    const triangleHeight = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeight);

    // do calculation 
    const result = 0.5 * base * height;
    // display calculation
    const calculation = document.getElementById('calculation');
    calculation.innerText = result;







}