// create top nav
var orderButnNav = '<div id="right-nav"><button class="order-now-nav"onclick="startOrder()">Order Now!</button></div>';
var mainNav = '<div class="main-nav"><div id="left-nav">'+
'<a href="home.html">Home</a>'+
'<a href="menu-pizza.html">Menu</a>'+
'<a href="about.html">About Us</a></div>'+ orderButnNav +
'</div>';
if (window.location.href.toLowerCase().indexOf("home") > -1){
    var mainNav = '<div class="main-nav"><div id="left-nav">'+
    '<a href="home.html">Home</a>'+
    '<a href="menu-pizza.html">Menu</a>'+
    '<a href="about.html">About Us</a></div>'+
    '</div>';
}
$('body').prepend(mainNav);
// create bottom Nav
var bottomNav = '<div class="soc-nav">'+
'<a href=""><img src="assets/facebook.svg" alt="Facebook Icon"></a>'+
'<a href=""><img src="assets/twitter.svg" alt="Twitter Icon"></a>'+
'<a href=""><img src="assets/insta.svg" alt="Instagram Icon"></a></div>';
$('body').append(bottomNav);

//create Menu Nav
var menuNavItems = [
    {
    "section" : 'Pizzas',
    "link" : 'menu-pizza.html',
    "icon" : 'cat-pizzas.svg',
    "alt" : 'Pizza Menu Icon',
    },
    {
    "section" : 'Salads',
    "link" : 'menu-salads.html',
    "icon" : 'cat-salads.svg',
    "alt" : 'Salad Menu Icon',
    },
    {
    "section" : 'Sides',
    "link" : 'menu-sides.html',
    "icon" : 'cat-sides.svg',
    "alt" : 'Sides Menu Icon',
    },
    // {
    // "section" : 'Bowls',
    // "link" : 'menu-bowls.html',
    // "icon" : 'cat-bowls.svg',
    // "alt" : 'Bowls Menu Icon',
    // },
    {
    "section" : 'Drinks',
    "link" : 'menu-drinks.html',
    "icon" : 'cat-drinks.svg',
    "alt" : 'Drinks Menu Icon',
    },
    {
    "section" : 'Desserts',
    "link" : 'menu-desserts.html',
    "icon" : 'cat-desserts.svg',
    "alt" : 'Desserts Menu Icon',
    },
   /* placholder
    {
    "section" : '',
    "link" : '.html',
    "icon" : '',
    "alt" : '',
    },
    */
];
for (var i = 0; i < menuNavItems.length; i++){ 
    var menuNavItemDiv = '<div class="nav-item"';
    if (menuNavItems[i].section === 'Pizzas'){
        if (window.location.href.toLowerCase().indexOf("pizza") > -1){
            menuNavItemDiv = menuNavItemDiv + 'id="active-item"';
        }   
    } else if (menuNavItems[i].section === 'Salads'){
        if (window.location.href.toLowerCase().indexOf("salads") > -1){
            menuNavItemDiv = menuNavItemDiv + 'id="active-item"';
        }
    } else if (menuNavItems[i].section === 'Sides'){
        if (window.location.href.toLowerCase().indexOf("sides") > -1){
            menuNavItemDiv = menuNavItemDiv + 'id="active-item"';
        }
    } else if (menuNavItems[i].section === 'Drinks'){
        if (window.location.href.toLowerCase().indexOf("drinks") > -1){
            menuNavItemDiv = menuNavItemDiv + 'id="active-item"';
        }
    } else if (menuNavItems[i].section === 'Desserts'){
        if (window.location.href.toLowerCase().indexOf("desserts") > -1){
            menuNavItemDiv = menuNavItemDiv + 'id="active-item"';
        }
    }
    var menuNavItem = menuNavItemDiv + '><a href="'+ menuNavItems[i].link +'">'+
    '<img src="assets/' + menuNavItems[i].icon +'" alt="'+menuNavItems[i].alt+'"></a>'+
    '<p>'+menuNavItems[i].section+'</p></div>';
    $('.menu-nav-cat').append(menuNavItem); 
};
//create Menu Items
var pizzaMenu = [
    /*placeholder
    {
        "title" : '',
        "description" : '',
        "img" : '',
    },*/
    {
        "title" : 'NAPOLI',
        "description" : 'Traditional Pizza Margherita – San Marzano Tomatoes, Fresh Mozzarella, Fresh Basil', 
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'PROVIDENCE',
        "description" : 'Red Sauce, Mozzarella, Clams, Bacon, Green Peppers, Onions',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'BEVERLY HILLS',
        "description" : 'Smoked Salmon, Garlic Dill Crème Fraiche, Red-Chili-infused Extra Virgin Olive Oil',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'MYKONOS',
        "description" : 'Spinach, Feta, Mozzarella, Caramelized Onions, Tzatziki Drizzle',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'JAIPUR',
        "description" : 'Organic Masala Sauce, Spinach, Mozzarella, Paneer, Onions',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'JUAREZ',
        "description" : 'Roasted Pineapple Habanero Sauce, Mozzarella, Feta, Carnitas, Crema Drizzle',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'BUFFALO',
        "description" : 'Buffalo Chicken, Gorgonzola, Mozzarella, Buffalo Sauce Drizzle, Gorgonzola Crème Fraiche drizzle',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'GLOUSTER',
        "description" : 'Garlic Scallops, Garlic Shrimp, Clams, Red Sauce, Mozzarella',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'FALL RIVER',
        "description" : 'Garlic Scallops, Garlic Shrimp, Clams, Pesto, Mozzarella',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'FIESOLE',
        "description" : 'Red Sauce, Fried Eggplant, Ricotta Cheese, Mozzarella',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'PALO ALTO',
        "description" : 'BBQ Sauce, Grilled Chicken, Red Onions, Mozzarella, Smoked Gouda',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'TORINO',
        "description" : 'Red Sauce, Mozzarella, Spinach, Fried Eggplant, Grilled Chicken, Mushrooms',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'VALLARTA',
        "description" : 'Spicy Red Sauce, Garlic Shrimp, Jalapenos, Mozzarella, Bacon',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'FOND DU LAC',
        "description" : 'Macaroni & Five Cheeses, Mornay Sauce, Mozzarella, Natural Ham',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'MILANO',
        "description" : 'Sausage, Broccoli, Red Sauce, Mozzarella, Pesto Drizzle',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'LAHAINA',
        "description" : 'Pineapple, Natural Ham, Red Sauce, Mozzarella, Onion',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'PHILLY',
        "description" : 'Sliced Grilled Steak, Onions, Housemade “Cheese Wiz”',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'REAUMAUVILLE',
        "description" : 'Grilled or Fried Chicken, Black Forest Ham, Swiss Cheese, Mozzarella, Mornay Sauce',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'SAUVERNE',
        "description" : 'Escargots, Caramelized Onions, Bacon, Gorgonzola, Provolone, Mornay Sauce',
        "img" : 'menu-pizza.png',
    },
    {
        "title" : 'NEW ORLEANS',
        "description" : 'Beer Battered Shrimp or Fried Oysters, Spinach, Mornay Sauce, Mozzarella',
        "img" : 'menu-pizza.png',
    },
];
var saladMenu = [
    {
        "title" : 'LAGUNA NIGEL SALAD',
        "description" : 'Our Take on the Classic Cobb Salad - Organic Spinach & Romaine, Bacon, Crispy Onions, Chicken or Falafel, Corn, Gorgonzola',
        "img" : 'fresh-salad.png',
    },
    {
        "title" : 'RUIDOSO SALAD',
        "description" : 'Choice of Greens, Garlic Grilled Shrimp, Grape Tomatoes, Pickled Red Onion, Herbed Croutons made from House-Baked Flat Bread, Pineapple Habanero Crema',
        "img" : 'fresh-salad.png',
        },
    {
        "title" : 'MAGGIORE SALAD',
        "description" : 'Classic Caesar Salad -- Romaine, Shaved Pecorino Romano/Asiago/Parmesan Blended Cheese, Housemade Caesar Dressing',
        "img" : 'fresh-salad.png',
        },
    {
        "title" : 'CALABASAS SALAD',
        "description" : 'Choice of Greens, BBQ Chicken, Smoked Gouda, Grape Tomatoes, Gorgonzola Crumbles, add 1 Extra Vegetable Chop-In of your choice at no cost',
        "img" : 'fresh-salad.png',
        },
];
var dessertMenu = [
    {
        "title" : 'HOUSEMADE CANNOLI PIE',
        "description" : 'Our Special Blend of Cream Cheese, Ricotta and Mascarpone in a Crust Made from Crushed Cannoli Shells',
        "img" : 'pie-dessert.png',
        },
];
var sideMenu = [
    {
        "title" : 'BOWL OF MACARONI & CHEESE',
        "description" : 'Small or Large, cooked macaroni pasta and a cheese sauce.',
        "img" : 'fresh-salad.png',
        },
    {
        "title" : 'FLAT BREAD',
        "description" : 'Unleavened bread baked to perfection.',
        "img" : 'fresh-flatbread.png',
    },
    {
        "title" : 'GARLIC BREAD STICKS WITH CHEESE',
        "description" : 'Crispy on outside, soft on the inside.',
        "img" : 'fresh-breadsticks.png',
    },
    {
        "title" : 'EXTRA SALAD DRESSING',
        "description" : 'Need a little more dip? You can order some!',
        "img" : 'fresh-salad-dressing.png',
    },
];
var drinkMenu = [
    {
        "title" : 'Coke/Diet Coke',
        "description" : '',
        "img" : 'drinks-coke.png',
    },
    {
        "title" : 'Sprite',
        "description" : '',
        "img" : 'ice-cold-sprite.png',
    },
    {
        "title" : 'NATURAL SODAS',
        "description" : '12 OZ CANS',
        "img" : 'ice-cold-natural.png',
    },
];
var menus = pizzaMenu + saladMenu + dessertMenu + sideMenu + drinkMenu;
//create Menus
for (var j = 0; j < menus.length; j++){ 
    if (pizzaMenu[j]){
        if (window.location.href.toLowerCase().indexOf("pizza") > -1){
            var menuChoiceDiv = '<div class="menu-choice" onclick="openPopup()">';
            if (pizzaMenu[j].title === "MYKONOS" || pizzaMenu[j].title === "GLOUSTER" 
            || pizzaMenu[j].title === "TORINO" || pizzaMenu[j].title === "LAHAINA" || pizzaMenu[j].title === "NEW ORLEANS"){
                var menuChoiceItem = '<div class="left" id="left-swap">';
            } else {
                menuChoiceItem = '<div class="left">';
            }
            menuChoiceDiv += menuChoiceItem + '<div class="item-img">'+
            '<img src="assets/' + pizzaMenu[j].img +'" alt="Pizza Photo"></div></div>'+
            '<div class="right"><h3>'+pizzaMenu[j].title.toLowerCase()+'</h3>'+
            '<p>'+pizzaMenu[j].description+'</p></div></div><br>';
            $('.menu-list').append(menuChoiceDiv);
            console.log(pizzaMenu)
        }
        if (saladMenu[j]){
            if (window.location.href.toLowerCase().indexOf("salads") > -1){
                var menuChoiceDiv = '<div class="menu-choice" onclick="openPopup()">';
                var menuChoiceItem = '<div class="left">';
                menuChoiceDiv += menuChoiceItem + '<div class="item-img">'+
                '<img src="assets/' + saladMenu[j].img +'" alt="Salad Photo"></div></div>'+
                '<div class="right"><h3>'+saladMenu[j].title.toLowerCase()+'</h3>'+
                '<p>'+saladMenu[j].description+'</p></div></div><br>';
                $('.menu-list').append(menuChoiceDiv);
            }
        }
        if (sideMenu[j]){
            if (window.location.href.toLowerCase().indexOf("sides") > -1){
                var menuChoiceDiv = '<div class="menu-choice" onclick="openPopup()">';
                var menuChoiceItem = '<div class="left">';
                menuChoiceDiv += menuChoiceItem + '<div class="item-img">'+
                '<img src="assets/' + sideMenu[j].img +'" alt="Side Photo"></div></div>'+
                '<div class="right"><h3>'+sideMenu[j].title.toLowerCase()+'</h3>'+
                '<p>'+sideMenu[j].description+'</p></div></div><br>';
                $('.menu-list').append(menuChoiceDiv);
            }
        }
        if (drinkMenu[j]){
            if (window.location.href.toLowerCase().indexOf("drinks") > -1){
                var menuChoiceDiv = '<div class="menu-choice" onclick="openPopup()">';
                var menuChoiceItem = '<div class="left">';
                menuChoiceDiv += menuChoiceItem + '<div class="item-img">'+
                '<img src="assets/' + drinkMenu[j].img +'" alt="Side Photo"></div></div>'+
                '<div class="right"><h3>'+drinkMenu[j].title.toLowerCase()+'</h3>'+
                '<p>'+drinkMenu[j].description+'</p></div></div><br>';
                $('.menu-list').append(menuChoiceDiv);
            }
        }
        if (dessertMenu[j]){
            if (window.location.href.toLowerCase().indexOf("desserts") > -1){
                var menuChoiceDiv = '<div class="menu-choice" onclick="openPopup()">';
                var menuChoiceItem = '<div class="left">';
                menuChoiceDiv += menuChoiceItem + '<div class="item-img">'+
                '<img src="assets/' + dessertMenu[j].img +'" alt="Side Photo"></div></div>'+
                '<div class="right"><h3>'+dessertMenu[j].title.toLowerCase()+'</h3>'+
                '<p>'+dessertMenu[j].description+'</p></div></div><br>';
                $('.menu-list').append(menuChoiceDiv);
            }
        }
    }
};
//create toogle items
var toggleOptions = [
    {
        "section" : 'Size',
        "options" : ['8” Snack',
                    '11” Regular',
                    '14” Large'], 
        "notes" : '*Any Pizza Selection is Available on a thin 12” Cauliflower Crust for an Additional Charge of $3.75 or in a Single-Size Bowl Over Riced Cauliflower or Brown Rice at the 11” Pizza Price',
        "id" : 'size',
    },
    {
        "section" : 'Sauce',
        "options" : ['Traditional Red Sauce', 'Spicy Red Sauce',
                    'Mornay Sauce *Traditional white sauce with assorted cheese',
                    'Housemade “Cheese Whiz” *Traditional white sauce with cheddar cheese',
                    'BBQ Sauce', 'Roasted Pineapple Habanero Sauce',
                    'Nut-Free Pesto', 'Masala Sauce',], 
        "notes" : '',
        "id" : 'sauce',
    },
    {
        "section" : 'Cheese',
        "options" : ['Shredded Mozzarella', 'Sliced Fresh Mozzarella',
                    'Provolone', 'Ricotta', 'Smoked Gouda', 'Gorgonzola',
                    'Cheddar', 'Goat Cheese', 'Feta',
                    'Shaved Blended Italian Cheeses *Parmesan, Asiago and Pecorino Romano',
                    'Vegan Mozzarella Style “Cheese”', 'Paneer *By its nature, does not melt'], 
        "notes" : '',
        "id" : 'cheese',
    },
    {
        "section" : 'Vegetables/Fruit',
        "options" : ['Steamed Fresh Broccoli', 'Vidalia Sweet Onions', 'Fresh Red Onions',
                    'Pickled Red Onions', 'Caramelized Onions', 'Chopped Garlic *In extra virgin olive oil',
                    'Roasted Garlic', 'Black Olives', 'Kalamata Olives',
                    'Jalapenos *Fresh or Pickled', 'Banana Peppers *Pickled', 
                    'Sweet Peppers *Pickled', 'Spicy Maple Bourbon Pickle Slices *Made with real maple syrup and Maker’s Mark Bourbon',
                    'Sliced White Mushrooms', 'Garlic and Herb Sauteed Mixed Mushrooms',
                    'Sauteed Mixed Mushroom Finished with Marsala Wine', 'Falafel', 
                    'Roasted Corn', 'Grape Tomatoes', 'Tomato Slices',
                    'Pineapple', 'Sun Dried Tomatoes', 'San Marzano Tomatoes',
                    'Fried Eggplant *Contains Egg and Gluten', 'Roasted Eggplant *Vegan',
                    'Artichoke Hearts', 'Sauteed Spinach with Garlic', 'Raw Spinach *Mix-In for Salad or Finishing Touch After Cooking for Pizza/Bowl',
                    'Fresh Arugula *Mix-In for Salad or Finishing Touch After Cooking for Pizza/Bowl',
                    'Fresh Basil', 'Macaroni and Five Cheeses', 'Firm Tofu',], 
        "notes" : '',
        "id" : 'veg',
    },
    {
        "section" : 'Protein',
        "options" : ['Grilled Steak *Natural, no hormone, no antibiotic beef', 
                    'Shaved Beef *Natural, no hormone, no antibiotic blend of sirloin and ribeye',
                    'Natural Ham', 'Italian Sausage *Natural, no hormone, no antibiotic',
                    'Juarez Style Pork Carnitas *Natural, no hormone, no antibiotic small-farm-raised',
                    'Memphis Style BBQ Pulled Pork *Natural, no hormone, no antibiotic small-farm-raised',
                    'Meatballs *Natural, no hormone, no antibiotic beef',
                    'Grilled Chicken *Natural, no antibiotic, no hormone',
                    'Buffalo Chicken *Natural, no antibiotic, no hormone',
                    'Lightly Breaded Fried Chicken Breast *Natural, no antibiotic, no hormone',
                    'Prosciutto', 'Bacon', 'Pepperoni', 'Escargots in Herb and Garlic Butter',], 
        "notes" : '',
        "id" : 'meat',
    },
    {
        "section" : 'Seafood/Exotic',
        "options" : ['Smoked Salmon', 'Clams *Chopped', 'Fried Oysters ',
                    'Garlic Seared Scallops', 'Beer Battered Shrimp',
                    'Garlic Grilled Shrimp *Scampi Style', 
                    'Shrimp Fra Diavolo', 'Seared Ahi Tuna'], 
        "notes" : '*Available at an additional charge',
        "id" : 'seafood',
    },
    {
        "section" : 'Finishing Touches',
        "options" : ['Buffalo Sauce Drizzle', 'Extra Virgin Olive Oil Drizzle',
                    'Extra Virgin White Truffle Oil Drizzle', 'Red-Chili-infused Extra Virgin Olive Oil',
                    'No-Nut Pesto Drizzle', 'Balsamic Drizzle',
                    'Roasted Pineapple Habanero Drizzle', 'Crema Drizzle',
                    'House-made Ranch Dressing Drizzle', 'House-made Gorgonzola Dressing Drizzle',
                    'Tzatzki Drizzle', 'Sea Salt Sprinkle', 'Freshly Cracked Pepper',
                    ], 
        "notes" : '',
        "id" : 'fin',
    },
];
for (var k = 0; k < toggleOptions.length; k++){ 
    var toogleId = toggleOptions[k].id;
    var toogleFun = 'onclick="toggleOpen'+toogleId+'()"';
    var toogleSections = '<div class="tog-head"' + 'id="tog-'+toogleId+'" '+toogleFun+ '>'+
    '<h3>'+toggleOptions[k].section+'</h3></div>'+
    '<div id="tog-p-'+toggleOptions[k].id+'">';
    var toogleOptionsList = toggleOptions[k].options
        toogleOptionsList.forEach((toogleOptionsList) => {
            toogleSections += '<p>' +toogleOptionsList+ '</p>';
        });
    toogleSections += '</div></div>';
    $('.toggle-all').append(toogleSections);

    let op = '';
    function toggleOpensize(){
        op = document.getElementById("tog-p-size");
        if (op.style.visibility != "visible"){
            op.style.visibility = "visible";
        } else if (op.style.visibility = "visible"){
            op.style.visibility = "hidden";
        }
        if (op.style.display != "block"){
            op.style.display = "block";
        } else if (op.style.display = "block"){
            op.style.display = "none";
        } 
    };
    function toggleOpensauce(){
        op = document.getElementById("tog-p-sauce");
        if (op.style.visibility != "visible"){
            op.style.visibility = "visible";
        } else if (op.style.visibility = "visible"){
            op.style.visibility = "hidden";
        }
        if (op.style.display != "block"){
            op.style.display = "block";
        } else if (op.style.display = "block"){
            op.style.display = "none";
        } 
    };
    function toggleOpencheese(){
        op = document.getElementById("tog-p-cheese");
        if (op.style.visibility != "visible"){
            op.style.visibility = "visible";
        } else if (op.style.visibility = "visible"){
            op.style.visibility = "hidden";
        }
        if (op.style.display != "block"){
            op.style.display = "block";
        } else if (op.style.display = "block"){
            op.style.display = "none";
        } 
    };
    function toggleOpenveg(){
        op = document.getElementById("tog-p-veg");
        if (op.style.visibility != "visible"){
            op.style.visibility = "visible";
        } else if (op.style.visibility = "visible"){
            op.style.visibility = "hidden";
        }
        if (op.style.display != "block"){
            op.style.display = "block";
        } else if (op.style.display = "block"){
            op.style.display = "none";
        } 
    };
    function toggleOpenmeat(){
        op = document.getElementById("tog-p-meat");
        if (op.style.visibility != "visible"){
            op.style.visibility = "visible";
        } else if (op.style.visibility = "visible"){
            op.style.visibility = "hidden";
        }
        if (op.style.display != "block"){
            op.style.display = "block";
        } else if (op.style.display = "block"){
            op.style.display = "none";
        } 
    };
    function toggleOpenseafood(){
        op = document.getElementById("tog-p-seafood");
        if (op.style.visibility != "visible"){
            op.style.visibility = "visible";
        } else if (op.style.visibility = "visible"){
            op.style.visibility = "hidden";
        }
        if (op.style.display != "block"){
            op.style.display = "block";
        } else if (op.style.display = "block"){
            op.style.display = "none";
        } 
    };
    function toggleOpenfin(){
        op = document.getElementById("tog-p-fin");
        if (op.style.visibility != "visible"){
            op.style.visibility = "visible";
        } else if (op.style.visibility = "visible"){
            op.style.visibility = "hidden";
        }
        if (op.style.display != "block"){
            op.style.display = "block";
        } else if (op.style.display = "block"){
            op.style.display = "none";
        } 

    };
};



var menuPopUp = '<div id="order-popup"><h3>Sounds good, right?</h3><h3>Start your order now!</h3><div id="popup-close" onclick="closePopup()"><p>x</p></div><button class="order-now" id="apply" onclick="startOrder()">Order Carryout</button><button class="order-now" onclick="startOrder()">Order Delivery</button></div>';
var darken = '<div id="view-dark"></div>';
function openPopup(){
    $('body').prepend(darken);
    $('body').prepend(menuPopUp);
};
function closePopup(){
    $('#order-popup').remove();
    $('#order-popup').remove();
};
function startOrder(){
    console.log('start order');
};