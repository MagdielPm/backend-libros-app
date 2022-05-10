import Book from "../models/book.model";

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
      data: { error },
    });
  }
}
