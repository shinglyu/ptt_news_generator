var img_path = domain + "/adv/web/corp/img/"

//Added var for corpbar
/********************************************************/
var todaydate = "20150822161023";
var isracingday = false;
var corpbar_temperature = "32";
var corpbar_weather_gif = "pic51.jpg|vhot.jpg";// seprate by "|" when more than 1 e.g. "pic51.jpg|vhot.jpg|tc1.jpg"
var corpbar_weather_gif_alt = "&#x9593;&#x6709;&#x967D;&#x5149;|&#x9177;&#x71B1;&#x5929;&#x6C23;&#x8B66;&#x544A;";
var corpbar_weather_rolltext = "";
var corpbar_weather_link = "http://news.on.cc/wea/"; //ignore this if this is permanent.
/********************************************************/

function print_weather() {
 
  var str_weather = "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"1\" border=\"0\" valign=\"top\"><tr>";

  str_weather += "<td width=\"5%\" align=\"left\" valign=\"top\" nowrap>";
  str_weather += "現時氣溫：32 ℃";
  str_weather += " </td>";
  str_weather += "<td width=\"5%\" align=\"left\" valign=\"top\" nowrap> ";
    str_weather += "<img src=\"" + img_path + "pic51.jpg\" alt=\"&#x9593;&#x6709;&#x967D;&#x5149;|\" title=\"&#x9593;&#x6709;&#x967D;&#x5149;|\">&nbsp;";
  str_weather += "<img src=\"" + img_path + "vhot.jpg\" alt=\"&#x9593;&#x6709;&#x967D;&#x5149;|&#x9177;&#x71B1;&#x5929;&#x6C23;&#x8B66;&#x544A;|\" title=\"&#x9593;&#x6709;&#x967D;&#x5149;|&#x9177;&#x71B1;&#x5929;&#x6C23;&#x8B66;&#x544A;|\">&nbsp;";

  str_weather += " &nbsp;</td>";
  str_weather += "<td width=\"90%\" align=\"left\" valign=\"top\">";
  str_weather += "<marquee scrollamount=\"2\" scrolldelay=\"10\">";
  str_weather += "<a href=\"http://news.on.cc/wea/\"></a>";
  str_weather += "</marquee>";
  str_weather += "</td>";

  str_weather += "</tr></table>";
  document.write(str_weather);
}

function print_weather_2line() {

  var str_weather = "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" valign=\"top\">";

  str_weather += "<tr><td width=\"5%\" align=\"left\" valign=\"top\" nowrap> ";
  str_weather += "現時氣溫：32 ℃";
  str_weather += " </td>";
  str_weather += "<td align=\"left\" valign=\"top\" nowrap> ";
    str_weather += "<img src=\"" + img_path + "pic51.jpg\" alt=\"&#x9593;&#x6709;&#x967D;&#x5149;|\" title=\"&#x9593;&#x6709;&#x967D;&#x5149;|\">&nbsp;";
  str_weather += "<img src=\"" + img_path + "vhot.jpg\" alt=\"&#x9593;&#x6709;&#x967D;&#x5149;|&#x9177;&#x71B1;&#x5929;&#x6C23;&#x8B66;&#x544A;|\" title=\"&#x9593;&#x6709;&#x967D;&#x5149;|&#x9177;&#x71B1;&#x5929;&#x6C23;&#x8B66;&#x544A;|\">&nbsp;";

  str_weather += "</td></tr>";
  str_weather += "<tr><td colspan=\"2\" align=\"left\" valign=\"top\">";
  str_weather += "<marquee scrollamount=\"2\" scrolldelay=\"10\">";
  str_weather += "<a href=\"http://news.on.cc/wea/\"></a>";
  str_weather += "</marquee>";
  str_weather += "</td></tr>";

  str_weather += "</table>";
  document.write(str_weather);
}
