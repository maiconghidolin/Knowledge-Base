window.FaqCategories = function (manager) {
    this.manager = manager;

    this.init = function () { }

    this.getById = async function (categoryId) {
        console.debug(`FaqCategories get`, categoryId);

        return axios.get(`faq/categories/${categoryId}`)
            .then(response => {
                if (response.data.error) {
                    console.error(response.data.error);
                    return null;
                }

                const category = response.data;
                console.log('FaqCategories response get', category);
                return category;
            }).catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
                console.error(error);
            })
    }

    this.create = function (data) {
        console.log(`FaqCategories create`, data);

        return axios.post('faq/categories/', data)
            .then(response => {
                if (response.data.error) {
                    console.error(response.data.error);
                    return null;
                }

                const category = response.data;
                console.debug('FaqCategories response create', category);
                this.manager.dispatchEvent(FaqEvent.CATEGORY_CREATED, { category });
                return category;
            }).catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
                console.error(error);
            })
    }

    this.update = function (categoryId, data) {
        console.log(`FaqCategories update`, categoryId, data);

        return axios.patch(`faq/categories/${categoryId}`, data)
            .then(response => {
                if (response.data.error) {
                    console.error(response.data.error);
                    return null;
                }

                const category = response.data;
                console.debug('FaqCategories response update', category);
                this.manager.dispatchEvent(FaqEvent.CATEGORY_UPDATED, { category });
                return category;
            }).catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
                console.error(error);
            })
    }

    this.delete = async function (categoryId) {
        return await axios.delete(`faq/categories/${categoryId}`)
            .then(response => {
                if (response.data.error) {
                    return null;
                }
                this.manager.dispatchEvent(FaqEvent.CATEGORY_DELETED, { category: response.data });
                return response.data;
            }).catch(error => {
                console.error(error);
            });
    }

}
