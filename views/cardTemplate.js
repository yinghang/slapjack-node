function pug_attr(t,e,n,r){if(e===!1||null==e||!e&&("class"===t||"style"===t))return"";if(e===!0)return" "+(r?t:t+'="'+t+'"');if("function"==typeof e.toISOString)e=e.toISOString();else if("string"!=typeof e&&(e=JSON.stringify(e),!n&&-1!==e.indexOf('"')))return" "+t+"='"+e.replace(/'/g,"&#39;")+"'";return n&&(e=pug_escape(e))," "+t+'="'+e+'"'}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(i){pug_rethrow(n,null,r)}var a=3,o=t.split("\n"),h=Math.max(r-a,0),s=Math.min(o.length,r+a),a=o.slice(h,s).map(function(n,e){var t=e+h+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+a+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}function cardTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (blah) {;pug_debug_line = 1;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["suit"] = pug_interp = function(type, color, dimension){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = ".\u002Fcards.pug";
if (color == 'black') {
;pug_debug_line = 4;pug_debug_filename = ".\u002Fcards.pug";
var color = '#363636'
}
;pug_debug_line = 5;pug_debug_filename = ".\u002Fcards.pug";
if (color == 'red') {
;pug_debug_line = 6;pug_debug_filename = ".\u002Fcards.pug";
var color = '#d64c4c';
}
;pug_debug_line = 8;pug_debug_filename = ".\u002Fcards.pug";
var width = '100%';
;pug_debug_line = 9;pug_debug_filename = ".\u002Fcards.pug";
var height = '100%';
;pug_debug_line = 11;pug_debug_filename = ".\u002Fcards.pug";
if (type == 'Spade') {
;pug_debug_line = 13;pug_debug_filename = ".\u002Fcards.pug";
if (dimension == 'true') {
;pug_debug_line = 14;pug_debug_filename = ".\u002Fcards.pug";
var width = '37px'
;pug_debug_line = 15;pug_debug_filename = ".\u002Fcards.pug";
var height = '39px'
}
;pug_debug_line = 17;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Csvg" + (" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" xmlns:a=\"http:\u002F\u002Fns.adobe.com\u002FAdobeSVGViewerExtensions\u002F3.0\u002F\" x=\"0px\" y=\"0px\""+pug_attr("width", width, true, false)+pug_attr("height", height, true, false)+" viewBox=\"0 0 18.6 19.5\" enable-background=\"new 0 0 18.6 19.5\" xml:space=\"preserve\"") + "\u003E";
;pug_debug_line = 18;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cg\u003E";
;pug_debug_line = 19;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpath fill=\"";
;pug_debug_line = 19;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = color) ? "" : pug_interp));
;pug_debug_line = 19;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" d=\"M17.2,9.5L17.2,9.5L9.3,0l-8,9.5h0c-0.8,0.8-1.3,2-1.3,3.3c0,2.6,2.1,4.6,4.6,4.6c2.5,0,4.6-2.1,4.6-4.6h0 c0,2.5,2.1,4.6,4.6,4.6c2.6,0,4.6-2.1,4.6-4.6C18.6,11.4,18,10.3,17.2,9.5z\"\u002F\u003E\n\u003Cpolygon fill=\"";
;pug_debug_line = 20;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = color) ? "" : pug_interp));
;pug_debug_line = 20;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"6.8,19.5 11.8,19.5 9.3,15.1\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
}
else
if (type == 'Heart') {
;pug_debug_line = 24;pug_debug_filename = ".\u002Fcards.pug";
if (dimension == 'true') {
;pug_debug_line = 25;pug_debug_filename = ".\u002Fcards.pug";
var width = '36px'
;pug_debug_line = 26;pug_debug_filename = ".\u002Fcards.pug";
var height = '34px'
}
;pug_debug_line = 28;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Csvg" + (" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" xmlns:a=\"http:\u002F\u002Fns.adobe.com\u002FAdobeSVGViewerExtensions\u002F3.0\u002F\" x=\"0px\" y=\"0px\""+pug_attr("width", width, true, false)+pug_attr("height", height, true, false)+" viewBox=\"0 0 18.2 17\" enable-background=\"new 0 0 18.2 17\" xml:space=\"preserve\"") + "\u003E";
;pug_debug_line = 29;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpath fill=\"";
;pug_debug_line = 29;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = color) ? "" : pug_interp));
;pug_debug_line = 29;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" d=\"M18.2,4.5c0-2.5-2-4.5-4.5-4.5c-2.5,0-4.5,2-4.5,4.5h0C9.1,2,7,0,4.5,0C2,0,0,2,0,4.5 c0,1.2,0.5,2.4,1.3,3.2h0L9.1,17l7.8-9.3h0C17.7,6.9,18.2,5.8,18.2,4.5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
}
else
if (type == 'Diamond') {
;pug_debug_line = 33;pug_debug_filename = ".\u002Fcards.pug";
if (dimension == 'true') {
;pug_debug_line = 34;pug_debug_filename = ".\u002Fcards.pug";
var width = '37px'
;pug_debug_line = 35;pug_debug_filename = ".\u002Fcards.pug";
var height = '44px'
}
;pug_debug_line = 37;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Csvg" + (" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" xmlns:a=\"http:\u002F\u002Fns.adobe.com\u002FAdobeSVGViewerExtensions\u002F3.0\u002F\" x=\"0px\" y=\"0px\""+pug_attr("width", width, true, false)+pug_attr("height", height, true, false)+" viewBox=\"0 0 18.2 21.7\" enable-background=\"new 0 0 18.2 21.7\" xml:space=\"preserve\"") + "\u003E";
;pug_debug_line = 38;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cg\u003E";
;pug_debug_line = 39;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpolygon fill=\"";
;pug_debug_line = 39;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = color) ? "" : pug_interp));
;pug_debug_line = 39;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"9.1,0 0,10.8 9.1,21.7 18.2,10.8\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
}
else
if (type == 'Club') {
;pug_debug_line = 43;pug_debug_filename = ".\u002Fcards.pug";
if (dimension == 'true') {
;pug_debug_line = 44;pug_debug_filename = ".\u002Fcards.pug";
var width = '36px'
;pug_debug_line = 45;pug_debug_filename = ".\u002Fcards.pug";
var height = '37px'
}
;pug_debug_line = 47;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Csvg" + (" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" xmlns:a=\"http:\u002F\u002Fns.adobe.com\u002FAdobeSVGViewerExtensions\u002F3.0\u002F\" x=\"0px\" y=\"0px\""+pug_attr("width", width, true, false)+pug_attr("height", height, true, false)+" viewBox=\"0 0 18.2 19.1\" enable-background=\"new 0 0 18.2 19.1\" xml:space=\"preserve\"") + "\u003E";
;pug_debug_line = 48;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cg\u003E";
;pug_debug_line = 49;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpath fill=\"";
;pug_debug_line = 49;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = color) ? "" : pug_interp));
;pug_debug_line = 49;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" d=\"M13.6,7.7c-0.6,0-1.2,0.1-1.7,0.3c1.1-0.8,1.7-2.1,1.7-3.6c0-2.5-2-4.5-4.5-4.5S4.5,2,4.5,4.5 c0,1.4,0.7,2.7,1.7,3.6C5.7,7.9,5.2,7.7,4.5,7.7C2,7.7,0,9.8,0,12.3s2,4.5,4.5,4.5s4.5-2,4.5-4.5c0,0,0,0,0,0l0,0l0,0c0,0,0,0,0,0 c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5S16.1,7.7,13.6,7.7z\"\u002F\u003E\n\u003Cpolygon fill=\"";
;pug_debug_line = 50;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = color) ? "" : pug_interp));
;pug_debug_line = 50;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"6.6,19.1 11.6,19.1 9.1,14.7\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
}
};
;pug_debug_line = 52;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["royal"] = pug_interp = function(type, color){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 53;pug_debug_filename = ".\u002Fcards.pug";
if (type == 'Jack') {
;pug_debug_line = 55;pug_debug_filename = ".\u002Fcards.pug";
if (color == 'red') {
;pug_debug_line = 56;pug_debug_filename = ".\u002Fcards.pug";
var colorOne = '#d74b4c'
;pug_debug_line = 57;pug_debug_filename = ".\u002Fcards.pug";
var colorTwo = '#c84145'
}
else {
;pug_debug_line = 59;pug_debug_filename = ".\u002Fcards.pug";
var colorOne = '#0c79bc';
;pug_debug_line = 60;pug_debug_filename = ".\u002Fcards.pug";
var colorTwo = '#025490';
}
;pug_debug_line = 62;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Csvg version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" xmlns:a=\"http:\u002F\u002Fns.adobe.com\u002FAdobeSVGViewerExtensions\u002F3.0\u002F\" x=\"0px\" y=\"0px\" width=\"113px\" height=\"52px\" viewBox=\"0 0 56.5 27.7\" enable-background=\"new 0 0 56.5 27.7\" xml:space=\"preserve\"\u003E";
;pug_debug_line = 63;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cg\u003E";
;pug_debug_line = 64;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Crect id=\"XMLID_5_\" x=\"34.7\" y=\"9.7\" fill=\"#E55125\" width=\"9.1\" height=\"4\"\u002F\u003E\n\u003Crect id=\"XMLID_4_\" x=\"12.9\" y=\"9.7\" fill=\"#F57E20\" width=\"9.1\" height=\"4\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_3_\" fill=\"#FEBB18\" points=\"28.2,27.7 28.2,0 21.3,2 21.3,13.4 15,13.2 12.9,5.7 0,5.7 5.6,27.7\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_2_\" fill=\"#F49221\" points=\"28.2,27.7 28.2,0 35.2,2 35.2,13.4 41.4,13.2 43.5,5.7 56.5,5.7 50.8,27.7\"\u002F\u003E\n\u003Cpolygon fill=\"";
;pug_debug_line = 68;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorOne) ? "" : pug_interp));
;pug_debug_line = 68;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"3.1,17.9 4.5,23.4 28.2,23.4 28.2,17.9\"\u002F\u003E\n\u003Cpolygon fill=\"";
;pug_debug_line = 69;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorTwo) ? "" : pug_interp));
;pug_debug_line = 69;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"53.3,17.9 51.9,23.4 28.2,23.4 28.2,17.9\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
}
else
if (type == 'Queen') {
;pug_debug_line = 72;pug_debug_filename = ".\u002Fcards.pug";
if (color == 'red') {
;pug_debug_line = 73;pug_debug_filename = ".\u002Fcards.pug";
var colorOne = '#F59090'
;pug_debug_line = 74;pug_debug_filename = ".\u002Fcards.pug";
var colorTwo = '#F37B7B'
;pug_debug_line = 75;pug_debug_filename = ".\u002Fcards.pug";
var colorThree = '#EB5451'
;pug_debug_line = 76;pug_debug_filename = ".\u002Fcards.pug";
var colorFour = '#e43532'
;pug_debug_line = 77;pug_debug_filename = ".\u002Fcards.pug";
var colorFive = '#F15753'
;pug_debug_line = 78;pug_debug_filename = ".\u002Fcards.pug";
var colorSix = '#E14E4B'
;pug_debug_line = 79;pug_debug_filename = ".\u002Fcards.pug";
var colorSeven = '#A81F23'
;pug_debug_line = 80;pug_debug_filename = ".\u002Fcards.pug";
var colorEight = '#B62026'
}
else {
;pug_debug_line = 82;pug_debug_filename = ".\u002Fcards.pug";
var colorOne = '#7DA3D5'
;pug_debug_line = 83;pug_debug_filename = ".\u002Fcards.pug";
var colorTwo = '#6795CE'
;pug_debug_line = 84;pug_debug_filename = ".\u002Fcards.pug";
var colorThree = '#3480C3'
;pug_debug_line = 85;pug_debug_filename = ".\u002Fcards.pug";
var colorFour = '#0075BC'
;pug_debug_line = 86;pug_debug_filename = ".\u002Fcards.pug";
var colorFive = '#3C82C4'
;pug_debug_line = 87;pug_debug_filename = ".\u002Fcards.pug";
var colorSix = '#0A79BF'
;pug_debug_line = 88;pug_debug_filename = ".\u002Fcards.pug";
var colorSeven = '#005490'
;pug_debug_line = 89;pug_debug_filename = ".\u002Fcards.pug";
var colorEight = '#005A9A'
}
;pug_debug_line = 91;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Csvg version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" xmlns:a=\"http:\u002F\u002Fns.adobe.com\u002FAdobeSVGViewerExtensions\u002F3.0\u002F\" x=\"0px\" y=\"0px\" width=\"123px\" height=\"75px\" viewBox=\"0 0 61.1 37.2\" enable-background=\"new 0 0 61.1 37.2\" xml:space=\"preserve\"\u003E";
;pug_debug_line = 92;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpolygon id=\"XMLID_16_\" fill=\"#E55125\" points=\"46.8,23 42.5,17 61.1,3.7\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_15_\" fill=\"#F57E20\" points=\"14.4,23 0,3.7 18.6,17\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_14_\" fill=\"#FEBB18\" points=\"8.8,37.2 0,3.7 14.4,23 30.6,0 30.6,37.2\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_13_\" fill=\"#F49221\" points=\"52.3,37.2 61.1,3.7 46.8,23 30.6,0 30.6,37.2\"\u002F\u003E";
;pug_debug_line = 96;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cg\u003E";
;pug_debug_line = 97;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpolygon id=\"XMLID_12_\" fill=\"";
;pug_debug_line = 97;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorFive) ? "" : pug_interp));
;pug_debug_line = 97;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"30.6,23 23.9,23 27.2,27.9\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_11_\" fill=\"";
;pug_debug_line = 98;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorTwo) ? "" : pug_interp));
;pug_debug_line = 98;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"23.9,23 30.6,23 27.2,18.1\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_10_\" fill=\"";
;pug_debug_line = 99;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorOne) ? "" : pug_interp));
;pug_debug_line = 99;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"27.2,18.1 30.6,23 30.6,18.1 30.6,13.1\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_9_\" fill=\"";
;pug_debug_line = 100;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorThree) ? "" : pug_interp));
;pug_debug_line = 100;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"30.6,13.1 30.6,18.1 30.6,23 33.9,18.1\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_8_\" fill=\"";
;pug_debug_line = 101;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorEight) ? "" : pug_interp));
;pug_debug_line = 101;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"37.3,23 30.6,23 33.9,27.9\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_7_\" fill=\"";
;pug_debug_line = 102;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorFour) ? "" : pug_interp));
;pug_debug_line = 102;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"30.6,23 37.3,23 33.9,18.1\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_6_\" fill=\"";
;pug_debug_line = 103;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorSix) ? "" : pug_interp));
;pug_debug_line = 103;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"27.2,27.9 30.6,32.9 30.6,27.9 30.6,23\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_5_\" fill=\"";
;pug_debug_line = 104;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorSeven) ? "" : pug_interp));
;pug_debug_line = 104;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"30.6,23 30.6,27.9 30.6,32.9 33.9,27.9\"\u002F\u003E\u003C\u002Fg\u003E";
;pug_debug_line = 105;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpolygon id=\"XMLID_3_\" fill=\"#E38825\" points=\"37.3,23 30.6,32.9 30.6,37.2 46.3,37.2\"\u002F\u003E\n\u003Cpath id=\"XMLID_2_\" fill=\"#FFFFFF\" d=\"M30.6,19.8c-1.8,0-3.3-1.5-3.3-3.3c0,1.8-1.5,3.3-3.3,3.3c1.8,0,3.3,1.5,3.3,3.3 C27.3,21.2,28.8,19.8,30.6,19.8z\"\u002F\u003E\u003C\u002Fsvg\u003E";
}
else
if (type == 'King') {
;pug_debug_line = 110;pug_debug_filename = ".\u002Fcards.pug";
if (color == 'red') {
;pug_debug_line = 111;pug_debug_filename = ".\u002Fcards.pug";
var colorOne = '#F59090'
;pug_debug_line = 112;pug_debug_filename = ".\u002Fcards.pug";
var colorTwo = '#F37B7B'
;pug_debug_line = 113;pug_debug_filename = ".\u002Fcards.pug";
var colorThree = '#EB5451'
;pug_debug_line = 114;pug_debug_filename = ".\u002Fcards.pug";
var colorFour = '#e43532'
;pug_debug_line = 115;pug_debug_filename = ".\u002Fcards.pug";
var colorFive = '#F15753'
;pug_debug_line = 116;pug_debug_filename = ".\u002Fcards.pug";
var colorSix = '#E14E4B'
;pug_debug_line = 117;pug_debug_filename = ".\u002Fcards.pug";
var colorSeven = '#A81F23'
;pug_debug_line = 118;pug_debug_filename = ".\u002Fcards.pug";
var colorEight = '#B62026'
}
else {
;pug_debug_line = 120;pug_debug_filename = ".\u002Fcards.pug";
var colorOne = '#7DA3D5'
;pug_debug_line = 121;pug_debug_filename = ".\u002Fcards.pug";
var colorTwo = '#6795CE'
;pug_debug_line = 122;pug_debug_filename = ".\u002Fcards.pug";
var colorThree = '#3480C3'
;pug_debug_line = 123;pug_debug_filename = ".\u002Fcards.pug";
var colorFour = '#0075BC'
;pug_debug_line = 124;pug_debug_filename = ".\u002Fcards.pug";
var colorFive = '#3C82C4'
;pug_debug_line = 125;pug_debug_filename = ".\u002Fcards.pug";
var colorSix = '#0A79BF'
;pug_debug_line = 126;pug_debug_filename = ".\u002Fcards.pug";
var colorSeven = '#005490'
;pug_debug_line = 127;pug_debug_filename = ".\u002Fcards.pug";
var colorEight = '#005A9A'
}
;pug_debug_line = 129;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Csvg version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" xmlns:a=\"http:\u002F\u002Fns.adobe.com\u002FAdobeSVGViewerExtensions\u002F3.0\u002F\" x=\"0px\" y=\"0px\" width=\"120px\" height=\"67px\" viewBox=\"0 0 59.4 35.5\" enable-background=\"new 0 0 59.4 35.5\" xml:space=\"preserve\"\u003E";
;pug_debug_line = 130;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Crect id=\"XMLID_16_\" x=\"36.2\" y=\"10.9\" fill=\"#E55125\" width=\"9.1\" height=\"4\"\u002F\u003E\n\u003Crect id=\"XMLID_15_\" x=\"14.4\" y=\"10.9\" fill=\"#F57E20\" width=\"9.1\" height=\"4\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_14_\" fill=\"#F49221\" points=\"51.5,35.5 59.4,4.8 46.7,6.8 43.6,14.4 36.7,14.6 36.7,2 29.7,0 29.7,35.5\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_13_\" fill=\"#E38825\" points=\"36.4,22.4 29.7,32.3 29.7,35.5 45.3,35.5\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_12_\" fill=\"#FEBB18\" points=\"8,35.5 0,4.8 12.8,6.8 15.8,14.4 22.8,14.6 22.8,2 29.7,0 29.7,35.5\"\u002F\u003E";
;pug_debug_line = 135;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cg\u003E";
;pug_debug_line = 136;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpolygon id=\"XMLID_11_\" fill=\"";
;pug_debug_line = 136;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorFive) ? "" : pug_interp));
;pug_debug_line = 136;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"29.8,22.4 23.1,22.4 26.4,27.4\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_10_\" fill=\"";
;pug_debug_line = 137;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorTwo) ? "" : pug_interp));
;pug_debug_line = 137;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"23.1,22.4 29.8,22.4 26.4,17.5\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_9_\" fill=\"";
;pug_debug_line = 138;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorOne) ? "" : pug_interp));
;pug_debug_line = 138;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"26.4,17.5 29.8,22.4 29.8,17.5 29.8,12.6\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_8_\" fill=\"";
;pug_debug_line = 139;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorThree) ? "" : pug_interp));
;pug_debug_line = 139;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"29.8,12.6 29.8,17.5 29.8,22.4 33.1,17.5\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_7_\" fill=\"";
;pug_debug_line = 140;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorEight) ? "" : pug_interp));
;pug_debug_line = 140;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"36.5,22.4 29.8,22.4 33.1,27.4\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_6_\" fill=\"";
;pug_debug_line = 141;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorFour) ? "" : pug_interp));
;pug_debug_line = 141;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"29.8,22.4 36.5,22.4 33.1,17.5\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_5_\" fill=\"";
;pug_debug_line = 142;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorSix) ? "" : pug_interp));
;pug_debug_line = 142;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"26.4,27.4 29.8,32.3 29.8,27.4 29.8,22.4\"\u002F\u003E\n\u003Cpolygon id=\"XMLID_4_\" fill=\"";
;pug_debug_line = 143;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = colorSeven) ? "" : pug_interp));
;pug_debug_line = 143;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\" points=\"29.8,22.4 29.8,27.4 29.8,32.3 33.1,27.4\"\u002F\u003E\u003C\u002Fg\u003E";
;pug_debug_line = 144;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cpath id=\"XMLID_2_\" fill=\"#FFFFFF\" d=\"M29.8,19.2c-1.8,0-3.3-1.5-3.3-3.3c0,1.8-1.5,3.3-3.3,3.3c1.8,0,3.3,1.5,3.3,3.3 C26.5,20.7,28,19.2,29.8,19.2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
}
};
;pug_debug_line = 146;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["panel"] = pug_interp = function(position, suit, rank, color){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 148;pug_debug_filename = ".\u002Fcards.pug";
if (rank == 1) {
;pug_debug_line = 149;pug_debug_filename = ".\u002Fcards.pug";
var rank = 'Ace';
}
else
if (rank == 11) {
;pug_debug_line = 151;pug_debug_filename = ".\u002Fcards.pug";
var rank = 'Jack';
}
else
if (rank == 12) {
;pug_debug_line = 153;pug_debug_filename = ".\u002Fcards.pug";
var rank = 'Queen';
}
else
if (rank == 13) {
;pug_debug_line = 155;pug_debug_filename = ".\u002Fcards.pug";
var rank = 'King';
}
;pug_debug_line = 157;pug_debug_filename = ".\u002Fcards.pug";
if (color == 'black') {
;pug_debug_line = 158;pug_debug_filename = ".\u002Fcards.pug";
var color = '#363636'
}
;pug_debug_line = 159;pug_debug_filename = ".\u002Fcards.pug";
if (color == 'red') {
;pug_debug_line = 160;pug_debug_filename = ".\u002Fcards.pug";
var color = '#d64c4c';
}
;pug_debug_line = 162;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["panel",position], [false,true]), false, false)+pug_attr("style", pug_style('background-color:' + color), true, false)) + "\u003E";
;pug_debug_line = 163;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv class=\"rank\"\u003E";
;pug_debug_line = 164;pug_debug_filename = ".\u002Fcards.pug";
if (rank == 'Ace' || rank == 'Jack' || rank == 'Queen' || rank == 'King') {
;pug_debug_line = 165;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = rank.charAt(0)) ? "" : pug_interp));
}
else {
;pug_debug_line = 167;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = rank) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 168;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv class=\"suit\"\u003E";
;pug_debug_line = 169;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = rank) ? "" : pug_interp));
;pug_debug_line = 169;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + " of ";
;pug_debug_line = 169;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = suit) ? "" : pug_interp));
;pug_debug_line = 169;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "s\u003C\u002Fdiv\u003E";
;pug_debug_line = 170;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv class=\"icon\"\u003E";
;pug_debug_line = 171;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["suit"](suit, color, 'false');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 173;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"] = pug_interp = function(suit, rank){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 174;pug_debug_filename = ".\u002Fcards.pug";
if (rank == '1') {
;pug_debug_line = 175;pug_debug_filename = ".\u002Fcards.pug";
var className = 'one'
}
else
if (rank == '2') {
;pug_debug_line = 177;pug_debug_filename = ".\u002Fcards.pug";
var className = 'two'
}
else
if (rank == '3') {
;pug_debug_line = 179;pug_debug_filename = ".\u002Fcards.pug";
var className = 'three'
}
else
if (rank == '4') {
;pug_debug_line = 181;pug_debug_filename = ".\u002Fcards.pug";
var className = 'four'
}
else
if (rank == '5') {
;pug_debug_line = 183;pug_debug_filename = ".\u002Fcards.pug";
var className = 'five'
}
else
if (rank == '6') {
;pug_debug_line = 185;pug_debug_filename = ".\u002Fcards.pug";
var className = 'six'
}
else
if (rank == '7') {
;pug_debug_line = 187;pug_debug_filename = ".\u002Fcards.pug";
var className = 'seven'
}
else
if (rank == '8') {
;pug_debug_line = 189;pug_debug_filename = ".\u002Fcards.pug";
var className = 'eight'
}
else
if (rank == '11') {
;pug_debug_line = 191;pug_debug_filename = ".\u002Fcards.pug";
var className = 'jack'
}
else
if (rank == '12') {
;pug_debug_line = 193;pug_debug_filename = ".\u002Fcards.pug";
var className = 'queen'
}
else
if (rank == '13') {
;pug_debug_line = 195;pug_debug_filename = ".\u002Fcards.pug";
var className = 'king'
}
;pug_debug_line = 197;pug_debug_filename = ".\u002Fcards.pug";
if (suit == 'Diamond') {
;pug_debug_line = 198;pug_debug_filename = ".\u002Fcards.pug";
var color = 'red'
}
else
if (suit == 'Heart') {
;pug_debug_line = 200;pug_debug_filename = ".\u002Fcards.pug";
var color = 'red'
}
else
if (suit == 'Club') {
;pug_debug_line = 202;pug_debug_filename = ".\u002Fcards.pug";
var color = 'black'
}
else
if (suit == 'Spade') {
;pug_debug_line = 204;pug_debug_filename = ".\u002Fcards.pug";
var color = 'black'
}
;pug_debug_line = 206;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E";
;pug_debug_line = 208;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003C!-- Demo Purposes--\u003E";
;pug_debug_line = 209;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv class=\"ripple\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 210;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv class=\"ripple\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 212;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["panel"]('top', suit, rank, color);
;pug_debug_line = 214;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["content",className], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 216;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 218;pug_debug_filename = ".\u002Fcards.pug";
if (rank == '11') {
;pug_debug_line = 219;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["royal"]('Jack', color);
;pug_debug_line = 220;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([color], [true]), false, false)) + "\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 221;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["royal"]('Jack', color);
}
else
if (rank == '12') {
;pug_debug_line = 223;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["royal"]('Queen', color);
;pug_debug_line = 224;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([color], [true]), false, false)) + "\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 225;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["royal"]('Queen', color);
}
else
if (rank == '13') {
;pug_debug_line = 227;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["royal"]('King', color);
;pug_debug_line = 228;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([color], [true]), false, false)) + "\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 229;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["royal"]('King', color);
}
else {
;pug_debug_line = 231;pug_debug_filename = ".\u002Fcards.pug";
for (var i = 0; i < rank; ++i) {
{
;pug_debug_line = 232;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["suit"](suit, color, 'true');
}
;pug_debug_line = 233;pug_debug_filename = ".\u002Fcards.pug";
}
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 235;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["panel"]('bottom', suit, rank, color);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 237;pug_debug_filename = ".\u002Fcards.pug";
pug_html = pug_html + "\u003C" + (blah) + "\u003E\u003C\u002F" + (blah) + "\u003E";
;pug_debug_line = 238;pug_debug_filename = ".\u002Fcards.pug";
if (blah.suit == 'Heart') {
;pug_debug_line = 239;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '1') {
;pug_debug_line = 240;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '1');
}
;pug_debug_line = 241;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '2') {
;pug_debug_line = 242;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '2');
}
;pug_debug_line = 243;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '3') {
;pug_debug_line = 244;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '3');
}
;pug_debug_line = 245;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '4') {
;pug_debug_line = 246;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '4');
}
;pug_debug_line = 247;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '5') {
;pug_debug_line = 248;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '5');
}
;pug_debug_line = 249;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '6') {
;pug_debug_line = 250;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '6');
}
;pug_debug_line = 251;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '7') {
;pug_debug_line = 252;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '7');
}
;pug_debug_line = 253;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '8') {
;pug_debug_line = 254;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '8');
}
;pug_debug_line = 255;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '9') {
;pug_debug_line = 256;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '9');
}
;pug_debug_line = 257;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '10') {
;pug_debug_line = 258;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '10');
}
;pug_debug_line = 259;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '11') {
;pug_debug_line = 260;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '11');
}
;pug_debug_line = 261;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '12') {
;pug_debug_line = 262;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '12');
}
;pug_debug_line = 263;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '13') {
;pug_debug_line = 264;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Heart', '13');
}
}
else
if (blah.suit == 'Diamond') {
;pug_debug_line = 266;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '1') {
;pug_debug_line = 267;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '1');
}
;pug_debug_line = 268;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '2') {
;pug_debug_line = 269;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '2');
}
;pug_debug_line = 270;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '3') {
;pug_debug_line = 271;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '3');
}
;pug_debug_line = 272;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '4') {
;pug_debug_line = 273;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '4');
}
;pug_debug_line = 274;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '5') {
;pug_debug_line = 275;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '5');
}
;pug_debug_line = 276;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '6') {
;pug_debug_line = 277;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '6');
}
;pug_debug_line = 278;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '7') {
;pug_debug_line = 279;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '7');
}
;pug_debug_line = 280;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '8') {
;pug_debug_line = 281;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '8');
}
;pug_debug_line = 282;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '9') {
;pug_debug_line = 283;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '9');
}
;pug_debug_line = 284;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '10') {
;pug_debug_line = 285;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '10');
}
;pug_debug_line = 286;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '11') {
;pug_debug_line = 287;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '11');
}
;pug_debug_line = 288;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '12') {
;pug_debug_line = 289;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '12');
}
;pug_debug_line = 290;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '13') {
;pug_debug_line = 291;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Diamond', '13');
}
}
else
if (blah.suit == 'Spade') {
;pug_debug_line = 293;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '1') {
;pug_debug_line = 294;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '1');
}
;pug_debug_line = 295;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '2') {
;pug_debug_line = 296;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '2');
}
;pug_debug_line = 297;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '3') {
;pug_debug_line = 298;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '3');
}
;pug_debug_line = 299;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '4') {
;pug_debug_line = 300;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '4');
}
;pug_debug_line = 301;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '5') {
;pug_debug_line = 302;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '5');
}
;pug_debug_line = 303;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '6') {
;pug_debug_line = 304;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '6');
}
;pug_debug_line = 305;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '7') {
;pug_debug_line = 306;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '7');
}
;pug_debug_line = 307;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '8') {
;pug_debug_line = 308;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '8');
}
;pug_debug_line = 309;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '9') {
;pug_debug_line = 310;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '9');
}
;pug_debug_line = 311;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '10') {
;pug_debug_line = 312;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '10');
}
;pug_debug_line = 313;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '11') {
;pug_debug_line = 314;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '11');
}
;pug_debug_line = 315;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '12') {
;pug_debug_line = 316;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '12');
}
;pug_debug_line = 317;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '13') {
;pug_debug_line = 318;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Spade', '13');
}
}
else
if (blah.suit == 'Club') {
;pug_debug_line = 320;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '1') {
;pug_debug_line = 321;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '1');
}
;pug_debug_line = 322;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '2') {
;pug_debug_line = 323;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '2');
}
;pug_debug_line = 324;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '3') {
;pug_debug_line = 325;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '3');
}
;pug_debug_line = 326;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '4') {
;pug_debug_line = 327;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '4');
}
;pug_debug_line = 328;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '5') {
;pug_debug_line = 329;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '5');
}
;pug_debug_line = 330;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '6') {
;pug_debug_line = 331;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '6');
}
;pug_debug_line = 332;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '7') {
;pug_debug_line = 333;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '7');
}
;pug_debug_line = 334;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '8') {
;pug_debug_line = 335;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '8');
}
;pug_debug_line = 336;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '9') {
;pug_debug_line = 337;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '9');
}
;pug_debug_line = 338;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '10') {
;pug_debug_line = 339;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '10');
}
;pug_debug_line = 340;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '11') {
;pug_debug_line = 341;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '11');
}
;pug_debug_line = 342;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '12') {
;pug_debug_line = 343;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '12');
}
;pug_debug_line = 344;pug_debug_filename = ".\u002Fcards.pug";
if (blah.rank == '13') {
;pug_debug_line = 345;pug_debug_filename = ".\u002Fcards.pug";
pug_mixins["card"]('Club', '13');
}
}}.call(this,"blah" in locals_for_with?locals_for_with.blah:typeof blah!=="undefined"?blah:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}