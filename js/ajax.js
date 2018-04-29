// // set endpoint and your access key
// var ip = '134.201.250.155'
// var access_key = '3f94631b559351dd96a774ce97142eb5';

// // get the API result via jQuery.ajax
// $.ajax({
//     url: 'https://api.ipstack.com/' + ip + '?access_key=' + access_key,   
//     dataType: 'jsonp',
//     success: function(json) {

//         // output the "capital" object inside "location"
//         alert(json.location.capital);
        
//     }
// });

// function getRequest(input) {
//     var url = 'https://api.ipstack.com/';
//     var rules = {
//         apiKey: '3f94631b559351dd96a774ce97142eb5',
//         s: input,
//         r: `json`
//     };

//     $.ajax({

//         url: url,
//         type: 'GET',
//         data: rules,
//         dataType: 'jsonp'

//     })
// }

// // Build Output 
// function getOutput(item){
//     var continent_name = continent_name;
//     var country_name = country_name;
//     var region_name = region_name;
//     var city = city;
//     // var channelTitle = item.snippet.channelTitle;
//     // var videoData = item.snippet.publishedAt;

//        // Build Output String
//        var output = '<li>' + 
//        '<div class="list-left">' +
//        '<img src="'+ thumb +'">' +
//        '</div>' +
//        '<div class="list-right">' +
//        '<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">'+titel+'</a></h3>' +
//        '<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoData+'</small>'+ 
//        '<p>'+description+'</p>' +
//        '</div>' +
//        '</li>' +
//        '<div class="clearfix"></div>' +
//        '';   
//        return output ; 
//    }