"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 10,
            text: "Boiled eggs are eggs, typically from a chicken, cooked with their shells unbroken, usually by immersion in boiling wate.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "Ramen noodles are similar to udon noodles, another wheat-based Japanese noodle with a chewy, springy texture.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Chicken is one of the most popular and versatile proteins in the world. It can be prepared in countless ways, from fried to roasted, from curried to grilled, and from spicy to sweet.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Cake is a flour confection made from flour, sugar, and other ingredients and is usually baked.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "This Burger Recipe covers everything needed to make delightful veggie burgers from scratch, including how to prepare delicious homemade vegetable patties.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Pancakes are thin, flat, round bread-like delights especially eaten during breakfast or evening as tea time snacks.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map