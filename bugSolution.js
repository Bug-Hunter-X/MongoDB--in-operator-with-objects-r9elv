```javascript
// Correct usage using $elemMatch operator
db.collection.find({ field: { $elemMatch: { a: { $in: [1, 2] } } } });
//Alternative solution using $or
db.collection.find({$or:[{field: {a:1}}, {field: {a:2}}]})
```