export const getUsers = (req, res) => {
    res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
  };
  
  export const createUser = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    res.status(201).json({ id: Date.now(), name });
  };
  