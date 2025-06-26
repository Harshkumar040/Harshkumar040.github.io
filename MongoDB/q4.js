db.employees.insertMany([
    {
        name: "Amy",
        email: "amy@gmail.com",
        department: "HR",
        salary: 2000,
        location: ["NY", "TX"],
        date: Date(),
    },
    {
        name: "Rafeal",
        email: "rafeal@gmail.com",
        department: "admin",
        salary: 1500,
        location: ["OH", "TX"],
        date: Date(),
    }
]);


//command
db.employees.find({department: {$in:["admin", "HR"] }});

//command
db.employees.find({department: {$nin:["admin", "HR"] }});