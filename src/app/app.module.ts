import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {TooltipModule} from 'primeng/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { HomeoneBlogComponent } from './components/pages/home-demo-one/homeone-blog/homeone-blog.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { HomeoneDestinationsComponent } from './components/pages/home-demo-one/homeone-destinations/homeone-destinations.component';
import { CategoryComponent } from './components/common/category/category.component';
import { HomeoneListingsComponent } from './components/pages/home-demo-one/homeone-listings/homeone-listings.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HometwoListingsComponent } from './components/pages/home-demo-two/hometwo-listings/hometwo-listings.component';
import { HometwoDestinationsComponent } from './components/pages/home-demo-two/hometwo-destinations/hometwo-destinations.component';
import { HometwoEventsComponent } from './components/pages/home-demo-two/hometwo-events/hometwo-events.component';
import { HometwoBlogComponent } from './components/pages/home-demo-two/hometwo-blog/hometwo-blog.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { TeamComponent } from './components/common/team/team.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { RelatedProductsComponent } from './components/pages/products-details/related-products/related-products.component';
import { AuthorProfileComponent } from './components/pages/author-profile/author-profile.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { TopPlaceComponent } from './components/pages/top-place/top-place.component';
import { ListingsDetailsComponent } from './components/pages/listings-details/listings-details.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { EventsComponent } from './components/pages/events/events.component';
import { VerticalListingsLeftSidebarComponent } from './components/pages/vertical-listings-left-sidebar/vertical-listings-left-sidebar.component';
import { VerticalListingsRightSidebarComponent } from './components/pages/vertical-listings-right-sidebar/vertical-listings-right-sidebar.component';
import { VerticalListingsFullWidthComponent } from './components/pages/vertical-listings-full-width/vertical-listings-full-width.component';
import { GridListingsLeftSidebarComponent } from './components/pages/grid-listings-left-sidebar/grid-listings-left-sidebar.component';
import { GridListingsRightSidebarComponent } from './components/pages/grid-listings-right-sidebar/grid-listings-right-sidebar.component';
import { GridListingsFullWidthComponent } from './components/pages/grid-listings-full-width/grid-listings-full-width.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DashboardNavbarComponent } from './components/common/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidemenuComponent } from './components/common/dashboard-sidemenu/dashboard-sidemenu.component';
import { CopyrightsComponent } from './components/pages/dashboard/copyrights/copyrights.component';
import { StatsComponent } from './components/pages/dashboard/stats/stats.component';
import { RecentActivitiesComponent } from './components/pages/dashboard/recent-activities/recent-activities.component';
import { DashboardMessagesComponent } from './components/pages/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardBookingsComponent } from './components/pages/dashboard/dashboard-bookings/dashboard-bookings.component';
import { DashboardWalletComponent } from './components/pages/dashboard/dashboard-wallet/dashboard-wallet.component';
import { DashboardReviewsComponent } from './components/pages/dashboard/dashboard-reviews/dashboard-reviews.component';
import { DashboardInvoiceComponent } from './components/pages/dashboard/dashboard-invoice/dashboard-invoice.component';
import { DashboardMyProfileComponent } from './components/pages/dashboard/dashboard-my-profile/dashboard-my-profile.component';
import { DashboardAddListingsComponent } from './components/pages/dashboard/dashboard-add-listings/dashboard-add-listings.component';
import { DashboardBookmarksComponent } from './components/pages/dashboard/dashboard-bookmarks/dashboard-bookmarks.component';
import { DashboardMyListingsComponent } from './components/pages/dashboard/dashboard-my-listings/dashboard-my-listings.component';
import { ListingComponent } from './components/pages/listing/listing.component';
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserSidemenuComponent } from './components/common/user-panel/user-sidemenu/user-sidemenu.component';
import { UserPanelComponent } from './components/pages/user-panel/user-panel.component';
import { UserNavbarComponent } from './components/common/user-panel/user-navbar/user-navbar.component';
import { ProfileComponent } from './components/pages/user-panel/profile/profile.component';
import { ProfileComponent as pro } from './components/pages/user-panel/pro/profile/profile.component';
import { ProfileComponent as company } from './components/pages/user-panel/company/profile/profile.component';
 import {MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS} from '@angular/material/checkbox';

 import { NotifierModule } from 'angular-notifier';
 import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';

