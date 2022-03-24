//console.log(`<p style='color: red; font-weight: bold; font-size: 30px''%cWELCOME TO DOLLARS BANK!</p>');
const color = require('./src/Colors');
const fun = require('./src/MenuFunctions')
console.log(color.bright, color.magenta, ' WELCOME TO DOLLARS BANK!', color.reset);


fun.DefaultMenu();

// function menu(){
//     console.log('Welcome to ' + atm + ' ATM');
//     console.log('Please select the following choices')
//     console.log('1. Create New Account');
//     console.log('2. Log In');
//     console.log('3. Exit');

//     let Choice = 0;
//     r.option('Select the option below: ', function (response){
//         if(response == 1){
//             console.log('Create New Account. ');
//             funcs.getUser();
//             r.close();
//         } else if (response == 2) {
//             console.log('Login to your account.')
//             let username
//             let password
//             r.option("What's your username? ", function(response) {
//                 username = response;
//                 if(!users.getUser(response)){
//                     console.log(color.red + '   No Such User, returning to main menu');
//                   funcs.DefaultMenu();
//                 }
//                 else{
//                     rl.question("   What is your password? ", function(answer){
//                         pass = answer;
//                         users.login(name,pass);
//                 });
//             }
//         });
//     }

   




