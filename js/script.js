var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    var location = /** @class */ (function () {
        function location(pName, pCity, pZipCode, pAddress, pImage) {
            this.name = "";
            this.city = "";
            this.zipCode = 0;
            this.address = "";
            this.image = "";
            this.name = pName;
            this.city = pCity;
            this.zipCode = pZipCode;
            this.address = pAddress;
            this.image = pImage;
        }
        location.prototype.display = function () {
            return "\n        <div class=\"col-sm-12 col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch text-left itemWrapper\">\n          <div class=\"card shadow-sm\">\n              <div class=\"d-none d-md-block\">\n                  <img class=\"card-img-top imgsize\" src=\"" + this.image + "\" alt=\"Image of " + this.name + "\"  >\n              </div>\n              <div class=\"card-body d-flex flex-column justify-content-between\">\n                  <div>\n                      <h4 class=\"card-title\">" + this.name + "</h4>\n                      <hr>\n                      <p class=\"card-text addressWrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> " + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                  </div>\n              </div>\n          </div>\n        </div> \n\t\t\t";
        };
        return location;
    }());
    var restaurant = /** @class */ (function (_super) {
        __extends(restaurant, _super);
        function restaurant(pName, pCity, pZipCode, pAddress, pImage, pTelNum, pType, pWebAddress) {
            var _this = _super.call(this, pName, pCity, pZipCode, pAddress, pImage) || this;
            _this.telNum = "";
            _this.type = "";
            _this.webAddress = "";
            _this.telNum = pTelNum;
            _this.type = pType;
            _this.webAddress = pWebAddress;
            return _this;
        }
        restaurant.prototype.display = function () {
            return "\n            <div class=\"col-sm-12 col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch text-left itemWrapper\">\n              <div class=\"card shadow-sm\">\n                  <div class=\"d-none d-md-block\">\n                      <img class=\"card-img-top imgsize\" src=\"" + this.image + "\" alt=\"Image of " + this.name + "\"  >\n                  </div>\n                  <div class=\"card-body d-flex flex-column justify-content-between\">\n                      <div>\n                          <h4 class=\"card-title\">" + this.name + "</h4>\n                          <hr>\n                          <p class=\"card-text addressWrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> " + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                      </div>\n                      <div>\n                          <p class=\"addressWrapper\"> Tel.: " + this.telNum + "</p>\n                          <p class=\"addressWrapper\"><a href=\"" + this.webAddress + "\" target=\"_blank\">" + this.webAddress + "</a></p>\n                      </div>\n                  </div>\n              </div>\n          </div> \n\t\t\t";
        };
        return restaurant;
    }(location));
    var event = /** @class */ (function (_super) {
        __extends(event, _super);
        function event(pName, pCity, pZipCode, pAddress, pImage, pEventDate, pEventTime, pEventPrice) {
            var _this = _super.call(this, pName, pCity, pZipCode, pAddress, pImage) || this;
            _this.eventDate = "";
            _this.eventTime = "";
            _this.eventPrice = "";
            _this.eventDate = pEventDate;
            _this.eventTime = pEventTime;
            _this.eventPrice = pEventPrice;
            return _this;
        }
        event.prototype.display = function () {
            return "\n          <div class=\"col-sm-12 col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch text-left itemWrapper\">\n            <div class=\"card shadow-sm\">\n                <div class=\"d-none d-md-block\">\n                    <img class=\"card-img-top imgsize\" src=\"" + this.image + "\" alt=\"Image of " + this.name + "\"  >\n                </div>\n                <div class=\"card-body d-flex flex-column justify-content-between\">\n                    <div>\n                        <h4 class=\"card-title\">" + this.name + "</h4>\n                        <hr>\n                        <p class=\"card-text addressWrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> " + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                    </div>\n                    <div>\n                        <p class=\"addressWrapper\">" + this.eventDate + "</p>\n                        <p class=\"addressWrapper\">" + this.eventTime + ", " + this.eventPrice + "</p>\n                    </div>\n                </div>\n            </div>\n        </div> \n\t\t\t";
        };
        return event;
    }(location));
    var places = new Array();
    places.push(new location("Bora Bora", "Carib", 1515, "Mainstreet 13", "./img/locations/bora_bora.png"));
    places.push(new location("British Virgin Islands", "Carib", 1515, "Mainstreet 13", "./img/locations/british_virgin_islands.png"));
    places.push(new location("Tahiti", "Carib", 1515, "Mainstreet 13", "./img/locations/tahiti.png"));
    places.push(new location("Seychelles", "Carib", 1515, "Mainstreet 13", "./img/locations/seychelles.png"));
    places.push(new location("Maldives", "Carib", 1515, "Mainstreet 13", "./img/locations/maldives.png"));
    places.push(new location("Maui", "Carib", 1515, "Mainstreet 13", "./img/locations/maui.png"));
    places.push(new location("St. Lucia", "Carib", 1515, "Mainstreet 13", "./img/locations/st_lucia.png"));
    places.push(new location("Great Barrier Reef", "Carib", 1515, "Mainstreet 13", "./img/locations/great_barrier_reef.png"));
    var restaurants = new Array();
    restaurants.push(new restaurant("Best Beer", "Carib", 1515, "Mainstreet 13", "./img/restaurants/beer.png", "+99 1 877 70 87 0", "No more memories", "http://www.maui-beer.com"));
    restaurants.push(new restaurant("Bowl - like home", "Carib", 1515, "Mainstreet 13", "./img/restaurants/bowl.png", "+99 1 713 31 68", "Homeland", "https://www.homeland.com"));
    restaurants.push(new restaurant("For the Hot ones", "Carib", 1515, "Mainstreet 13", "./img/restaurants/chili.png", "+99 1 7280152 0", "Die hard", "https://chili.com/"));
    restaurants.push(new restaurant("Asia Wok", "Carib", 1515, "Mainstreet 13", "./img/restaurants/dip.png", "+99 256 89 80", "See food", "https://www.asiawok.com/"));
    restaurants.push(new restaurant("Sunday´s", "Carib", 1515, "Mainstreet 13", "./img/restaurants/marketplace.png", "+99 1 877 70 87 0", "Today I cook for you", "http://www.home-sweet-home.com"));
    restaurants.push(new restaurant("Wild Things", "Carib", 1515, "Mainstreet 13", "./img/restaurants/pot.png", "+99 1 877 70 87 0", "All what you need", "http://www.pot.com"));
    restaurants.push(new restaurant("Big Smile Restaurant", "Carib", 1515, "Mainstreet 13", "./img/restaurants/restaurant.png", "+99 1 877 70 87 0", "International", "http://www.bigsmile.com"));
    restaurants.push(new restaurant("God good", "Carib", 1515, "Mainstreet 13", "./img/restaurants/tortilla.png", "+99 1 877 70 87 0", "God good", "http://www.thor.com"));
    var events = new Array();
    events.push(new event("Sky Walker", "Carib", 1515, "Mainstreet 13", "./img/events/amphibious.png", "All season", "09:00-20:00", "500$"));
    events.push(new event("Living on the beach", "Carib", 1515, "Mainstreet 13", "./img/events/beach.jpg", "All year long", "09:00-20:00", "Free"));
    events.push(new event("For Extreme - Biking", "Carib", 1515, "Mainstreet 13", "./img/events/bike.png", "21.02.2021", "18:00-04:00", "100$"));
    events.push(new event("Stars looking", "Carib", 1515, "Mainstreet 13", "./img/events/campfire.png", "01.01.2021", "22:00-03:00", "500€"));
    events.push(new event("Sleep well!", "Carib", 1515, "Mainstreet 13", "./img/events/hammock.png", "Always", "00:00-00:00", "20$"));
    events.push(new event("Adrenalin tour", "Carib", 1515, "Mainstreet 13", "./img/events/motorboat.png", "Juni-August", "10:00-14:00", "870$"));
    events.push(new event("Flash - all day", "Carib", 1515, "Mainstreet 13", "./img/events/splash.png", "Forever", "00:00-00:00", "Feel you free"));
    events.push(new event("Surf", "Carib", 1515, "Mainstreet 13", "./img/events/surf.png", "All year long", "12:00-24:00", "300$"));
    var addContent = function (section) {
        var addSection = "";
        var htmlHook = "";
        switch (section) {
            case "places":
                addSection = places;
                htmlHook = "#placesHook";
                break;
            case "restaurants":
                addSection = restaurants;
                htmlHook = "#restaurantsHook";
                break;
            case "events":
                addSection = events;
                htmlHook = "#eventsHook";
                break;
            default:
                "";
        }
        for (var j in addSection) {
            $(htmlHook).append(addSection[j].display());
        }
    };
    addContent("places");
    addContent("restaurants");
    addContent("events");
});
