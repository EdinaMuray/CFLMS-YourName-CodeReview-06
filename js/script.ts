$(document).ready(function () {
  class location {
    public name: string = "";
    public city: string = "";
    public zipCode: number = 0;
    public address: string = "";
    public image: string = "";

    constructor(
      pName: string,
      pCity: string,
      pZipCode: number,
      pAddress: string,
      pImage: string
    ) {
      this.name = pName;
      this.city = pCity;
      this.zipCode = pZipCode;
      this.address = pAddress;
      this.image = pImage;
    }

    display() {
      return `
        <div class="col-sm-12 col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch text-left itemWrapper">
          <div class="card shadow-sm">
              <div class="d-none d-md-block">
                  <img class="card-img-top imgsize" src="${this.image}" alt="Image of ${this.name}"  >
              </div>
              <div class="card-body d-flex flex-column justify-content-between">
                  <div>
                      <h4 class="card-title">${this.name}</h4>
                      <hr>
                      <p class="card-text addressWrapper"><i class="fa fa-map-marker" aria-hidden="true"></i> ${this.address}, ${this.zipCode} ${this.city}</p>
                  </div>
              </div>
          </div>
        </div> 
			`;
    }
  }

  class restaurant extends location {
    public telNum: string = "";
    public type: string = "";
    public webAddress: string = "";

    constructor(
      pName: string,
      pCity: string,
      pZipCode: number,
      pAddress: string,
      pImage: string,
      pTelNum: string,
      pType: string,
      pWebAddress: string
    ) {
      super(pName, pCity, pZipCode, pAddress, pImage);
      this.telNum = pTelNum;
      this.type = pType;
      this.webAddress = pWebAddress;
    }

    display() {
      return `
            <div class="col-sm-12 col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch text-left itemWrapper">
              <div class="card shadow-sm">
                  <div class="d-none d-md-block">
                      <img class="card-img-top imgsize" src="${this.image}" alt="Image of ${this.name}"  >
                  </div>
                  <div class="card-body d-flex flex-column justify-content-between">
                      <div>
                          <h4 class="card-title">${this.name}</h4>
                          <hr>
                          <p class="card-text addressWrapper"><i class="fa fa-map-marker" aria-hidden="true"></i> ${this.address}, ${this.zipCode} ${this.city}</p>
                      </div>
                      <div>
                          <p class="addressWrapper"> Tel.: ${this.telNum}</p>
                          <p class="addressWrapper"><a href="${this.webAddress}" target="_blank">${this.webAddress}</a></p>
                      </div>
                  </div>
              </div>
          </div> 
			`;
    }
  }

  class event extends location {
    public eventDate: string = "";
    public eventTime: string = "";
    public eventPrice: string = "";

    constructor(
      pName: string,
      pCity: string,
      pZipCode: number,
      pAddress: string,
      pImage: string,
      pEventDate: string,
      pEventTime: string,
      pEventPrice: string
    ) {
      super(pName, pCity, pZipCode, pAddress, pImage);
      this.eventDate = pEventDate;
      this.eventTime = pEventTime;
      this.eventPrice = pEventPrice;
    }

    display() {
      return `
          <div class="col-sm-12 col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch text-left itemWrapper">
            <div class="card shadow-sm">
                <div class="d-none d-md-block">
                    <img class="card-img-top imgsize" src="${this.image}" alt="Image of ${this.name}"  >
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h4 class="card-title">${this.name}</h4>
                        <hr>
                        <p class="card-text addressWrapper"><i class="fa fa-map-marker" aria-hidden="true"></i> ${this.address}, ${this.zipCode} ${this.city}</p>
                    </div>
                    <div>
                        <p class="addressWrapper">${this.eventDate}</p>
                        <p class="addressWrapper">${this.eventTime}, ${this.eventPrice}</p>
                    </div>
                </div>
            </div>
        </div> 
			`;
    }
  }

  let places: any = new Array();

  places.push(
    new location(
      "Bora Bora",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/locations/bora_bora.png"
    )
  );
  places.push(
    new location(
      "British Virgin Islands",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/locations/british_virgin_islands.png"
    )
  );
  places.push(
    new location(
      "Tahiti",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/locations/tahiti.png"
    )
  );
  places.push(
    new location(
      "Seychelles",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/locations/seychelles.png"
    )
  );
  places.push(
    new location(
      "Maldives",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/locations/maldives.png"
    )
  );
  places.push(
    new location(
      "Maui",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/locations/maui.png"
    )
  );
  places.push(
    new location(
      "St. Lucia",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/locations/st_lucia.png"
    )
  );
  places.push(
    new location(
      "Great Barrier Reef",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/locations/great_barrier_reef.png"
    )
  );

  let restaurants: any = new Array();

  restaurants.push(
    new restaurant(
      "Best Beer",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/restaurants/beer.png",
      "+99 1 877 70 87 0",
      "No more memories",
      "http://www.maui-beer.com"
    )
  );
  restaurants.push(
    new restaurant(
      "Bowl - like home",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/restaurants/bowl.png",
      "+99 1 713 31 68",
      "Homeland",
      "https://www.homeland.com"
    )
  );
  restaurants.push(
    new restaurant(
      "For the Hot ones",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/restaurants/chili.png",
      "+99 1 7280152 0",
      "Die hard",
      "https://chili.com/"
    )
  );
  restaurants.push(
    new restaurant(
      "Asia Wok",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/restaurants/dip.png",
      "+99 256 89 80",
      "See food",
      "https://www.asiawok.com/"
    )
  );
  restaurants.push(
    new restaurant(
      "Sunday´s",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/restaurants/marketplace.png",
      "+99 1 877 70 87 0",
      "Today I cook for you",
      "http://www.home-sweet-home.com"
    )
  );
  restaurants.push(
    new restaurant(
      "Wild Things",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/restaurants/pot.png",
      "+99 1 877 70 87 0",
      "All what you need",
      "http://www.pot.com"
    )
  );
  restaurants.push(
    new restaurant(
      "Big Smile Restaurant",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/restaurants/restaurant.png",
      "+99 1 877 70 87 0",
      "International",
      "http://www.bigsmile.com"
    )
  );
  restaurants.push(
    new restaurant(
      "God good",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/restaurants/tortilla.png",
      "+99 1 877 70 87 0",
      "God good",
      "http://www.thor.com"
    )
  );

  let events: any = new Array();

  events.push(
    new event(
      "Sky Walker",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/events/amphibious.png",
      "All season",
      "09:00-20:00",
      "500$"
    )
  );
  events.push(
    new event(
      "Living on the beach",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/events/beach.jpg",
      "All year long",
      "09:00-20:00",
      "Free"
    )
  );
  events.push(
    new event(
      "For Extreme - Biking",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/events/bike.png",
      "21.02.2021",
      "18:00-04:00",
      "100$"
    )
  );
  events.push(
    new event(
      "Stars looking",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/events/campfire.png",
      "01.01.2021",
      "22:00-03:00",
      "500€"
    )
  );
  events.push(
    new event(
      "Sleep well!",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/events/hammock.png",
      "Always",
      "00:00-00:00",
      "20$"
    )
  );
  events.push(
    new event(
      "Adrenalin tour",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/events/motorboat.png",
      "Juni-August",
      "10:00-14:00",
      "870$"
    )
  );
  events.push(
    new event(
      "Flash - all day",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/events/splash.png",
      "Forever",
      "00:00-00:00",
      "Feel you free"
    )
  );
  events.push(
    new event(
      "Surf",
      "Carib",
      1515,
      "Mainstreet 13",
      "./img/events/surf.png",
      "All year long",
      "12:00-24:00",
      "300$"
    )
  );

  let addContent = (section) => {
    let addSection: any = "";
    let htmlHook: string = "";
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

    for (let j in addSection) {
      $(htmlHook).append(addSection[j].display());
    }
  };

  addContent("places");
  addContent("restaurants");
  addContent("events");
});
