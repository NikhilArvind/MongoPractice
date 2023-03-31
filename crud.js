// To Add one entry 

db.user.insertOne({
    name : "Nikhil",
    age : 24,
    status : "present"
})

// To add multiple entry

db.students.insertMany([
    {
        name : "Nikhil",
        age : 25,
        status : "present"
    },
    {
        name : "Arvind",
        age : 26,
        status : "absent"
    }
])


//To display the db

db.user.find()
db.students.find()


//To update one value 

db.user.updateOne({name : "Nikhil"},{$set : {age:25}})

db.user.find()



//To delete one entry
db.students.deleteOne({name : "Arvind"})

db.students.find()