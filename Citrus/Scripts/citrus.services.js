﻿citrus.factories = function (apiRoot, ajaxFx) {

    thisService = this;
    thisService.apiRoot = apiRoot;
    thisService.ajax = ajaxFx;
    thisService.getVolunteerById = _getVolunteerById;
    thisService.getEventById = _getEventById;
    thisService.getSubscribedEvents = _getSubscribedEvents;
    thisService.getNearbyEvents = _getNearbyEvents;
    thisService.getVolunteerCatByUser = _getVolunteerCatByUser;
    thisService.alertVolunteers = _alertVolunteers;
    thisService.subscribeEvent = _subscribeEvent;
    thisService.unsubscribeEvent = _unsubscribeEvent;

    function _getVolunteerById(id, onSuccess, onError) {
        var link = apiRoot + "/volunteer/" + id
        var settings = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            type: 'get',
            dataType: "json",
            success: onSuccess,
            error: onError
        }
        thisService.ajax(link, settings);
    }

    function _getEventById(id, onSuccess, onError) {
        var link = apiRoot + "/event/" + id
        var settings = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            type: 'get',
            dataType: "json",
            success: onSuccess,
            error: onError
        }
        thisService.ajax(link, settings);
    }

    function _getSubscribedEvents(id, onSuccess, onError) {
        var link = apiRoot + "/volunteer/" + id + "/events/subscribed"
        var settings = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            type: 'get',
            dataType: "json",
            success: onSuccess,
            error: onError
        }
        thisService.ajax(link, settings);
    }

    function _getNearbyEvents(id, onSuccess, onError) {
        var link = apiRoot + "/volunteer/" + id + "/events/nearby"
        var settings = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            type: 'get',
            dataType: "json",
            success: onSuccess,
            error: onError
        }
        thisService.ajax(link, settings);
    }

    function _getVolunteerCatByUser(id, onSuccess, onError) {
        var link = apiRoot + "/category/" + id;
        var settings = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            type: 'get',
            dataType: "json",
            success: onSuccess,
            error: onError
        }
        thisService.ajax(link, settings);
    }

    function _alertVolunteers(onSuccess, onError) {
        var link = apiRoot + "/sendemail";
        var settings = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            type: 'put',
            dataType: "json",
            success: onSuccess,
            error: onError
        }
        thisService.ajax(link, settings);
    }

   
    function _subscribeEvent (id, onSuccess, onError) {
        var link = apiRoot + "/event/" + id + "/subscribe";
        var settings = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            type: 'post',
            dataType: "json",
            success: onSuccess,
            error: onError
        }
        thisService.ajax(link, settings);
    }

    function _unsubscribeEvent(id, onSuccess, onError) {
        var link = apiRoot + "/event/" + id + "/unsubscribe";
        var settings = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            type: 'delete',
            dataType: "json",
            success: onSuccess,
            error: onError
        }
        thisService.ajax(link, settings);
    }
}

citrus.services = new citrus.factories('/api', $.ajax);