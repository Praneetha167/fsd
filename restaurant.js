const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
  res.send(`
    <h2>Select Restaurant</h2>
    <form action="/menu" method="POST">
      <input type="radio" name="rest" value="Fast Bites" required> Fast Bites<br>
      <input type="radio" name="rest" value="Italiano"> Italiano<br>
      <input type="radio" name="rest" value="Healthy Eats"> Healthy Eats<br><br>
      <button type="submit">View Menu</button>
    </form>
  `);
});

// Menu Page
app.post("/menu", (req, res) => {
  const rest = req.body.rest;

  res.send(`
    <h2>${rest} Menu</h2>
    <form action="/order" method="POST">
      Burger (₹100): <input type="number" name="burger" value="0" min="0"><br><br>
      Pizza (₹250): <input type="number" name="pizza" value="0" min="0"><br><br>
      <input type="hidden" name="rest" value="${rest}">
      <button type="submit">Place Order</button>
    </form>
  `);
});

// Order Page
app.post("/order", (req, res) => {
  const burger = parseInt(req.body.burger);
  const pizza = parseInt(req.body.pizza);

  const total = burger * 100 + pizza * 250;

  res.send(`
    <h2>Order Summary</h2>
    Burger: ${burger}<br>
    Pizza: ${pizza}<br><br>
    <h3>Total = ₹${total}</h3>
    <a href="/">Back</a>
  `);
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
