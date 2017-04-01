var firstloadpx = true
var loadfoldeertime = false;

var widgetIframe = document.getElementById('sc-widget');
var widget;

var api_youtube = false;
var api_soundcloud = false;

chrome.storage.local.get({api_youtube: true, api_soundcloud: true},function(data){

api_youtube = data.api_youtube;
api_soundcloud = data.api_soundcloud;

if(api_youtube == true){
var youtubetag = document.createElement('script');
youtubetag.src = "https://www.youtube.com/iframe_api";
var youtubefirstScriptTag = document.getElementsByTagName('script')[0];
youtubefirstScriptTag.parentNode.insertBefore(youtubetag, youtubefirstScriptTag);
}

else{
$("#openimportbtx, #enablerandommusic, #appquality").remove();
}

});

chrome.notifications.onClicked.addListener(function(){
chrome.notifications.clear("errormusic");
chrome.notifications.clear("musicct");
});

var youtubeplayer;
var youtubeplaylist = null;
var newvideodetect = true;
var createnewplaylistid;

$("body").append($("<div>", {id: "scrollup", class: "glyphicon glyphicon-arrow-up"}).click(
function(){ $("html, body").animate({ scrollTop: 0 }, "slow");}).affix({offset:{top: 575}}))

function loadingset(data){
if(data == "firstload"){firstloadpx = false; data = false;}
if((data == true) || (firstloadpx == true)){$("#loading").removeClass("hide"); $("#container").addClass("wait");}
else if(data == false){$("#loading").addClass("hide"); $("#container").removeClass("wait");}
}

$('[data-toggle="tooltip"]').tooltip();
$('#addnotificationspx')
.attr("data-original-title", chrome.i18n.getMessage("notifications"))
.tooltip();

var livemodet = false;









//Ajustador Máximo

var windowbns = 16;
var windowbns2 = 39;

$(window).resize(function() {

var getwindow_height = $(window).height()+windowbns2;
var getwindow_width = $(window).width()+windowbns;

if(livemodet == true){
var widthwn = 1000+windowbns;
var heightwn = 61+windowbns2;
if(($(window).height() > 61) || ($(window).height() < 61)){window.resizeTo(getwindow_width,heightwn);}
if($(window).width() < 1000){window.resizeTo(widthwn,getwindow_height);}
}
else{
var widthwn = 399+windowbns;
var heightwn = 412+windowbns2;
if($(window).height() < 412){window.resizeTo(getwindow_width,heightwn);}
if($(window).width() < 399){window.resizeTo(widthwn,getwindow_height);}
}});


$(".titletop").dblclick(function(){
if(livemodet == true){}
else{
var widthwn = 399+windowbns;
var heightwn = 412+windowbns2;
window.resizeTo(widthwn,heightwn);
}});

$(window).trigger("resize");









var dataprogressglobal
var pagesforsec = 24
var pagesforsecpgnbx
var volumeapp = 1
var appquality = "large"
var volumeenabled = false
var playlistpx = []
var playlistpxct = []
var randommusic = 0
var randommusicen = false
var repeatmusicen = false
var repeatnumber
var detectloadsucess = true
var detectprogresspx = true
var playerdur = 0
var playertype = "none"
var folderopeneddt
var custommusictime = false;
var replacesystempx1;
var replacesystempx2;
var globalpageclicknumberpdss;

