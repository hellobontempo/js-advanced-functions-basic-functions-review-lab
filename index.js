// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*"){
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = { 
    add: function(num1, num2){
        return num1+num2
    },
    subtract: function(num1, num2){
        return num1-num2
    },
    multiply: function(num1, num2){
        return num1*num2
    },
    
    divide: function(num1, num2){
        return num1/num2
    }
    
}

function actionApplyer(num, functions) {
    if (functions.length === 0){
        return num
    } else {
        let i = 0
        while (i < functions.length) {
        num = functions[i](num)
        // let action = functions[i]
        // num = action(num)
        i++
        }
    return num
    }
}

//using for
// for (let i = 0; i < functions.length; i++)
// num = functions[i](num)