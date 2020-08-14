const btnToCelsius = () => {
    toCelsius(document.getElementById("in-fahrenheit").value);
};
const toCelsius = (fahrenheit) => {
    Number(fahrenheit);
    document.getElementById("result").innerHTML = (5/9) * (fahrenheit-32);
};