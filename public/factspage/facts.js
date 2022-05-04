let factPlaceholder = document.getElementById("plant-fact");
let showFact = document.getElementById("show-fact");

let PlantFacts = ["The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests for different types of crops.",
               "There are more microorganisms in one teaspoon of soil than there are people on earth.",
               "Watermelon is actually a vegetable and so is rhubarb.",
               "A sunflower is not just one flower, both the fuzzy brown center and the classic yellow petals are actually 2000 individual flowers held together by one stalk.",
               "A little baking soda can help you grow sweeter tomatoes.",
                 "Plants can drown if there’s no air in the soil.",
                 "Soil with lots of worms in it doesn’t flood easily after heavy rain because the water drains away thanks to all the worm holes.",
                 "The average strawberry has 200 seeds. It's the only fruit that bears its seeds on the outside.",
                 "Broccoli and cauliflower are the only veggies that are also flowers.",
                 "Bees can tell us about the weather: they hide in their beehives when they feel the level of humidity rise."]

let factNumber;

function randomFact() {
  return PlantFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*10);
  factPlaceholder.textContent = randomFact();
});