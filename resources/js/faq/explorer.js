window.FaqExplorer = function (manager) {
    this.manager = manager;
    this._activeCategoryId = null;
    this._activeTagId = null;

    this._ui = {
        faqFilter: null,
        faqArticleList: null,
        faqArticleListWrapper: null,
        noResults: null,
    }

    this.init = async function () {
        console.debug('FaqExplorer init.');

        this.initUI();
        this.initScroll();

        this._ui.faqFilter.on('keyup', this.onFilterKeyUp.bind(this));
    }

    this.initUI = function () {
        this._ui.faqFilter = $('#faq-search');
        this._ui.faqArticleList = $('#faq-article-list');
        this._ui.faqArticleListWrapper = $('.faq-article-list-wrapper');
        this._ui.noResults = $('.no-results');
    }

    this.initScroll = function () {
        if (!$.app.menu.is_touch_device()) {

            var articleListScrollbar = new PerfectScrollbar(this._ui.faqArticleListWrapper[0], {
                theme: 'dark'
            });

        }
        else {
            this._ui.faqArticleListWrapper.css('overflow', 'scroll');
        }
    }

    this.onFilterKeyUp = function () {
        var value = this._ui.faqFilter.val().toLowerCase();

        if (value !== '') {
            $('.faq-item').filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });

            var tbl_row = $('.faq-item:visible').length;

            if (tbl_row == 0) {
                if (!this._ui.noResults.hasClass('show')) {
                    this._ui.noResults.addClass('show');
                }
            } else {
                this._ui.noResults.removeClass('show');
            }
        } else {
            $('.faq-item').show();

            if (this._ui.noResults.hasClass('show')) {
                this._ui.noResults.removeClass('show');
            }
        }
    }

    this.setActiveCategory = async function (categoryId = null) {
        this._activeCategoryId = categoryId;
    }

    this.setActiveTag = async function (tagId = null) {
        this._activeTagId = tagId;
    }

    this.getArticles = async function () {
        console.debug(`Getting articles from categoryId = ${this._activeCategoryId ?? 'any'}, tagId = ${this._activeTagId ?? 'any'}`);

        await this._loadUpdatedContentView();
    }

    this._loadUpdatedContentView = async function () {
        let layoutUrl = 'articles/list';

        if (this._activeCategoryId && this._activeTagId)
            layoutUrl += `?category=${this._activeCategoryId}&tag=${this._activeTagId}`;
        else if (this._activeCategoryId)
            layoutUrl += `?category=${this._activeCategoryId}`;
        else if (this._activeTagId)
            layoutUrl += `?tag=${this._activeTagId}`;

        await this.manager.loadLayout(layoutUrl, this._ui.faqArticleList[0]);
    }

}