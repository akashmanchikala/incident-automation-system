function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var na = g_form.getValue('category');
    var ma = g_form.getValue('subcategory');
    if (na == 'hardware' && ma == 'disk') {
		var as='0c4e7b573b331300ad3cc9bb34efc461';
        g_form.setValue('assignment_group', as);

    }

}
