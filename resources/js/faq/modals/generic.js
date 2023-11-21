window.FaqGenericModal = function (manager) {
    this.manager = manager;
    this.modal = null;
    this.modalElement = null;
    this.submitButton = null;
    this.cancelButton = null;
    this.submitCallback = null;
    this.cancelCallback = null;

    this.init = function () {
        console.debug('Generic modal init');

        this.modalElement = this.manager.uiGet('.generic-modal');

        this.submitButton = this.modalElement.find('button.btn-primary');
        this.cancelButton = this.modalElement.find('button.btn-outline-secondary');

        this.modalElement.on('shown.bs.modal', this.onModalShown.bind(this));
        this.submitButton.on('click', this.onSubmitButtonClick.bind(this));
        this.cancelButton.on('click', this.onCancelButtonClick.bind(this));
    }

    this.onModalShown = function () {
    };

    this.createModal = function (options) {
        if (this.modal) {
            this.modal.dispose();
        }

        const title = options.title || 'Prompt';
        const content = options.content || '';
        const submit = options.submit || 'Confirm';
        const cancel = options.cancel || 'Cancel';

        this.modalElement.find('.modal-title').html(title);
        this.modalElement.find('.modal-body').html(content);
        this.submitButton.html(submit);
        this.cancelButton.html(cancel);

        this.modal = new bootstrap.Modal(this.modalElement[0], {
            keyboard: false
        });

        this.modal.show();
    }

    this.open = function (options, submitCallback, cancelCallback) {
        this.submitCallback = submitCallback;
        this.cancelCallback = cancelCallback;
        this.createModal(options);
    }

    this.onSubmitButtonClick = function (event) {
        if (!this.submitCallback) {
            return;
        }

        Promise.resolve(this.submitCallback(event, this.modal)).catch((error) => {
            console.error(error);
        });
    }

    this.onCancelButtonClick = function (event) {
        if (!this.cancelCallback) {
            return;
        }

        this.cancelCallback(event, this.modal);
    }
}
