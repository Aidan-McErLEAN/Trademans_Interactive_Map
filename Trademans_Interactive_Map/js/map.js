var map = null;
	
function initMap(type, lat, lng, zoom) {
    var location = {
        zoom: zoom,
        center: {lat: lat, lng: lng}
			}
			
			map = new google.maps.Map(document.getElementById("map"), location);
            
            if (type == 1) {
                plumbers(2);
            } else if (type == 2) {
                joiner(2);
            } else if (type == 3) {
                electrician(2);
            }
		}
        
    function plumbers (num) {
      var markers = [
        {
          coords:{lat:55.01150524268719,lng:-7.231629171643578},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Thompson NI</h1> <h2 style="color:black;">10 Backhill Rd, Eglinton, Londonderry BT47 3JS</h2> <h4><a href="tel:+447813081469">+447813081469</a></h4>'
        },
        {
          coords:{lat:55.028566888032564,lng:-7.321566781371042},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">DM Gas - plumbing</h1> <h2 style="color:black;">367 Carnhill, Londonderry BT48 8BS</h2> <h3><a href="tel:+447514734229">+447514734229</a></h3>'
        },
        {
          coords:{lat:55.01743056039646,lng:-7.344091072579847},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Mnheatingservices</h1> <h2 style="color:black;">6 Strangford Park, Londonderry BT48 0JW</h2> <h3><a href="tel:+447999383095">+447999383095</a></h3>' 
        },
        {
          coords:{lat:54.98782531591156,lng:-7.270577771353529},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">The Shower Doctor</h1> <h2 style="color:black;">21 Ardlough Rd, Londonderry BT47 5SW</h2> <h3><a href="tel:+447845587908">+447845587908</a></h3>'
        },
        {
          coords:{lat:54.57486717839907,lng:-6.000928561126401},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Action Plumbing</h1> <h2 style="color:black;">73 Stewartstown Park, Belfast BT11 9GJ</h2> <h3><a href="tel:+442890610944">+442890610944L</a></h3>'
        },
        {
          coords:{lat:54.63764510833512,lng:-5.944509518654137},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Philip Bannon Heating and Plumbing</h1> <h2 style="color:black;">19 Grasmere Gardens, Belfast BT15 5EG</h2> <h3><a href="tel:+447710130115">+447710130115</a></h3>'
        },
        {
          coords:{lat:54.602786267381234,lng:-5.892072099869799},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Solv Group</h1> <h2 style="color:black;">Unit 12, Tamar Commercial Centre, 25 Tamar St, Belfast BT4 1HR</h2> <h3><a href="tel:+442890451010">+442890451010</a></h3>'
        },
        {
          coords:{lat:54.44193695217784,lng:-6.786784254317211},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Planet Fuels</h1> <h2 style="color:black;">76 Stiloga Rd, Dungannon BT71 7PR</h2> <h3><a href="tel:+447784544399">+447784544399</a></h3>'
        },
        {
          coords:{lat:54.63189482496921,lng:-5.935411387279837},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Blacker Plumbing</h1> <h2 style="color:black;">34 Chichester Gardens, Belfast BT15 5FS</h2> <h3><a href="tel:+447478331695">+447478331695</a></h3>'
        },
        {
          coords:{lat:54.35793376963314,lng:-6.6585511893624885},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">P Monaghan Plumbing</h1> <h2 style="color:black;">County, Moy Rd, Armagh BT61 7NB</h2> <h3><a href="tel:+447921514220">+447921514220</a></h3>'
        },
        {
          coords:{lat:54.52617798013766,lng:-6.687602944329483},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">C C Plumbing & Heating</h1> <h2 style="color:black;">14 Creenagh Rd, Dungannon BT71 6RA</h2> <h3><a href="tel:+442887747674">+442887747674</a></h3>'
        },
        {
          coords:{lat:54.47231949822778,lng:-6.806738383254003},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">M Mallon Plumbing Heating</h1> <h2 style="color:black;">5 Dunamony Rd, Dungannon BT70 1PA</h2> <h3><a href="tel:+447903573055">+447903573055</a></h3>'
        },
        {
          coords:{lat:54.33500582544297,lng:-6.637942366410019},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Carson Plumbing</h1> <h2 style="color:black;">4 Woodford Dr, Armagh BT60 2AY</h2> <h3><a href="tel:+447793935553">+447793935553</a></h3>'
        },
        {
          coords:{lat:54.376582110822,lng:-6.545402997922821},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Malcolm McHugh Electrician & Plumber</h1> <h2 style="color:black;">8 Castle Parade, Richhill, Armagh BT61 9QQ</h2> <h3><a href="tel:+442838871885">+442838871885</a></h3>'
        },
        {
          coords:{lat:54.37150955191744,lng:-7.581909343503116},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">McAlary Plumbing & Heating</h1> <h2 style="color:black;">2 The Diamond, Enniskillen BT74 7EQ</h2> <h3><a href="tel:+447889411203">+447889411203</a></h3>'
        },
        {
          coords:{lat:55.08951168372293,lng:-6.529348861436086},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">McKendry Robert Wood</h1> <h2 style="color:black;">176 Seacon Rd, Ballymoney BT53 6PZ</h2> <h3><a href="tel:+442827663879">+442827663879</a></h3>'
        },
        {
          coords:{lat:55.06606923391752,lng:-6.528787901124728},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1>Ballymoney Home Centre/ 1st For Gas</h1> <h2 style="color:black;">4B, Ballybrakes Business Park, Ballybrakes Rd, Ballymoney BT53 6LW</h2>  <h3><a href="tel:+442827668652"+442827668652</a></h3>'
        },
        {
          coords:{lat:54.36180607666408,lng:-7.470858606907564},
         iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">S M Plumbing & Heating</h1> <h2 style="color:black;">21 Moneykee Road, Enniskillen BT94 1BA</h2> <h3><a href="tel:+447880725408">+447880725408</a></h3>'
        },
        {
          coords:{lat:54.35086161046701,lng:-7.746448841163234},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">M L Plumbing</h1> <h2 style="color:black;">26 Rigg Rd, Enniskillen BT74 5ED</h2> <h3><a href="tel:+442866341593">+442866341593</a></h3>'
        },
        {
          coords:{lat:54.269635110028354,lng:-7.711315991506291},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">NG Plumbing </h1> <h2 style="color:black;">28 Marble Arch Rd, Florencecourt, Enniskillen BT92 1DD</h2> <h3><a href="tel:+447764300401">+447764300401</a></h3>'
        },
        {
          coords:{lat:54.71065744570017,lng:-6.224580852597524},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">JC Plumbing</h1> <h2 style="color:black;">41 Greenview Ave, Antrim BT41 4EH</h2> <h3><a href="tel:+447597136804">+447597136804</a></h3>'
        },
        {
          coords:{lat:54.71065744570017,lng:-6.224580852597524},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Castle Plumbing</h1> <h2 style="color:black;">39 Market St, Ballycastle BT54 6DS</h2> <h3><a href="tel:+442820761119">+442820761119</a></h3>'
        },
        {
          coords:{lat:54.87817337877399,lng:-6.290427089112208},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Yellowtom Plumbers</h1> <h2 style="color:black;">9 Rathlin Dr, Ballymena BT43 6NH</h2> <h3><a href="tel:+447553388190">+447553388190</a></h3>'
        },
        {
          coords:{lat:54.40715128902513,lng:-5.895220775248614},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">M S Plumbing & Heating</h1> <h2 style="color:black;">7 Church View, Ballynahinch BT24 8RE</h2> <h3><a href="tel:+447737995953">+447737995953</a></h3>'
        },
        {
          coords:{lat:54.40715128902513,lng:-5.895220775248614},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Bobs Plumbers</h1> <h2 style="color:black;">31 Kenlis St, Banbridge BT32 3LR</h2> <h3><a href="tel:+448003213936">+448003213936</a></h3>'
        },
        {
          coords:{lat:54.72816487012081,lng:-5.792801167804047},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Ashe Shower & Plumbing Services</h1> <h2 style="color:black;">40 Downshire Rd, Carrickfergus BT38 7LE</h2> <h3><a href="tel:+442893362014">+442893362014</a></h3>'
        },
        {
          coords:{lat:54.40715128902513,lng:-5.895220775248614},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Q H I</h1> <h2 style="color:black;">31 Kenlis St, Banbridge BT32 3LR</h2> <h3><a href="tel:+448003213936">+448003213936</a></h3>'
        },
        {
          coords:{lat:55.20163752312322,lng:-6.254011772682139},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Castle Plumbing Supplies</h1> <h2 style="color:black;">39 Market St, Ballycastle BT54 6DS</h2> <h3><a href="tel:+442820761119">+442820761119</a></h3>'
        },
        {
          coords:{lat:54.89001063043226,lng:-6.3361195413799605},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">P J Webber Plumbing</h1> <h2 style="color:black;">14 Fendale Park, Cullybackey, Ballymena BT43 5PU</h2> <h3><a href="tel:+442825881763">+442825881763</a></h3>'
        },
        {
          coords:{lat:54.34804598681831,lng:-6.269020536037421},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Bobs Plumbers</h1> <h2 style="color:black;">31 Kenlis St, Banbridge BT32 3LR</h2> <h3><a href="tel:+448003213936">+448003213936</a></h3>'
        },
        {
          coords:{lat:54.36505174119066,lng:-6.27108047239355},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">DV Plumbing</h1> <h2 style="color:black;">42 Bannview Heights, Banbridge BT32 4LZ</h2> <h3><a href="tel:+447775811370">+447775811370</a></h3>'
        },
        {
          coords:{lat:54.65311593817148,lng:-5.648424799141865},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Down Heating</h1> <h2 style="color:black;">4 Regency Square, Bangor BT19 7FX</h2> <h3><a href="tel:+442891270231">+442891270231</a></h3>'
        },
          
        {
          coords:{lat:54.36505174119066,lng:-6.27108047239355},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">DV Plumbing</h1> <h2 style="color:black;">42 Bannview Heights, Banbridge BT32 4LZ</h2> <h3><a href="tel:+447775811370">+447775811370</a></h3>'
        },
        {
          coords:{lat:54.65311593817148,lng:-5.648424799141865},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Down Heating</h1> <h2 style="color:black;">4 Regency Square, Bangor BT19 7FX</h2> <h3><a href="tel:+442891270231">+442891270231</a></h3>'
        },
        {
          coords:{lat:55.13959984156586,lng:-6.64891191687078},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Plumbstar</h1> <h2 style="color:black;">14 Ashdale, Coleraine BT52 2DD</h2> <h3><a href="tel:+447708913260">+447708913260</a></h3>'
        },
        {
          coords:{lat:55.1258609550766,lng:-6.690110643993362},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Hayes Plumbing</h1> <h2 style="color:black;">8 Wheatfield Ave, Coleraine BT51 3RQ</h2> <h3><a href="tel:+447738208500">+447738208500</a></h3>'
        },
        {
          coords:{lat:55.145094072687854,lng:-6.684274158292347},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Causeway Plumbing</h1> <h2 style="color:black;">8 Cairn Ct, Coleraine BT51 3BW</h2> <h3><a href="tel:+447968078225">+447968078225</a></h3>'
        },
        {
          coords:{lat:54.636512310930556,lng:-6.74510033865789},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">AVA-Tech</h1> <h2 style="color:black;">29 Killymoon St, Tyrone, Cookstown BT80 8JZ</h2> <h3><a href="tel:+442886761937">+442886761937</a></h3>'
        },
        {
          coords:{lat:54.34259565178424,lng:-5.704539479032266},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Donald Campbell Plumbing</h1> <h2 style="color:black;">47 Strangford Rd, Downpatrick BT30 6SL</h2> <h3><a href="tel:+447710410600">+447710410600</a></h3>'
        },
        {
          coords:{lat:54.83425626621266,lng:-5.918044953082112},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Alex Irvine</h1> <h2 style="color:black;">88 Shanes Hill Road, Kilwaughter, Larne BT40 2TQ</h2> <h3><a href="tel:+442828270800">+442828270800</a></h3>'
        },
        {
          coords:{lat:54.83425626621266,lng:-5.918044953082112},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">J R Callaghan Plumbing</h1> <h2 style="color:black;">Sea Coast Rd, Limavady BT49 9DW</h2> <h3><a href="tel:+442877763647">+442877763647</a></h3>'
        },
        {
          coords:{lat:54.22260270843046,lng:-5.901328202455246},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Moyne Plumbing & Heating</h1> <h2 style="color:black;">5 Ashleigh Heights, Newcastle BT33 0FZ</h2> <h3><a href="tel:+447883789209">+447883789209</a></h3>'
        },
        {
          coords:{lat:54.210958538339696,lng:-5.901889162766604},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">D N Patmore Plumbing & Heating</h1> <h2 style="color:black;">6 Greenhill Park, Newcastle BT33 0HP</h2> <h3><a href="tel:+442843722500">+442843722500</a></h3>'
        },
        {
          coords:{lat:54.190603032390065,lng:-6.318940413892649},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Ajs Plumbing</h1> <h2 style="color:black;">A25, Newry BT34 1GD</h2> <h3><a href="tel:+447883789209">+447883789209</a></h3>'
        },
        {
          coords:{lat:54.15382657073375,lng:-6.327523482043187},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">McGuinness Plumbing</h1> <h2 style="color:black;">Unit 7A Loughway Business Park, Warrenpoint Rd, Newry BT34 2TH</h2> <h3><a href="tel:+442830839111">+442830839111</a></h3>'
        },
        {
          coords:{lat:54.599457596292424,lng:-7.3061421956859025},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Elkin Plumbing Supplies</h1> <h2 style="color:black;">24 Dromore Rd Retail Park, Omagh BT78 1RE</h2> <h3><a href="tel:+442882244403">+442882244403</a></h3>'
        },
        {
          coords:{lat:54.60921789766548,lng:-7.315215693680868},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">J J Mallon Plumbing</h1> <h2 style="color:black;">30 Gortmore Gardens, Omagh BT78 5DZ</h2> <h3><a href="tel:+442882245821">+442882245821</a></h3>'
        },
        {
          coords:{lat:54.82213816193401,lng:-7.4610327435688},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">Brian mcgee plumbing and heating</h1> <h2 style="color:black;">243 Ballycolman Estate, Strabane BT82 9BZ</h2> <h3><a href="tel:+447379133922">+447379133922</a></h3>'
        },
        {
          coords:{lat:54.81986346786651,lng:-7.4888418843765425},
          iconImage:'icons/Plumber_marker.png',
          content:'<h1 style="color:black;">R T Y Plumbing</h1> <h2 style="color:black;">10 Glenfinn Park, Strabane BT82 9GP</h2> <h3><a href="tel:+442830264218">+442871880591</a></h3>'
        },
      ];
        
            for(var i = 0;i < markers.length;i++){
                addMarker(markers[i]);
            }
        
        if (num == 1) {
            alllocations(1);
        } 
        
}
        
    function joiner (num) {
      var markers = [
        {
          coords:{lat:54.718255159797124,lng:-6.201764486988926},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">J R Joinery</h1> <h2 style="color:black;">142 Tower Way, Antrim BT41 1EP</h2> <h3><a href="tel:+442894469982">+442894469982</a></h3>'
        },
        {
          coords:{lat:54.72841990475904,lng:-6.2215499027913275},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">JP Bespoke Joinery</h1> <h2 style="color:black;">12B Springfarm Industrial Estate, Antrim BT41 1HL</h2> <h3><a href="tel:+447877968877">+447877968877</a></h3>'
        },
        
        {
          coords:{lat:54.33088728338378,lng:-6.6226247536443905},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Hans Johnston Joinery</h1> <h2 style="color:black;">33 Edenaveys Cres, Armagh BT60 1NT</h2> <h3><a href="tel:+447751570176">+447751570176</a></h3>'
        },
        {
          coords:{lat:54.34319728787829,lng:-6.668115018120163},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Loft ladders</h1> <h2 style="color:black;">12 Umgola Heights, Armagh BT60 4EH</h2> <h3><a href="tel:+447803753098">+447803753098</a></h3>'
        },
        {
          coords:{lat:55.201154369380525,lng:-6.251810404747934},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">RJ Joiner</h1> <h2 style="color:black;">Clare St, Ballycastle BT54 6LQ</h2> <h3><a href="tel:+447849328120">+447849328120</a></h3>'
        },
        {
          coords:{lat:55.19744092112152,lng:-6.413395521577934},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Causeway Architectura Joinery Ltd</h1> <h2 style="color:black;">20 Toberkeagh Rd, Bushmills BT57 8YA</h2> <h3><a href="tel:+442820732566">+442820732566</a></h3>'
        },
        {
          coords:{lat:54.87178252082682,lng:-6.288684820420778},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">R Campbell</h1> <h2 style="color:black;">126 Cullybackey Rd, Ballymena BT43 5DG</h2> <h3><a href="tel:+442825881132">+442825881132</a></h3>'
        },
        {
          coords:{lat:54.88425688237854,lng:-6.275734649218684},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Pj joinery</h1> <h2 style="color:black;">87 Millfield, Ballymena BT43 6PD</h2> <h3><a href="tel:+447593651191">+447593651191</a></h3>'
        },
        {
          coords:{lat:54.38707807850617,lng:-5.899887735190983},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">C N Joinery</h1> <h2 style="color:black;">39 Willow Ave, Banbridge BT32 4RE</h2> <h3><a href="tel:+442897565869">+442897565869</a></h3>'
        },
        {
          coords:{lat:54.358090752245644,lng:-6.243614598523323},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Cmc Joinery</h1> <h2 style="color:black;">26 Mountview Rd, Ballynahinch BT24 8JR</h2> <h3><a href="tel:+447707226119">+447707226119</a></h3>'
        },
        {
          coords:{lat:54.38707807850617,lng:-5.899887735190983},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">C N Joinery</h1> <h2 style="color:black;">26 Mountview Rd, Ballynahinch BT24 8JR</h2> <h3><a href="tel:+442897565869">+442897565869</a></h3>'
        },
        {
          coords:{lat:54.66000857369694,lng:-5.685363579252261},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">M S Joinery</h1> <h2 style="color:black;">45 Silverstream Dr, Bangor BT20 3LW</h2> <h3><a href="tel:+447762659118">+447762659118</a></h3>'
        },
        {
          coords:{lat:54.653867915837395,lng:-5.612281131945942},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Emerson Building & Joinery</h1> <h2 style="color:black;">1 Hannays Hill, Bangor BT19 6ND</h2> <h3><a href="tel:+447707226119">+447707226119</a></h3>'
        },
        {
          coords:{lat:54.6185095674737,lng:-5.962512582284325},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">McLaughlin Joinery</h1> <h2 style="color:black;">82 Estoril Park, Belfast BT14 7NH</h2> <h3><a href="tel:+447716938026">+447716938026</a></h3>'
        },
        {
          coords:{lat:54.61194896910868,lng:-5.88217506439529},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Simpson Joinery</h1> <h2 style="color:black;">144 Larkfield Rd, Belfast BT4 1QF</h2> <h3><a href="tel:+447960153539">+447960153539</a></h3>'
        },
        {
          coords:{lat:54.5741552481905,lng:-6.016414249237969},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">R M Joinery</h1> <h2 style="color:black;">31 Old Suffolk Rd, Belfast BT11 9PL</h2> <h3><a href="tel:+447971099192">+447971099192</a></h3>'
        },
        {
          coords:{lat:54.715107558541504,lng:-5.8275330269790455},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Davell Supplies Joinery</h1> <h2 style="color:black;">Unit 6, Carrickfergus Industrial Centre, Carrickfergus BT38 8PH</h2> <h3><a href="tel:+442893351298">+442893351298</a></h3>'
        },
        {
          coords:{lat:54.69420762912199,lng:-5.8690459836152336},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Mca Building & Joinery</h1> <h2 style="color:black;">89 Moyard Gardens, Greenisland, Carrickfergus BT38 8XB</h2> <h3><a href="tel:+447834897811">+447834897811</a></h3>'
        },
        {
          coords:{lat:55.15152833140809,lng:-6.6441054539715125},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">RH Joinery ltd</h1> <h2 style="color:black;">3, 48 Cloyfin Rd, Coleraine BT52 2NY</h2> <h3><a href="tel:+442870355431">+442870355431</a></h3>'
        },
        {
          coords:{lat:55.11993126833611,lng:-6.64788200395775},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">KM Bin and Garden Storage Solutions</h1> <h2 style="color:black;">50 Knockbracken Dr, Coleraine BT52 1WN</h2> <h3><a href="tel:+447490970876">+447490970876</a></h3>'
        },
        {
          coords:{lat:55.11914592969474,lng:-6.54625847705538},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Dalriada Joinery Works</h1> <h2 style="color:black;">58 Ballybogey Rd, Ballymoney BT53 6NY</h2> <h3><a href="tel:+442820742211">+442820742211</a></h3>'
        },
        {
          coords:{lat:55.022522848615004,lng:-7.337428249987889},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">P G Joinery</h1> <h2 style="color:black;">Balliniska Business Park/Balliniska Rd, Londonderry BT48 0NA</h2> <h3><a href="tel:+442871308728">+442871308728</a></h3>'
        },
        {
          coords:{lat:54.993975054908084,lng:-7.284213227454556},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">A L C Joinery</h1> <h2 style="color:black;">59 Sevenoaks, Londonderry BT47 6BD</h2> <h3><a href="tel:+442871341386">+442871341386</a></h3>'
        },
        {
          coords:{lat:55.04790346322376,lng:-7.260867282085091},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">J J Joinery & Construction</h1> <h2 style="color:black;">132 Elmvale, Londonderry BT48 8SL</h2> <h3><a href="tel:+447812654547">+447812654547</a></h3>'
        },
        {
          coords:{lat:54.32513593577252,lng:-5.718546944865099},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">LGK Construction & Joinery</h1> <h2 style="color:black;">17 Cathedral View, Downpatrick BT30 6DL</h2> <h3><a href="tel:+447879872763">+447879872763</a></h3>'
        },
        {
          coords:{lat:54.360421589092375,lng:-7.59916731606809},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">R G Joinery</h1> <h2 style="color:black;">Lackaghboy Rd, Enniskillen BT74 4RL</h2> <h3><a href="tel:+447745086777">+447745086777</a></h3>'
        },
        {
          coords:{lat:54.34734499241253,lng:-7.633105414905254},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Keys Nigel Joinery</h1> <h2 style="color:black;">Cleenash Road, Enniskillen BT9 2AL</h2> <h3><a href="tel:+442866348042">+442866348042</a></h3>'
        },
        {
          coords:{lat:54.34734499241253,lng:-7.633105414905254},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Keys Nigel Joinery</h1> <h2 style="color:black;">Cleenash Road, Enniskillen BT9 2AL</h2> <h3><a href="tel:+442866348042">+442866348042</a></h3>'
        },
        {
          coords:{lat:54.85193628501909,lng:-5.804884112673145},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">JCS Joinery & Glazing</h1> <h2 style="color:black;">Unit 18, Currin Business Park, Larne BT40 1DH</h2> <h3><a href="tel:+442828273895">+442828273895</a></h3>'
        },
        {
          coords:{lat:54.86567047841947,lng:-5.853464278405189},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Diamond Joinery</h1> <h2 style="color:black;">10 Walnut Ave, Larne BT40 2WA</h2> <h3><a href="tel:+447491762765">+447491762765</a></h3>'
        },
        {
          coords:{lat:55.04882339464001,lng:-6.929074837044096},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">SOL Property Maintenance</h1> <h2 style="color:black;">4 Minstrel Cl, Limavady BT49 0TY</h2> <h3><a href="tel:+447525023487">+447525023487</a></h3>'
        },
        {
          coords:{lat:54.22633997512922,lng:-5.890966567637651},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">MM Joinery</h1> <h2 style="color:black;">57 Bracken Ave, Newcastle BT33 0HG</h2> <h3><a href="tel:+442843727211">+442843727211</a></h3>'
        },
        {
          coords:{lat:54.238179650281694,lng:-5.921865612979588},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Streamvale joinery ltd</h1> <h2 style="color:black;">21 Ballyhafry Rd, Castlewellan BT31 9HR</h2> <h3><a href="tel:+447968168071">+447968168071</a></h3>'
        },
        {
          coords:{lat:54.25743694825375,lng:-5.946584849253138},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">McCartan Joinery</h1> <h2 style="color:black;">69 Wood Grove, Castlewellan BT31 9JD</h2> <h3><a href="tel:+447801017038">+447801017038</a></h3>'
        },
        {
          coords:{lat:54.179594054548254,lng:-6.3089839989675855},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Jims Joinery</h1> <h2 style="color:black;">27 Fort Hill Rd, Newry BT34 2LP</h2> <h3><a href="tel:+442830266470">+442830266470</a></h3>'
        },
        {
          coords:{lat:54.179192195724035,lng:-6.374558639637695},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Camlough Joinery Works</h1> <h2 style="color:black;">12 Carrivekeeney Rd, Newry BT35 7LU</h2> <h3><a href="tel:+442830264218">+442830264218</a></h3>'
        },
        {
          coords:{lat:54.59037049853052,lng:-7.301433301168863},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">Tp joinery services</h1> <h2 style="color:black;">10 Coolnagard Heights, Omagh BT78 1AT</h2> <h3><a href="tel:+447747795257">+447747795257</a></h3>'
        },
        {
          coords:{lat:54.613240729958136,lng:-7.289073683032086},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">R Mallon Joinery</h1> <h2 style="color:black;">7 St Julians Way, Omagh BT79 7UN</h2> <h3><a href="tel:+442830264218">+442830264218</a></h3>'
        },
        {
          coords:{lat:54.79403157543927,lng:-7.4172591097536875},
          iconImage:'icons/joiner_marker.png',
          content:'<h1 style="color:black;">CSP Joinery</h1> <h2 style="color:black;">8 Spout Rd, Strabane BT82 8NB</h2> <h3><a href="tel:+447783359309">+447783359309</a></h3>'
        },
      ];

        for(var i = 0;i < markers.length;i++){
                addMarker(markers[i]);
            }
        if (num == 1) {
            alllocations(2);
        } 
}
        
     
        
      function electrician (num) {
      var markers = [
        {
          coords:{lat:54.716781467581356,lng:-6.184101851908179},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">HMM Electrics</h1> <h2 style="color:black;">6, Antrim Enterprise Agency, 58 Greystone Rd, Antrim BT41 1JZ</h2> <h3><a href="tel:+442894466164">+442894466164</a></h3>'
        },
        {
          coords:{lat:54.73313870796513,lng:-6.221009046530625},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">E C S</h1> <h2 style="color:black;">49 Millhouse Dale, Antrim BT41 2UN</h2> <h3><a href="tel:+442894467509">+442894467509</a></h3>'
        },
          
        {
          coords:{lat:54.35302829343621,lng:-6.665015795621912},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Nugent Electrical</h1> <h2 style="color:black;">11 Ard Ri Gardens, Armagh BT60 4BS</h2> <h3><a href="tel:+447858921951">+447858921951</a></h3>'
        },
        {
          coords:{lat:54.34955609079031,lng:-6.670858876867674},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Enercon ECV Ltd</h1> <h2 style="color:black;">12B Springfarm Industrial Estate, Antrim BT41 1HL</h2> <h3><a href="tel:+447877968877">+447877968877</a></h3>'
        },
        {
          coords:{lat:55.10718367345621,lng:-6.353306154046042},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Patton Electrical Ltd</h1> <h2 style="color:black;">12 Bushvale Terrace, Drumnafivey, Ballymoney BT53 8JL</h2> <h3><a href="tel:+442820751677">+442820751677</a></h3>'
        },
        {
          coords:{lat:55.201391290667026,lng:-6.257433280055821},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">K Electrics</h1> <h2 style="color:black;">Moyle Enterprise Centre, Leyland Rd, Ballycastle BT54 6EZ</h2> <h3><a href="tel:+442820768590">+442820768590</a></h3>'
        },
        {
          coords:{lat:54.889006033875944,lng:-6.24473945655991},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Ge Electrical</h1> <h2 style="color:black;">70 Ballygarvey Road, Ballymena BT43 7JX</h2> <h3><a href="tel:+447801025369">+447801025369</a></h3>'
        },
        {
          coords:{lat:54.85601566644446,lng:-6.281474988244212},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">R S L Electrical</h1> <h2 style="color:black;">15 Kirkwood Manor, Ballymena BT42 2HN</h2> <h3><a href="tel:+447753223453">+447753223453</a></h3>'
        },
        {
          coords:{lat:54.86253686172707,lng:-6.259845656504857},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Marrs Maintenance Service Ltd</h1> <h2 style="color:black;">18 Crebilly Rd, Ballymena BT42 4DN</h2> <h3><a href="tel:+442825642499">+442825642499</a></h3>'
        },
        {
          coords:{lat:54.40962221051675,lng:-5.888901463549677},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">R Ritchie Electrical</h1> <h2 style="color:black;">38 Drummond Brae, Ballynahinch BT24 8EY</h2> <h3><a href="tel:+447789758599">+447789758599</a></h3>'
        },
        {
          coords:{lat:54.3628402056647,lng:-5.783501418226595},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Core Electrical Services</h1> <h2 style="color:black;">15 Magherahamlet Rd, Ballynahinch BT24 8JZ</h2> <h3><a href="tel:+442897565214">+442897565214</a></h3>'
        }, 
        {
          coords:{lat:54.35372971989175,lng:-6.316398960777844},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">ESL Elctical</h1> <h2 style="color:black;">Enterprise Centre, 62 Scarva Rd, Banbridge BT32 3QD</h2> <h3><a href="tel:+442840662155">+442840662155</a></h3>'
        },
        {
          coords:{lat:54.32510811287471,lng:-6.169113511314615},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Farrell John</h1> <h2 style="color:black;">100 Circular Rd, Katesbridge, Banbridge BT32 5LW</h2> <h3><a href="tel:+442840671591">+442840671591</a></h3>'
        },
        {
          coords:{lat:54.66211912895403,lng:-5.695114249739557},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Live Wire Electrical</h1> <h2 style="color:black;">13 Westburn Cres, Bangor BT20 3RN</h2> <h3><a href="tel:+447909672500">+447909672500</a></h3>'
        },
        {
          coords:{lat:54.65426180698743,lng:-5.6422580133325555},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Luke Electrical</h1> <h2 style="color:black;">7 Fernbank Rd, Bangor BT19 6GA</h2> <h3><a href="tel:+447843873403">+447843873403</a></h3>'
        },
        {
          coords:{lat:54.59512644625129,lng:-5.919597130963629},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Belfast Electrician</h1> <h2 style="color:black;">Salisbury St, Dublin Rd, Belfast BT7 1AF</h2> <h3><a href="tel:+447367784412">+447367784412</a></h3>'
        },
        {
          coords:{lat:54.599502103714094,lng:-5.858485685731798},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">East End Electrical Ltd</h1> <h2 style="color:black;">7 Green Rd, Belfast BT5 6JA</h2> <h3><a href="tel:+447809716963">+447809716963</a></h3>'
        },
        {
          coords:{lat:54.575430168769095,lng:-5.963885762620405},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">S Copeland Electrics</h1> <h2 style="color:black;">Unit 8 Musgrave Park Industrial Estate, 26 Stockmans Way, Belfast BT9 7ET</h2> <h3><a href="tel:+447779258368">+447779258368</a></h3>'
        },
        {
          coords:{lat:54.744961004912966,lng:-5.789418311820422},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Wnr Electrical</h1> <h2 style="color:black;">89 Plantation Ave, Carrickfergus BT38 9BJ</h2> <h3><a href="tel:+447779258368">+447779258368</a></h3>'
        },
        {
          coords:{lat:54.72275968887654,lng:-5.822377293518488},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">PAC Electrical</h1> <h2 style="color:black;">Unit 7, Keeburn Industrial Estate, 61 Woodburn Rd, Carrickfergus BT38 8HQ</h2> <h3><a href="tel:+442893364600">+442893364600</a></h3>'
        },
        {
          coords:{lat:55.10398498947027,lng:-6.708306858360993},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Houston Electrical</h1> <h2 style="color:black;">713 Farranseer Park, Macosquin, Coleraine BT51 4NA</h2> <h3><a href="tel:+447543970383">+447543970383</a></h3>'
        },
        {
          coords:{lat:55.139475184512015,lng:-6.662988258526157},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Davidson R H K</h1> <h2 style="color:black;">35 Bushmills Rd, Coleraine BT52 2BP</h2> <h3><a href="tel:+442870342281">+442870342281</a></h3>'
        },
        {
          coords:{lat:55.12279158363883,lng:-6.638269022252608},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">W H McNeill</h1> <h2 style="color:black;">Wattstown Cres, Coleraine BT52 1BS</h2> <h3><a href="tel:+442870357240">+442870357240</a></h3>'
        },
        {
          coords:{lat:54.63281761147897,lng:-6.757116523581965},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;"Electrical & Security Services</h1> <h2 style="color:black;">13 Sandholes Rd, Cookstown BT80 9AR</h2> <h3><a href="tel:+442886764377">+442886764377</a></h3>'
        },
        {
          coords:{lat:54.68762737757267,lng:-6.780805791677452},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">McAvoy Patrick J</h1> <h2 style="color:black;">69 Lough Fea Rd, Cookstown BT80 9SR</h2> <h3><a href="tel:+442886763078">+442886763078</a></h3>'
        },
        {
          coords:{lat:55.036847317046806,lng:-7.315798973008857},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">City Electrics Ireland Ltd</h1> <h2 style="color:black;">19 Sandbank Cottages, Londonderry BT48 8LL</h2> <h3><a href="tel:+442871353147">+442871353147</a></h3>'
        },
        {
          coords:{lat:55.01086909593496,lng:-7.35047456833703},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">J D A Electrics Ltd</h1> <h2 style="color:black;">58 Cashelmore Park, Londonderry BT48 0RU</h2> <h3><a href="tel:+442871261736">+442871261736</a></h3>'
        },
        {
          coords:{lat:55.0004337088521,lng:-7.290049768557243},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">J W Electrics Ltd</h1> <h2 style="color:black;">County, 6 Dorchester Park, Waterside, Londonderry BT47 5NZ</h2> <h3><a href="tel:+447877401487">+447877401487</a></h3>'
        },
        {
          coords:{lat:54.34415879734107,lng:-7.649500588946393},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">J & S Electrical Contractors</h1> <h2 style="color:black;">503 Sligo Rd, Enniskillen BT74 9FR</h2> <h3><a href="tel:+442866341327">+442866341327</a></h3>'
        },
        {
          coords:{lat:54.36340195602559,lng:-7.5999710898797295},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Lakeland Electrical Services (NI) Ltd</h1> <h2 style="color:black;">26-27 Enniskillen Business Centre, Lackaboy Industrial Estate, Enniskillen BT74 4RL</h2> <h3><a href="tel:+442866342633">+442866342633</a></h3>'
        },
        {
          coords:{lat:54.36340195602559,lng:-7.5999710898797295},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">McCormick Electrical</h1> <h2 style="color:black;">46 Ballyhampton Rd, Larne BT40 2ST</h2> <h3><a href="tel:+447889430073">+447889430073</a></h3>'
        },
        {
          coords:{lat:54.86599989382523,lng:-5.840311784751253},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Mercer electrical services</h1> <h2 style="color:black;">35 Argyll View, Larne BT40 2JS</h2> <h3><a href="tel:+447821423228">+447821423228</a></h3>'
        },
        {
          coords:{lat:55.07920083731936,lng:-6.9294535295212425},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">P & L Electrics Ltd</h1> <h2 style="color:black;">Aghanloo Industrial Estate, Aghanloo Rd, Limavady BT49 0HE</h2> <h3><a href="tel:+442877722428">+442877722428</a></h3>'
        },
        {
          coords:{lat:54.21766830222407,lng:-5.899893014293806},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">D M Electrics</h1> <h2 style="color:black;">1 Riverside Park, Newcastle BT33 0LJ</h2> <h3><a href="tel:+442843726067">+442843726067</a></h3>'
        },
        {
          coords:{lat:54.22449301376864,lng:-5.900922982471869},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Lighton Testing Ltd</h1> <h2 style="color:black;">6 Meadowvale Ave, Newcastle BT33 0UF</h2> <h3><a href="tel:+447584044030">+447584044030</a></h3>'
        },
        {
          coords:{lat:54.16194577583115,lng:-6.314102266369252},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Paul Watters Electrical</h1> <h2 style="color:black;">77 Chapel Rd, Newry BT35 8JZ</h2> <h3><a href="tel:+442830849704">+442830849704</a></h3>'
        },
        {
          coords:{lat:54.18695458841025,lng:-6.342505868210767},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">P J Electrics</h1> <h2 style="color:black;">Unit B2/Win Business Pk/Canal Quay, Newry BT35 6PH</h2> <h3><a href="tel:+442830269180">+442830269180</a></h3>'
        },
        {
          coords:{lat:54.59468139851142,lng:-7.3245830983117814},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">J&R Electrical</h1> <h2 style="color:black;">21A Bracken Ct, Omagh BT78 5RX</h2> <h3><a href="tel:+442882250160">+442882250160</a></h3>'
        },
        {
          coords:{lat:54.61148551965949,lng:-7.2890491961685555},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Cpm Electrical Ltd</h1> <h2 style="color:black;">6 St Julians Way, Omagh BT79 7UN</h2> <h3><a href="tel:+442830269180">+442830269180</a></h3>'
        },
        {
          coords:{lat:54.81710417886496,lng:-7.472534040844533},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Chris Doherty Electrics</h1> <h2 style="color:black;">104A Melmount Rd, Sion Mills, Strabane BT82 9PY</h2> <h3><a href="tel:+442881658401">+442881658401</a></h3>'
        },
        {
          coords:{lat:54.83114685547385,lng:-7.462921004515931},
          iconImage:'icons/ele_marker.png',
          content:'<h1 style="color:black;">Victoria Electrics</h1> <h2 style="color:black;">4 Derry Rd, Strabane BT82 8DY</h2> <h3><a href="tel:+442830269180">+442830269180</a></h3>'
        },
      ]; 
           for(var i = 0;i < markers.length;i++){
                addMarker(markers[i]);
            }
        if (num == 1) {
            alllocations(3);
        } 
    }
        
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
        });

        if(props.iconImage){
          marker.setIcon(props.iconImage);
        }

        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
        
        function alllocations (type) {
        
        var num = document.getElementById("areas").value;
        console.log(num);
        
    var areas = [
        //Nothern Ireland
        {
            lat:54.7192256,
            lng:-6.574535640280802,
            zoom:8
        },
        //Antrim
        {
            lat:54.672131587851354,
            lng:-6.218808,
            zoom:11.54
        },
        //Armagh
        {
            lat:54.3398083,
            lng:-6.6573846,
            zoom:12
        },
        //Ballycastle
        {
            lat:55.1910701,
            lng:-6.2637782,
            zoom:12
        },
        //Ballymena
        {
            lat:54.8538359,
            lng:-6.2631809,
            zoom:11.33
        },
        //Ballynahinch
        {
            lat:54.3871171,
            lng:-5.9076059,
            zoom:11.79
        },
        //Banbridge
        {
            lat:54.3441537,
            lng:-6.2636499,
            zoom:12
        },
        //Bangor
        {
            lat:54.6494706,
            lng:-5.6631291,
            zoom:12.75
        },
        //Belfast
        {
            lat:54.5964229,
            lng:-5.9225779,
            zoom:12.25
        },
        //Carrickfergus
        {
            lat:54.72495,
            lng:-5.8186724,
            zoom:11.3
        },
        //Coleraine
        {
            lat:55.1425122,
            lng:-6.6773932,
            zoom:11.6
        },
        //Cooktown
        {
            lat:54.6340251,
            lng:-6.7390282,
            zoom:11.71
        },
        //Derry
        {
            lat:54.9998201,
            lng:-7.3019214,
            zoom:12
        },
        //Downpatrick
        {
            lat:54.3243809,
            lng:-5.7427296,
            zoom:11.33
        },
        //Enniskillen
        {
            lat:54.3393041,
            lng:-7.6017963,
            zoom:11.75
        },
        //Larne
        {
            lat:54.8523999,
            lng:-5.8203272,
            zoom:12
        },
        //Limavady
        {
            lat:55.0385477,
            lng:-6.9337396,
            zoom:11
        },
        //Newcastle
        {
            lat:54.2139135,
            lng:-5.8918736,
            zoom:12
        },
        //Newry
        {
            lat:54.1647666,
            lng:-6.3395945,
            zoom:11.75
        },
        //Omagh
        {
            lat:54.5897083,
            lng:-7.322536,
            zoom:12
        },
        //Starbane
        {
            lat:54.8201423,
            lng:-7.4467378,
            zoom:12
        },
      ]; 
            
   
            initMap(type, areas[num].lat, areas[num].lng, areas[num].zoom);
            
        }