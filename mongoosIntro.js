//ODM Mongoose
const mongoose = require('mongoose');

// mongoose
//   .connect('mongodb://localhost:27017/new_db')
//   .then(() => console.log(`Connection to DB OK`))
//   .catch((error) => console.log(error));

(async function () {
  try {
    //Connectiom
    await mongoose.connect('mongodb://localhost:27017/new_db');
    console.log(`Connection to DB OK`);

    //Model
    const taskSchema = new mongoose.Schema({ value: String });
    const Task = mongoose.model('Task', taskSchema);

    //CRUD
    //create
    // const newTask = {value: "To become Fullstacer"}
    // const createdTask = await Task.create(newTask)
    // console.log(createdTask)

    //find...
    // const findTask = await Task.find()
    // console.log(findTask)

    // const findTaskById = await Task.findById('68c065344f813a52c4b7dc1e');
    // console.log(findTaskById);

    //Update
    // const updatedTask = await Task.findByIdAndUpdate(
    //   '68c065344f813a52c4b7dc1e',
    //   { value: 'Go to Itali' },
    //   { new: true }
    // );
    // console.log(updatedTask);

    //DELETE
//     const deletedTask = await Task.findByIdAndDelete(
//       '68c063716a28b41ac2210a52'
//     );
//    console.log(deletedTask);

  } catch (error) {
    console.log(error);
  }
})();
