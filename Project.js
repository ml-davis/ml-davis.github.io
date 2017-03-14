
class Project {
    constructor(id, description, technologies, link) {
        this._id = id;
        this._name = convertFromCamelCase(id);
        this._description = description;
        this._technologies = technologies;
        this._link = link;
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

    getLink() {
        return this._link;
    }
}

function convertFromCamelCase(phrase) {
    let result = phrase.replace( /[A-Z]/g, " $&");
    return result.charAt(0).toUpperCase() + result.slice(1);
}