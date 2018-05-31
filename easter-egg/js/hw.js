const panel = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
let counter = 0;
function showEasterEgg(event) {
    if(!event.ctrlKey){
        return;
    }else{
        if(!event.altKey){
            return;
        }else{
            if(event.keyCode !== 84){
                return;
            }else{
                panel.classList.toggle('visible');
            }
        }
    }
}

function showEasterEff(event){
    const  password = [89, 84, 78, 74, 75, 74, 85, 66, 90];
    if (event.keyCode === password[counter]){
        counter++;
        console.log(counter);
        if(counter === password.length){
            secret.classList.add('visible');
        }
    }else{
        counter = 0;
    }
}
document.addEventListener('keydown', showEasterEgg);
document.addEventListener('keydown', showEasterEff);