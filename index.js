/*--------Q1 Print Number---------*/

// var num = window.prompt('Enter Number');
// console.log('You enterd number ' + num);


/*--------Q2 Number Divided By 3 & 4---------*/

// var num = window.prompt('Enter number you need to check');

// if (num % 3 == 0 && num % 4 == 0){
//     console.log('Yes');
// }
// else{
//     console.log('No')
// }

/*--------Q3 Max Number---------*/

// var FirstNum = Number(window.prompt('Enter First Number'));
// var SecondNum = Number(window.prompt('Enter Second Number'));

// if (FirstNum > SecondNum){

//     console.log('Max is: ' + FirstNum);
// }
// else if(FirstNum < SecondNum){

//     console.log('Max is: ' + SecondNum)
// }
// else
// {
//     console.log('Numbers are equal');
// }


/*--------Q4 Positive & Negative---------*/

// var num = window.prompt('Enter number you need to check');

// if(num[0] =='-'){

//     console.log('Negative');
// }
// else{

//     console.log('Positive');
// }

/*----------Q5 Min & Max------------*/

// var FirstNum =  Number(window.prompt('Enter First Number'));
// var SecondNum = Number(window.prompt('Enter Second Number'));
// var ThirdNum =  Number(window.prompt('Enter Third Number'));


// if (FirstNum > SecondNum && FirstNum > ThirdNum){

//     console.log('Max element = ' + FirstNum);
//     if (SecondNum > ThirdNum){

//         console.log('Min element = ' + ThirdNum);
//     }
//     else if(ThirdNum > SecondNum){

//         console.log('Min element = ' + SecondNum);
//     }
// }
// else if( SecondNum > FirstNum && SecondNum > ThirdNum){

//     console.log('Max element = ' + SecondNum)
//     if(FirstNum > ThirdNum ){

//         console.log('Min element = ' + ThirdNum);
//     }
//     else if(ThirdNum > FirstNum){ 

//         console.log('Min element = ' + FirstNum);
//     }
// }
// else if(ThirdNum > FirstNum && ThirdNum > SecondNum ){

//     console.log('Max element = ' + ThirdNum)
//     if(FirstNum > SecondNum ){

//         console.log('Min element = ' + SecondNum);
//     }
//     else if (SecondNum > FirstNum){

//         console.log('Min element = ' + FirstNum);
//     }
// }
/*-----------Q6 Even OR Odd--------------*/

// var num = window.prompt('Enter number you need to check');

// if(num != 0){

//     if(num % 2 == 0)
//     {
//         console.log('Even');

//     }
//     else{
//         console.log('Odd');
//     }
// }
// else{
//     console.log('0');
// }

/*------------Q8 Vowels & Constants------------*/

// var character = window.prompt('Enter charachter You want to check');

// if(character == 'a' || character == 'A' || character == 'e' || character == 'E' || character == 'i' || character == 'I' || 
//     character == 'o' || character == 'O' || character == 'u' || character == 'U')
// {
//     console.log('Vowel');
// }
// else
// {
//     console.log('Consonant');
// }

/*-------------Q9 Numbers Between 1 and Number--------------*/

// var num = window.prompt('Enter Number');

// for( i = 1; i <= num ; i++  )
// {
//    console.log(i);
// }

/*------------Q10 Multiplication Table---------------*/

// var num = window.prompt('Enter Number');

// for( i = 1; i <= 12 ; i++  )
// {
//    console.log(num * i);
// }

/*--------------Q11 Even Numbers before Number------------*/

// var num = window.prompt('Enter Number');

// for( i = 1; i <= num ; i++  )
// {
//     if( i % 2 == 0 )
//     {
//     console.log( i );
//     }
// }

/*------------Q12 Power--------------*/

// var FirstNum = window.prompt('Enter First Number');
// var Power = window.prompt('Enter Second Number');

// var total = 1;
// for(i = 1; i<= Power; i++ ){

//     total = total * FirstNum;

// }
// console.log( total );

