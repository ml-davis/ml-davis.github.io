
class Project {
    constructor(id, description, technologies, videoURL, gitLinks) {
        this._id = id;
        this._name = convertFromCamelCase(id);
        this._description = description;
        this._technologies = technologies;
        this._videoURL = videoURL;
        this._gitLinks = gitLinks;
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

    getVideoURL() {
        return this._videoURL;
    }

    getLinks() {
        return this._gitLinks;
    }
}

// changes id to name: embeddedSystems -> Embedded Systems
function convertFromCamelCase(phrase) {
    let result = phrase.replace( /[A-Z]/g, " $&");
    return result.charAt(0).toUpperCase() + result.slice(1);
}