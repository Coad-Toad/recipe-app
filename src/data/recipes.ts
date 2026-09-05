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
    title: "Creamy Garlic Chicken",

    ingredients: [
      { name: "basmati rice", quantity: 1, unit: " cup" },
      { name: "Vivera chicken-style fillets", quantity: 4, unit: "" },
      { name: "salt", quantity: 1, unit: "tsp" },
      { name: "black pepper", quantity: 0.5, unit: "tsp" },
      { name: "garlic salt", quantity: 1, unit: "tsp" },
      { name: "plain flour", quantity: 4, unit: "tbsp" },
      { name: "olive oil", quantity: 2, unit: "tbsp" },
      { name: "vegan butter/margarine", quantity: 2, unit: "tbsp" },
      { name: "medium white onion", quantity: 1, unit: "" },
      { name: "garlic", quantity: 6, unit: "cloves" },
      { name: "OXO vegan chicken stock cube", quantity: 1, unit: "" },
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
        usesIngredients: ["OXO vegan chicken stock cube"],
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
        instruction:
          "While the sauce is thickening, steam the green beans over a small saucepan of boiling water.",
        timerMinutes: 3,
        timerLabel: "Steam the green beans",
        usesIngredients: ["green beans"],
      },
      {
        id: "plate-up",
        instruction:
          "Fluff the cooked rice with a fork and plate with the fillets, sauce and green beans. Sprinkle with parsley and serve 💙",
        usesIngredients: ["parsley"],
      },
    ],
  },
  {
    id: "beyond-beef-balti",
    title: "Beyond Beef Balti",

    ingredients: [
      { name: "cardamom pods", quantity: 2, unit: "" },
      { name: "cumin seeds", quantity: 0.25, unit: "tsp" },
      { name: "black peppercorns", quantity: 6, unit: "" },
      { name: "cloves", quantity: 3, unit: "" },
      { name: "coriander seeds", quantity: 1, unit: "tsp" },
      { name: "vegetable oil", quantity: 4, unit: "tsp" },
      { name: "medium red onion", quantity: 1, unit: "" },
      { name: "garlic", quantity: 4, unit: "cloves" },
      { name: "ginger", quantity: 1, unit: "half inch piece" },
      { name: "salt", quantity: 1, unit: "pinch" },
      { name: "Beyond Meat steak pieces", quantity: 1, unit: "160g pack" },
      { name: "garam masala", quantity: 0.25, unit: "tsp" },
      { name: "turmeric", quantity: 0.25, unit: "tsp" },
      { name: "cinnamon", quantity: 0.25, unit: "tsp" },
      { name: "paprika", quantity: 0.5, unit: "tsp" },
      { name: "cayenne", quantity: 0.25, unit: "tsp" },
      { name: "chopped tomatoes", quantity: 1, unit: "tin" },
      { name: "lemon juice", quantity: 1, unit: "tsp" },
      { name: "red bell pepper", quantity: 1, unit: "" },
      { name: "date syrup", quantity: 0.5, unit: "tbsp" },
    ],

    steps: [
      {
        id: "make-spice-mix",
        instruction:
          "Scrape the seeds from the cardamom pods and add into a small bowl with the other fresh spices.",
        usesIngredients: [
          "coriander seeds",
          "cumin seeds",
          "cardamom pods",
          "cloves",
          "black peppercorns",
        ],
      },
      {
        id: "heat-oil",
        instruction:
          "Heat 2 tsps of oil in a large pan over medium heat (Setting 6) and add the whole spices, cooking until fragrant.",
        usesIngredients: ["vegetable oil"],
        timerMinutes: 3,
        timerLabel: "Cook spices",
      },
      {
        id: "cook-onion",
        instruction:
          "Finely dice the onion and garlic cloves and add to the pan with the spices. Grate the ginger into the pan and add a pinch of salt. Mix well and cook until the onion is translucent.",
        timerMinutes: 12,
        timerLabel: "Cook aromatics",
        usesIngredients: ["medium red onion", "garlic", "ginger", "salt"],
      },
      {
        id: "cook-beyond",
        instruction:
          "While the onion is cooking, heat 1 tsp oil in a small frying pan and add the Beyond beef pieces. Sprinkle with garam masala and fry until lightly browned.",
        timerMinutes: 3,
        timerLabel: "Fry beef pieces",
        usesIngredients: [
          "vegetable oil",
          "Beyond Meat steak pieces",
          "garam masala",
        ],
      },
      {
        id: "cook-tomatoes",
        instruction:
          "Add the ground spices and chopped tomatoes to the pan with the onions and cook until the tomatoes are saucy.",
        usesIngredients: [
          "turmeric",
          "cinnamon",
          "paprika",
          "cayenne",
          "chopped tomatoes",
        ],
        timerMinutes: 4,
        timerLabel: "Cook tomatoes",
      },
      {
        id: "blend-tomato-mixure",
        instruction:
          "Combine the tomato mixture in a blender with half a cup of water and 1 tsp lemon juice. Add back to the pan along with the beef pieces. Cover and cook over a low medium heat (Setting 4/5).",
        usesIngredients: ["lemon juice"],
        timerMinutes: 15,
        timerLabel: "Cook sauce",
      },
      {
        id: "blister-peppers",
        instruction:
          "While the sauce is cooking, add 1 tsp oil to a small frying pan and chop the red pepper. Add it to the oil and fry until the skin starts to blister.",
        usesIngredients: ["vegetable oil", "red bell pepper"],
        timerMinutes: 3,
        timerLabel: "Blister peppers",
      },
      {
        id: "finish-sauce",
        instruction:
          "Once the 'Cook sauce' timer is complete, add the peppers and date syrup to the sauce and cook for a another 10 minutes with the lid on the pan.",
        usesIngredients: ["date syrup"],
        timerMinutes: 10,
        timerLabel: "Finish cooking sauce",
      },
    ],
  },
  {
    id: "kay-style-pilau-rice",
    title: "Kay Style Pilau Rice",

    ingredients: [
      { name: "basmati rice", quantity: 1, unit: "cup" },
      { name: "water", quantity: 1.5, unit: "cups" },
      { name: "salt", quantity: 1, unit: "pinch" },
      { name: "cardamom pods", quantity: 5, unit: "" },
      { name: "saffron", quantity: 1, unit: "pinch" },
      { name: "turmeric", quantity: 1, unit: "tsp" },
    ],

    steps: [
      {
        id: "wash-rice",
        instruction:
          "Add the basmati rice to a medium saucepan and rinse with cold water 3 times.",
        usesIngredients: ["basmati rice"],
      },
      {
        id: "add-water-and-spices",
        instruction:
          "Add the water, salt, crushed cardamom pods, saffron and turmeric to the rice and stir gently.",
        usesIngredients: [
          "basmati rice",
          "water",
          "salt",
          "cardamom pods",
          "saffron",
          "turmeric",
        ],
      },
      {
        id: "bring-to-boil",
        instruction:
          "Place the pan on the hob at maximum heat with a lid on until it starts to boil.",
      },
      {
        id: "simmer-rice",
        instruction:
          "Once boiling, turn the heat down low (Setting 3) and let it simmer until all the water has been absorbed.",
        timerMinutes: 5,
        timerLabel: "Simmer rice",
      },
      {
        id: "rest-rice",
        instruction:
          "Turn off the heat but leave the pan covered on the hob until the rest of the meal is ready.",
      },
    ],
  },
  {
    id: "chicken-tacos",
    title: "Chicken Tacos with Mango Salsa",

    ingredients: [
      { name: "mango", quantity: 1, unit: "" },
      { name: "red onion", quantity: 0.5, unit: "" },
      { name: "cucumber", quantity: 1, unit: "" },
      { name: "cherry tomatoes", quantity: 5, unit: "" },
      { name: "jalapeño", quantity: 1, unit: "" },
      { name: "fresh coriander", quantity: 0.5, unit: "cups" },
      { name: "limes", quantity: 3, unit: "" },
      { name: "sea salt", quantity: 1, unit: "pinch" },
      { name: "black pepper", quantity: 1, unit: "pinch" },
      { name: "vegetable oil", quantity: 1, unit: "tbsp" },
      {
        name: "Linda McCartney Vegan Shredded Chicken",
        quantity: 260,
        unit: "g",
      },
      { name: "mild chilli powder", quantity: 1.5, unit: "tsp" },
      { name: "ground cumin", quantity: 1, unit: "tsp" },
      { name: "chilli flakes", quantity: 1, unit: "tsp" },
      { name: "dried oregano", quantity: 0.5, unit: "tsp" },
      { name: "garlic powder", quantity: 0.5, unit: "tsp" },
      { name: "onion salt", quantity: 0.25, unit: "tsp" },
      { name: "brown sugar", quantity: 1, unit: "tsp" },
      {
        name: "OXO meat free chicken flavour stock cube",
        quantity: 1,
        unit: "",
      },
      { name: "avocado", quantity: 1, unit: "" },
      { name: "soft taco shells", quantity: 12, unit: "" },
    ],

    steps: [
      {
        id: "make-salsa",
        instruction:
          "Finely dice the mango, onion, cucumber, tomatoes, jalapeño and coriander and add to a large bowl. Add the juice of the limes, season with salt and pepper and mix.",
        usesIngredients: [
          "mango",
          "red onion",
          "cucumber",
          "cherry tomatoes",
          "jalapeño",
          "fresh coriander",
          "limes",
          "sea salt",
          "black pepper",
        ],
      },
      {
        id: "cook-chicken",
        instruction:
          "Add the oil to a frying pan on a medium heat and fry the chicken pieces.",
        notes: [
          {
            type: "tip",
            text: "No need to defrost the chicken pieces, you can tip them right in the pan at about a 6.",
          },
        ],
        usesIngredients: [
          "vegetable oil",
          "Linda McCartney Vegan Shredded Chicken",
        ],
      },
      {
        id: "make-taco-seasoning",
        instruction:
          "Add all the taco seasoning ingredients to a small bowl with the crumbled stock cube and mix. Add the seasoning to the chicken in the frying pan and cook for 7 minutes.",
        usesIngredients: [
          "mild chilli powder",
          "ground cumin",
          "chilli flakes",
          "dried oregano",
          "garlic powder",
          "onion salt",
          "brown sugar",
          "OXO meat free chicken flavour stock cube",
        ],
        timerMinutes: 7,
        timerLabel: "Fry shredded chicken",
      },
      {
        id: "make-guac",
        instruction:
          "Mash the avocado in a small bowl and season with salt and pepper.",
        usesIngredients: ["avocado", "sea salt", "black pepper"],
      },

      {
        id: "heat-taco-shells",
        instruction:
          "Remove all packaging and heat the taco shells in the microwave for 30 seconds.",
        usesIngredients: ["soft taco shells"],
        notes: [
          {
            type: "tip",
            text: "To assemble the tacos, spread some guacamole on the inside of the taco shell and add salsa and shredded chicken.",
          },
        ],
      },
    ],
  },
  {
    id: "black-bean-meatballs-gravy",

    title: "Black Bean Meatballs with Spiced Gravy",

    ingredients: [
      {
        name: "black beans",
        quantity: 1,
        unit: "can",
      },
      {
        name: "sunflower seeds",
        quantity: 0.25,
        unit: "cup",
      },
      {
        name: "oats",
        quantity: 0.5,
        unit: "cup",
      },
      {
        name: "tomato paste",
        quantity: 4,
        unit: "tbsp",
      },
      {
        name: "garlic",
        quantity: 2,
        unit: "cloves",
      },
      {
        name: "onion",
        quantity: 0.5,
        unit: "",
      },
      {
        name: "ground flax seeds",
        quantity: 2,
        unit: "tbsp",
      },
      {
        name: "onion salt",
        quantity: 2,
        unit: "tsp",
      },
      {
        name: "garlic powder",
        quantity: 2,
        unit: "tsp",
      },
      {
        name: "oregano",
        quantity: 2,
        unit: "tsp",
      },
      {
        name: "ground cumin",
        quantity: 2,
        unit: "tsp",
      },
      {
        name: "smoked paprika",
        quantity: 1,
        unit: "tsp",
      },
      {
        name: "red pepper flakes",
        quantity: 0.5,
        unit: "tsp",
      },
      {
        name: "sea salt",
        quantity: 1,
        unit: "pinch",
      },
      {
        name: "black pepper",
        quantity: 1,
        unit: "pinch",
      },
      {
        name: "vegetable oil",
        quantity: 2.5,
        unit: "tbsp",
      },
      {
        name: "vegetable broth",
        quantity: 1.5,
        unit: "cups",
      },
      {
        name: "Oatly plant cream",
        quantity: 0.33,
        unit: "cup",
      },
      {
        name: "fresh ginger",
        quantity: 0.5,
        unit: "tsp",
      },
      {
        name: "curry powder",
        quantity: 3,
        unit: "tsp",
      },
      {
        name: "turmeric",
        quantity: 1,
        unit: "tsp",
      },
      {
        name: "nutmeg",
        quantity: 0.5,
        unit: "tsp",
      },
      {
        name: "brown sugar",
        quantity: 1,
        unit: "tsp",
      },
      {
        name: "cornstarch",
        quantity: 1,
        unit: "tbsp",
      },
      {
        name: "fresh parsley",
        quantity: 1,
        unit: "pinch",
      },
    ],

    steps: [
      {
        id: "prepare-meatball-mixture",

        instruction:
          "Drain the water from the beans, finely chop the onion and garlic cloves, and add along with 2 tbsp of tomato paste, ½ tbsp onion salt, 1 tsp garlic powder, 1 tsp oregano, 1 tsp cumin, ½ tsp smoked paprika ¼ tsp pepper flakes and the other selected ingredients to the blender and pulse a couple of times. Scrape down the sides and pulse again. Repeat for about one minute or until the mixture sticks together in a thick paste.",

        usesIngredients: [
          "black beans",
          "sunflower seeds",
          "oats",
          "tomato paste",
          "garlic",
          "onion",
          "ground flax seeds",
          "onion salt",
          "garlic powder",
          "oregano",
          "ground cumin",
          "smoked paprika",
          "red pepper flakes",
          "sea salt",
          "black pepper",
        ],

        notes: [
          {
            type: "tip",
            text: "If the blender is struggling you can add water a teaspoon at a time to the mixture to loosen it up.",
          },
        ],
      },
      {
        id: "shape-meatballs",

        instruction:
          "Roll the mixture into approximately 15 balls, using around 1 tablespoon of mixture for each meatball.",

        notes: [
          {
            type: "warning",
            text: "If the mixture is too wet to shape, add a little more oats or chill it in the fridge for 30 to 60 minutes.",
          },
          {
            type: "tip",
            text: "Lightly oil your hands to prevent the mixture from sticking.",
          },
        ],
      },
      {
        id: "fry-meatballs",

        instruction:
          "Heat the vegetable oil in a large frying pan over medium heat. Fry the meatballs, turning occasionally, until lightly browned on all sides.",

        timerMinutes: 7,

        timerLabel: "Fry meatballs",

        usesIngredients: ["vegetable oil"],
      },
      {
        id: "air-fry-meatballs",

        instruction:
          "Transfer the meatballs to a drawer in the air fryer and fry at 200 for 10 minutes.",

        notes: [
          {
            type: "reassurance",
            text: "The combination of pan-frying and air-frying helps create a crispy exterior.",
          },
        ],
      },
      {
        id: "start-gravy",

        instruction:
          "While the meatballs are in the air fryer, add the remaining 2 tbsp tomato paste and ⅓ cup Oatly plant cream to the frying pan. Whisk until smooth, then slowly add 1½ cups vegetable broth while continuing to whisk.",

        usesIngredients: [
          "tomato paste",
          "Oatly plant cream",
          "vegetable broth",
        ],
      },
      {
        id: "season-gravy",

        instruction:
          "Add ½ tsp fresh ginger, 3 tsp curry powder, 1½ tsp onion salt, 1 tsp garlic powder, 1 tsp oregano, 1 tsp ground cumin, 1 tsp turmeric, ½ tsp nutmeg, ½ tsp smoked paprika, ¼ tsp red pepper flakes, and 1 tsp brown sugar. Stir well.",

        usesIngredients: [
          "fresh ginger",
          "curry powder",
          "onion salt",
          "garlic powder",
          "oregano",
          "ground cumin",
          "turmeric",
          "nutmeg",
          "smoked paprika",
          "red pepper flakes",
          "brown sugar",
        ],
      },
      {
        id: "simmer-gravy",

        instruction:
          "Bring the gravy to a boil, then reduce the heat and allow it to simmer.",

        timerMinutes: 11,

        timerLabel: "Simmer gravy",
      },
      {
        id: "thicken-gravy",

        instruction:
          "Mix 1 tbsp cornstarch with a little water to make a smooth slurry. Stir it into the gravy and continue simmering until thickened.",

        timerMinutes: 3,

        timerLabel: "Thicken gravy",

        usesIngredients: ["cornstarch"],
      },
      {
        id: "serve",

        instruction:
          "Serve the baked vegan meatballs with the spiced gravy and garnish with fresh parsley.",

        usesIngredients: ["fresh parsley"],
      },
    ],
  },
];
