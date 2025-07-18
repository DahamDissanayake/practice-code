const body = document.getElementsByTagName('body')[0]
const color = document.getElementById('color').value;

const updateElement = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
          element.textContent = value;
        } else {
          console.warn(`Element with ID '${id}' not found`);
        }
      };

function setColor(name) {
    body.style.backgroundColor = name;
    updateElement('color','Current Color: ' + name)

}

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
    updateElement('color','Current Color: ' + color)
}