/*--------------Q13 Marks Total&Average--------------*/
// var mark1 = Number(window.prompt('Enter mark 1 '));
// var mark2 = Number(window.prompt('Enter mark 2 '));
// var mark3 = Number(window.prompt('Enter mark 3 '));
// var mark4 = Number(window.prompt('Enter mark 4 '));
// var mark5 = Number(window.prompt('Enter mark 5 '));
// var total = Number(mark1 + mark2 + mark3 + mark4 + mark5);

// console.log('Total Mark = ' + total);
// console.log('Average = ' + total / 5);
// console.log('Percentage = ' +  total / 5 +'%');

/*-----------------Q14 Dayes Of Months------------------*/

// var month = Number(window.prompt('Enter Month Number'));

// if(month >= 1 && month <= 12){
// if(month == 2 )
// {
//     console.log('Days in Month: 28 Day');
// }
// else if(month == 4 || month == 6 || month == 9 || month == 11)
// {
//     console.log('Days in Month: 30 Day');
// }
// else
// {
//     console.log('Days in Month: 31 Day');
// }
// }
// else
// {
//     console.log('Not a valid month');
// }

/*---------------Q15 Subjects Grades------------------*/

// var mark1 = Number(window.prompt('Enter mark 1 '));
// var mark2 = Number(window.prompt('Enter mark 2 '));
// var mark3 = Number(window.prompt('Enter mark 3 '));
// var mark4 = Number(window.prompt('Enter mark 4 '));
// var mark5 = Number(window.prompt('Enter mark 5 '));

// if(mark1 <= 100 && mark1 >= 0)
// {
// if(mark1 >= 90)
// {
//     console.log(mark1 + ': Grad A');
// }
// else if(mark1 <90 && mark1 >= 80)
// {
//     console.log(mark1 + ': Grad B');
// }
// else if(mark1 <80 && mark1 >= 70)
// {
//     console.log(mark1 + ': Grad C');
// }
// else if(mark1 <70 && mark1 >= 60)
// {
//     console.log(mark1 + ': Grad D');
// }
// else if(mark1 <60 && mark1 >= 40)
// {
//     console.log(mark1 + ': Grad E');
// }
// else if(mark1 <40)
// {
//     console.log(mark1 + ': Grad F');
// }
// }
// else
// {
//     console.log('Invalid Mark!');
// }

// if(mark2 <= 100 && mark2 >= 0)
// {
// if(mark2 >= 90)
// {
//     console.log(mark2 + ': Grad A');
// }
// else if(mark2 <90 && mark2 >= 80)
// {
//     console.log(mark2 + ': Grad B');
// }
// else if(mark2 <80 && mark2 >= 70)
// {
//     console.log(mark2 + ': Grad C');
// }
// else if(mark2 <70 && mark2 >= 60)
// {
//     console.log(mark2 + ': Grad D');
// }
// else if(mark2 <60 && mark2 >= 40)
// {
//     console.log(mark2 + ': Grad E');
// }
// else if(mark2 <40)
// {
//     console.log(mark2 + ': Grad F');
// }
// }
// else
// {
//     console.log('Invalid Mark!');
// }