// System
function startfavpage(folderid, detectagain){chrome.bookmarks.getSubTree(folderid ,function(foldercfg){ var folder = foldercfg[0].children;

if(api_soundcloud == true){widget = SC.Widget(widgetIframe);}

if(detectagain == "again"){}
else{
var subcounter = 0
var finalcomplete = false
var folderpxse = false
var folderpxsepx = false
var createdmore = false
var pagesforsecpg
var pageclicknumberp
var pageclicknumberpmax
var pageclicknumberpdss
var pageclicknumberpmaxdss
var detectpageopenx = false
var typepsxanex
var numbercountitems = 0

// Live Reload
function livereload(){if(playlistpxct.length == 0){} else{
$("#subfolderpx"+playlistpxct[globalpageclicknumberpdss].folderid+" [foldermyidauto='"+playlistpxct[globalpageclicknumberpdss].folderid+"']").trigger("click");
playlistpxct = playlistpx;
pageclicknumberpmaxdss = pageclicknumberpmax;
}}
$("#reloadfolderlive").click(function(){
loadfoldeertime = true;
livereload();
});
}


function itemcountsystemfolder(){
if(numbercountitems > 99){numbercountitemsview = "99+"}
else{numbercountitemsview = numbercountitems}
if(numbercountitems == 0){
$("#itemnumber").empty().append($("<span>", {class: "glyphicon glyphicon-folder-open folderitems"}), $("<span>", {class: "badge", "data-placement": "bottom", "data-original-title": numbercountitems+" "+chrome.i18n.getMessage("gapp_nothingfolder")}).text(numbercountitemsview).tooltip());
}
if(numbercountitems == 1){
$("#itemnumber").empty().append($("<span>", {class: "glyphicon glyphicon-folder-open folderitems"}), $("<span>", {class: "badge", "data-placement": "bottom", "data-original-title": numbercountitems+" "+chrome.i18n.getMessage("gapp_itemfolder")}).text(numbercountitemsview).tooltip());
}
else{
$("#itemnumber").empty().append($("<span>", {class: "glyphicon glyphicon-folder-open folderitems"}), $("<span>", {class: "badge", "data-placement": "bottom", "data-original-title": numbercountitems+" "+chrome.i18n.getMessage("gapp_itemsfolder")}).text(numbercountitemsview).tooltip());
}
}










// Music Player


//Info Music

function infocollectmusic(datamusic){
var newtitlepagemusic = datamusic.title
if(datamusic.artwork == null){$("#musicthumbnail").attr("src", datamusic.avatar);}
else{$("#musicthumbnail").attr("src", datamusic.artwork);}
if(datamusic.title.length > 35) {datamusic.title = datamusic.title.substring(0,35)+"...";}
if(datamusic.username.length > 40) {datamusic.username = datamusic.username.substring(0,40)+"...";}
$("#infomuser").text(datamusic.username);
$("#infomtitle").text(datamusic.title);
$("#linkopen").attr("href", datamusic.url);

document.title = newtitlepagemusic+" - "+chrome.i18n.getMessage("appsoundbookplus");
}




// Progresso

if(detectagain == "again"){}
else{var progressmusicselect = false}

function createclocktime(clockinsert, id){
clocktimex = clockinsert / 1000
clocktimex_seconds = clocktimex % 60
clocktimex /= 60
clocktimex_minutes = clocktimex % 60
clocktimex /= 60
clocktimex_hours = clocktimex % 24
clocktimex /= 24
clocktimex_days = clocktimex

clocktimex_seconds = Math.floor(clocktimex_seconds)
clocktimex_minutes = Math.floor(clocktimex_minutes)
clocktimex_hours = Math.floor(clocktimex_hours)
clocktimex_days = Math.floor(clocktimex_days)

if(clocktimex_seconds < 10){clocktimex_seconds = "0"+clocktimex_seconds}

if(clocktimex_hours == 0){$("#"+id).text(clocktimex_minutes+":"+clocktimex_seconds);}
else{
if(clocktimex_minutes < 10){clocktimex_minutes = "0"+clocktimex_minutes}
$("#"+id).text(clocktimex_hours+":"+clocktimex_minutes+":"+clocktimex_seconds);}
}

// Rodar Música
function progressmusicxp(dataprogress){
if(progressmusicselect == false){
$("#musicbar").val(dataprogress);
dataprogressglobal = dataprogress;
}
createclocktime(dataprogress, "musictimep1");
createclocktime(playerdur, "musictimep2");
var porcentpxld = dataprogress*100/playerdur
$("#musicbargp").css("width", porcentpxld+"%").attr("aria-valuenow", porcentpxld);
}

// Resetar Música

function resetprogressmusicxp(datadur, playing){
if(playing == true){
$("#musicbar").attr("max", datadur).val(dataprogressglobal);
$("#musicbargp").css("width", dataprogressglobal+"%").attr("aria-valuenow", dataprogressglobal);
}
else{
$("#musicbar").attr("max", datadur).val(0);
$("#musicbargp").css("width", "0%").attr("aria-valuenow", 0);
}}


// Música Trocar Manual
$("#musicbar").on("mouseleave" ,function(){
progressmusicselect = false
$("#musictimep3").fadeOut(0.10);
}).mousemove(function(){
progressmusicselect = true
$("#musictimep3").fadeIn(0.10);
createclocktime($(this).val(), "musictimep3")
}).change(function(){
progressmusicselect = false
$("#musictimep3").fadeOut(0.10);

// SoundCloud
if(playertype == "soundcloud"){widget.seekTo($(this).val());}
// Youtube
if(playertype == "youtube"){
youtubeplayer.seekTo($(this).val()/1000,true);
progressmusicxp($(this).val());
}

});





// SoundCloud
if(detectagain == "again"){}
else{if(api_soundcloud == true){
widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){

if(playertype == "soundcloud"){
if(detectprogresspx == true){detectloadsucess = true}
widget.getPosition(function(datapor){progressmusicxp(datapor);});
}
else{widget.pause();}

})
}}


// Youtube

function youtubeplaying(){
	
if(playertype == "youtube"){if(api_youtube == true){if(youtubeplayer.getPlayerState() == 1){
if(detectprogresspx == true){detectloadsucess = true}
progressmusicxp(youtubeplayer.getCurrentTime()*1000);
}

}}

if(pageclicknumberpmaxdss == null){randommusic = 0}
else if(randommusic > pageclicknumberpmaxdss-1){randommusic = 1}
else{randommusic = randommusic+1}

}

if(detectagain == "again"){}
else{setInterval(function(){youtubeplaying();}, 100);}


// Play Pause

function autoplaypause(numbertype){
$("#playpause").removeClass("glyphicon-pause").removeClass("glyphicon-play").removeClass("glyphicon-stop");
$("#previousimageclickpx, #nextimageclickpx").removeClass("stopclick");

if(numbertype == 0){$("#playpause").addClass("glyphicon-pause");}
if(numbertype == 1){$("#playpause").addClass("glyphicon-play");}

if(numbertype == 2){$("#playpause").addClass("glyphicon-stop").addClass("stopclick");
$("#musicbar").prop("disabled", true);
}
if(numbertype == 3){$("#playpause").addClass("glyphicon-pause").removeClass("stopclick");;
$("#musicbar").prop("disabled", false);
}

}

if(detectagain == "again"){}
else{

function playpausemusic(){
// SoundCloud
if(playertype == "soundcloud"){widget.isPaused(function(datapause){
if(datapause == true){widget.play(); autoplaypause(0);}
else if(datapause == false){widget.pause(); autoplaypause(1);}
});}

//Youtube
if(playertype == "youtube"){
if(youtubeplayer.getPlayerState() == 2){youtubeplayer.playVideo(); autoplaypause(0);}
else if(youtubeplayer.getPlayerState() == 1){youtubeplayer.pauseVideo(); autoplaypause(1);}
}
}

$("#playpause").click(function(){playpausemusic();})
}


















// Homepage

function generatormenupx(){
$("#imagelist").empty();

$("#imagelist").append($("<div>", {id: "homepx"}).append(

$("<h1>", {class: "title"}).text(chrome.i18n.getMessage("welcome")),

$("<p>", {class: "info"}).text(chrome.i18n.getMessage("gapp_welcome_text")),
$("<p>", {class: "info"}).text(chrome.i18n.getMessage("app_sp_welcome_text")+' "'+chrome.i18n.getMessage("app_sp_folder")+'"')

))

$("#itemnumber").empty().append($("<span>", {class: "glyphicon glyphicon-home folderitems"}), $("<span>", {class: "badge", "data-placement": "bottom", "data-original-title": chrome.i18n.getMessage("gapp_folderhome")}).text(0).tooltip());

loadingset(false);
}



// Random Ativar

function randomenabledpx(typeclick){

function detectclassaddrandomen(randomrd){
if(randomrd == true){$("#enablerandommusic").addClass("randomenabled");}
else if(randomrd == false){$("#enablerandommusic").removeClass("randomenabled");}
}

if(typeclick == "auto"){chrome.storage.local.get({enablerandommusic: false}, function(confignoti){
randommusicen = confignoti.enablerandommusic
detectclassaddrandomen(confignoti.enablerandommusic);
})}
else{

if(randommusicen == false){
chrome.storage.local.set({enablerandommusic: true})
randommusicen = true
detectclassaddrandomen(true);
}
else if(randommusicen == true){
chrome.storage.local.set({enablerandommusic: false})
randommusicen = false
detectclassaddrandomen(false);
}
 
}

}

if(detectagain == "again"){}
else{$("#enablerandommusic").click(function(){randomenabledpx();})}



// Repeat Ativar

function repeatenabledpx(typeclick){

function detectclassaddrandomen(randomrd){
if(randomrd == true){$("#enablerepeatmusic").addClass("randomenabled");}
else if(randomrd == false){$("#enablerepeatmusic").removeClass("randomenabled");}
}

if(typeclick == "auto"){chrome.storage.local.get({enablerepeatmusic: false}, function(confignoti){
repeatmusicen = confignoti.enablerepeatmusic
detectclassaddrandomen(confignoti.enablerepeatmusic);
})}
else{

if(repeatmusicen == false){
chrome.storage.local.set({enablerepeatmusic: true})
repeatmusicen = true
detectclassaddrandomen(true);
}
else if(repeatmusicen == true){
chrome.storage.local.set({enablerepeatmusic: false})
repeatmusicen = false
detectclassaddrandomen(false);
}
 
}

}

if(detectagain == "again"){}
else{$("#enablerepeatmusic").click(function(){repeatenabledpx();})}



// Notification

if(detectagain == "again"){}
else{
$("#soundbooknoti").click(function(){chrome.storage.local.set({soundbooknoti: $(this).prop("checked")})})}
chrome.storage.local.get({soundbooknoti: false, enablerandommusic: false, repeatmusicen: false}, function(confignoti){
$("#soundbooknoti").prop("checked", confignoti.soundbooknoti)
randommusicen = confignoti.enablerandommusic
repeatmusicen = confignoti.enablerepeatmusic
randomenabledpx("auto");
repeatenabledpx("auto");
})


// Volume

function changesoundpx(thishere){
if(thishere == "load"){} 
else{
volumeapp = $(thishere).val()/100
chrome.storage.local.set({volume: volumeapp})
}

$("#volumeico").removeClass("glyphicon-volume-up").removeClass("glyphicon-volume-down").removeClass("glyphicon-volume-off");
if(volumeapp == 0){$("#volumeico").addClass("glyphicon-volume-off");}
else if(volumeapp < 0.20){$("#volumeico").addClass("glyphicon-volume-down");}
else{$("#volumeico").addClass("glyphicon-volume-up");}

// SoundCloud
if(api_soundcloud == true){widget.setVolume(Number(volumeapp))}
//Youtube
if(firstloadpx == false){if(api_youtube == true){youtubeplayer.setVolume(Number(volumeapp*100));}}
}

if(detectagain == "again"){}
else{$("#sound").change(function(){changesoundpx(this);})}



// Qualidade App

function qualityappset(thishere){
chrome.storage.local.set({appquality: $(thishere).val()})
appquality = $(thishere).val()
}

if(detectagain == "again"){}
else{$("#appquality").change(function(){qualityappset(this);})}


// Play Music

//SoundCloud

if(detectagain == "again"){}
else{if(api_soundcloud == true){
widget.bind(SC.Widget.Events.PLAY, function(){
widget.getDuration(function(datadur){
playerdur = datadur
resetprogressmusicxp(datadur);
})
$("#volumeico").removeClass("volloading");
changesoundpx("load");
widget.getCurrentSound(function(datamusic){infocollectmusic({
"artwork": datamusic.artwork_url,
"avatar": datamusic.user.avatar_url,
"title": datamusic.title,
"username": datamusic.user.username,
"url": datamusic.permalink_url
});});
autoplaypause(3);
});
}}

// Default Save

chrome.storage.local.get({volume: 100, appquality: "large"}, function(defaultconfig){
volumeapp = Number(defaultconfig.volume)
$("#sound").val(volumeapp*100).trigger("change");

appquality = defaultconfig.appquality
$("#appquality").val(appquality).trigger("change")
})







// Remove
function removeimagepxkePX(thishere){$(thishere).each(function(){

thishere = this

for (i = 0; i < Object.keys(playlistpxct).length; i++) { 
if(i == 0){}
else{
if(playlistpxct[i].id.replace("objfavit", "") == $(thishere).attr("folderid")){
playlistpxct[i].url = "NONE"
}}}

for (i = 0; i < Object.keys(playlistpx).length; i++) { 
if(i == 0){}
else{
if (undefined != playlistpxct){
if(playlistpx[i].id.replace("objfavit", "") == $(thishere).attr("folderid")){playlistpx[i].url = "NONE";}
}
else if(playlistpx[i].id.replace("objfavit", "") == playlistpxct[i].id.replace("objfavit", "")){
if(playlistpx[i].id.replace("objfavit", "") == $(thishere).attr("folderid")){playlistpx[i].url = "NONE";}
}}}

chrome.bookmarks.remove($(thishere).attr("folderid"), function(){});
$("#objfavit"+$(thishere).attr("folderid")).remove();
numbercountitems = numbercountitems-1
itemcountsystemfolder();
});}


// Rename
function renameimagepxkePX(newnamefolderid, itemnamesetbase, thishere){
chrome.bookmarks.update($(thishere).attr("folderid"), {title: newnamefolderid+itemnamesetbase}, function(getinfofavselect){

$("[id^='objfavit']").has(thishere).addClass("NEWNAMESYSTEMP");
$(".NEWNAMESYSTEMP #openmusic .title").text(newnamefolderid);
$(".NEWNAMESYSTEMP").attr("foldertitle", newnamefolderid).removeClass("NEWNAMESYSTEMP");

for (i = 0; i < Object.keys(playlistpxct).length; i++) { 
if(i == 0){}
else{
if(playlistpxct[i].id.replace("objfavit", "") == $(thishere).attr("folderid")){
playlistpxct[i].title = newnamefolderid;
}}}

for (i = 0; i < Object.keys(playlistpx).length; i++) { 
if(i == 0){}
else{
if (undefined != playlistpxct){
if(playlistpx[i].id.replace("objfavit", "") == $(thishere).attr("folderid")){playlistpx[i].title = newnamefolderid;}
}
else if(playlistpx[i].id.replace("objfavit", "") == playlistpxct[i].id.replace("objfavit", "")){
if(playlistpx[i].id.replace("objfavit", "") == $(thishere).attr("folderid")){playlistpx[i].title = newnamefolderid;}
}}}

})
}




// CUSTOM CLOCK

function setclockcst(clockinsert, localinsert, localinsert2){
clocktimex = clockinsert / 1000
clocktimex_seconds = clocktimex % 60
clocktimex /= 60
clocktimex_minutes = clocktimex % 60
clocktimex /= 60
clocktimex_hours = clocktimex % 24
clocktimex /= 24
clocktimex_days = clocktimex

clocktimex_seconds = Math.floor(clocktimex_seconds)
clocktimex_minutes = Math.floor(clocktimex_minutes)
clocktimex_hours = Math.floor(clocktimex_hours)
clocktimex_days = Math.floor(clocktimex_days)

$("#copytextdapkl ."+localinsert+" #second"+localinsert2).val(clocktimex_seconds);
$("#copytextdapkl ."+localinsert+" #minute"+localinsert2).val(clocktimex_minutes);
$("#copytextdapkl ."+localinsert+" #hour"+localinsert2).val(clocktimex_hours);

}




function timeimagepxkePX(thishere){

var startsec = Math.floor(Number($("#copytextdapkl .starts #secondst").val()));
var startmin = Math.floor(Number($("#copytextdapkl .starts #minutest").val())) * 60;
var starthour = Math.floor(Number($("#copytextdapkl .starts #hourst").val())) * 3600;

var endsec = Math.floor(Number($("#copytextdapkl .ends #secondfn").val()));
var endmin = Math.floor(Number($("#copytextdapkl .ends #minutefn").val())) * 60;
var endhour =Math.floor( Number($("#copytextdapkl .ends #hourfn").val())) * 3600;

var totalstart = startsec+startmin+starthour
var totalend = endsec+endmin+endhour

$(thishere).each(function(){

thishere = this

chrome.bookmarks.get($(thishere).attr("folderid"), function(foldernameid){

var finalitemname = foldernameid[0].title.split('::SETCUSTOMTIMEPX')[0]+"::SETCUSTOMTIMEPX="+totalstart+"x"+totalend
var finalnamecomplete = finalitemname.split('::SETCUSTOMTIMEPX')[0]

chrome.bookmarks.update(foldernameid[0].id, {title: finalitemname}, function(getinfofavselect){})

$("[id^='objfavit']").has(thishere).addClass("NEWNAMESYSTEMP");
$(".NEWNAMESYSTEMP #openmusic .title").text(finalnamecomplete);
$(".NEWNAMESYSTEMP").attr("starts", totalstart).attr("ends", totalend).removeClass("NEWNAMESYSTEMP");
for (i = 0; i < Object.keys(playlistpxct).length; i++) { 
if(i == 0){}
else{
if(playlistpxct[i].id.replace("objfavit", "") == foldernameid[0].id){
playlistpxct[i].starts = totalstart;
playlistpxct[i].ends = totalend;
}}}

for (i = 0; i < Object.keys(playlistpx).length; i++) { 
if(i == 0){}
else{
if (undefined != playlistpxct){
if(playlistpx[i].id.replace("objfavit", "") == foldernameid[0].id){
playlistpx[i].starts = totalstart;
playlistpx[i].ends = totalend;
}
}
else if(playlistpx[i].id.replace("objfavit", "") == playlistpxct[i].id.replace("objfavit", "")){
if(playlistpx[i].id.replace("objfavit", "") == foldernameid[0].id){
playlistpx[i].starts = totalstart;
playlistpx[i].ends = totalend;
}
}}}

})})}

function timeimagepxkePX2(thishere){$(thishere).each(function(){
	
thishere = this

chrome.bookmarks.get($(thishere).attr("folderid"), function(foldernameid){


var finalitemname = foldernameid[0].title.split('::SETCUSTOMTIMEPX')[0];


chrome.bookmarks.update(foldernameid[0].id, {title: finalitemname}, function(getinfofavselect){})

$("#copytextdapkl").remove();
$("[id^='objfavit']").has(thishere).addClass("NEWNAMESYSTEMP");
$(".NEWNAMESYSTEMP #openmusic .title").text(finalitemname);
$(".NEWNAMESYSTEMP").attr("starts", "").attr("ends", "").removeClass("NEWNAMESYSTEMP");
for (i = 0; i < Object.keys(playlistpxct).length; i++) { 
if(i == 0){}
else{
if(playlistpxct[i].id.replace("objfavit", "") == foldernameid[0].id){
playlistpxct[i].starts = null;
playlistpxct[i].ends = null;
}}}

for (i = 0; i < Object.keys(playlistpx).length; i++) { 
if(i == 0){}
else{
if (undefined != playlistpxct){
if(playlistpx[i].id.replace("objfavit", "") == foldernameid[0].id){
playlistpx[i].starts = null;
playlistpx[i].ends = null;
}
}
else if(playlistpx[i].id.replace("objfavit", "") == playlistpxct[i].id.replace("objfavit", "")){
if(playlistpx[i].id.replace("objfavit", "") == foldernameid[0].id){
playlistpx[i].starts = null;
playlistpx[i].ends = null;
}
}}}

})})}







//ST





// Remover Music

function removeimagepxke(thishere, globaledit, count){

$("[id='selectmultimusic'], [id='selectmultimusic2']").addClass("anticlick");

function systempkexne(thishere){
$("#copytextdapkl").remove();
$(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME");

$("[id^='objfavit']").has(thishere).addClass("NEWNAMESYSTEMP");
$(".NEWNAMESYSTEMP").addClass("SELECTEDSETTIME").removeClass("NEWNAMESYSTEMP");


if(count == null){count = ""}
else if(count > 1){count = " "+count+" "+chrome.i18n.getMessage("app_sp_items")}
else{count = ""}

$("body").append($("<div>", {id: "copytextdapkl", style: "display: none;", class: "copyremovemusic"}).append(

$("<p>").text(chrome.i18n.getMessage("app_sp_confirmaction")),
$("<p>").text(chrome.i18n.getMessage("remove")+count),

$("<input>", {type: "submit", value: chrome.i18n.getMessage("confirm")}).click(function(){

removeimagepxkePX(thishere);

$("#copytextdapkl").remove();
$("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");

}),

$("<input>", {type: "submit", value: chrome.i18n.getMessage("cancel")}).click(function(){$("#copytextdapkl").remove(); $(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME"); $("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");})



).fadeIn())
checkcheckboxst();
}

if(globaledit == true){systempkexne(thishere);}
else{chrome.bookmarks.get($(thishere).attr("folderid"), function(removeidfolderpx){systempkexne(thishere);})}

}

$("#removefavclick2").click(function(){
var idallselectionmusic = "";
$("[id^='objfavit']").has(".checkedmusicsel").addClass("ENABLESTPEXF");
var removecountitems = 0;
$(".ENABLESTPEXF").each(function(){
removecountitems = removecountitems+1
idallselectionmusic = idallselectionmusic+" #"+$(this).attr("id")+" #removefavclick,";
});
idallselectionmusic = idallselectionmusic.substring(0,idallselectionmusic.length-1)
if(idallselectionmusic == ""){}
else{removeimagepxke(idallselectionmusic, true, removecountitems);}
$(".ENABLESTPEXF").removeClass("ENABLESTPEXF");
});



// Rename Music

function renameimagepxke(thishere){chrome.bookmarks.get($(thishere).attr("folderid"), function(detectfoldersekl){

$("[id='selectmultimusic'], [id='selectmultimusic2']").addClass("anticlick");

var itemnamesetkx = detectfoldersekl[0].title.split('::SETCUSTOMTIMEPX')[0];
var itemnamesetbase = detectfoldersekl[0].title.replace(itemnamesetkx, "");

$("#copytextdapkl").remove();
$(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME");

$("[id^='objfavit']").has(thishere).addClass("NEWNAMESYSTEMP");
$(".NEWNAMESYSTEMP").addClass("SELECTEDSETTIME").removeClass("NEWNAMESYSTEMP");

$("body").append($("<div>", {id: "copytextdapkl", style: "display: none;", class: "copyrenamemusic"}).append(

$("<p>").text(chrome.i18n.getMessage("app_sp_changefilename")),
$("<input>", {type: "text", id: "newtitlefolderinsert", class: "selectpxnyya"}).val(itemnamesetkx),
$("<br>"),

$("<input>", {type: "submit", value: chrome.i18n.getMessage("save")}).click(function(){

$(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME");
renameimagepxkePX($("#newtitlefolderinsert").val(), itemnamesetbase, thishere);
$("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");

$("#copytextdapkl").remove();

}),

$("<input>", {type: "submit", value: chrome.i18n.getMessage("close")}).click(function(){$("#copytextdapkl").remove(); $(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME"); $("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");})



).fadeIn())
checkcheckboxst();
$("#newtitlefolderinsert").focus();


})}




// Sub Rename Music

function renameimagepxkePX2(newnamefolderid, itemnamesetbaseold, thishere, newnamefolderid2){

replacesystempx1 = newnamefolderid
.replace(/\(/g, '\\(')
.replace(/\)/g, '\\)')
.replace(/\{/g, '\\{')
.replace(/\}/g, '\\}')
.replace(/\]/g, '\\]')
.replace(/\[/g, '\\[')
.replace(/\|/g, '\\|')
.replace(/\?/g, '\\?')
.replace(/\!/g, '\\!')
.replace(/\`/g, '\\`')
.replace(/\~/g, '\\~')
.replace(/\^/g, '\\^')
.replace(/\@/g, '\\@')
.replace(/\#/g, '\\#')
.replace(/\$/g, '\\$')
.replace(/\%/g, '\\%')
.replace(/\&/g, '\\&')
.replace(/\*/g, '\\*')
.replace(/\+/g, '\\+')
.replace(/\'/g, "\\'")
.replace(/\"/g, '\\"')
.replace(/\_/g, '\\_')
.replace(/\-/g, '\\-');
replacesystempx2 = newnamefolderid2.replace();
	
$(thishere).each(function(){

thishere = this

chrome.bookmarks.get($(thishere).attr("folderid"), function(foldernameid){

var itemnamesetkx = foldernameid[0].title.split('::SETCUSTOMTIMEPX')[0];
var itemnamesetbase = foldernameid[0].title.replace(itemnamesetkx, "");
var newreplacemusic = new RegExp(replacesystempx1, "g");
var newrenamesyst = itemnamesetkx.replace(newreplacemusic, replacesystempx2);

chrome.bookmarks.update(foldernameid[0].id, {title: newrenamesyst+itemnamesetbase}, function(){});

$("#objfavit"+foldernameid[0].id).addClass("NEWNAMESYSTEMP");
$(".NEWNAMESYSTEMP #openmusic .title").text(newrenamesyst);
$(".NEWNAMESYSTEMP").attr("foldertitle", newrenamesyst).removeClass("NEWNAMESYSTEMP");

for (i = 0; i < Object.keys(playlistpxct).length; i++) { 
if(i == 0){}
else{
if(playlistpxct[i].id.replace("objfavit", "") == foldernameid[0].id){
playlistpxct[i].title = newrenamesyst;
}}}

for (i = 0; i < Object.keys(playlistpx).length; i++) { 
if(i == 0){}
else{
if (undefined != playlistpxct){
if(playlistpx[i].id.replace("objfavit", "") == foldernameid[0].id){playlistpx[i].title = newrenamesyst;}
}
else if(playlistpx[i].id.replace("objfavit", "") == playlistpxct[i].id.replace("objfavit", "")){
if(playlistpx[i].id.replace("objfavit", "") == foldernameid[0].id){playlistpx[i].title = newrenamesyst;}
}}}

})})}

function renameimagepxke2(thishere){chrome.bookmarks.get($(thishere).attr("folderid"), function(detectfoldersekl){

$("[id='selectmultimusic'], [id='selectmultimusic2']").addClass("anticlick");

var itemnamesetkx = detectfoldersekl[0].title.split('::SETCUSTOMTIMEPX')[0];
var itemnamesetbase = detectfoldersekl[0].title.replace(itemnamesetkx, "");

$("#copytextdapkl").remove();
$(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME");

$("[id^='objfavit']").has(thishere).addClass("NEWNAMESYSTEMP");
$(".NEWNAMESYSTEMP").addClass("SELECTEDSETTIME").removeClass("NEWNAMESYSTEMP");

$("body").append($("<div>", {id: "copytextdapkl", style: "display: none;", class: "copyrenamemusic copyrenamemusic2"}).append(

$("<p>").text(chrome.i18n.getMessage("app_sp_replacefilename")),
$("<input>", {type: "text", id: "newtitlefolderinsert", placeholder: chrome.i18n.getMessage("replace"), class: "selectpxnyya"}).val(""),
$("<input>", {type: "text", id: "newtitlefolderinsert2", placeholder: chrome.i18n.getMessage("app_sp_to"), class: "selectpxnyya"}).val(""),
$("<br>"),

$("<input>", {type: "submit", value: chrome.i18n.getMessage("save")}).click(function(){

$(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME");
renameimagepxkePX2($("#newtitlefolderinsert").val(), itemnamesetbase, thishere, $("#newtitlefolderinsert2").val());
$("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");

$("#copytextdapkl").remove();

}),

$("<input>", {type: "submit", value: chrome.i18n.getMessage("close")}).click(function(){$("#copytextdapkl").remove(); $(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME"); $("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");})



).fadeIn())
checkcheckboxst();
$("#newtitlefolderinsert").focus();

})}

$("#renamefavclick2").click(function(){
var idallselectionmusic = "";
$("[id^='objfavit']").has(".checkedmusicsel").addClass("ENABLESTPEXF");
var removecountitems = 0;
$(".ENABLESTPEXF").each(function(){
removecountitems = removecountitems+1
idallselectionmusic = idallselectionmusic+" #"+$(this).attr("id")+" #renamefavclick,";
});
idallselectionmusic = idallselectionmusic.substring(0,idallselectionmusic.length-1)
if(idallselectionmusic == ""){}
else{renameimagepxke2(idallselectionmusic, true, removecountitems);}
$(".ENABLESTPEXF").removeClass("ENABLESTPEXF");
});







// TIME

function timeimagepxke(thishere, globaledit){
$("[id='selectmultimusic'], [id='selectmultimusic2']").addClass("anticlick");

function systempkexne(idgenkex){
$("#copytextdapkl").remove();
$(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME");

$("[id^='objfavit']").has(thishere).addClass("NEWNAMESYSTEMP");
$(".NEWNAMESYSTEMP").addClass("SELECTEDSETTIME").removeClass("NEWNAMESYSTEMP");

$("body").append($("<div>", {id: "copytextdapkl", style: "display: none;", class: "copytimemusic"}).append(

$("<p>").text(chrome.i18n.getMessage("app_sp_setcustomtime")),

$("<div>", {class: "starts"}).append(
$("<span>").text(chrome.i18n.getMessage("start")+": "),
$("<input>", {type: "number", value: "0", id: "hourst", max: 99, min: 0, title: "Hour", class: "selectpxnyya"}).change(function(){
if(($(this).val() > 99) || ($(this).val() < 0)){$(this).val(0)}
}), 
$("<span>").text(" : "), $("<input>", {type: "number", value: "0", id: "minutest", max: 59, min: 0, title: "Minute", class: "selectpxnyya"}).change(function(){
if(($(this).val() > 59) || ($(this).val() < 0)){$(this).val(0)}
}), 
$("<span>").text(" : "), $("<input>", {type: "number", value: "0", id: "secondst", max: 59, min: 0, title: "Second", class: "selectpxnyya"})).change(function(){
if(($(this).val() > 59) || ($(this).val() < 0)){$(this).val(0)}
}),

$("<br>"),

$("<div>", {class: "ends"}).append(
$("<span>").text(chrome.i18n.getMessage("end")+": "),
$("<input>", {type: "number", value: "0", id: "hourfn", max: 99, min: 0, title: "Hour", class: "selectpxnyya"}).change(function(){
if(($(this).val() > 99) || ($(this).val() < 0)){$(this).val(0)}
}), 
$("<span>").text(" : "), $("<input>", {type: "number", value: "0", id: "minutefn", max: 59, min: 0, title: "Minute", class: "selectpxnyya"}).change(function(){
if(($(this).val() > 59) || ($(this).val() < 0)){$(this).val(0)}
}), 
$("<span>").text(" : "), $("<input>", {type: "number", value: "0", id: "secondfn", max: 59, min: 0, title: "Second", class: "selectpxnyya"})).change(function(){
if(($(this).val() > 59) || ($(this).val() < 0)){$(this).val(0)}
}),

$("<br>"),

$("<input>", {type: "submit", value: chrome.i18n.getMessage("save")}).click(function(){

$(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME");

timeimagepxkePX(thishere);
$("#copytextdapkl").remove();
$("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");

}),



$("<input>", {type: "submit", value: chrome.i18n.getMessage("close")}).click(function(){$("#copytextdapkl").remove(); $(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME"); $("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");}),




$("<input>", {type: "submit", value: chrome.i18n.getMessage("reset")}).click(function(){

$(".SELECTEDSETTIME").removeClass("SELECTEDSETTIME");

timeimagepxkePX2(thishere);
$("#copytextdapkl").remove();
$("[id='selectmultimusic'], [id='selectmultimusic2']").removeClass("anticlick");

})



).fadeIn())
checkcheckboxst();
$("#hourst").focus();

if(idgenkex == "NONENONE"){}

else{
var itemnamesetkx = idgenkex[0].title.split('::SETCUSTOMTIMEPX')[0];
var itemnamesetbase = idgenkex[0].title.replace(itemnamesetkx, "").replace('::SETCUSTOMTIMEPX=', "");
var itemnamesetbasedt = idgenkex[0].title.replace(itemnamesetkx, "")
var itemnamesetkst = itemnamesetbase.split('x')[0];
var itemnamesetkfn = itemnamesetbase.split('::SETCUSTOMTIMEPX=')[0].replace(itemnamesetkst+"x", "");

if(itemnamesetbasedt.startsWith("::SETCUSTOMTIMEPX=")){
setclockcst(Number(itemnamesetkst)*1000, "starts", "st");
setclockcst(Number(itemnamesetkfn)*1000, "ends", "fn");
}


}}


if(globaledit == true){systempkexne("NONENONE");}
else{chrome.bookmarks.get($(thishere).attr("folderid"), function(detectfoldersekl){systempkexne(detectfoldersekl);})}

}




$("#timefavclick2").click(function(){
var idallselectionmusic = "";
$("[id^='objfavit']").has(".checkedmusicsel").addClass("ENABLESTPEXF");
$(".ENABLESTPEXF").each(function(){
idallselectionmusic = idallselectionmusic+" #"+$(this).attr("id")+" #timefavclick,";
});
idallselectionmusic = idallselectionmusic.substring(0,idallselectionmusic.length-1)
if(idallselectionmusic == ""){}
else{timeimagepxke(idallselectionmusic, true);}
$(".ENABLESTPEXF").removeClass("ENABLESTPEXF");
});


















// Pesquisar
function searchimages(result){

if(result == ""){
$("#imagelist [id^='objfavit']").css("display", "");
}
else if(result == ":checked"){
$("#imagelist  [id^='objfavit']").css("display", "none");
$("#imagelist .artmark").css("display", "");
}
else{
$("#imagelist  [id^='objfavit']").css("display", "none");
$("#imagelist  [id^='objfavit']").has("#openmusic:contains('"+result+"')").css("display", "");
$("#imagelist  [id^='objfavit']").has("#openmusic:contains('"+result.toUpperCase()+"')").css("display", "");
$("#imagelist  [id^='objfavit']").has("#openmusic:contains('"+result.toLowerCase()+"')").css("display", "");
}

}

if(detectagain == "again"){}
else{$("#search").keyup(function(){searchimages($(this).val());});}

// Open Music
function openfolder(idfolder, thishere, loadtypepx){

volumeenabled = true;
$("#nextimageclickpx, #previousimageclickpx").removeClass("limitpagepx");
pagesforsecpg = 9999999999
createdmore = false
$("[id='openmusic']").off("click contextmenu");
$("[id='removefavclick']").off("click");
$("[id='renamefavclick']").off("click");
$("[id='timefavclick']").off("click");
$("#moreclick, #moreclick2").off("click").remove();
$("#folders .active").removeClass("active");
$(thishere).addClass("active");
$("#imagelist").empty();

chrome.bookmarks.getSubTree(idfolder ,function(foldercfg3){
var folderimagescfg = foldercfg3[0].children;
generatorimages(folderimagescfg, folderimagescfg.length, loadtypepx);
})

}


//Open Folders
function openmorefolder(data){

if($("#folder"+data).attr("class") == "open"){
$("#folder"+data).removeClass("open");
$("#"+data+" #iconopen"+data).removeClass("glyphicon-folder-open clickopen").addClass("glyphicon-folder-close");
}

else{
$("#folder"+data).addClass("open");
$("[id^='foldersubfolderpx']").has("#folder"+data).addClass("open");
$("#"+data+" #iconopen"+data).addClass("glyphicon-folder-open clickopen").removeClass("glyphicon-folder-close");
}

}


// Open Music

if(detectagain == "again"){}
else{
var invertimagedetect = false
var backgroundchangedetect = false
}

var repeatlistdetect = 0;
function openimagest(datype, clickdata, thishere){


if(datype == "repeatload"){}
else if(datype == "nextst"){if((randommusicen == true) && (api_youtube == true) && (api_soundcloud == true)){
var detectrepectrandomms = pageclicknumberpdss
pageclicknumberpdss = randommusic
}}
else{
playlistpxct = playlistpx
pageclicknumberpdss = Number($(thishere).attr("numberpage"))
pageclicknumberpmaxdss = pageclicknumberpmax
}






detectprogresspx = false
if(api_soundcloud == true){
widget.pause();
}
if(api_youtube == true){
youtubeplayer.pauseVideo();
youtubeplayer.unMute();
}
detectloadsucess = false
detectprogresspx = true
autoplaypause(2);






if(playlistpxct[pageclicknumberpdss] == undefined){pageclicknumberpdss = 0}
globalpageclicknumberpdss = pageclicknumberpdss;

$("[id='openmusic'] span").removeClass("glyphicon glyphicon-play");

if((datype == "nextst") || (datype == "repeatload")){$("#"+playlistpxct[pageclicknumberpdss].id+" #openmusic span").addClass("glyphicon glyphicon-play");}
else{$("#"+$(thishere).attr("folderidxp")+" #openmusic span").addClass("glyphicon glyphicon-play");}

$("#volumeico").addClass("volloading");
document.title = chrome.i18n.getMessage("appsoundbookplus");
playertype = playlistpxct[pageclicknumberpdss].playertype;

$("[id^='subfolderpx']").removeClass("musicplayfolder").removeClass("submusicplayfolder");
$("#subfolderpx"+playlistpxct[pageclicknumberpdss].folderid).addClass("musicplayfolder");
$("[class^='subfolderkp'], [class='firstsubfolder']").has("#subfolderpx"+playlistpxct[pageclicknumberpdss].folderid).addClass("submusicplayfolder");

custommusictime = false;

// Anti bug

if(repeatlistdetect == 2){repeatlistdetect = 0;}

// SoundCloud Load
else if(playertype == "soundcloud"){
if(api_soundcloud == true){widget.load(playlistpxct[pageclicknumberpdss].url, {show_artwork: true, show_comments: false, show_playcount: false, auto_play: true});}
else{errormusicst(playlistpxct[pageclicknumberpdss]);}}

// Youtube Load
else if(playertype == "youtube"){if(api_youtube == true){
newvideodetect = true

if((playlistpxct[pageclicknumberpdss].starts == null) || (playlistpxct[pageclicknumberpdss].ends == null)){
youtubeplayer.loadVideoById({'videoId': playlistpxct[pageclicknumberpdss].url
.replace("https://www.youtube.com/watch?v=", "")
.replace("https://youtu.be/", "").split('&list=')[0].split('?list=')[0].split('&index=')[0].split('?in=')[0]
,'suggestedQuality': appquality});
}
else{
custommusictime = true;
youtubeplayer.loadVideoById({'videoId': playlistpxct[pageclicknumberpdss].url
.replace("https://www.youtube.com/watch?v=", "")
.replace("https://youtu.be/", "").split('&list=')[0].split('?list=')[0].split('&index=')[0].split('?in=')[0]
,'suggestedQuality': appquality, 'startSeconds': playlistpxct[pageclicknumberpdss].starts, 'endSeconds': playlistpxct[pageclicknumberpdss].ends});
}

}

else{errormusicst(playlistpxct[pageclicknumberpdss]);}}



chrome.storage.local.get({soundbooknoti: false}, function(confignoti){if(confignoti.soundbooknoti == true){

if(datype == "repeatload"){}
else{
chrome.notifications.clear("musicct");
chrome.notifications.create("musicct",{
type: "basic",
iconUrl: chrome.extension.getURL('appicons/soundbookplus.png'),
title: playlistpxct[pageclicknumberpdss].title,
message: playlistpxct[pageclicknumberpdss].url,
contextMessage: chrome.i18n.getMessage("appsoundbookplus")
})
}


}})

}



function nextimagestpx(typeclick, detectautonext){if(pageclicknumberpdss == null){} else{

detectpageopenx = true
if(detectautonext == true){}
else{$("#nextimageclickpx, #previousimageclickpx").removeClass("limitpagepx");}

if(typeclick == "next"){
typepsxanex = "next"
if(pageclicknumberpdss == pageclicknumberpmaxdss){pageclicknumberpdss = 0
if(detectautonext == "error"){repeatlistdetect = repeatlistdetect+1}
$("#nextimageclickpx").addClass("limitpagepx");
}
pageclicknumberpdss = pageclicknumberpdss+1
if(playlistpxct[pageclicknumberpdss] == null){pageclicknumberpdss = 1}
if(playlistpxct[pageclicknumberpdss].url == "NONE"){nextimagestpx(typeclick, detectautonext);}
else{openimagest("nextst", detectautonext);}
}
else if(typeclick == "previous"){
typepsxanex = "previous"
pageclicknumberpdss = pageclicknumberpdss-1
if(pageclicknumberpdss == 0){pageclicknumberpdss = Number(pageclicknumberpmaxdss)
$("#previousimageclickpx").addClass("limitpagepx");
}
if(playlistpxct[pageclicknumberpdss].url == "NONE"){nextimagestpx(typeclick, detectautonext);}
else{openimagest("nextst", detectautonext);}
}

}}



// ERROR MUSIC

function errormusicst(errorid){
nextimagestpx("next", "error");
$("#"+errorid.id+" span").addClass("glyphicon glyphicon-ban-circle").addClass("errormusic");
$("#"+errorid.id).addClass("errormusic");
chrome.notifications.clear("errormusic");
chrome.notifications.create("errormusic",{
type: "basic",
iconUrl: chrome.extension.getURL('appicons/soundbookplus.png'),
title: "ERROR URL",
message: errorid.title,
contextMessage: chrome.i18n.getMessage("appsoundbookplus")
})
}








// SoundCloud

if(detectagain == "again"){}
else{if(api_soundcloud == true){
widget.bind(SC.Widget.Events.FINISH, function(){
if(repeatmusicen == true){widget.seekTo(0); widget.play(0);}
else{nextimagestpx("next");}
});

widget.bind(SC.Widget.Events.ERROR, function(){errormusicst(playlistpxct[pageclicknumberpdss]);})
}}

// Youtube
function youtubechange(videostates){if(playertype == "youtube"){

if((appquality == "hd720") || (appquality == "hd1080") || (appquality == "highres")){var imagequality = "hqdefault";}
//else if((appquality == "hd720") || (appquality == "hd1080") || (appquality == "highres")){var imagequality = "maxresdefault";}
else{var imagequality = "default";}

infocollectmusic({
"artwork": "https://img.youtube.com/vi/"+videostates.target.j.videoData.video_id+"/"+imagequality+".jpg",
"avatar": "https://img.youtube.com/vi/"+videostates.target.j.videoData.video_id+"/"+imagequality+".jpg",
"title": videostates.target.j.videoData.title ,
"username": videostates.target.j.videoData.author,
"url": youtubeplayer.getVideoUrl()
});
playerdur = youtubeplayer.getDuration()*1000

if(youtubeplayer.getPlayerState() == 1){resetprogressmusicxp(youtubeplayer.getDuration()*1000, true);}
else if(youtubeplayer.getPlayerState() == 2){}
else{resetprogressmusicxp(youtubeplayer.getDuration()*1000);}
	
if(youtubeplayer.getPlayerState() == 1){

if(newvideodetect == true){
resetprogressmusicxp(youtubeplayer.getDuration()*1000);

$("#volumeico").removeClass("volloading");
changesoundpx("load");
autoplaypause(3);
}

newvideodetect = false

}
else if(youtubeplayer.getPlayerState() == 0){if(newvideodetect == true){} else{
if(repeatmusicen == true){youtubeplayer.seekTo(0,true);}
else{nextimagestpx("next");}
}}

}
else{youtubeplayer.pauseVideo();}}







// NEXT PREVIOUS

if(detectagain == "again"){}
else{
$("#nextimageclickpx").click(function(){nextimagestpx("next");});
$("#previousimageclickpx").click(function(){nextimagestpx("previous");});
}




function repeatload(){
var numberselectedrepeat = 1000*repeatnumber
if(detectloadsucess == false){openimagest("repeatload");}
setTimeout(function(){repeatload();}, numberselectedrepeat)
}

//repeatload();









// Generator
function generatorimages(data, number, start, startid, folderset, oldfolder){

if(start == "subfolder"){}
else{
numbercountitems = number
itemcountsystemfolder();
}

// Variavel
var urlpage
var urlname
var urlid
var maxitem = number
if(number > pagesforsecpg){
var moreitem = true
}
else{
var moreitem = false
}
var artcountpx = 0
var cancelload = false

if(start == true){

$("#defaultfolder").prepend($("<li>", {class: "homefolder"}).append($("<a>", {class: "glyphicon glyphicon-home active"}).text(chrome.i18n.getMessage("home")).click(function(){
openfolder(startid, this, "homepage");
})));

$("#openpagefav").append($("<span>", {class: "glyphicon glyphicon-star folderitems folderid", "data-placement": "bottom", "data-original-title": chrome.i18n.getMessage("gapp_folderid")+": "+startid}).tooltip())
.click(function(){chrome.windows.create({url: "chrome://bookmarks/#"+startid, type: "normal", state: "normal"});});

	
}

// New Sub Folder
if(start == "subfolder"){
subcounter = subcounter+1
$("#subfolderpx"+oldfolder).append($("<ul>", {id: "folder"+folderset}));
}

//Loop
function loopcreatordv(detectfirst){
if(detectfirst == true){}
else{artcountpx = artcountpx+1}

// End Load

function updateimagesloadend(){
$("#selectmultimusic2 input").prop("checked", false);
var numberimgdetectpx = 0
pageclicknumberpmax = 0
playlistpx = []
var playlistaddauto = {}
playlistpx.push(playlistaddauto);

if(playlistpxct[pageclicknumberpdss] == undefined){}
else{$("#"+playlistpxct[pageclicknumberpdss].id+" span").addClass("glyphicon glyphicon-play");}

$("[id^='objfavit']").each(function(){
numberimgdetectpx = numberimgdetectpx+1
pageclicknumberpmax = pageclicknumberpmax+1

var playlistadd = {
"id": $(this).attr("id"), 
"title": $(this).attr("foldertitle"), 
"url": $(this).attr("folderurl"), 
"folderid": $(this).attr("folderidopend"),
"playertype": $("#"+$(this).attr("id")+" #openmusic").attr("loadtype"),
"starts": $(this).attr("starts"),
"ends": $(this).attr("ends")
}
playlistpx.push(playlistadd);

$("#"+$(this).attr("id")+" #openmusic").attr("numberpage", numberimgdetectpx)

$(
"#"+$(this).attr("id")+" #removefavclick, "+
"#"+$(this).attr("id")+" #renamefavclick, "+
"#"+$(this).attr("id")+" #timefavclick, #"+
$(this).attr("id")+" #markseck"
).attr("folderid", $(this).attr("id").replace("objfavit", ""))

if($(this).attr("checkedload") == "true"){$(this).addClass("artmark"); $("#"+$(this).attr("id")+" #markseck").prop("checked", true)}
else{$(this).removeClass("artmark");}
});

var duplicateChk = {};
$("[id^='objfavit']").each(function(){
if (duplicateChk.hasOwnProperty(this.id)) {
$(this).remove();
} else {
duplicateChk[this.id] = 'true';
}
});

}

function endimageload(){if(finalcomplete == true){

pagesforsecpg = pagesforsecpgnbx
$("#moreclick, #moreclick2").off("click").remove();
loadingset(false);

}
updateimagesloadend();
}

// Base

loadingset(true);

if(data[0] == undefined){generatormenupx();}








// LAST LOAD
if(artcountpx == maxitem-1){if(folderpxsepx == false){folderpxse = true}

if(loadfoldeertime == true){setTimeout(function(){livereload();},100);}
loadfoldeertime = false;

}








if(start == true){if((maxitem == 0) || (folderpxse == true)){finalcomplete = true; endimageload();}}
if(data[artcountpx] == undefined){loadingset(false); return;}
urlpage = data[artcountpx].url;
urlname = data[artcountpx].title;
urlid = data[artcountpx].id;
if(urlpage == null){}
else{if(data[artcountpx].url.indexOf('?in=') > -1){data[artcountpx].url = data[artcountpx].url.split('?in=')[0];}}
if(urlpage == null){var subfoldernb = artcountpx}
if((artcountpx == pagesforsecpg) && (start == "folder")){loadingset(false); return;}

if((data[artcountpx] == undefined) || (urlpage == null) || (start == true) || (start == "homepage") || (start == "subfolder")){}
else{

if(urlname.endsWith(":CHECKED")){var checkedart = true}
else{var checkedart = false}
}



// Create Sub Folder
function subfoldercreate(myfoderid){chrome.bookmarks.getSubTree(myfoderid ,function(foldercfg2){

var subfolderchi = foldercfg2[0].children;
generatorimages(foldercfg2[0].children, subfolderchi.length, "subfolder", foldercfg2[0].id, "subfolderpx"+foldercfg2[0].id, myfoderid);

})}

// New Sub Folder
if(start == "subfolder"){if(urlpage == null){
$("#iconopen"+folderset).addClass("subfolderctpxcf");
$("#folder"+folderset).append($("<li>",{id: "subfolderpx"+data[subfoldernb].id, class: "subfolderkp"+subcounter}).append($("<span>", {class: "glyphicon glyphicon-folder-close foldericon", id: "iconopensubfolderpx"+data[subfoldernb].id}).click(function(){openmorefolder("subfolderpx"+data[subfoldernb].id);}), $("<a>", {class: "foldername", foldermyidauto: data[subfoldernb].id}).text(data[subfoldernb].title).click(function(){
openfolder(data[subfoldernb].id, this, "folder"); folderopeneddt = data[subfoldernb].id;
}).contextmenu(function(){
chrome.windows.create({url: "chrome://bookmarks/#"+data[subfoldernb].id, type: "normal", state: "normal"});
return false;
})));

subfoldercreate(data[subfoldernb].id);
loopcreatordv();
}
else{loopcreatordv();}}



// Detect Folder File
if(urlpage == null){
if(start == true){

// New Folder
$("#"+folderset).append($("<li>", {id: "subfolderpx"+data[subfoldernb].id, class: "firstsubfolder"}).append($("<span>", {class: "glyphicon glyphicon-folder-close foldericon", id: "iconopensubfolderpx"+data[subfoldernb].id}).click(function(){openmorefolder("subfolderpx"+data[subfoldernb].id);}), $("<a>", {class: "foldername", foldermyidauto: data[subfoldernb].id}).text(data[subfoldernb].title).click(function(){
openfolder(data[subfoldernb].id, this, "folder"); folderopeneddt = data[subfoldernb].id;
}).contextmenu(function(){
chrome.windows.create({url: "chrome://bookmarks/#"+data[subfoldernb].id, type: "normal", state: "normal"});
return false;
})));

// New Sub Folder
subfoldercreate(data[subfoldernb].id);

}
else if(start == "subfolder"){}
else{pagesforsecpg = pagesforsecpg+1}

loopcreatordv();
}




// Create Home Page

if((start == true) || (start == "homepage")){generatormenupx();}

else if(start == "folder"){if(createdmore == false){if(moreitem == true){$("#moreclickbase").append(

$("<div>", {id: "moreclick", class: "clickdevart"}).text(chrome.i18n.getMessage("more")).click(function(){
pagesforsecpg = pagesforsecpg+pagesforsecpgnbx
loopcreatordv();
}),

$("<div>", {id: "moreclick2", class: "clickdevart"}).text(chrome.i18n.getMessage("all")).click(function(){
pagesforsecpg = pagesforsecpg+999999999
loopcreatordv();
})

)

}}}

createdmore = true

if(start == "subfolder"){loadingset(false);}
else if(cancelload == true){$("#imagelist").addClass("hide"); $("#loading").addClass("hide");}
else if(artcountpx < maxitem+1){
	


if(urlpage == null){}

// Image Generator
else{

// Generator Validador URL

// Load Music List
function endloadgeneratorbase(){
endimageload();
folderpxsepx = true
setTimeout(function(){loopcreatordv();},1);
}

function generatorlistbase(typemusicload){

var itemnamesetkx = data[artcountpx].title.split('::SETCUSTOMTIMEPX')[0];
var itemnamesetbase = data[artcountpx].title.replace(itemnamesetkx, "").replace('::SETCUSTOMTIMEPX=', "");
var itemnamesetkst = itemnamesetbase.split('x')[0];
var itemnamesetkfn = itemnamesetbase.split('::SETCUSTOMTIMEPX=')[0].replace(itemnamesetkst+"x", "");

if(typemusicload == "youtube"){

$("#imagelist").append($("<div>", {id: "objfavit"+data[artcountpx].id, folderurl:  data[artcountpx].url, foldertitle: itemnamesetkx, checkedload: checkedart, folderidopend: folderopeneddt, starts: itemnamesetkst, ends: itemnamesetkfn}).append(

$("<div>", {class: "glyphicon glyphicon-remove clickoptionsmusic", id: "removefavclick"}).click(function(){removeimagepxke(this);}),
$("<div>", {class: "glyphicon glyphicon-console clickoptionsmusic", id: "renamefavclick"}).click(function(){renameimagepxke(this);}),
$("<div>", {class: "glyphicon glyphicon-time clickoptionsmusic", id: "timefavclick"}).click(function(){timeimagepxke(this);}),
$("<label>", {class: "clickoptionsmusic", id: "selectmultimusic"}).append($("<input>", {type: "checkbox"}).click(function(){
if($(this).prop("checked") == true){$("label").has(this).addClass("checkedmusicsel"); $("[id^='objfavit']").has(this).addClass("checkedmusicalname");}
else{$("label").has(this).removeClass("checkedmusicsel"); $("[id^='objfavit']").has(this).removeClass("checkedmusicalname"); $("#selectmultimusic2 input").prop("checked", false);}
})),
$("<div>", {musicurl: data[artcountpx].url, id: "openmusic", folderidxp: "objfavit"+data[artcountpx].id, loadtype: typemusicload}).prepend($("<span>"),
$("<p>", {class: "title"}).text(itemnamesetkx)).click(function(){openimagest("", {}, this);}).on("contextmenu",function(){
window.open($(this).attr("musicurl"), "_blank")
return false;
})

));

}

else{

$("#imagelist").append($("<div>", {id: "objfavit"+data[artcountpx].id, folderurl:  data[artcountpx].url, foldertitle: itemnamesetkx, checkedload: checkedart, folderidopend: folderopeneddt}).append(

$("<div>", {class: "glyphicon glyphicon-remove clickoptionsmusic", id: "removefavclick"}).click(function(){removeimagepxke(this);}),
$("<div>", {class: "glyphicon glyphicon-console clickoptionsmusic", id: "renamefavclick"}).click(function(){renameimagepxke(this);}),
$("<label>", {class: "clickoptionsmusic", id: "selectmultimusic"}).append($("<input>", {type: "checkbox"}).click(function(){
if($(this).prop("checked") == true){$("label").has(this).addClass("checkedmusicsel"); $("[id^='objfavit']").has(this).addClass("checkedmusicalname");}
else{$("label").has(this).removeClass("checkedmusicsel"); $("[id^='objfavit']").has(this).removeClass("checkedmusicalname"); $("#selectmultimusic2 input").prop("checked", false);}
})),
$("<div>", {musicurl: data[artcountpx].url, id: "openmusic", folderidxp: "objfavit"+data[artcountpx].id, loadtype: typemusicload, starts: itemnamesetkst, ends: itemnamesetkfn}).prepend($("<span>"),
$("<p>", {class: "title"}).text(itemnamesetkx)).click(function(){openimagest("", {}, this);}).on("contextmenu",function(){
window.open($(this).attr("musicurl"), "_blank")
return false;
})

));

}

endloadgeneratorbase();
}

if(artcountpx == maxitem){finalcomplete = true}
else{finalcomplete = false}
if((start == true) || (start == "homepage")){}

else if(urlpage.startsWith("https://soundcloud.com/")){generatorlistbase("soundcloud");}
else if((urlpage.startsWith("https://www.youtube.com/")) || (urlpage.startsWith("https://youtu.be/_q9ZC-UwViM"))){generatorlistbase("youtube");}
else {endloadgeneratorbase();}

}}

}

loopcreatordv(true);
	
}

// Comando Inicial
generatorimages(foldercfg[0].children, folder.length, true, foldercfg[0].id, "folderlist");




$("#selectmultimusic2 input").click(function(){
$(".checkedmusicsel").removeClass("checkedmusicsel");
if($(this).prop("checked") == true){$("[id='selectmultimusic'] input").prop("checked", false).trigger("click");}
else{$("[id='selectmultimusic']").prop("checked", true).trigger("click"); $(".checkedmusicalname").removeClass("checkedmusicalname");}
});




if(detectagain == "again"){}
else{

// Ativar Todo Sistema

var youtubesystemcomplete = {
height: '0',
width: '0',
videoId: 'TIAbeZOdjNc',
events: {
'onReady': function(){loadingset("firstload");},
'onStateChange': function(videostate){youtubechange(videostate);},
'onError': function(){errormusicst(playlistpxct[pageclicknumberpdss]);},
"onPlaying": function(){youtubeplaying();}
}
};



if(api_soundcloud == true){
widget.bind(SC.Widget.Events.READY, function(){
if(api_youtube == true){youtubeplayer = new YT.Player('youtubeplayer', youtubesystemcomplete);}
else{loadingset("firstload");}
})
}
else{
if(api_youtube == true){youtubeplayer = new YT.Player('youtubeplayer', youtubesystemcomplete);}
else{loadingset("firstload");}
}


}


// Tecla de Atalho
chrome.commands.onCommand.addListener(function(command) {

if(pageclicknumberpdss == null){} else{
if(command == "play"){playpausemusic();}
else if(command == "next"){nextimagestpx("next");}
else if(command == "prev"){nextimagestpx("previous");}
else if(command == "stop"){
autoplaypause(1);
if(api_soundcloud == true){if(playertype == "soundcloud"){widget.pause(); widget.seekTo(0);}}
if(api_youtube == true){if(playertype == "youtube"){youtubeplayer.pauseVideo(); youtubeplayer.seekTo(0,true);}}
$("#musicbar").val(0);
$("#musicbargp").css("width", "0%").attr("aria-valuenow", 0);
$("#musictimep1").text("0:00");
}
}

});

var delaymusicpekx = false;

function systemshortsystem(){
shortcut.add("RIGHT",function(){if($("input[type='text'], textarea").is(":focus") == false){
	
if(delaymusicpekx == false){
var newshutat = Number($("#musicbar").val())+1900;
if(playerdur > newshutat){
$("#musicbar").val(newshutat);
$("#musicbar").trigger("change");
}}
delaymusicpekx = true;
setTimeout(function(){delaymusicpekx = false;}, 100);

}});

shortcut.add("LEFT",function(){if($("input[type='text'], textarea").is(":focus") == false){

if(delaymusicpekx == false){
var newshutat = Number($("#musicbar").val())-1900;
if(0 < newshutat){
$("#musicbar").val(newshutat);
$("#musicbar").trigger("change");
}}
delaymusicpekx = true;
setTimeout(function(){delaymusicpekx = false;}, 100);

}});

shortcut.add("UP",function(){if($("input[type='text'], textarea").is(":focus") == false){

if(delaymusicpekx == false){
var newshutat = Number($("#sound").val())+1;
if(newshutat < 101){
$("#sound").val(newshutat);
$("#sound").trigger("change");
}}
delaymusicpekx = true;
setTimeout(function(){delaymusicpekx = false;}, 100);

}});

shortcut.add("DOWN",function(){if($("input[type='text'], textarea").is(":focus") == false){

if(delaymusicpekx == false){
var newshutat = Number($("#sound").val())-1;
if(newshutat > -1){
$("#sound").val(newshutat);
$("#sound").trigger("change");
}}
delaymusicpekx = true;
setTimeout(function(){delaymusicpekx = false;}, 100);

}});
}

systemshortsystem();


function checkcheckboxst(){
$("input[type='text'], textarea").off("blur").off("focus").blur(function(){
systemshortsystem();
}).focus(function(){
shortcut.remove("RIGHT");
shortcut.remove("LEFT");
shortcut.remove("UP");
shortcut.remove("DOWN");
});
}

checkcheckboxst();


})}

// Start System

function searchfolder(detectagain){chrome.bookmarks.search({"title": chrome.i18n.getMessage("app_sp_folder")}, function(favdata){
if(favdata[0] == null){chrome.bookmarks.create({"parentId": "1", "title": chrome.i18n.getMessage("app_sp_folder")}, function(newfoldersystem){
chrome.bookmarks.create({"parentId": newfoldersystem.id, "title": chrome.i18n.getMessage("gapp_demofolder")}, function(newfoldersystem2){
chrome.bookmarks.create({"parentId": newfoldersystem2.id, "title": chrome.i18n.getMessage("gapp_filedemo1"), "url": "https://soundcloud.com/jackiedreasond/jackie-dreasond-theme"});
chrome.bookmarks.create({"parentId": newfoldersystem2.id, "title": chrome.i18n.getMessage("gapp_filedemo2"), "url": "https://soundcloud.com/jackiedreasond/jukine-theme-star-fox-64-fan-made"});
chrome.bookmarks.create({"parentId": newfoldersystem2.id, "title": chrome.i18n.getMessage("gapp_filedemo3"), "url": "https://soundcloud.com/jackiedreasond/dubstell-fest"});	
});
$("#foldercreatesc").modal();
$("#openclicknewfolder").click(function(){chrome.windows.create({url: "chrome://bookmarks/#"+newfoldersystem.id, type: "normal", state: "normal"}); $("#foldercreatesc").modal("toggle");});
searchfolder(detectagain);
})}
else{startfavpage(favdata[0].id, detectagain);}
})}


if(api_youtube == true){function onYouTubeIframeAPIReady(){searchfolder("");}}
else{searchfolder("");}

//$("#refreshfolderlist").click(function(){$(".homefolder").trigger("click"); loadingset(true); $("#folderlist, .homefolder").empty(); searchfolder("again");});
$("#refreshfolderlist").click(function(){location.reload();});


var idfolderpx

// Gerenciador abrir e fechar

function closerecpagespx(exittype){
if(exittype == "normal"){$("#importfavfolder").addClass("anticlick").fadeOut();}
else{
$("#importfavfolder").addClass("anticlick").fadeOut(function(){

});
}}
function openrecpagespx(){$("#importfavfolder").removeClass("anticlick").fadeIn();}





// Sistema pegar pastas

var typeimportclickp = "youtube"
var repeatavxvideo = false
 
function recpagespxerk(data){

if(data.intro == "send"){closerecpagespx("normal"); loadingset(true);

if(typeimportclickp == "soundcloud"){
devname = $("#danamesf").val()
devpagetype = $("#favtypesf").val()
urlfinaldev = $("#favfoldersf").val()
}

else if(typeimportclickp == "youtube"){
devname = $("#idplaylist").val()
}

}

if((data.intro == "start") || (data.intro == "again")){

if(typeimportclickp == "soundcloud"){
$("#danamesf").val("")
$("#favtypesf").val("sets")
$("#favfoldersf").val("")
}

else if(typeimportclickp == "youtube"){
$("#idplaylist").val("")
}

if(data.intro == "again"){
$("#dasubclosesf").off("click").click(function(){location.reload();})
}

openrecpagespx();
}

else if((data.intro == "send") || (data.intro == "next")){

//Validador Page

// Gerador de favoritos


// Gerador Youtube
if(typeimportclickp == "youtube"){

function actionyoutubeplaylist(dataplaylist, devname){
youtubeplaylist.pauseVideo();
if(dataplaylist == "error"){
$("#resultimportpx").text(chrome.i18n.getMessage("gapp_folderimerror")); loadingset(false); recpagespxerk({"intro" :"again"});
}
else if(dataplaylist == "ready"){youtubeplaylist.cuePlaylist({
list:devname,
index:0,
startSeconds:0,
suggestedQuality:"small"});}
else{if(repeatavxvideo == false){

// GERADOR
repeatavxvideo = true 

var gettitlepage = prompt(chrome.i18n.getMessage("app_sp_foldername")+":", "");


chrome.bookmarks.search({"title": chrome.i18n.getMessage("app_sp_folder")}, function(favdata){
chrome.bookmarks.create({"parentId": favdata[0].id, "title": gettitlepage}, function(newfavpxsd){

createnewplaylistid = newfavpxsd.id
var countpxsk = 1
for(var prop in youtubeplaylist.getPlaylist()) {
if(countpxsk == Number(youtubeplaylist.getPlaylist().length)){loadingset(false); recpagespxerk({"intro" :"again"}); $("#resultimportpx").text(chrome.i18n.getMessage("gapp_folderimcomplete"));}
if(youtubeplaylist.getPlaylist().hasOwnProperty(prop)){

countpxsk = countpxsk+1

$.ajax({
url: "https://www.youtube.com/list_ajax?style=json&action_get_templist=1&video_ids="+youtubeplaylist.getPlaylist()[prop],
}).done(function(datavideopx) {
	
chrome.bookmarks.create({"parentId": createnewplaylistid, "title": datavideopx["video"][0]["title"], "url": this.url.replace("https://www.youtube.com/list_ajax?style=json&action_get_templist=1&video_ids=", "https://www.youtube.com/watch?v=")})

})

}}

})
})

}}
}

if(youtubeplaylist == null){
youtubeplaylist = new YT.Player('youtubeplaylist', {
height: '0',
width: '0',
videoId: 'TIAbeZOdjNc',
events: {
'onReady': function(){actionyoutubeplaylist("ready", devname)},
'onStateChange': function(){actionyoutubeplaylist(devname);},
'onError': function(){actionyoutubeplaylist("error")}
}
});
}
else{
youtubeplaylist.cuePlaylist({
list:devname,
index:0,
startSeconds:0,
suggestedQuality:"small"});
}

}


}}

$("#openimportbtx").click(function(){recpagespxerk({"intro" :"start"});});
$("#dasubmovsf").click(function(){repeatavxvideo = false; recpagespxerk({"intro" :"send"});});
$("#dasubclosesf").click(function(){closerecpagespx();});
















// Auto Detect URL




// SoundCloud

function autodetecturlpxs(thishere){if($(thishere).val().startsWith("https://soundcloud.com/") > -1){var validatorurlda = $(thishere).val();

var preparelinkset = validatorurlda.replace("https://soundcloud.com/" ,"")
var nameprofile = preparelinkset.split('/')[0]
var nameprofile = preparelinkset.split('/')[0]

var typepreprofile = preparelinkset.replace(nameprofile+"/", "")
var typepreprofileset = typepreprofile.split('/')[0]

$("#danamesf").val(nameprofile);
if(typepreprofileset == "sets"){$("#favtypesf").val("sets");}
else if(typepreprofileset == "albums"){$("#favtypesf").val("albums");}


$("#favfoldersf").val(preparelinkset.replace(nameprofile+"/", "").replace(typepreprofileset+"/", ""));
$(thishere).val("");

}}

$("#daautodetectsf").change(function(){autodetecturlpxs(this);});





// Youtube

function autodetecturlpxs2(thishere){if($(thishere).val().startsWith("https://soundcloud.com/") > -1){var validatorurlda = $(thishere).val();

var preparelinkset = validatorurlda.replace("https://youtu.be/" ,"").replace("https://www.youtube.com/" ,"");

if(preparelinkset.startsWith("playlist?list=")){var preparelinkset = preparelinkset.replace("playlist?list=", "")}
else if(preparelinkset.startsWith("watch?v=")){
var preparelinkset = preparelinkset.replace("watch?v=", "").split('&index=')[0];
var preparelinkse2t = preparelinkset.split('&list=')[0];
var preparelinkset = preparelinkset.replace(preparelinkse2t, "").replace("&list=", "");
}
else{
var preparelinkse2t = preparelinkset.split('?list=')[0];
var preparelinkset = preparelinkset.replace(preparelinkse2t, "").replace("?list=", "");
}

$("#idplaylist").val(preparelinkset);
$(thishere).val("");

}}

$("#daautodetectsf2").change(function(){autodetecturlpxs2(this);});













// Live Stream

var live_show_options = true;
var defaultcolorslive = {
"live_background": "#ededed",
"live_button": "#333333",
"live_buttonhover": "#666666",
"live_buttonclick": "#969494",
"live_buttonactive": "#FF6500",
"live_time": "#e67300",
"live_author": "#808080",
"live_progressbar": "#CCCCCC",
"live_progressbarcomplete": "#FF6500",
"live_progressbaricon": "#FFFFFF",
"live_progressbariconhover": "#FFFFFF",
"live_progressbariconactive": "#FFFFFF",
"live_volumeclick": "#D7D7D7",
"live_volumebarclick": "#4d3300",
"live_text": "#333333",
"live_show_credits": true,
"live_show_options": true,
"live_show_progress": true
};



function livestreamst(){chrome.storage.sync.get(defaultcolorslive, function(color_save){

if(livemodet == true){

var show_credits = "";
var show_progress = "";
if(color_save.live_show_credits == false){var show_credits = "#infoimpmusic{display: none !important;}";}
if(color_save.live_show_progress == false){var show_progress = "#musictimep1, #musictimep2, .musicbar{display: none !important;}";}

$("#closelive").removeClass("hide");
$("#size_page").prop("disabled", true);
$("head").append(
$("<link>", {id: "customtheme1", rel: "stylesheet", type: "text/css", href: "../css/apps/soundbookplus/live.css"}),
$("<style>", {id: "customtheme2"}).text(
show_credits+" "+show_progress+" \n"+
'.navbar-fixed-bottom{background-color:'+color_save.live_background+';}\n'+
'.navbar-fixed-bottom{color:'+color_save.live_text+';}\n'+
'#options span:before{color:'+color_save.live_button+';}\n'+
'#options span:hover:before{color:'+color_save.live_buttonhover+';}\n'+
'#options span:active:before{color:'+color_save.live_buttonclick+';}\n'+
'.randomenabled:before{color:'+color_save.live_buttonactive+' !important;}\n'+
'.randomenabled:hover:before{color:'+color_save.live_buttonhover+' !important;}\n'+
'.randomenabled:active:before{color:'+color_save.live_buttonclick+' !important;}\n'+
'#musictimep1{color:'+color_save.live_time+'; !important;}\n'+
'#musictimep3{color:'+color_save.live_text+'; !important;}\n'+
'#infomuser{color:'+color_save.live_author+'; !important;}\n'+
'.musicbar .progress{background-color:'+color_save.live_progressbar+';}\n'+
'.musicbar .progress-bar{background-color:'+color_save.live_progressbarcomplete+';}\n'+
'#musicbar:hover::-webkit-slider-thumb{background-color:'+color_save.live_progressbaricon+';}\n'+
'#musicbar:active::-webkit-slider-thumb{background-color:'+color_save.live_progressbariconhover+';}\n'+
'#musicbar:disabled::-webkit-slider-thumb{background-color:'+color_save.live_progressbariconactive+';}\n'+
'#musicbar::-webkit-slider-thumb{background-color:'+color_save.live_progressbariconactive+';}'+
'.volumeclick:hover, .open .volumeclick{background-color:'+color_save.live_volumeclick+' !important;}'+
'#soundspace{background-color:'+color_save.live_background+' !important;}'+
'#soundspace input[type=range]::-webkit-slider-thumb{background:'+color_save.live_progressbaricon+' !important; border-color: transparent;}'+
'#soundspace input[type=range]:hover::-webkit-slider-thumb{background:'+color_save.live_progressbariconhover+' !important; border-color: transparent;}'+
'#soundspace input[type=range]::-webkit-slider-runnable-track{background:'+color_save.live_progressbarcomplete+' !important;}'+
'#soundspace input[type=range]:active::-webkit-slider-runnable-track{background:'+color_save.live_volumebarclick+' !important;}'
),
$("<link>", {id: "customtheme3", rel: "stylesheet", type: "text/css", href: "../css/apps/soundbookplus/live_control.css"}).prop("disabled", color_save.live_show_options)
);
live_show_options = color_save.live_show_options;

}


else if(livemodet == false){

$("#closelive").addClass("hide");
$("#size_page").prop("disabled", false);
$("#customtheme1, #customtheme2, #customtheme3").prop("disabled", true).remove();
$(".optionsox").removeClass("viewitem"); viewitemcontrolp = false;

}

$(window).trigger("resize");

})}




// Load
$("#livemode").click(function(){
chrome.storage.sync.get(defaultcolorslive, function(color_save){

$("#liveconfig").modal();

$("#backgroundlive").val(color_save.live_background);
$("#buttonslive").val(color_save.live_button);
$("#buttonshoverlive").val(color_save.live_buttonhover);
$("#buttonsclicklive").val(color_save.live_buttonclick);
$("#buttonsactivelive").val(color_save.live_buttonactive);
$("#timer1live").val(color_save.live_time);
$("#timer2live").val(color_save.live_time2);
$("#timer3live").val(color_save.live_time3);
$("#authorlive").val(color_save.live_author);
$("#progressbarlive").val(color_save.live_progressbar);
$("#progressbar2live").val(color_save.live_progressbarcomplete);
$("#progressbariconlive").val(color_save.live_progressbaricon);
$("#progressbariconactivelive").val(color_save.live_progressbariconhover);
$("#progressbariconhoverlive").val(color_save.live_progressbariconactive);
$("#volumeclicklive").val(color_save.live_volumeclick);
$("#volumebarclicklive").val(color_save.live_volumebarclick);
$("#textlive").val(color_save.live_text);
$("#creditslive").prop("checked", color_save.live_show_credits);
$("#optionslive").prop("checked", color_save.live_show_options);
$("#progresslive").prop("checked", color_save.live_show_progress);

})});

// Save

$("#confirmlive").click(function(){
chrome.storage.sync.set({

"live_background": $("#backgroundlive").val(),
"live_button": $("#buttonslive").val(),
"live_buttonhover": $("#buttonshoverlive").val(),
"live_buttonclick": $("#buttonsclicklive").val(),
"live_buttonactive": $("#buttonsactivelive").val(),
"live_time": $("#timer1live").val(),
"live_author": $("#authorlive").val(),
"live_progressbar": $("#progressbarlive").val(),
"live_progressbarcomplete": $("#progressbar2live").val(),
"live_progressbaricon": $("#progressbariconlive").val(),
"live_progressbariconhover": $("#progressbariconactivelive").val(),
"live_progressbariconactive": $("#progressbariconhoverlive").val(),
"live_volumeclick": $("#volumeclicklive").val(),
"live_volumebarclick": $("#volumebarclicklive").val(),
"live_text": $("#textlive").val(),
"live_show_credits": $("#creditslive").prop("checked"),
"live_show_options": $("#optionslive").prop("checked"),
"live_show_progress": $("#progresslive").prop("checked")

}, function(){
livemodet = true;
livestreamst();
$("#liveconfig").modal("toggle");
})});

// Default Values
$("#defaultlive").click(function(){

$("#backgroundlive").val(defaultcolorslive.live_background);
$("#buttonslive").val(defaultcolorslive.live_button);
$("#buttonshoverlive").val(defaultcolorslive.live_buttonhover);
$("#buttonsclicklive").val(defaultcolorslive.live_buttonclick);
$("#buttonsactivelive").val(defaultcolorslive.live_buttonactive);
$("#timer1live").val(defaultcolorslive.live_time);
$("#authorlive").val(defaultcolorslive.live_author);
$("#progressbarlive").val(defaultcolorslive.live_progressbar);
$("#progressbar2live").val(defaultcolorslive.live_progressbarcomplete);
$("#progressbariconlive").val(defaultcolorslive.live_progressbaricon);
$("#progressbariconactivelive").val(defaultcolorslive.live_progressbariconhover);
$("#progressbariconhoverlive").val(defaultcolorslive.live_progressbariconactive);
$("#volumeclicklive").val(defaultcolorslive.live_volumeclick);
$("#volumebarclicklive").val(defaultcolorslive.live_volumebarclick);
$("#textlive").val(defaultcolorslive.live_text);
$("#creditslive").prop("checked", defaultcolorslive.live_show_credits);
$("#optionslive").prop("checked", defaultcolorslive.live_show_options);
$("#progresslive").prop("checked", defaultcolorslive.live_show_progress);

});

// Export
$("#exportcolorlive").click(function(){chrome.storage.sync.get(defaultcolorslive, function(color_save){
$("#exportimportcolors").val(JSON.stringify(color_save));
})});

// Import
$("#importcolorlive").click(function(){chrome.storage.sync.get(defaultcolorslive, function(color_save){

var getcolorspx = $("#exportimportcolors").val();
var getcolorspx2 = JSON.parse(getcolorspx);
$("#exportimportcolors").val("");

chrome.storage.sync.set({

"live_background": getcolorspx2.live_background,
"live_button": getcolorspx2.live_button,
"live_buttonhover": getcolorspx2.live_buttonhover,
"live_buttonclick": getcolorspx2.live_buttonclick,
"live_buttonactive": getcolorspx2.live_buttonactive,
"live_time": getcolorspx2.live_time,
"live_author": getcolorspx2.live_author,
"live_progressbar": getcolorspx2.live_progressbar,
"live_progressbarcomplete": getcolorspx2.live_progressbarcomplete,
"live_progressbaricon": getcolorspx2.live_progressbaricon,
"live_progressbariconhover": getcolorspx2.live_progressbariconhover,
"live_progressbariconactive": getcolorspx2.live_progressbariconactive,
"live_volumeclick": getcolorspx2.live_volumeclick,
"live_volumebarclick": getcolorspx2.live_volumebarclick,
"live_text": getcolorspx2.live_text,
"live_text": getcolorspx2.live_show_credits,
"live_text": getcolorspx2.live_show_options,
"live_text": getcolorspx2.live_show_progress

}, function(){
$("#livemode").trigger("click");
})


})});



// Close Live
$("#closelive").click(function(){
livemodet = false;
livestreamst();
});



var viewitemcontrolp = false;
$(".navbar-fixed-bottom").contextmenu(function(){if(livemodet == true){if(live_show_options == false){

if(viewitemcontrolp == false){$(".optionsox").addClass("viewitem"); viewitemcontrolp = true;}
else{$(".optionsox").removeClass("viewitem"); viewitemcontrolp = false;}
return false;

}}});