import {InputMaskModule} from 'primeng/inputmask';
import { ProfileTestComponent } from './components/test/profile-test/profile-test.component';

import { AdminComponent } from './components/pages/panel/admin/admin.component';
import { AllUsersComponent } from './components/pages/panel/admin/all-users/all-users.component';
import { ActifUsersComponent } from './components/pages/panel/admin/actif-users/actif-users.component';
import { PredingUsersComponent } from './components/pages/panel/admin/preding-users/preding-users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MessageService } from 'primeng/api';

import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import { PolicypageComponent } from './components/pages/policypage/policypage.component';
import { ConditionpageComponent } from './components/pages/conditionpage/conditionpage.component';

//import { ToastrModule } from 'ngx-toastr';

import {ListboxModule} from 'primeng/listbox';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';


 @NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    AppDownloadComponent,
    HowItWorksComponent,
    HomeoneBlogComponent,
    FeedbackStyleOneComponent,
    HomeoneDestinationsComponent,
    CategoryComponent,
    HomeoneListingsComponent,
    FeaturesComponent,
    HomeoneBannerComponent,
    FooterStyleOneComponent,
    NavbarStyleOneComponent,
    NavbarStyleTwoComponent,
    HometwoBannerComponent,
    HometwoListingsComponent,
    HometwoDestinationsComponent,
    HometwoEventsComponent,
    HometwoBlogComponent,
    ComingSoonComponent,
    NotFoundComponent,
    AboutUsComponent,
    PartnerComponent,
    TeamComponent,
    FunfactsComponent,
    HowItWorksPageComponent,
    PricingComponent,
    GalleryComponent,
    FaqComponent,
    ContactComponent,
    FooterStyleTwoComponent,
    BlogGridComponent,
    BlogRightSidebarComponent,
    BlogDetailsComponent,
    ProductsListComponent,
    CartComponent,
    CheckoutComponent,
    ProductsDetailsComponent,
    RelatedProductsComponent,
    AuthorProfileComponent,
    CategoriesComponent,
    TopPlaceComponent,
    ListingsDetailsComponent,
    EventsDetailsComponent,
    EventsComponent,
    VerticalListingsLeftSidebarComponent,
    VerticalListingsRightSidebarComponent,
    VerticalListingsFullWidthComponent,
    GridListingsLeftSidebarComponent,
    GridListingsRightSidebarComponent,
    GridListingsFullWidthComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidemenuComponent,
    CopyrightsComponent,
    StatsComponent,
    RecentActivitiesComponent,
    DashboardMessagesComponent,
    DashboardBookingsComponent,
    DashboardWalletComponent,
    DashboardReviewsComponent,
    DashboardInvoiceComponent,
    DashboardMyProfileComponent,
    DashboardAddListingsComponent,
    DashboardBookmarksComponent,
    DashboardMyListingsComponent,
    ListingComponent,
    UserSidemenuComponent,
    UserPanelComponent,
    UserNavbarComponent,
    ProfileComponent,
    pro, company, ProfileTestComponent,  AdminComponent, AllUsersComponent, ActifUsersComponent, PredingUsersComponent, PolicypageComponent, ConditionpageComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    SelectDropDownModule,
    NgxTypedJsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    MatCheckboxModule,
    NgxPaginationModule,
    SweetAlert2Module, NotifierModule,AutoCompleteModule,InputMaskModule,
    ListboxModule,

    ToastModule,TooltipModule,
    FileUploadModule,
    ButtonModule,DropdownModule, NgbModule
  ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    } ,   {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions},
          {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
