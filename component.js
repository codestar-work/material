import { Component, Inject } from '@angular/core'

@Component({
	selector: 'material-app',
	template: `
		<div>
			<md-slide-toggle>Slide Toggle</md-slide-toggle>
			<div class="button-row">
				<button md-button>Flat button</button>
				<button md-raised-button>Raised button</button>
				<button md-fab><md-icon>check</md-icon></button>
				<button md-mini-fab><md-icon>check</md-icon></button>
			</div>
		</div>
	`
})
export class MyComponent {

}
