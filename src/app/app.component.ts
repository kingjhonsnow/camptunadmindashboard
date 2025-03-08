import { Component } from "@angular/core";
import { NgClass } from "@angular/common";  // ✅ Import NgClass
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NgClass],  // ✅ Add NgClass here
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  status = false;

  addToggle() {
    this.status = !this.status;
    console.log("Sidebar status:", this.status); // Debugging log
  }
}
