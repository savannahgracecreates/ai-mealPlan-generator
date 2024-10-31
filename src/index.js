function generateMealPlan(event){
    event.preventDefault();
    new Typewriter("#meal-plan", {
        strings: "Eat more protein",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    }


let mealPlanFormElement = document.querySelector("#meal-plan-form");
mealPlanFormElement.addEventListener("submit", generateMealPlan);