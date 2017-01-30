import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MyComponent } from './component'
import { MaterialModule } from '@angular/material'

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		MaterialModule.forRoot(),
	],
	declarations: [MyComponent],
	bootstrap: [MyComponent],
	providers: []
})
export class MyModule {}

platformBrowserDynamic().bootstrapModule(MyModule)
