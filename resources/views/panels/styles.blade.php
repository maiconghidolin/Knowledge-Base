<!-- BEGIN: Vendor CSS-->

<link rel="stylesheet" href="{{ asset(mix('vendors/css/vendors.min.css')) }}" />

@yield('vendor-style')
<!-- END: Vendor CSS-->

<!-- BEGIN: Theme CSS-->
<link rel="stylesheet" href="{{ asset(mix('css/base/bootstrap.css')) }}" />
<link rel="stylesheet" href="{{ asset(mix('css/base/bootstrap-extended.css')) }}" />
<link rel="stylesheet" href="{{ asset(mix('css/base/colors.css')) }}" />
<link rel="stylesheet" href="{{ asset(mix('css/base/components.css')) }}" />
<link rel="stylesheet" href="{{ asset(mix('css/base/themes/dark-layout.css')) }}" />
<link rel="stylesheet" href="{{ asset(mix('css/base/themes/bordered-layout.css')) }}" />
<link rel="stylesheet" href="{{ asset(mix('css/base/themes/semi-dark-layout.css')) }}" />

<!-- BEGIN: Page CSS-->
<link rel="stylesheet" href="{{ asset(mix('css/base/core/menu/menu-types/vertical-menu.css')) }}" />

@yield('page-style')

<!-- BEGIN: Custom CSS-->
<link rel="stylesheet" href="{{ asset(mix('css/style.css')) }}" />