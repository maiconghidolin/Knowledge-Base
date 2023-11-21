window.FaqCategoryModal = function (manager) {
    this.manager = manager;

    this._categoryId = null;
    this._category = null;
    this._isClosing = false;
    this._shouldConfirmExit = false;
    this._options = {};

    this._ui = {
        modal: null,
        btnSave: null,
        loading: null,
    }

    this.init = function () {
        console.debug('Category modal init');

        this._ui.modalElement = this.manager.uiGet('.faq-modal-category');
        this._ui.loading = this._ui.modalElement.find('.faq-modal-category-loading');

        this._ui.title = this._ui.modalElement.find('.faq-modal-category-title');
        this._ui.intro = this._ui.modalElement.find('.faq-modal-category-intro');
        this._ui.fields = this._ui.modalElement.find('.user-input');
        this._ui.btnSave = this._ui.modalElement.find('.faq-modal-category-btn-save');

        this._ui.modalElement.on('show.bs.modal', this._onModalShown.bind(this));
        this._ui.modalElement.on('hide.bs.modal', this._onModalHide.bind(this));

        this._ui.fields.find(':input').one('change', this._onFieldChange.bind(this));
        this._ui.btnSave.on('click', this._onSaveClicked.bind(this));
    }

    this._onFieldChange = function (e) {
        this._shouldConfirmExit = true;
    }

    this._onModalShown = async function (evt) {
        this._reset();

        const categoryItem = $(evt.relatedTarget).closest('.category-item');
        if (!categoryItem.length) {
            this._category = null;
            this.open({ title: 'Create Category', confirmExit: true });
            return;
        }

        console.log('Category item:', categoryItem);

        this._categoryId = categoryItem.data('id');
        const category = await this.manager.categories.getById(categoryItem.data('id'));

        if (category.id != this._categoryId) {
            return;
        }

        this._category = category;
        this._focusOnNameField();

        this.open({ title: 'Edit Category', confirmExit: true });
    }

    this._focusOnNameField = function () {
        this._ui.fields.find(':input[name="name"]').focus();
    }

    this._onModalHide = function (e) {
        if (this._isClosing) {
            return;
        }

        if (!this._shouldConfirmExit || !this._options.confirmExit) {
            if (this._options.onClose) {
                this._options.onClose();
            }
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        this.manager.modals.generic.open({
            title: 'Close without saving?',
            content: 'Are you sure you want to close this without saving?',
        }, () => {
            // Confirmed the exit
            this._isClosing = true;
            this._ui.modalElement.modal('hide');
        }, () => {
            // Cancled the exit
            this._isClosing = false;
        });
    }

    this._onSaveClicked = async function (e) {
        this._ui.fields.find(':input').removeClass('is-invalid');

        this._ui.btnSave.prop('disabled', true);

        const response = await this._doSaveAction();

        this._ui.btnSave.prop('disabled', false);

        if (!response?.errors) {
            console.log('Category saved', response);
            this._forceClose();
            this.manager.sideBar.refresh();
            return;
        }

        for (const field in response.errors) {
            const error = response.errors[field];
            const fieldElement = this._ui.fields.find(`:input[name="${field}"]`);
            fieldElement.addClass('is-invalid').parent().find('.invalid-feedback').text(error);
        }
    }

    this._doSaveAction = async function () {
        const data = this._getFieldValuesAsObject();
        const isEditing = this._category != null;

        let response = null;

        if (isEditing) {
            const response = await this.manager.categories.update(this._category.id, data);

            if (!response || response.errors) {
                return response;
            }

            this._category = response;
            return this._category;
        }

        response = await this.manager.categories.create(data);

        if (!response || response.errors) {
            return response;
        }

        this._category = response;
        return this._category;
    }

    this._getFieldValuesAsObject = function () {
        const data = {};
        this._ui.fields.each((index, container) => {
            const fields = $(container).find(':input');
            fields.each((index, field) => {
                const name = $(field).attr('name');
                data[name] = $(field).val();
            });
        });

        return data;
    }

    this._forceClose = function () {
        this._isClosing = true;

        if (this._options.onClose) {
            this._options.onClose();
        }

        this._ui.modalElement.modal('hide');

        this._clear();
    }

    this.open = async function (options) {
        this._options = options || {};

        console.log(`Category modal shown with ${this._category ? `${this._category.name} (${this._category.id})` : 'no category'}`);

        this._fillFieldValues();
    }

    this._fillFieldValues = function () {
        const isEditing = this._category != null;
        if (!isEditing) {
            return;
        }

        this._ui.fields.each((index, container) => {
            const fields = $(container).find(':input');
            fields.each((index, field) => {
                const name = $(field).attr('name');
                const value = this._category[name] ?? '';
                $(field).val(value);
            });
        });

        return;
    }

    this._clear = function () {
        this._ui.fields.find(':input').val('').removeClass('is-invalid');
    }

    this._reset = function () {
        this._isClosing = false;
        this._shouldConfirmExit = false;

        this._ui.title.text(this._options.title || 'Create Category');
        this._ui.intro.text(this._options.intro || '');
        this._ui.btnSave.text(this._options.saveBtnLabel || 'Save').prop('disabled', false);

        this._clear();
    }

}
