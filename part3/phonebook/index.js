import express from "express";
const app = express();

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  return res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const personFinded = persons.find((p) => p.id === Number(id));
  res.status(200).json(personFinded)
});

app.get("/info", (req, res) => {
  const responseInfo = `<p>Phonebook has info for 2 people </p> <p>${new Date()}</p>`;
  res.send(responseInfo);
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
