
class Project {
    constructor(id, description, technologies, links) {
        this._id = id;
        this._name = convertFromCamelCase(id);
        this._description = description;
        this._technologies = technologies;
        this._links = links;
    }

    getID() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getDescription() {
        return this._description;
    }

    getTechnologies() {
        return this._technologies;
    }

    getLinks() {
        return this._links;
    }
}

function convertFromCamelCase(phrase) {
    let result = phrase.replace( /[A-Z]/g, " $&");
    return result.charAt(0).toUpperCase() + result.slice(1);
}