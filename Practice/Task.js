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
const result = employees.map(emp => {
    const completedcount = emp.tasks.filter(task => task.completed).length;
    return {
        name: emp.name,
        completedtasks: completedcount
    };
});

console.log(result);

// find employee with highest completion rate
const highestrate = employees.reduce((highest, emp) => {
    const totaltasks = emp.tasks.length;
    const completedtasks = emp.tasks.filter(task => task.completed).length;
    const completionrate = completedtasks / totaltasks;

    if (completionrate > highest.rate) {
        return {
            name: emp.name,
            rate: completionrate
        };
    }

    return highest;
}, { name: "", rate: 0 });

console.log(highestrate);