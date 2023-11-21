window.FaqSideBar = function (manager) {
    this.manager = manager;

    this._ui = {
        overlay: null,
        sidebarLeft: null,
        sidebarMenuList: null,
        categoryList: null,
        tagList: null,
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
        this._ui.tagList = $('.tag-list');
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
            'sidebar:category-delete': this._openModalDeleteCategory.bind(this),
            'sidebar:tag': this._sidebarTagClick.bind(this),
            'sidebar:tag-delete': this._openModalDeleteTag.bind(this),
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
        this._markClickedCategoryAsActive(target);

        const categoryId = target.data('id');
        this.manager.explorer.setActiveCategory(categoryId);
        this.manager.explorer.getArticles();
    }

    this._openModalDeleteCategory = function (target) {
        console.debug('category delete');
       
        const menuItem = target.closest('.category-item');
        const categoryId = menuItem.data('id');

        const modalOptions = {
            title: 'Delete category?',
            content: 'Are you sure you want to delete this category?',
        };

        this.manager.modals.generic.open(modalOptions, () => this._deleteCategory(categoryId));
    }

    this._deleteCategory = async function (categoryId) {
        this.manager.categories.delete(categoryId)
            .then(response => {
                if (response.error) {
                    console.error(response.error);
                    return;
                }

                this.manager.explorer.setActiveCategory(null);

                this.manager.explorer.getArticles();

                this._removeCategoryFromMenu(categoryId);

                this._markActiveCategoryOrFallBackToAny();
            });
    }

    this._removeCategoryFromMenu = function (categoryId) {
        const menuItem = this._ui.menu.items.find(`div.category-item[data-id="${categoryId}"]`);
        menuItem.remove();
    }

    this._markActiveCategoryOrFallBackToAny = function () {
        const activeCategoryId = this.manager.explorer.getActiveCategoryId();

        const menuItem = activeCategoryId
            ? this._ui.categoryList.find(`div.category-item[data-id="${activeCategoryId}"]`)
            : this._ui.categoryList.find('.category-item:first');

        this._markClickedCategoryAsActive(menuItem);
    }

    this._markClickedCategoryAsActive = function (target) {
        this._ui.categoryList.find('.category-item').removeClass('active');

        target.find('.category-item').addClass('active');
    }

    this._sidebarTagClick = function (target) {
        this._ui.tagList.find('a').removeClass('active');

        target.addClass('active');

        const tagId = target.data('id');
        this.manager.explorer.setActiveTag(tagId);
        this.manager.explorer.getArticles();
    }

}