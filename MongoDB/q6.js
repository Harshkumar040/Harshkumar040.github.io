db.employees.find(
    {salary:{$gt:3000}},
    {name:1}
).limit(2).skip(1)

db.employees.find(
    {$or:[{salary:{$gt:3000}, department:"IT"}]},
    {name:1}
)

db.employees.countDocuments()

db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {$project:{name:1,salary:1}}
])

db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {$project:{name:1,salary:1}},
    {$sort:{name:1}},
])

db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {$project:{name:1,salary:1}},
    {$sort:{name:1}},
    {$limit: 1},
]);

db.employees.aggregate([
    {$match:{salary:{$gt:1000}}},
    {$project:{name:1,salary:1, department:1}},
    {$sort:{name:1}},
    {$limit: 1},
]);

db.employees.updateMany(
    {},
    {$addToSet:{location:"FL"}}
);

db.employees.aggregate([
    {$project: {_id: 0, name: 1, location: 1}},
    {$unwind:"$location"}
])


db.employees.aggregate([
    {$project: {_id: 0, EmpName: "$name"}},
]);

db.employees.aggregate([
    {$project: {_id: 0, name: 1, salary:1,
        bonus:{$multiply:["$salary", 2]}

    }},
]);

db.employees.aggregate([
    {$project: {name:0 }},
]);

db.employees.aggregate([
    {$group:{
        _id:"$department",
        total:{$sum: "$salary"}}},
]);

db.orders.insertOne(
    {
    empId:ObjectId("685bbf5cb9454af5559f990c"),
    orderValue:5000
    }
)

db.orders.insertOne(
    {
    empId:ObjectId("685bbf5cb9454af5559f990c"),
    orderValue:5000
    }
)

db.orders.insertOne(
    {
    empId:ObjectId("685bbf5cb9454af5559f990d"),
    orderValue:5000
    }
)

db.orders.insertOne(
    {
    empId:ObjectId("685bc9ddb9454af5559f990e"),
    orderValue:5000
    }
)

db.orders.insertOne(
    {
    empId:ObjectId("685bc9ddb9454af5559f990f"),
    orderValue:5000
    }
)



db.employees.aggregate([
      {$match:{salary: {$gt:1000 }}},
  {
    $lookup: {
    from: "orders",           
    localField: "_id",        
    foreignField: "empId",   
    as: "orders"              
    },
  },
  {$unwind:"$orders"},
  {$project:{name:1, salary:1, "orders.orderValue":1}},
  {$match:{salary: {$gt:1000 }}},
])


db.employees.insertMany([
  { _id: ObjectId("685bbf5cb9454af5559f9901"), name: "Alice" },
  { _id: ObjectId("685bbf5cb9454af5559f9902"), name: "Bob" },
  { _id: ObjectId("685bbf5cb9454af5559f9903"), name: "Charlie" },
  { _id: ObjectId("685bbf5cb9454af5559f9904"), name: "David" },
  { _id: ObjectId("685bbf5cb9454af5559f9905"), name: "Eva" }
])

db.countries.insertMany([
  {
    empId:ObjectId("685bbf5cb9454af5559f990c"),
    country:"Japan" },
  {
    empId:ObjectId("685bbf5cb9454af5559f990d"),
    country:"Russia"},
  {
    empId:ObjectId("685bc9ddb9454af5559f990e"),
    country:"Italy"},
  {
    empId:ObjectId("685bc9ddb9454af5559f990f"),
    country:"U.A.E"},
  {
    empId:ObjectId("685bc9ddb9454af5559f9910"),
    country:"Korea"
  }
])

db.employees.aggregate([{
    $lookup:{from:"countries",
        localField: "_id", 
        foreignField: "empId", 
        as: "countryInfo"
    }},
  { $unwind:"$countryInfo"},
  {
    $lookup: { from: "orders",
        localField: "_id",
      foreignField: "empId",
      as: "orders"
    }},
  { $unwind:"$orders"},
  {
    $project: {
      _id: 0,name: 1,
      country: "$countryInfo.country",
      orderValue: "$orders.orderValue"
    }}
])

db.employees.createIndex({"email": 1})

db.employees.dropIndex("email_1")

db.employees.find({email:"john@gmail.com"}).explain("executionStats")


db.employees.aggregate([
    {$group:{_id:{country:"$country", name:"$name"},
    total:{$sum:"$score"}}}
])






