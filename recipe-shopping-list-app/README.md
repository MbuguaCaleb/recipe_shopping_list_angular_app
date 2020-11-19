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

```

**Notes by**

```
MbuguaCaleb

```
