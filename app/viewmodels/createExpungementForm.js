'use strict';
define(["knockout", "underscore"], function(ko, _) {

    var _vm = {
        parish: ko.observable(),
        defendent: {
            firstName: ko.observable(),
            middleInitial: ko.observable(),
            lastName: ko.observable(),
            dateOfBirth: {
                month: ko.observable(),
                day: ko.observable(),
                year: ko.observable(),
            },
            gender: ko.observable(),
            race: ko.observable(),
            sId: ko.observable(),
            last4SsnDigits: ko.observable(),
        },
        arrest:     {
            date: {

            }
        },
        attachments: {

        },
    };

    return _vm;
});
