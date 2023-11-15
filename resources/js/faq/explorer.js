window.FaqExplorer = function (manager) {
    this.manager = manager;

    this._ui = {
        faqFilter: null,
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

    this.getArticlesByCategory = async function (categoryId = null) {
        console.debug(`Getting articles from categoryId = ${categoryId ?? 'any'}`);


    }

}