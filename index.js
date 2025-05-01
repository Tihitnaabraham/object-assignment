//1
//constructur function  for our next new bank account object
//creat diposite  method to add money to current balance
// creat withdraw method for successful and unsuccessfull log


function BankAccount(name,balance){
    this.name=name;
    this.balance=balance;
    this.diposite=function(money){
        console.log(`${this.name} diposited$${money} new balance $${this.balance}`)
    }
    this.withdraw=function(money){
        if(money>this.balance){
            console.log(`${this.name}tried unsuccessfull withdraw of $${money}`)
        }
        else {
            console.log(`${this.name} withdrew $${money}`)
        }
    }
};
const firstuser=new BankAccount("Titi,45000000")
const seconduser=new BankAccount("Beki",200)
const thirsuser=new BankAccount("Beza",500)
firstuser.diposite(50000)
firstuser.withdraw(200)
seconduser.diposite(400)
seconduser.withdraw(5200)
thirsuser.diposite(100)
thirsuser.diposite(400)

//2


const listOfTask={
    tasks:[],
    addTask:function(task){
        this.tasks.push(task)
        console.log(`added task${task}`)
    },
    finishedTask:function(task){
        const index=this.tasks.indexOf(task)
        if(index !==-1){
             this.tasks.splice(index,1);
             console.log(`finished task ${task}`)}
             else{
                console.log(`${task} unknown`)
             
        }
    },
    listTasks:function(task){
        if (this.tasks.length==0){
            console.log("All are completed")
        }
        else{
        
                console.log(`remaining task${task}`)
            }
        }

    }
    listOfTask.addTask("doing js assignment")
    listOfTask.addTask("reading python")
    listOfTask.addTask("cleaning room")
    listOfTask.addTask("replay email")

    listOfTask.finishedTask()
    listOfTask.finishedTask("reading python")
    listOfTask.finishedTask("claning room")
    listOfTask.finishedTask()

    listOfTask.listTasks([])
    listOfTask.listTasks("reading python")

    //3
    const scors=[
        {name:"Jani",score:[30,90,89,70]},
        {name:"max",score:[60,45,67,89]},
    ];
const getAvarage=(Scors)=>{
    let sum=0
    
    for(let i=0;i<scors.length;i++){
        let allsum=sum+scors[i]
        let ava=allsum/scors.length
    }
    return
       }
console.log((getAvarage(scors)));
// const firststudent=new Student("Tihitna",[80,79,45])
//     const secondstudent=new Student("Beki"[56,89,89])

//4
class ShoppingCart {

    constructor() {
    
    this.items = [];
    
    }
    
    addItem(item) {
    
    this.items.push(item); }
    
    getTotal() {
    
    let total = 0;
    
    for (let i=0; i < this.items.length; i++) {
    
    total += this.items[i].price;
    
    }
  return total}
}
const cart = new ShoppingCart();

cart.addItem({ name: "Shirt", price: 25 });

cart.addItem({ name: "Pants", price: 50});

cart.addItem({ name: "Shoes", price: 75});

console.log("Total:", cart.getTotal()); 
//5

function Movie(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.isClassic = function(){
            return this.year<2000;
        };
        this.recommend =function(){
            if(this.rating > 8){
                return "Highly recommended!";
            }
            else{
                return "Consider other options";
            }
        };
    }
    const movie1 = new Movie("The Godfather",1972, 9.2);
    const movie2 = new Movie("Broken", 2002, 9);
    const movie3 = new Movie("The Intouchables", 1997, 7.5);
    console.log(`"${movie1.title}" is classic movie: ${movie1.isClassic()}`);
    console.log(`Recommendation: ${movie1.recommend()}`);





