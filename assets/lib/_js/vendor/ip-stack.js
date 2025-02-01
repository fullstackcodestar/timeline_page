jQuery(function ($) {
    // set endpoint and your access key
var ip = '223.166.142.214'
var access_key = 'fc24a1abd6ba6d75dd1eb0ebe063e652';
// get the API result via jQuery.ajax
$.ajax({
    url: 'https://api.ipstack.com/check' + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function(json) {

        // output the "capital" object inside "location"
        iplocation = json.country_name;
        window.onload = function() {
            if (window.location.href == "https://dev-skp-corporate.pantheonsite.io/en" && iplocation == 'China') {
                window.location.href = "https://dev-skp-corporate.pantheonsite.io/en/country/china";
            }
            else if (window.location.href == "https://dev-skp-corporate.pantheonsite.io/en" && iplocation == 'Japan') {
                window.location.href = "https://dev-skp-corporate.pantheonsite.io/en/country/japan";
            }
            else if (window.location.href == "https://test-skp-corporate.pantheonsite.io/en" && iplocation == 'China') {
                window.location.href = "https://test-skp-corporate.pantheonsite.io/en/country/china";
            }
            else if (window.location.href == "https://test-skp-corporate.pantheonsite.io/en" && iplocation == 'Japan') {
                window.location.href = "https://test-skp-corporate.pantheonsite.io/en/country/japan";
            }
            else if (window.location.href == "https://www.simon-kucher.com/en" && iplocation == 'China') {
                window.location.href = "https://www.simon-kucher.com/en/country/china";
            }
            else if (window.location.href == "https://www.simon-kucher.com/en" && iplocation == 'Japan') {
                window.location.href = "https://www.simon-kucher.com/en/country/japan";
            }
        }   
    }
});

});