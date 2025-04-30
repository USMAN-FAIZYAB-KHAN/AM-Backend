export const getProducts = (req, res) => {
    res.json([{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }]);
  };
  
  export const createProduct = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    res.status(201).json({ id: Date.now(), name });
  };
  