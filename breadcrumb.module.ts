import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		BreadcrumbComponent
	],
	providers: [],
	exports: [BreadcrumbComponent]

})

export class BreadcrumbModule { }
