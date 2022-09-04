// // function sqrt

function sqrt(num) {
    if(num == 9 ** 2)
    {
        return 9;
    }
    else if(num == 8 ** 2)
    {
        return 8;
    }
    else if(num == 7 ** 2)
    {
        return 7;
    }
    else if(num == 6 ** 2)
    {
        return 6;
    }
    else if(num == 5 ** 2)
    {
        return 5;
    }
    else if(num == 4 ** 2)
    {
        return 4;
    }
    else if(num == 3 ** 2)
    {
        return 3;
    }
    else if(num == 2 ** 2)
    {
        return 2;
    }
    else if(num == 1 ** 2)
    {
        return 1;
    }
    else {
        console.error("error please enter your number from 1 to 9")
    }
};

console.log(sqrt(85));

let btn = document.getElementById('go-now');

btn.onclick = function() {
    location.href = ""
}