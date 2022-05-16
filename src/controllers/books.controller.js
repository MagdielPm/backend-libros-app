import Book from "../models/book.model";

//Create new book with POST
export async function createNewBook(req, res) {
  const { id, image, title, author, price, description, isbn } = req.body;
  try {
    let newBook = await Book.create(
      {
        id: id,
        image: image,
        title: title,
        author: author,
        price: price,
        description: description,
        isbn: isbn,
      },
      {
        fields: [
          "id",
          "image",
          "title",
          "author",
          "price",
          "description",
          "isbn",
        ],
      }
    );

    if (!!newBook) {
      return res.status(201).json({
        message: "Book created successfully",
        data: newBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while creating a book",
      data: error,
    });
  }
}

//Get all books with GET
export async function getAllBooks(req, res) {
  try {
    const books = await Book.findAll();

    if (!!books) {
      res.status(200).json({
        message: "All books fetched successfully",
        data: books,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching users",
      data: error,
    });
  }
}

//Get an book by id with GET
export async function getBookById(req, res) {
  try {
    const { id } = req.params;
    const book = await Book.findOne({
      where: {
        id: id,
      },
    });

    if (!!book) {
      res.status(200).json({
        message: "Book fetched successfully",
        data: book,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching an employee",
      data: error,
    });
  }
}

//Delete an Employee by id with DELETE
export async function deleteBookById(req, res) {
  try {
    const { id } = req.params;
    const book = await Book.destroy({
      where: {
        id: id,
      },
    });

    if (!!book) {
      res.status(200).json({
        message: "Book deleted successfully",
        data: book,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while deleting an employee",
      data: error,
    });
  }
}

//Update a Book by id with PUT
export async function updateABook(req, res) {
  const { id } = req.params;
  const { image, title, author, price, description, isbn } = req.body;
  try {
    let books = await Book.findAll({
      attributes: ["image", "title", "author", "price", "description", "isbn"],
      where: {
        id: id,
      },
    });

    if (!!books) {
      books.forEach(async (book) => {
        await book.update({
          id: id,
          image: image,
          title: title,
          author: author,
          price: price,
          description: description,
          isbn: isbn,
        });
      });
    }

    return res.status(201).json({
      message: "Book updated successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while updating an employee",
      data: error,
    });
  }
}
