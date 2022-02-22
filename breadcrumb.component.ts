import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
	selector: 'wbreadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent{
	@Input() path: any = []
	@Input() divider: string = '/'
	constructor(public router: Router) {}

}
