(self.webpackChunkconverse_js=self.webpackChunkconverse_js||[]).push([[3435],{7101:function(e,r,t){e.exports=function(e){"use strict";var r=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(e),t={words:{m:["један минут","једног минута"],mm:["%d минут","%d минута","%d минута"],h:["један сат","једног сата"],hh:["%d сат","%d сата","%d сати"],d:["један дан","једног дана"],dd:["%d дан","%d дана","%d дана"],M:["један месец","једног месеца"],MM:["%d месец","%d месеца","%d месеци"],y:["једну годину","једне године"],yy:["%d годину","%d године","%d година"]},correctGrammarCase:function(e,r){return e%10>=1&&e%10<=4&&(e%100<10||e%100>=20)?e%10==1?r[0]:r[1]:r[2]},relativeTimeFormatter:function(e,r,a,_){var m=t.words[a];if(1===a.length)return"y"===a&&r?"једна година":_||r?m[0]:m[1];var i=t.correctGrammarCase(e,m);return"yy"===a&&r&&"%d годину"===i?e+" година":i.replace("%d",e)}},a={name:"sr-cyrl",weekdays:"Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"),weekdaysShort:"Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),months:"Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"),monthsShort:"Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:t.relativeTimeFormatter,mm:t.relativeTimeFormatter,h:t.relativeTimeFormatter,hh:t.relativeTimeFormatter,d:t.relativeTimeFormatter,dd:t.relativeTimeFormatter,M:t.relativeTimeFormatter,MM:t.relativeTimeFormatter,y:t.relativeTimeFormatter,yy:t.relativeTimeFormatter},ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};return r.default.locale(a,null,!0),a}(t(7484))}}]);
//# sourceMappingURL=sr-cyrl-js.js.map