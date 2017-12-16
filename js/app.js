// this array can easily be populated with data from a server
var initialCats = [
    {
        clickCount: 0,
        name: "Zini",
        imgSrc: "img/22252709_010df3379e_z.jpg",
        nicknames: ["Tommy", "Badass", "Smart", "Blackcat"]
    },
    {
        clickCount: 0,
        name: "Tom",
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nicknames: ["Gen"]
    },
    {
        clickCount: 0,
        name: "Stone",
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        nicknames: ["Grassed"]
    },
    {
        clickCount: 0,
        name: "Gearmean",
        imgSrc: "img/4154543904_6e2428c421_z.jpg",
        nicknames: ["Eleteum"]
    },
    {
        clickCount: 0,
        name: "Crana",
        imgSrc: "img/9648464288_2516b35537_z.jpg",
        nicknames: ["Toiang"]
    }
];

var Cat = function (data) {
    var self = this;
    self.clickCount = ko.observable(data.clickCount);
    self.name = ko.observable(data.name);
    self.imgSrc = ko.observable(data.imgSrc);
    self.url = ko.observable(data.url);
    self.nicknames = ko.observableArray(["Tommy", "Badass", "Smart", "Blackcat"]);
    self.level = ko.computed(function () {
        var level = 'Newborn';
        var clickCount = self.clickCount();
        if (clickCount > 10) {
            level = 'Infant';
        }
        if (clickCount > 20) {
            level = 'Teen';
        }
        if (clickCount > 30) {
            level = 'Adult';
        }
        return level;
    });
};

var ViewModel = function () {
    var self = this;
    self.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem) {
       self.catList.push(new Cat(catItem));
    });
    self.currentCat = ko.observable(self.catList()[0]);
    self.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    self.changeCat = function (cat) {
        self.currentCat(cat);
    };
};

ko.applyBindings(new ViewModel());