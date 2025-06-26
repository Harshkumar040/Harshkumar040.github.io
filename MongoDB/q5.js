db.employees.updateOne({email:"mike@gmail.com"},{$set:{salary:3000}})

db.employees.updateOne({email:"mike@gmail.com"},{$set:{name:"Mike Joseph"}})

db.employees.updateMany(
    {},
    {$set:{points:1}}
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:3}}
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:-1}}
)

db.employees.updateOne(
    { email: "Krish@gmail.com" },
    { $set: { name: "Krish", department: "HR", salary: 5000 } },
    { upsert: true }
);


db.employees.deleteOne({email: "Krish@gmail.com"});

db.employees.deleteMany({department: "Admin"})

db.employees.find().sort({name:1})

db.employees.find().sort({name:-1})

db.employees.find().sort({salary:-1}).limit(1)

db.employees.find().sort({salary:-1}).limit(3)

db.employees.find({},{_id:0, Empname:"$name"})

db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
)

db.employees.updateMany(
    {},
    {$unset:{score:""}}
)

db.employees.find({},{name:1,location:1})

db.employees.updateMany(
    {},
    {$push:{location:5}}
)

db.employees.updateMany(
    {},
    {$push:{points:5}}
)

db.employees.updateMany(
    {},
    {$push:{points:3}}
)

db.employees.updateMany(
    {department:"IT"},
    {$push:{points:7}}
)

db.employees.updateMany(
    {department:"IT"},
    {$pull:{points:{$gt:3}}}
)

db.employees.updateMany(
    {},
    {$pull:{points:{$gt:3}}}
)

db.employees.updateMany(
    {},
    {$addToSet:{location:'LA'}}
)


//pop not working 
db.employees.updateMany(
    {},
    {$pop:{location:'1'}}
)






