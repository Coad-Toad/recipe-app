import type { Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
  {
    id: "cookies",
    title: "Chocolate Chip Cookies",
    ingredients: [
      {
        name: "dairy-free butter/margarine",
        quantity: 88,
        unit: "g",
      },
      {
        name: "caster sugar",
        quantity: 120,
        unit: "g",
      },
      {
        name: "light brown sugar",
        quantity: 40,
        unit: "g",
      },
      {
        name: "vanilla extract",
        quantity: 1,
        unit: "tsp",
      },
      {
        name: "plain flour",
        quantity: 136,
        unit: "g",
      },
      {
        name: "cocoa powder",
        quantity: 24,
        unit: "g",
      },
      {
        name: "bicarbonate of soda",
        quantity: 1,
        unit: "tsp",
      },
      {
        name: "dairy-free milk",
        quantity: 1,
        unit: "tbsp",
      },
      {
        name: "dairy-free chocolate chips",
        quantity: 75,
        unit: "g",
      },
    ],
    steps: [
      {
        id: "0",
        instruction: "Pre-heat the oven to 200°C (180°C for fan ovens).",
      },

      {
        id: "1",
        instruction:
          "Put all of the ingredients in a bowl, except for the milk and the chocolate chips.",
        usesIngredients: [
          "dairy-free butter/margarine",
          "caster sugar",
          "light brown sugar",
          "vanilla extract",
          "plain flour",
          "cocoa powder",
          "bicarbonate of soda",
        ],
      },
      {
        id: "2",
        instruction:
          "Mix it. I use a stand mixer and it takes about 6-7 minutes, with some poking and prodding here and there to keep it from sticking to the sides/the mixer attachment.",
        timerMinutes: 6,
        timerLabel: "Mixing the dough",
      },
      {
        id: "3",
        instruction:
          "Once it starts to look like a bowl of crumbs, add the chocolate chips, and once they aren't all just in one place in the bowl, add a bit of milk.",
        notes: [
          {
            type: "tip",
            text: " It is very easy to overdo it, so start with a tablespoon, and if after a couple of minutes it doesn't seem to be doing much, add a bit more.",
          },
        ],
        usesIngredients: ["dairy-free chocolate chips", "dairy-free milk"],
      },
      {
        id: "4",
        instruction:
          "Once it looks like it's starting to bind it should take about another 5 minutes or so until it becomes one big dough.",
        timerMinutes: 5,
        timerLabel: "Mixing the dough",
      },
      {
        id: "5",
        instruction:
          "They should be about 45g each. Scoop out that much (with your hands!) and roll them into a ball. Place them onto some greaseproof paper on a baking tray, and squish them down. Make your fingers nice and flat when you do so that you get the shape of them on the cookie, that way they'll go a nice shape when they're done.",
        notes: [
          {
            type: "tip",
            text: "The measurements listed should make 12 cookies!",
          },
        ],
      },
      {
        id: "6",
        instruction: "Put the cookies in the oven for 9 minutes.",
        timerMinutes: 9,
        timerLabel: "Cookies in the oven",
        notes: [
          {
            type: "tip",
            text: " Press a few more dark chocolate chips or chunks on to the tops of the cookies as they come out of the oven, if you like.",
          },
          {
            type: "tip",
            text: "You'll want to let them cool for a couple of minutes before moving them to a cooling tray/rack. Once they are keeping their shape they are done! You can eat them nice and hot, but do wait until they are solid first. They are much, much better than when they're too squishy. They'll still be nice and gooey in the centre, anyway!",
          },
        ],
      },
    ],
  },
  {
    id: "creamy-garlic-chicken",
    title: "Creamy Garlic Chicken and Rice",

    ingredients: [
      { name: "basmati rice", quantity: 1, unit: " cup" },
      { name: "Vivera chicken-style fillets", quantity: 4, unit: "" },
      { name: "salt", quantity: 1, unit: "tsp" },
      { name: "black pepper", quantity: 0.5, unit: "tsp" },
      { name: "garlic salt", quantity: 1, unit: "tsp" },
      { name: "plain flour", quantity: 1, unit: "tsp" },
      { name: "olive oil", quantity: 2, unit: "tbsp" },
      { name: "vegan butter/margarine", quantity: 2, unit: "tbsp" },
      { name: "medium white onion", quantity: 1, unit: "" },
      { name: "garlic", quantity: 6, unit: "cloves" },
      { name: "OXO vegan chicken stock", quantity: 1, unit: "cup" },
      { name: "Oatly cream", quantity: 1, unit: "carton" },
      {
        name: "Violife grated cheese alternative",
        quantity: 0.5,
        unit: "cup",
      },
      { name: "parsley", quantity: 1, unit: "tbsp" },
      { name: "green beans", quantity: 1, unit: "pack" },
    ],

    steps: [
      {
        id: "wash-rice",
        instruction:
          "Add a cup of basmati rice to a medium saucepan and rinse with cold water 3 times.",
        usesIngredients: ["basmati rice"],
      },
      {
        id: "cook-rice",
        instruction:
          "Pour 1.5 cups of water over the rice, add a sprinkle of salt and put on the hob at maximum heat with a lid on until it starts to boil.",
        usesIngredients: ["basmati rice", "salt"],
      },
      {
        id: "simmer-rice",
        instruction:
          "Once the water starts to boil, turn down to low (setting 3) and leave to simmer until all the water has been absorbed.",
        usesIngredients: ["basmati rice"],
      },
      {
        id: "stop-cooking-rice",
        instruction:
          "Once the water has all been absorbed, turn off the heat but leave the pan on the hob with the lid on until the rest of the meal is ready.",
        usesIngredients: ["basmati rice"],
      },

      {
        id: "season-chicken",
        instruction: "Season the chicken-style fillets with salt and pepper.",
        usesIngredients: [
          "Vivera chicken-style fillets",
          "salt",
          "black pepper",
        ],
      },
      {
        id: "coat-chicken",
        instruction:
          "Combine the garlic salt and flour in a bowl and dredge each fillet in the mixture.",
        usesIngredients: [
          "Vivera chicken-style fillets",
          "garlic salt",
          "plain flour",
        ],
      },
      {
        id: "heat-pan",
        instruction:
          "Heat the olive oil and 1 tbsp of butter/margarine in a frying pan over medium heat (setting 6).",
        usesIngredients: ["olive oil", "vegan butter/margarine"],
      },
      {
        id: "cook-chicken",
        instruction:
          "Add the coated chicken-style fillets to the pan and cook until golden.",
        timerMinutes: 2,
        timerLabel: "Fry fillets (side 1)",
        usesIngredients: ["Vivera chicken-style fillets"],
      },
      {
        id: "flip-chicken",
        instruction: "Flip the fillets and cook the other side until golden.",
        timerMinutes: 2,
        timerLabel: "Fry fillets (side 2)",
        usesIngredients: ["Vivera chicken-style fillets"],
      },
      {
        id: "remove-chicken",
        instruction: "Remove fillets from the pan and set aside.",
        notes: [
          {
            type: "tip",
            text: "At this stage you can either put the fillets in the warming drawer on a plate with some kitchen roll to dry out further, or put them in the air fryer for 5 minutes at 200°C to get them super crispy!",
          },
        ],
      },
      {
        id: "melt-butter",
        instruction:
          "Add 1 tbsp vegan butter/margine to the pan and let it melt.",
        usesIngredients: ["vegan butter/margarine"],
      },
      {
        id: "chop-aromatics",
        instruction:
          "Finely dice the onion and 3 cloves of garlic, smash the other 3 cloves with the side of the knife.",
        usesIngredients: ["garlic", "medium white onion"],
      },
      {
        id: "cook-aromatics",
        instruction:
          "Add the onion and garlic to the pan and cook until fragrant.",
        timerMinutes: 3,
        timerLabel: "Cook aromatics",
        usesIngredients: ["garlic", "medium white onion"],
      },
      {
        id: "add-stock",
        instruction:
          "Boil the kettle and make 1 cup of chicken stock using 1 stock cube. Pour into the pan with the onion and garlic and stir to combine, let it simmer and reduce by about half.",
        timerMinutes: 5,
        timerLabel: "Reduce broth",
        usesIngredients: ["OXO vegan chicken stock"],
      },
      {
        id: "add-cream",
        instruction:
          "Stir the Oatly cream into the pan and bring to a gentle simmer.",
        usesIngredients: ["Oatly cream"],
        timerMinutes: 3,
        timerLabel: "Simmer sauce",
      },
      {
        id: "add-cheese",
        instruction:
          "Add the grated cheese alternative and stir, waiting for it to melt into the sauce.",
        usesIngredients: ["Violife grated cheese alternative"],
        timerMinutes: 3,
        timerLabel: "Melt cheese",
      },
      {
        id: "return-chicken",
        instruction:
          "Add the fillets back into the pan and coat in the sauce. Let the sauce simmer for a few more minutes until it thickens.",
        usesIngredients: ["Vivera chicken-style fillets"],
                timerMinutes: 3,
        timerLabel: "Thicken sauce",

      },
      {
        id: "green-beans",
        instruction: "While the sauce is thickening, steam the green beans over a small saucepan of boiling water.",
        timerMinutes: 3,
        timerLabel: "Steam the green beans",
        usesIngredients: ["green beans"],
      },
      {
        id: "plate-up",
        instruction: "Fluff the cooked rice with a fork and plate with the fillets, sauce and green beans. Sprinkle with parsley and serve 💙",
        usesIngredients: ["parsley"],
      },
    ],
  },
];
