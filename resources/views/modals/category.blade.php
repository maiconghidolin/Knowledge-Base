<div class="modal fade faq-modal-category" tabindex="-1" aria-labelledby="faq-modal-category-title" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-transparent">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body overflow-visible px-sm-5 mx-50 pb-4">
                <h1 class="text-center mb-1 faq-modal-category-title"></h1>
                <p class="text-center faq-modal-category-intro"></p>
                <p class="faq-modal-category-loading"></p>

                <div class="col-12 mb-1 needs-validation">
                    <div class="user-input mb-1">
                        <input name="name" class="form-control faq-modal-category-name-input" autocomplete="off" placeholder="{{ __('Type the name of the category') }}" tabindex="1" maxlength="255" />
                        <div class="invalid-feedback">
                            <!-- filled via js -->
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-3">
                    <button class="btn btn-primary float-end faq-modal-category-btn-save" tabindex="2"></button>
                </div>
            </div>
        </div>
    </div>
</div>