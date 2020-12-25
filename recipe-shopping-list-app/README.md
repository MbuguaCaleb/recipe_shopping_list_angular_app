**PROJECT NOTES**

```
(a)Creating a Component without a test file

  ng g c recipes --skipTests true

(b)Creating compoents children(within another component folder)

ng g c recipes/recipe-list --skipTests true

(b)Good instance where i can use two approaches is the src

  <img [src]="recipe.imagePath" src="{{recipe.imagePath}}" alt="{{recipe.name}}" class="img-responsive" style="max-height: 50px;">

I can use it normally i use in HTML (src="{{recipe.imagePath}}")

Or via property binding in Angular.[src]="recipe.imagePath".In pr

(c)There are three ways of debugging my application.

(i)Checking at the error log in the console.

(ii)I may check via my browser sources and select webpack and navigating through
my various directories i should be able to get all my typescript files.

(iii)I may use a tool called Augury.

It is more like redux dev tools where i can be able to see the properties of all components.

It helps me understand my application at run time.



```

**Module Two**

```

(a) I may have a propery taking a type of a class that i had defined

(b)For reusable data and so as to simplify type definitions we should create
models.

 @Output() shoppingList = new EventEmitter<Ingredient>();

 Ingredient  which is an object becomes my type simplifying my work ...

 @Output() shoppingList =new EventEmitter<{name:string, amount:number}>();


```

**Notes by**

```
MbuguaCaleb

```
