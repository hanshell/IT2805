var courses_firstyear=[
	"TMA4100:Matematikk 1",
	"TTM4175:Kommunikasjonsteknologi, introduksjon",
	"TDT4110:IT grunnkurs",
	"TMA4140:Diskret matematikk",
	"TFE4110:Digitalteknikk med kretsteknikk",
	"TMA4115:Matematikk 3",
	"TDT4100:Objektorientert programmering (Java)",
	"EXPH0003:Exphil"

];
var courses_secondyear=[
	"TMA4135:Matematikk 4D",
	"TMA4240:Statistikk",
	"TDT4120:Algoritmer og datastrukturer",
	"TDT4160:Datamaskiner, grunnkurs",
	"TTM4100:Kommunikasjon - Tjenester og nett",
	"TDT4145:Datamodellering og databasesystemer",
	"TFY4125:Fysikk",
	"TTT4110:Signalbehandling og kommunikasjon"
];
var courses_thirdyear=[
	"TTT4120:Digital signalbehandling",
	"TIØ4258:Teknologiledelse",
	"TET4100:Kretsanalyse",
	"TTM4105:Aksess- og transportnett"
];
var other_courses=[
	"TDT4180:Menneske-maskin interraksjon",
	"TDT4300:Datavarehus og datagruvedrift",
	"TDT4102:Prosedyre- og objektorientert programmering (C++)",
	"TDT4258:Energieffektive datamaskinsystemer",
	"TDT4117:Informasjonsgjenfinning",
	"IT2805:Webteknologi"
];

function write_courses(courselist){
	for(var i=0; i<courselist.length; i++){
		var course_name_array=courselist[i].split(':');
		var better_string=courselist[i].replace(':', ' ');
		document.write("<h5><a href=\"http://www.ntnu.no/studier/emner/"+course_name_array[0]+"\" target=\"_blank\">"
			+better_string+" | "+ "</a></h5>");
	}
}