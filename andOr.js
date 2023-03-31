db.things.find({
    $and: [
        {
            $or: [
                {"first_name": "john"},
                {"last_name": "john"}
            ]
        },
        {
            "Phone": "12345678"
        }
    ]
})