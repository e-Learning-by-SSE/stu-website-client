import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "student-mgmt-icon",
	template: `<svg
		[ngStyle]="{ color: 'white', height: size + 'px', width: size + 'px' }"
		style="display: inline-block; margin-top: -2px; vertical-align: middle; position: relative;"
	>
		<use [attr.href]="'assets/icons/sprites.svg#' + name"></use>
	</svg>`,
	encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {
	@Input() name!: string;
	@Input() size = "24";

	constructor() {}

	ngOnInit(): void {}
}

@NgModule({
	declarations: [IconComponent],
	exports: [IconComponent],
	imports: [CommonModule]
})
export class IconComponentModule {}
