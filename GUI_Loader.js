
function insertNavBar(projects) {

    const window_width = window.innerWidth;
    if (window_width >= 1310) {

        const width = 1310 / projects.length - (projects.length - 1) * 3.75;

        for (const project of projects) {
            document.write(`<a onclick="location.href='#` + project.getID() + `'">`);
            document.write(`<div class="navTab" style="width: ` + width + `px">`);
            document.write(`<h4>` + project.getName() + `</h4>`);
            document.write(`</div>`);
            document.write(`</a>`);
        }
    }
}

function loadProjects() {
    for (const project of projects) {

        // load name and description
        document.write("<div id='" + project.getID() + "' class='project'>");
        document.write("<h3>" + project.getName() + "</h3>");
        document.write("<p>" + project.getDescription() + "</p>");
        document.write("<p>Uses:" + project.getTechnologies() + "</p>");

        loadVideo(project.getVideoURL());

        loadProjectImage(project.getID() + "1");
        loadProjectImage(project.getID() + "2");
        loadProjectImage(project.getID() + "3");

        // load GitHub links
        if (project.getLinks().length > 0) {
            document.write("<p>GitHub:</p>");
            for (const link of project.getLinks()) {
                document.write("<a target='_blank' href='" + link + "'>" + link + "</a><br/>");
            }
        }

        document.write("<br/><br/></div><hr/>");
    }
}

function loadProjectImage(id) {
    const imagePath = 'Images/' + id + '.png';
    document.write("<a target='_blank' href ='" + imagePath + "'>");
    document.write("<img class='projectImage' src='" + imagePath + "'/>");
    document.write("</a>");
}

function loadVideo(path) {
    document.write("<iframe class='projectVideo' src='" + path + "' allowfullscreen></iframe>");
}