// var myArray = ["lior","david","yossi","eldad","taka"]
// console.log(myArray[3])
// for(var i=0; i>myArray.length;i++){

// }
// console.log(myArray[i]);
// console.log(myArray)



// var numArray = [500,400,300,200,600,423,711]
// console.log(numArray[4])
// console.log(numArray)


// הדפיסו רק את המילים

// function printOnlyTheWords(myArray){
//     for(var i = 0 ; i<myArray.length ; i++){
//         if(myArray[i] *1 != myArray[i]){
//             console.log(myArray[i])}
//         }

// }
// printOnlyTheWords(["hello",2,"world","jacob",6,7,"bye",98]);






// צרו פונקציה המקבלת מספר שלם חיובי num כארגומנט ומחשבת את הסכום 1+2+···+num ומחזירה אותו בעזרת return.
// בדוק באמצעות קריאה מהדף והדפסת הערך המוחזר. לדוגמא עבור ארגומנט של 4 היא תחזיר 1+2+3+4 (10)        
// function printSumOfNumbers(num){
//     var sum = 1
// for(var i = 0 ; i<=num; i++){
//     if(i<=num){
//         sum+=num
//         num--
//     }
// }
// return sum
// }
// printSumOfNumbers(4);
        
        





 
        
        // פונקציית push
        
        // var someaArray = [];
        // someaArray.push(9);
        // someaArray.push(2);
        // console.log(someaArray)
        
        

         // ליצור מערך חדש עם מספרים מ0-50 ולהדפיס לקונסול 
        // להדפיס לקונסול רק את המספרים הזוגיים
        // var numArray = [2,4,3,11,34,43,24,12,31,15]            // console.log(numArray)
        // for(var i = 0; i<numArray.length; i++){
        //    if(numArray[i]%2==0){
        //         console.log(numArray[i])
        //      }
        //  }

            // ------------------------------------------------------------
            // ------------------------------------------------------------
            // -------------------------HOMEWORKS-----------------------


// הגדירו מערך עם המספרים 5,3,7,8,11 חשבו את סכום האיברים הממוצע והדפס לקונסול
// יש לבצע באמצעות לולאה על המערך

// function printTheSumAndAvg(){
//     var myArray = [7,12,3,22,92,85,44]
//     var sum = 0
//     for(var i = 0 ; i<myArray.length ; i++){
//         sum+=myArray[i]
//         var avg = myArray[i]/7
//     }
//     console.log(sum,avg)
// }
// printTheSumAndAvg();



// הגדירו מערך עם חמישה שמות . הדפיסו את השמות בכל שורה בלוג

// function somNam(){
    // var someNames = ["lior","david","natan","eldad","yaso"]
    // console.log(someNames);
    // for(var i = 0 ; i<someNames.length; i++){
    //     console.log(someNames[i])
    // }
// }
// somName();





// כתבו פונקציה המקבלת מערך מספרים שלמים ומספר שלם כראגומנטים
// הפונקציה בודקת אם המספר מופיע במערך , אם כן יוחזר true אחרת יוחסר false


// function myArray(num,array){
//     var save = 0
//     for(var i = 0 ; i < array.length ; i++ ){
//         if(array[i]%2==0){
//         save++
//         }
//     }
//     console.log(save,num)
// }
// myArray(5,[2,6,0,7]);





// כתבו פונקציה המקבלת מערך מספרים שלמים ומספר שלם כראגומנטים
// הפונקציה בודקת אם המספר מופיע במערך , אם כן יוחזר true אחרת יוחסר false


// function someArray(some1,some2){
// for(var i = 0 ; i < some2.length ;i++){
//     if(some1==some2[i]){
//         return true
//     }
//     return false
// }

// }
// console.log(someArray(4,[5,2,7,8]));




// כתבו פונקציה המקבלת מערך ומחזירה את מספר האיברים במערך שהם זוגיים

// function myArray(num2){
//     var numbers = []
// for(var i = 0 ; i<num2.length ; i++){
//     if(num2[i]%2==0){
//         console.log(num2[i])
        
//     }
// }

// }
// myArray([5,6,11,4,3,2]);



// כתבו פונקציה המקבלת שני מערכים של מספרים , ומעתיקה איברים ממערך אחד לשני רק אם המערכים בעלי
// אותו אורך.החזירו true אם התבצעה העתקה וfalse אם לא

// function newArray(array,array1){
// if(array.length==array1.length){
//     return console.log(true)
// }
// return console.log(false)
// }
// newArray([1,3,2,2,7,6,5],[4,6,2,3,9,8,7])




