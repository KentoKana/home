import "./index.d.ts";

String.prototype.stripHTMLTag = function () {
    return String(this).replace(/(<([^>]+)>)/gi, "");
}