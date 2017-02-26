
function loadProject(id, title, description, uses, githubLink, webLink) {

    document.write("<div id='" + id + "' class='project'>");
    document.write("<h3>" + title + "</h3>");
    document.write("<p>" + description + "</p>");
    document.write("<p>Uses:" + uses + "</p>");
    document.write("<p>GitHub: <a href='" + githubLink + "'>" + title + "</a></p>");

    if (webLink != undefined) {
        document.write("<p>Link: <a href='" + webLink + "'>" + title + "</a></p>");
    }

    document.write("<div class='projectVideo'>");
    document.write("<video width='1025' height='576' controls>");
    document.write("<source src='Media/Videos/" + id +".mp4' type='video/mp4'>");
    document.write("<video><br/>");
    document.write("</div>");
    loadProjectImage(id + "1");
    loadProjectImage(id + "2");
    loadProjectImage(id + "3");
    document.write("<br/><br/></div><hr/>");
}

function loadProjectImage(id) {
    document.write("<a href ='Media/Images/" + id + ".png'>");
    document.write("<img class='projectImage' src='Media/Images/" + id + ".png'/>");
    document.write("</a>");
}