function calculateRectangle() {
    // rectangle-width
    const recWidth = document.getElementById('rectangle-width').value;
    const width = parseFloat(recWidth);

    // rectangle-length
    const recLength = document.getElementById('rectangle-length').value;
    const length = parseFloat(recLength);

    // calculation 
    const result = width * length;

    // display output
    let showCalculation = document.getElementById('calculatio-rec');
    showCalculation.innerText = result;





}
