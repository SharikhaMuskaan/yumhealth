import React from "react";
import choclate from "../assets/img/cake.jpg";
import cake1 from "../assets/img/cake1.webp";
import cake2 from "../assets/img/cake2.webp";
import cake3 from "../assets/img/cake3.webp";
import cake4 from "../assets/img/cake4.webp";
import cake5 from "../assets/img/cake5.webp";
import cake6 from "../assets/img/cake6.webp";
import cake7 from "../assets/img/cake7.webp";

function Recipe(){
    return(
        <div style={{ color: "black", padding: "20px", margin: "110px 100px", display: "flex", flexDirection: "column", gap: "20px", lineHeight: "1.6" }}>
        <div>Recipe &gt; Desserts &gt; Cakes &amp; Choclate Cake Recipes </div>
        <div style={{display:"flex"}}>
            <div>
                <h2>One bowl Choclate cake</h2>
                <p>This is a rich and moist one bowl choclate cake. It only takes a few minutes to prepare the batter.<br/> Frost with your favorite choclate frosting.</p>
            <ul style={{ paddingLeft: "20px" }}>
                <li style={{ padding: "5px 0" }}>Prep time: 20 mins</li>
                <li style={{ padding: "5px 0" }}>Cook time: 30 mins</li>
                <li style={{ padding: "5px 0" }}>Additional time: 30 mins</li>
                <li style={{ padding: "5px 0" }}>Total time: 60 mins</li>
            </ul>
            </div>
            <div>
                <img src={choclate} alt="choclate cake" style={{ width: "400px", height: "auto" }}/>
            </div>
        </div>
        <div>
        <h2>How to Make One-Bowl Chocolate Cake</h2>

        <p>It truly couldn't be easier to make this chocolate cake-just mix the ingredients and bakel You'll find the full recipe below, but here's abrief overview of what you can expect. </p>

        <h2>Add Wet Ingredients</h2>

        <p>Add the eggs, milk, oil, and vanilla Mix on medium speed for about two minutes Stir in boiling water. Don't worry if the batter seems a little thin, as reviewers say that's perfectly normal</p>

        <h2>Bake</h2>

        <p>Pour the cake batter into prepared pans Bake for about half an hour, until a toothpick comes out clean when inserted in the middle Let cool and top with your favorite frosting.</p>

        <h2>Best Frosting for Chocolate Cake</h2>

        <p>When it comes to frosting this simple chocolate cake you've got plenty of options. We're partial to this top-rated Creamy Chocolate Frosting -it has almost 2.000 rave reviews and it comes together quickly with just a few ingredients you probably already have on hand Of course, no matter the cake flavor you can never go wrong with classic cream cheese (this recipe is beloved by the Allrecipes community) or a crowd-pleasing buttercream (you'll love this recipe! You could also try Fluffy Peanut Butter Frosting for a decadent candy bar-inspired flavor pairing.</p>

        <h2>Ingredients</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ padding: "5px 0" }}>2 cups white sugar</li>
          <li style={{ padding: "5px 0" }}>1 teaspoon salt</li>
          <li style={{ padding: "5px 0" }}>1¼ cups all-purpose flour</li>
          <li style={{ padding: "5px 0" }}>2 eggs</li>
          <li style={{ padding: "5px 0" }}>¼ cup unsweetened cocoa powder</li>
          <li style={{ padding: "5px 0" }}>1 cup milk</li>
          <li style={{ padding: "5px 0" }}>½ cup vegetable oil</li>
          <li style={{ padding: "5px 0" }}>1½ teaspoons baking powder</li>
          <li style={{ padding: "5px 0" }}>1½ teaspoons baking soda</li>
          <li style={{ padding: "5px 0" }}>2 teaspoons vanilla extract</li>
          <li style={{ padding: "5px 0" }}>1 cup boiling water</li>
        </ul>
       <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
       <h2>Directions</h2>
        <h3>Step 1</h3>
        <img src={cake1} alt="choclate cake" style={{ width: "400px", height: "auto" }}/>
        <p>Gather all ingridients.</p>
        <h3>Step 2</h3>
        <img src={cake2} alt="choclate cake" style={{ width: "400px", height: "auto" }}/>
        <p>Preheat oven to 350 degrees Farenheit. Grease and flour 9-inch-round cake pans.</p>
        <h3>Step 3</h3>
        <img src={cake3} alt="choclate cake" style={{ width: "400px", height: "auto" }}/>
        <p>In a large bowl stir together the sugar floor coca breaking powder breaking soda and salt</p>
        <h3>Step 4</h3>
        <img src={cake4} alt="choclate cake" style={{ width: "400px", height: "auto" }}/>
        <p>Add the eggs and milk oil and vanilla. Mix for two minutes on medium speed of mixer.</p>
        <h3>Step 5</h3>
        <img src={cake5} alt="choclate cake" style={{ width: "400px", height: "auto" }}/>
        <p>Stir in the boiling water last. Batter will be thin.</p>
        <h3>Step 6</h3>
        <img src={cake6} alt="choclate cake" style={{ width: "400px", height: "auto" }}/>
        <p>Pour eventually into the prepared pans.</p>
        <h3>Step 7</h3>
        
        <p>Bake 30 to 35 minutes in preheated ovenuntil the cake tests done with a cool toothpick cool in the pans for 10 minutes then remove to a wire rack to cool completely</p>
        <h3>Step 8</h3>
        <img src={cake7} alt="choclate cake" style={{ width: "400px", height: "auto" }}/>
        <p>Enjoy.</p>
       </div>
        </div>
        <div>
            <h3>Nutrition Facts</h3>
            <p>Calories - 157g</p>
            <p>Fat - 6g</p>
            <p>Carbs - 26g</p>
            <p>Protien - 2g</p>
        </div>
        </div>
    )
}

export default Recipe;