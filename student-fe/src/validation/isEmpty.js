const isEmpty = value => {
    return (
        value == null ||
        value == undefined ||
        (typeof value == 'object' && Object.keys(value).length == 0) ||
        (Array.isArray(value) && value.length == 0)
    )
}

export {isEmpty};
