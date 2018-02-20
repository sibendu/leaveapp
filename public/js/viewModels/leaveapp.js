/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojknockout', 'ojs/ojbutton', , 'ojs/ojdatetimepicker',
             'ojs/ojselectcombobox', 'ojs/ojtimezonedata', 'ojs/ojlabel', 'ojs/ojgauge', 'ojs/ojchart', 'promise', 'ojs/ojtable', 'ojs/ojarraydataprovider','ojs/ojnavigationlist', 'ojs/ojdialog', 'ojs/ojpopup'],
 function(oj, ko, $) {
  
    function leaveappViewModel() {
      var self = this;
      self.comments = ko.observable();
      self.vacationType = ko.observable();
      self.duration = ko.observable();
      self.leaveStartDt = ko.observable();
      self.leaveEndDt = ko.observable();
      self.fullDayInd = ko.observable();
      self.responseMsg = ko.observable();
      self.serviceUrl = 'https://CPRICS-gse00014243.uscom-east-1.oraclecloud.com:443/ic/api/integration/v1/flows/rest/HCMWEB_LEAVE_SD/1.0/leaves';
      
       var leavehistArray = [{leavetype: 'Sick Leave', startdate: '16-11-2017', enddate: '16-11-2017', duration: '1Days', status: 'Approved', attach: '--', requested: 'Employee', comment: '--', action: ':'},
       {leavetype: 'Vacation Leave', startdate: '18-12-2017', enddate: '2-1-2018', duration: '16Days', status: 'Approved', attach: '--', requested: 'Employee', comment: '', action: ''}];
    self.dataprovider = new oj.ArrayDataProvider(leavehistArray);

var histcalArray = [{Description: 'Republic Day', month: 'Jan', date: '26', day: 'Thu', province: 'Bangalore'},
       {Description: 'Ugadi', month: 'Mar', date: '29', day: 'Wed', province: 'Bangalore'}];
    self.holidaycalprovider = new oj.ArrayDataProvider(histcalArray);

            self.appLeave = function ()

                {
                    jQuery("#leaveapply").show();
                    jQuery("#requesthist").hide();
                };
                 self.showHist = function ()

                {
                    jQuery("#leaveapply").hide();
                    jQuery("#requesthist").show();
                };
                
      self.submitLeave = function() {
          self.responseMsg('');
          var querydata = {"empId": "KU0130", "empRecord": "0", "startDate": self.leaveStartDt(),
                        "endDate": self.leaveEndDt(), "beginDate": self.leaveStartDt(), "absenceReson": self.vacationType(),
                        "comments": self.comments().trim(), "fullHalfDayInd": self.fullDayInd()};
          //console.log(JSON.stringify(querydata));
          $.ajax({
                    type: "POST",
                    url: self.serviceUrl,
                    data: JSON.stringify(querydata),
                    cache: false,
                    headers: {
                        'Authorization': 'Basic Y2xvdWQuYWRtaW46bG92ZUx5QDJXaU5r'
                    },
                    contentType: 'application/json; charset=utf-8'
                }).done(function (result) {
                    //var parsedRes = JSON.parse(result);
                    if (result.code === '') {
                        self.responseMsg('Leave Request Successfully Submitted');
                    } else {
                        self.responseMsg('Leave Request could not be submitted: ' + result.code);
                    }
                }).fail(function (jqXHR, textStatus) {
                    self.responseMsg('Leave Request could not be submitted: error code-' + jqXHR.responseJSON['o:errorCode'])
                    console.log(textStatus);
                });
      }
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additional available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed

      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed

      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed

      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new leaveappViewModel();
  }
);
