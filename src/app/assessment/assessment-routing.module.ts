import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
	{ path: "editor", loadChildren: () => import("../assessment-editor/assessment-editor.module").then(m => m.AssessmentEditorModule) },
	{ path: "", loadChildren: () => import("../assessment-overview/assessment-overview.module").then(m => m.AssessmentOverviewModule) },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AssessmentRoutingModule { }
							