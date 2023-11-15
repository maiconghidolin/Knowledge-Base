window.FaqDataClick = function (manager) {
    this.manager = manager;

    this.ui = {
        clickables: null,
    }

    this.init = function () {
        console.debug('DataClick init');
        this.rehidrate();
    }

    this.rehidrate = function () {
        this.ui.clickables = this.manager.uiGet('[data-click]');
        this.ui.clickables.off('click').on('click', this.onClickableClick.bind(this));
    }

    this.onClickableClick = function (e) {
        const target = $(e.currentTarget);
        const action = target.data('click');

        console.debug(`DOM element with data-click="${action}" clicked:`, target);
        this.click(target, action);
    }

    this.click = function (target, action) {
        console.debug(`Making click with action "${action}" for`, target);
        this.manager.dispatchEvent(FaqEvent.CLICK, { target, action });
    }
}
