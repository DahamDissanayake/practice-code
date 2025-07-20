const wordin = document.getElementById('wordin')
const body = document.getElementsByTagName('body')[0]

function check(){
    const value = wordin.value;
    const reversed = value.split('').reverse().join('');
    console.log(reversed);

    if (value === reversed) {
        console.log('This is a palindrome');
        setColor('green')
    }
    else{
        console.log('This is not a palindrome')
        setColor('red')
    }   
}

function setColor(color){
    body.style.backgroundColor = color;

}