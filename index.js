


// PSEUDOCODE

// 1. create a class called CustomerOrder with properties orderId,items and status
// 2. Use this keyword to declare the prpoerties
// 3. create a method called calculate Total inside the class
// 4. Inside the calculateTotal, create a varaible totalPrice with an initial value of 0
// 5. Loop through items multiplying quantity with price and adding the value to the total price
// 6. Return total price
// 7. Create an asnyc function inside your class and call it processPayment.
// 8. Use a promise to simulate payment, ryour promise should resolve and update the payment status to paid
// 9. create a variable order1 that takes in objects form class CustomerOrder
// 10. Call themethods in your class on  order1 




class CustomerOrder{
    constructor(orderId,items,status){
        this.orderId = orderId
        this.items = items
        this.status = status
    }

    calculateTotal = function(){
      let   totalprice = 0
    for ( let item of  this.items){
         totalprice +=(item.quantity * item.price )
    }
console.log(totalprice)
};



async processPayment() {
   await  new Promise((resolve)=>{
        return setTimeout(()=>{
          resolve("Payment successful!")
          this.status = "paid"
          console.log("Payment successful. Your order is being processed!")

        },2000)
    })
    
}}

   



const order1 = new CustomerOrder("456t", [{name:"tomatoes",quantity:30,price:60},{name:"eggs",quantity:12,price:15},{name:"mangoes",quantity:10,price:30}],"processed")


order1.calculateTotal()
order1.processPayment()

//PSEUDOCODE


// 1.Create a class called TeamMember object with properties name,role and list of tasks
// 2. Create a function prototype called  completeTask that  takes taskTitle
// 3.loop through tasks and Check if  taskTitle exist in the given array
// 4. If found assign completed status to true
// 5. create a function prototype called checkProgress that returns a promise
// 6.Check if every task in the tasks arrray is complete,if completed,resolve with "All tasks completed",if not reject with"Pending tasks remaining"







 class TeamMember {
    constructor(name,role,tasks){
      this.name = name
      this.role =role
      this.tasks = tasks
    }
}

TeamMember.prototype.completeTask = function (taskTitle){

     for ( let item of this.tasks){
        if(item.title === taskTitle)
        item.completed= true
        console.log(`${taskTitle} task: has been completed.`)
     }
  
}

TeamMember.prototype.checkProgress = function (){
    return new Promise ((resolve,reject)=>{
         let incompleteTasks = this.tasks.filter(task =>!task.completed)
          if(incompleteTasks.length===0){
            resolve("All tasks completed")
          }else{
            reject("Pending tasks remaining")
          }
           
    })
    .then(complete =>console.log(complete))
    .catch(error =>console.log(error))



    
}
let teamMember1 = new TeamMember("Arsema", "UX designer", [{title: "Design home page", completed: false}, {title: "Do the wireframes", completed: true}])
teamMember1.completeTask("Design home page")
teamMember1.checkProgress()
// Build a Candidate class with properties: name, position, 
// and interviews (array of objects with date, status). 
// Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async 
// function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.


//PSEUDOCODE

// 1.Create a class called candidate with properties name and position
// 2.Create a method called scheduleInterview that takes in date
// 3.Create a variable newInterview that hold an object with status pending and interviewDtae the date passed in the parameter
// 3.Push newInterview  to interview list 
// 6.Then resolve Confirmation with 1 second delay

class Candidate {
    constructor(name,position,interviews){
        this.name = name
        this.position = position
        this.interviews = interviews
    }
    scheduleInterview(date){

        let newInterview ={
            status:"pending",
            interviewDate:date
        }

        this.interviews.push(newInterview)
    }

    async sendConfirmation(){
        await new Promise((resolve)=>{
            return setTimeout(()=>{
               resolve(`Interview confirmed with ${this.name}`)
               console.log(`Interview confirmed with ${this.name}`)
            },1000)
        })
    }
}

const interviews = new Candidate ("Moraa Kembo","Manager",[{interviewDate:"2025-06-20",status:"confirmed"},{interviewDate:"2025-06-23",status:"confirmed"}])
interviews.scheduleInterview("2025-06-23")
interviews.sendConfirmation()




//Design a Course class with properties: 
// title, instructor, and students (array of student objects with name and progress).
//  Add a method updateProgress(studentName, value) that modifies the student’s progress.
//  Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, 
// otherwise reject with "Incomplete progress".


// PSEUDOCODE

// 1. create a course class with properties title, instructor, and students (array of student objects with name and progress)
// 2. use this keyword to declare the properties
// 3.create a method called updateProgress inside the class. The method takes in  studentName, value
// 4.loop through students and if student.name is equal to the parameter studentNamre that was passed the replace the progress of the item with the value parameter passed
// 5.create an async methods inside the class that takes in a studentName as parameter
// 6.In the async method,initialize a new Promise 
// 7. Inside the promise, loop through the students and compare the name with the studentName passed as a parameter. If it is equal, compare the progress to 100 to see if the
// progress is strictly equal to 100, if yes resolve, if no, reject.

class Course{
    constructor(title,instructor,students){
        this.title = title
        this.instructor = instructor
        this.students = students
    }
    updateProgress(studentName,value){
        for(let item of this.students){
            if (item.name === studentName){
                item.progress = value

            } }
    }

    async generateCertificate(studentName) {
        await new Promise((resolve, reject) => {

            for (let item of this.students) {

                if (item.name === studentName && item.progress === 100) {
                    resolve("Here is your certificate")
                    console.log("Congratulations! Here is your certificate")
                } else {
                    reject("Incomplete progress")
                    console.log("Incomplete progress")
                }
            }
        });
    }
}

const course1 = new Course("Design","Mwikali",[{name:"Ann",progress:100},{name:"Jeremiah",progress:50},{name:"Lucas",progress:70}])
course1.updateProgress("Lucas",80)
course1.generateCertificate("Ann")


// Create a StockTracker class with
//  a property watchlist (array of objects with symbol, threshold, currentPrice). 
// Add a method updatePrice(symbol, newPrice) that updates the stock’s current price. 
// Write an async method checkAlerts() that loops through the watchlist and returns a Promise 
// resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".





//   PSEUDOCODE

// 1.Create class called StockTracker with properties of watchlist (array of {symbol, threshold, currentPrice})
// 3.Initialize  a method of updatePrice(symbol, newPrice) in the class
// 4.loop through the watchlist and find the symbol that is equla to the one passed in your parameter
//5. Update its currentPrice to newPrice.
// 6.Create Async function called checkAlerts()
// 7.Loop through the watchlist
//8. Collect stocks where currentPrice >= threshold
// 9.If found, resolve with their list
// 10.If none, reject with "No alerts triggered"

class StockTracker {
    constructor(watchlist){
        this.watchlist = watchlist
    }


    updatePrice(symbol,newPrice){
        for(let item of this.watchlist){
            if(item.symbol = symbol){
                item.currentPrice = newPrice
            }
        }
    }

    async checkAlerts (){
        return new Promise((resolve,reject)=>{
                    let newStock = this.watchlist.filter(item => item.currentPrice>=item.threshold)
                    if(newStock.length === 0){
                        reject("No alerts triggered")
                    }else{
                       resolve(newStock)
                    }
        })}


          
}

const stocks = new StockTracker([{symbol:"ERD",threshold:30000,currentPrice:10000},{symbol:"FRG",threshold:1000,currentPrice:10000}])
stocks.updatePrice("FRG",40000)
stocks.checkAlerts()
  .then(alerts => console.log(alerts))
    .catch(message => console.log(message));