// if(mark3 <= 100 && mark3 >= 0)
// {
// if(mark3 >= 90)
// {
//     console.log(mark3 + ': Grad A');
// }
// else if(mark3 <90 && mark3 >= 80)
// {
//     console.log(mark3 + ': Grad B');
// }
// else if(mark3 <80 && mark3 >= 70)
// {
//     console.log(mark3 + ': Grad C');
// }
// else if(mark3 <70 && mark3 >= 60)
// {
//     console.log(mark3 + ': Grad D');
// }
// else if(mark3 <60 && mark3 >= 40)
// {
//     console.log(mark3 + ': Grad E');
// }
// else if(mark3 <40)
// {
//     console.log(mark3 + ': Grad F');
// }
// }
// else
// {
//     console.log('Invalid Mark!');
// }
// if(mark4 <= 100 && mark4 >= 0)
// {
// if(mark4 >= 90)
// {
//     console.log(mark4 + ': Grad A');
// }
// else if(mark4 <90 && mark4 >= 80)
// {
//     console.log(mark4 + ': Grad B');
// }
// else if(mark4 <80 && mark4 >= 70)
// {
//     console.log(mark4 + ': Grad C');
// }
// else if(mark4 <70 && mark4 >= 60)
// {
//     console.log(mark4 + ': Grad D');
// }
// else if(mark4 <60 && mark4 >= 40)
// {
//     console.log(mark4 + ': Grad E');
// }
// else if(mark4 <40)
// {
//     console.log(mark4 + ': Grad F');
// }
// }
// else
// {
//     console.log('Invalid Mark!');
// }
// if(mark5 <= 100 && mark5 >= 0)
// {
// if(mark5 >= 90)
// {
//     console.log(mark5 + ': Grad A');
// }
// else if(mark5 <90 && mark5 >= 80)
// {
//     console.log(mark5 + ': Grad B');
// }
// else if(mark5 <80 && mark5 >= 70)
// {
//     console.log(mark5 + ': Grad C');
// }
// else if(mark5 <70 && mark5 >= 60)
// {
//     console.log(mark5 + ': Grad D');
// }
// else if(mark5 <60 && mark5 >= 40)
// {
//     console.log(mark5 + ': Grad E');
// }
// else if(mark5 <40)
// {
//     console.log(mark5 + ': Grad F');
// }
// }
// else
// {
//     console.log('Invalid Mark!');
// }


/*===============Switch Cases=============*/
/*---------------Q15 Total number of month days-------------*/


// var month = Number(window.prompt('Enter Month Number'));

// switch (month)
// {
//     case 2:
//         console.log('Days Of Month : 28 Day');
//         break;
//     case 4 :
//     case 6 :
//     case 9 :
//     case 11:
//         console.log('Days Of Month : 30 Day');
//         break;
//     case 1 :
//     case 3 :
//     case 5 :
//     case 7 :
//     case 8 :
//     case 10 :
//     case 12:
//         console.log('Days Of Month : 31 Day');
//         break;
//     default:
//         console.log('Not a Valid Month!');
// }

/*------------------Q16 Vowels & Constants-----------*/

// var char = window.prompt('Enter Character U want to Ckeck');

// switch(char)
// {
//     case 'a' :
//     case 'A' :

//     case  'e' :
//     case  'E' :

//     case 'i' :
//     case  'I' :

//     case 'o' :
//     case  'O' :

//     case 'u':
//     case  'U' :
//         console.log('Vowel');
//         break;

//     default:
//         console.log('Consonant');

// }
/*---------------------Q17 Max Number---------------*/

// var FirstNum = Number(window.prompt('Enter First Number'));
// var SecondNum = Number(window.prompt('Enter Second Number'));
// var diff = FirstNum - SecondNum ;

// switch(true)
// {

//     case diff > 0:
//         console.log('Max is ' + FirstNum);
//         break;
//     case diff < 0 :
//         console.log('Max is ' + SecondNum);
//         break;
//     default:
//         console.log('Numbers are Equal');
// }

/*----------------Q18 Even OR Odd------------*/

// var Num = Number(window.prompt('Enter First Number'));

// switch(Num % 2 )
// {
//     case 0 :
//         console.log('Even');
//         break;
//     case 1 :
//         console.log('Odd');
//         break;

// }

/*------------------Q19 Positive OR Negative------------------*/

// var Num = Number(window.prompt('Enter Number'));

// switch(true)
// {
//     case Num > 0:
//         console.log('Positive');
//         break;
//     case Num < 0:
//         console.log('Negative');
//         break;
//     default :
//     console.log('0');
// }

/*------------------Q20 Calculator------------------*/

// var FirstNum = Number(window.prompt('Enter First Number'));
// var Op = window.prompt('Enter Operator');
// var SecondNum = Number(window.prompt('Enter Second Number'));

// switch (Op)
// {
//     case '+' :
//         console.log(FirstNum + SecondNum);
//         break;
//     case '-' :
//         console.log(FirstNum - SecondNum);
//         break;
//     case '*' :
//         console.log(FirstNum * SecondNum);
//         break;
//     case '/' :
//         console.log(FirstNum / SecondNum);
//         break;
// }