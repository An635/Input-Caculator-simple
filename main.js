// chooseImage
function chooseFile(fileInput){
    if(fileInput.files && fileInput.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
            $('#image').attr('src', e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// caculator
let openrand1 = '';
let openrand2 = '';
let opt

function buttonHandler(btn){
    const pressedValue = btn.innerText


    const resultInput = document.getElementById('resultInput');

    if (isNaN(pressedValue)){
        if(pressedValue == 'C'){
            openrand1 = "";
            openrand2 = "";
            opt = undefined;
            resultInput.value = '';
            return;
        }
        if(pressedValue == '='){
            const result = perform(openrand1, openrand2, opt );
            resultInput.value =  result;
            openrand1 = "";
            openrand2 = "";
            opt = undefined;
        }else{
            opt = pressedValue;

        }
    }else{
        if(opt){
            openrand2 += pressedValue;
            resultInput.value = openrand2;
        }else{
            openrand1 += pressedValue;
            resultInput.value = openrand1;
        }
    }
}

function perform(orand1, orand2, otor){
    orand1 = Number(orand1);
    orand2 = Number(orand2);

    switch(otor){
        case '+':
            return orand1 + orand2;
        case '-':
            return orand1 - orand2;
        case '*':
            return orand1 * orand2;
        case '/':
            return orand1 / orand2;
        
    }

}