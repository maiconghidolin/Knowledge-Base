<nav class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow">
    <div class="navbar-container d-flex content">
        <div class="bookmark-wrapper d-flex align-items-center">

        </div>
        <ul class="nav navbar-nav align-items-center ms-auto">
            <li class="nav-item dropdown dropdown-language"><a class="nav-link dropdown-toggle" id="dropdown-flag" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="flag-icon flag-icon-us"></i><span class="selected-language">English</span></a>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-flag">
                    <a class="dropdown-item" href="#" data-language="en">
                        <i class="flag-icon flag-icon-us"></i> English</a>
                    <a class="dropdown-item" href="#" data-language="fr">
                        <i class="flag-icon flag-icon-fr"></i> French</a>
                    <a class="dropdown-item" href="#" data-language="de">
                        <i class="flag-icon flag-icon-de"></i> German</a>
                    <a class="dropdown-item" href="#" data-language="pt">
                        <i class="flag-icon flag-icon-pt"></i> Portuguese</a>
                </div>
            </li>

            <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-style"><i class="ficon" data-feather="moon"></i></a></li>

            <li class="nav-item dropdown dropdown-user"><a class="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="user-nav d-sm-flex d-none"><span class="user-name fw-bolder">John Doe</span><span class="user-status">Admin</span></div><span class="avatar"><img class="round" src="{{ asset('images/portrait/small/avatar-s-11.jpg') }}" alt="avatar" height="40" width="40"><span class="avatar-status-online"></span></span>
                </a>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user"><a class="dropdown-item" href="page-profile.html"><i class="me-50" data-feather="user"></i> Profile</a><a class="dropdown-item" href="app-email.html"><i class="me-50" data-feather="mail"></i> Inbox</a><a class="dropdown-item" href="app-todo.html"><i class="me-50" data-feather="check-square"></i> Task</a><a class="dropdown-item" href="app-chat.html"><i class="me-50" data-feather="message-square"></i> Chats</a>
                    <div class="dropdown-divider"></div><a class="dropdown-item" href="page-account-settings-account.html"><i class="me-50" data-feather="settings"></i> Settings</a><a class="dropdown-item" href="page-pricing.html"><i class="me-50" data-feather="credit-card"></i> Pricing</a><a class="dropdown-item" href="page-faq.html"><i class="me-50" data-feather="help-circle"></i> FAQ</a><a class="dropdown-item" href="auth-login-cover.html"><i class="me-50" data-feather="power"></i> Logout</a>
                </div>
            </li>
        </ul>
    </div>
</nav>