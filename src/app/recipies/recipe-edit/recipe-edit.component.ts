import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    //this is the router params observable
    this.router.params.subscribe((params: Params) => {
      this.id = +params["id"];
      //itelligent code()
      //if this expression will evaluate to true meaning params is not null, then we set edit mode to true
      this.editMode = params["id"] != null;
      console.log(this.editMode);
    });
  }
}
