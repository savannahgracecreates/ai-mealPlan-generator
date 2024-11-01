function displayMealPlan(response){
    console.log("Meal Plan generated");
    new Typewriter("#meal-plan", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}


function generateMealPlan(event){
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "d39d6443520afb97te34a49a61faf9o3";
let prompt = `Generate a meal plan. Please give clients daily meal plan ideas and utilize ${instructionsInput.value} as a parameter for the meals. You only need to provide ideas for one day.`;
let context = "You are nutrition coach that helps performance athletes lose weight and maintain muscle by providing a healthy meal plan for the day for people to follow. Your mission is to provide meal ideas for the day in basic HTML and seperate each meal with a <br/>. Do not mention html or HTML in your response, please.";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let mealPlanElement = document.querySelector("#meal-plan");
mealPlanElement.classList.remove("meal-plan-hidden");
mealPlanElement.innerHTML = `<div class="blink_me"> Generating today's plan with ${instructionsInput.value} in mind.</div>`;

axios.get(apiURL).then(displayMealPlan);




  
    }


let mealPlanFormElement = document.querySelector("#meal-plan-form");
mealPlanFormElement.addEventListener("submit", generateMealPlan);