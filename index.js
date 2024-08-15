const container = document.querySelector('.container');
VanillaTilt.init(container, {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5
});

const inputt= document.getElementById("inputt");

function append(input){
    inputt.value+=input;
}

function clearinput(){
    inputt.value= ' ';
}

function result1() {
    try {
        inputt.value = eval(inputt.value);
    } catch (error) {
        inputt.value = "Error";
    }
}
