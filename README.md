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

(d)Upgrading local angular version

ng update @angular/cli @angular/core


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

**Services**

```
They are like global state which i can call in my application.
Remeber that subscribe listens to an emmitted service.

```

**Custom Observables**

```
For my own custom Observables that are not
in buult into angular i must use the OnDestroy()
after i leave the component.

This is because the Observable information by default is maintained in the state.

this.router.params.subscribe((params: Params) => {
    this.id = +params["id"];

  });

Router Params Subsription is an Inbuilt Observable.

```

**Someting More About Routing**

```
The Routes with Parameters should always come before those without parameters.

Just like the wild card route should appear at the bottom Most.

children: [
  { path: "", component: RecipeStartComponent },
  { path: "new", component: RecipeEditComponent },
  { path: ":id", component: RecipeDetailComponent },
  { path: ":id/edit", component: RecipeEditComponent },
],]

As we see above child route new has come before ID So that angular does not confuse the
two.

```

**Naivigating Progamatically**

```
//its good practice to add relativeTo when navigating pragamatically
   onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
```

**Subjects vs Event Emitters**

```
I should use Subjects instead of emitters where i am using
eventemmitters just for cross component communiation and
not with @output.

Where i want to use @Output()->Emit a custom event, i should
stick with event emmiter

Subjects use next to send/emit new values.

When it is used with @Output, It means that it is Part of a Component.

```

**Notes by**

```
MbuguaCaleb

```
