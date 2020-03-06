import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {TypographyComponent} from './typography/typography.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {ButtonToggleComponent} from './button-toggle/button-toggle.component';
import {IconsComponent} from './icons/icons.component';
import {BadgesComponent} from './badges/badges.component';
import {ProgressSpinnerComponent} from './progress-spinner/progress-spinner.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MenuComponent} from './menu/menu.component';
import {ListComponent} from './list/list.component';
import {GridListComponent} from './grid-list/grid-list.component';
import {ExpansionPanelComponent} from './expansion-panel/expansion-panel.component';
import {CardsComponent} from './cards/cards.component';
import {TabsComponent} from './tabs/tabs.component';
import {StepperComponent} from './stepper/stepper.component';
import {InputComponent} from './input/input.component';
import {SelectComponent} from './select/select.component';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import { CheckboxAndRadioButtonComponent } from './checkbox-and-radio-button/checkbox-and-radio-button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import {CustomSnackBarComponent, SnackbarComponent} from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DataTableComponent } from './data-table/data-table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxAndRadioButtonComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    CustomSnackBarComponent,
    DialogComponent,
    DialogExampleComponent,
    DataTableComponent,
    VirtualScrollingComponent
  ],
  entryComponents: [
    CustomSnackBarComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