// כתבו פונקציה המקבלת מערך של מספרים ומחזירה את המספר המקסימלי
// function ReturnMaxNumber(myArray){
//     var max = 0
// for(var i = 0;i<myArray.length;i++){

// if(myArray[i]>=max)
// max = myArray[i]

// }
// return max
// }
// console.log(ReturnMaxNumber([25,27,29,345,5,234,21]));


// כתבו פונקציה שמקבלת מערך של מספרים ומחזירה את האינדקס של המספר המינימלי

// function ReturnTheIndexOfMinNumber(arrayList){
// var min = arrayList[0]
// var index = 0
// for(var i = 0 ; i <arrayList.length; i++){
//     if(arrayList[i]<=min){
//         min = arrayList[i]
//         index=[i]
//     }
// }
// return index ;

// }
// console.log(ReturnTheIndexOfMinNumber([44,4,2,1,0,9,77,]));





// כתבו פונקציה המקבלת מערך של מספרים ומחזירה את סכום האיברים במערך

// function someArray(array){
// var sum = 0;
// for(var i = 0 ; i<array.length;i++){
//    sum+=array[i]
// }
// return sum
// }
// someArray([1,4,3,1]);




// כתבו פונקציה המקבלת מערך של מספרים ומחזירה את המספר המקסימלי בו כפול המספר המינימלי.

// function maxArray(myArray){
// var max = 0
// var min = myArray[0]
// for(var i = 0 ; i<myArray.length ; i++){
//     if(max<myArray[i]){
//         max = myArray[i];
//     }
//     if(min>myArray[i]){
//         min = myArray[i]
//     }
// }

// return min*max

// }
// maxArray([3,12,11,15,1]);








// מערכים	כתבו פונקציה המקבלת מערך של מספרים ומדפיסה את האינדקס של המספר הזוגי הגבוה ביותר ואת האיבר עצמו.	
// function printTheZugNumberAndIndex (array){
// var zug = 0
// var index = 0
// for(var i = 0 ; i<array.length;i++){
//     if(array[i]%2==0){
//     zug = array[i]
//     index=i
// }
// }
// console.log(zug,index)
// }

// printTheZugNumberAndIndex([12,5,183,123])



// מערכים	כתבו פונקציה המקבלת מערך של מספרים ומחזירה את סכום האיברים האי-זוגיים במערך.	

// function arrayNums(array){
//     var sum = 0
//     for(var i = 0 ; i<array.length ; i++){
//         if(array[i]%2==1){
//           sum += array[i] 
//         }
//     }
//     return sum
// }
// console.log(arrayNums([2,3,7,9,11,2,5,4]))





// מערכים	כתבו פונקציה המקבלת מערך של שמות ושם בודד, ומחזירה מערך הכולל את השם בסוף.	


// function namsArray(arrayName1,arrayName2){
// arrayName2.push(arrayName1);
// return arrayName2
// }

// console.log(namsArray("lior",["david","natan","eldad","daniel"]))




//  צרו פונקציה המקבלת מערך של מספרים ומספר בודד במידה והמסםר קיים היא מסירה אותו ואם לא היא מוספיה אותו
    

function printIfTheNumberExist(myArray,number){
    // var arrayLength = myArray.length
for(var i = 0 ; i < myArray.length ; i++){
    if(myArray[i]==number){
        myArray.splice(i,1);
        i--
    }
}
if(!myArray.includes(number)){
    myArray.push(number)
}
}
console.log(printIfTheNumberExist([3,22,45,11,32],22));




// צרו פונקציה המקבלת שם,אם השם מורכב ממילה אחת החזירו את השם כך שהאות הראשונה
// היא גדולה והשאר קטנות,אם השם מורכב מ2 מילים החזירו מערך של 2 מילים
// אם השם מורכב מ3 מילים הדפיסו את המידע בצורה יפה
// כאשר המילה הראשונה היא שם פרטי,שנייה היא שם אמצעי ומילה אחרונה היא שם משפחה


// function returnTheBiggestName(someName){
//     var spaceCounter = 0
// for(var i = 0 ; i<someName.length ; i++){
//     if(!someName[i] == " "){
//         spaceCounter++     
//     }
// }
//     if(spaceCounter == 0){
//           if(spaceCounter == 1){
//         return "two words"
//       }
//       else if(spaceCounter == 2){
//         return "three words"
//       }
//     }
 
// }
// console.log(returnTheBiggestName());


// function printTheSum(number){


// }
// printTheSum(4)


