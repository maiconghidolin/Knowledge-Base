window.FaqSideBar = function (manager) {
    this.manager = manager;

    this._ui = {
        overlay: null,
        sidebarLeft: null,
        sidebarMenuList: null,
        categoryList: null
    }

    this.init = async function () {
        console.debug('FaqSideBar init.');

        this.initUI();
        this.initScroll();

        this.manager.addEventListener(FaqEvent.CLICK, this._onGlobalClick.bind(this));
    }

    this.initUI = function () {
        this._ui.overlay = $('.body-content-overlay');
        this._ui.sidebarLeft = $('.sidebar-left');
        this._ui.sidebarMenuList = $('.sidebar-menu-list');
        this._ui.categoryList = $('.category-list');
    }

    this.initScroll = function () {
        if (!$.app.menu.is_touch_device()) {

            let sidebarListScrollbar = new PerfectScrollbar(this._ui.sidebarMenuList[0], {
                theme: 'dark'
            });

        }
        else {
            this._ui.sidebarMenuList.css('overflow', 'scroll');
        }
    }

    this._onGlobalClick = function (event) {
        const target = event.detail.target;
        const action = event.detail.action;

        if (!action?.startsWith('sidebar:')) {
            return;
        }

        this._onSidebarClick(target, action);
    }

    this._onSidebarClick = function (target, action) {
        const options = {
            'sidebar:toggle': this._sidebarToggle.bind(this),
            'sidebar:add-article': this._addArticleClick.bind(this),
            'sidebar:overlay': this._overlayClick.bind(this),
            'sidebar:category': this._sidebarCategoryClick.bind(this),
        }

        if (!options[action]) {
            console.warn('Unknown menu action', action);
            return;
        }

        options[action](target, action);
    }

    this._sidebarToggle = function () {
        this._ui.sidebarLeft.toggleClass('show');
        this._ui.overlay.addClass('show');
    }

    this._overlayClick = function () {
        this._ui.sidebarLeft.removeClass('show');
        this._ui.overlay.removeClass('show');
    }

    this._addArticleClick = function () {

    }

    this._sidebarCategoryClick = function (target) {
        this._ui.categoryList.find('a').removeClass('active');

        target.addClass('active');

        const categoryId = target.data('id');

        this.manager.explorer.getArticlesByCategory(categoryId);
    }

}