const employees = [
    {
        name: "john",
        tasks: [
            { task: "task1", completed: true },
            { task: "task2", completed: false }
        ]
    },
    {
        name: "jane",
        tasks: [
            { task: "task1", completed: true },
            { task: "task2", completed: true }
        ]
    }
];

// count completed tasks per employee
const result1 =   employees.map(emp =>{
    const name = emp.name;
   const  completedtasks = emp.tasks.filter(task => task.completed).length;
    return {
        name :name,
        completedtasks : completedtasks
    };

})
console.log(result1);

// find employee with highest completion rate
const result2 = employees.map(emp => {
    const totalTasks = emp.tasks.length;

    const completedTasks = emp.tasks.filter(task => task.completed).length;

    const completionRate = completedTasks / totalTasks;

    return {
        name: emp.name,
        completionRate: completionRate
    };
});


const highest = result2.reduce((max, emp) => {
    return emp.completionRate > max.completionRate ? emp : max;
});

console.log(highest);



//Add a new task to all employee
const newtask = employees.map(emp => {
    return {
        name: emp.name,
        tasks: [...emp.tasks, { task: "task3", completed: false }]
    };
});
console.log(JSON.stringify(newtask, null, 2));


// print employees who complted all tasks 
const allcomplete = employees.filter(emp => {
    return emp.tasks.every(task => task.completed);
});
console.log(JSON.stringify(allcomplete, null, 2));





// Assignment 2 - Order management system
const orders = [
  {
    id: 1,
    customer: "Amitt",
    items: [
      { name: "phone", price: 20000 },
      { name: "charger", price: 1000 }
    ]
  },
  {
    id: 2,
    customer: "Neha",
    items: [
      { name: "laptop", price: 50000 }
    ]
  }
];

   // calculate total value per order
const orderresult = orders.map(order => ({
  id: order.id,
  customer: order.customer,
  totalValue: order.items.reduce((sum, item) => sum + item.price, 0)
}));

console.log(orderresult);
   
   




