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
        instruction: "Pre-heat the oven to 180°C fan/200°C/400°F/gas mark 6.",
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
        usesIngredients: ["dairy-free chocolate chips", "dairy-free milk"]
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
];
