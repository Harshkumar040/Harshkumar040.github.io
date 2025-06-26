db.employees.find()

db.employees.find().skip(1)

db.employees.find().limit(1)

db.employees.find().skip(1).limit(1)

db.employees.find({department:"IT"})

db.employees.find({department:"IT"},{_id:0,name:1})

db.employees.find({department:"IT"},{_id:0,name:1,salary:1})

db.employees.find(
    {department:{$eq:"IT"}},
    {_id:0, name:1, salary:1}
)

db.employees.find(
    {salary:{$gt:1500}},
    {_id:0, name:1, salary:1}
)

db.employees.find(
    {salary:{$gte:1000}},
    {_id:0, name:1, salary:1}
)

db.employees.find(
    {salary:{$lt:1500}},
    {_id:0, name:1, salary:1}
)

db.employees.find(
    {salary:{$lte:3000}, department:"IT"},
    {_id:0, name:1, salary:1}
)

db.employees.find(
    {$or: [{salary:{$lte:3000}, department:"IT"}] },
    {_id:0, name:1, salary:1}
);

db.employees.find(
    {$or:[{},{}]}
)

db.employees.find(
    {$and:[{},{}]}
)

db.employees.find({department:{$eq:"IT"}})

db.employees.find({department:{$ne:"IT"}})