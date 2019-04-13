const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryNames = ['clothes', 'toys', 'shoes', 'home', 'outdoor', 'accessories', 'books', 'other'];

const categorySchema = new Schema({
    name: {
        type: Schema.Types.String,
        enum: ['clothes', 'toys', 'shoes', 'home', 'outdoor', 'accessories', 'books', 'other'],
        default: 'info'
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
});


const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
module.exports.seedCategory = () => {
    Category.find({}).then(categories => {
        if (categories.length > 0) return

        Category.create({
            name: 'clothes',
            posts: []
        })
        Category.create({
            name: 'toys',
            posts: []
        })
        Category.create({
            name: 'shoes',
            posts: []
        })
        Category.create({
            name: 'home',
            posts: []
        })
        Category.create({
            name: 'outdoor',
            posts: []
        })
        Category.create({
            name: 'accessories',
            posts: []
        })
        Category.create({
            name: 'books',
            posts: []
        })
        Category.create({
            name: 'other',
            posts: []
        })
    })
}