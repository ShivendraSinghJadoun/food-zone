import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "A simple and healthy breakfast option packed with protein.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "A flavorful bowl of noodles in a rich, savory broth perfect for lunch.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Juicy, perfectly grilled chicken seasoned to perfection for a hearty dinner.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "A sweet and fluffy cake to start your day on a delightful note.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "A classic burger with a juicy patty and fresh toppings, ideal for lunch.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Fluffy pancakes served with syrup, perfect for a satisfying dinner.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];
  console.log(foodData);
  res.json(foodData);
  
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
