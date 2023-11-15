window.Faq = function () {

    this.sideBar = null;
    this.dataClick = null;
    this.explorer = null;

    this.listeners = {};

    this.init = async function () {
        console.debug('Faq init.');

        this.sideBar = new FaqSideBar(this);
        this.dataClick = new FaqDataClick(this);
        this.explorer = new FaqExplorer(this);

        this._initUI();
        this._initComponentsAndModals();

        this.rehidrate();
    }

    this._initUI = function () { }

    this.uiGet = function (selector) {
        const element = $(document).find(selector);
        return element;
    }

    this._initComponentsAndModals = function () {
        for (let prop in this) {
            let element = this[prop];
            let skipInit = !element || !element.hasOwnProperty('init') || element == this.main;

            if (skipInit) {
                continue;
            }

            element.init();
        }

        for (let modal in this.modals) {
            this.modals[modal].init();
        }
    }

    this.addEventListener = function (eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(callback);
    }

    this.dispatchEvent = function (eventName, detail) {
        const event = new CustomEvent(eventName, { 'detail': detail });

        if (typeof eventName === 'string') {
            if (!this.listeners[eventName]) {
                console.debug('No event listener for:', eventName);
                return;
            }

            console.debug('Dispatching event:', eventName, detail);

            this.listeners[eventName].forEach(listener => {
                listener(event);
            });

            return;
        }

        eventName.map(name => {
            if (!this.listeners[name]) {
                console.debug('No event listener for:', name);
                return;
            }

            console.debug('Dispatching event sequence:', name, detail);

            this.listeners[name].forEach(listener => {
                listener(event);
            });
        });
    }

    this.rehidrate = function () {
        this.dataClick.rehidrate();
        feather.replace();
    }

}