/* 1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ``` 
*/
function userIdGenerator(){
    let k = prompt("please insert number of characters");
    let j = prompt("please insert number of IDs");
    let a, d = 0;
    let rand, character; 
    let arrOfArr = [], arr = []; 
    while (d<j) {
        for (let i = 0; i<k; i++) {
            a = Math.ceil(Math.random()*3);
            switch (a){
              case 1:
                rand = Math.floor(Math.random() * 9)+48;
                character = String.fromCharCode(rand);
                break;
              case 2:
                rand = Math.floor(Math.random() * 25)+65;
                character = String.fromCharCode(rand);
                break;
              case 3:
                rand = Math.floor(Math.random() * 25)+97;
                character = String.fromCharCode(rand);
                break;
            }
        arr.push(character);
        }
    arrOfArr.push(arr.join(", "));
    arr.length = 0;
    d++;
    }
    return arrOfArr.join("\n");
  }
  alert(userIdGenerator());