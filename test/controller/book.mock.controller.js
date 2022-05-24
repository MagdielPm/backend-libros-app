export async function getAllBooks(req, res) {
  const book = {
    id: 1,
    image: "example.com",
    title: "example",
    author: "Jhon Example",
    price: 20,
    description: "Lorem ipsum",
    isbn: 12345,
  };
  return res.status(201).json({ data: book });
}
