/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojknockout', 'ojs/ojbutton', , 'ojs/ojdatetimepicker',
             'ojs/ojselectcombobox', 'ojs/ojtimezonedata', 'ojs/ojlabel', 'ojs/ojgauge', 'ojs/ojchart', 'promise', 'ojs/ojtable', 'ojs/ojarraydataprovider'],
 function(oj, ko, $) {
  
    function CreateViewModel() {
      var self = this;

        self.dateval = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2014, 1, 1)));
       self.projval  = ko.observable(90);
               self.customMetricLabel = {rendered:'on',textType: 'percent', 
                                        style:{fontWeight:'bold',color:'black'}};
                                         self.customSvgStyle = {fill: 'green'}
                                          self.projval1  = ko.observable(8);
             self.label = {text: '/10'};
                                         self.customSvgStyle1 = {fill: 'green'}

                                          self.orientationValue = ko.observable('vertical');      
        self.lineTypeValue = ko.observable('curved');
        
        /* chart data */
        var lineSeries = [{name : "", items : [0, 25, 80, 100, 75]}];
    
        var lineGroups = ["Week1", "Week2", "Week3", "Week4", "Week5"];
   
        
        this.lineSeriesValue = ko.observableArray(lineSeries);
        this.lineGroupsValue = ko.observableArray(lineGroups);

    
    // header renderer function
    // Return the value we want to set as content for the header.
 
    
    // header renderer function
   
    
    // cell renderer function
    // Directly append HTML to the cell passed in
    // via context.parentElement
   
    
    // cell renderer function
    // Grab the row data from the context and then
    // return the value we want to set as content for the cell.
    // The content can be arbitrary HTML or a String value.
  
    
    // footer cell renderer function
    // add up all the employee counts

    self.columnArray = [{headerText: 'Emp #', 
                         field: 'EmpID'},
                        {headerText: 'Client - Project -Task', 
                         field: 'client'},
                        {headerText: ' Engagement/Lead/Opportunity', 
                         field: 'Engagement'},
                        {headerText: 'Account', 
                         field: 'account'},
                        {headerText: 'Comments', 
                         field: 'comments'},
                          {headerText: 'Hours', 
                         field: 'Hours'},
                          {headerText: 'Action', 
                         field: 'actions'}];
    
        
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
    return new CreateViewModel();
  }
);
