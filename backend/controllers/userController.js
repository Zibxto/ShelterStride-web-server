const db = require('../models');

// Get Models
const User = db.users

// Add CRUD controller functions
// async function getBooks(req, res, next) {
//     try {
//         const books = await Book.findAll()
//         res.json(books)
//     } catch (err) {
//         next(err)
//     }
// }

// async function getBookById(req, res, next) {
//     try {
//         const book = await Book.findByPk(req.params.id)
//         res.json(book)
//     } catch (err) {
//         next(err)
//     }
// }

async function addUser(req, res, next) {
    let userInfo = req.body;
    try {
        const user = await User.create(userInfo);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }

}

// async function updateBook(req, res, next) {
//     try {
//         const book = await Book.findByPk(req.params.id);
//         if (book) {
//             await book.update(req.body);
//             res.json(book);
//         } else {
//             res.status(404).json({
//                 message: 'Book not found'
//             });
//         }
//     } catch (error) {
//         next(error);
//     }
// }

// async function deleteBook(req, res, next) {
//     try {
//         const book = await Book.findByPk(req.params.id);
//         if (book) {
//             await book.destroy();
//             res.json(book);
//         } else {
//             res.status(404).json({
//                 message: 'Book not found'
//             });
//         }
//     } catch (error) {
//         next(error);
//     }
// }


module.exports = {
    addUser,
    // getBooks,
    // getBookById,
    // updateBook,
    // deleteBook
}