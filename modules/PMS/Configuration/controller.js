app.controller('configCtrl',['$scope','$http','$log','Config','Data','notify','cfpLoadingBar', function($scope, $http, $log, Config, Data, notify,cfpLoadingBar) {
  // Globals
    var num=-1;
    var mDay=new Date();
  // Variables for pushing Prefixes and Suffixes
    
    $scope.customShow=true;
    $scope.suffixCusomShow=true;

    $scope.showPreviewButton=true;
    $scope.showPreivew=false;

    $scope.delmiterShow=true;

    $scope.selectedPrefs=[];
    $scope.selectedSufs=[];
  //  Prefixes and Suffixes Static Object for iterate
    $scope.prefNsuf=[
      {'value':'branch', 'text':'BranchCode ', 'attr':true, 'period':0},
      {'value':'user', 'text':'UserCode ', 'attr':true, 'period':0},
      {'value':'custom', 'text':'CustomCode ', 'attr':true, 'period':0},
      {'value':'customer', 'text':'CustomerCode ', 'attr':true, 'period':0},
      {'value':'company', 'text':'CompanyCode ', 'attr':true, 'period':0},
      {'value':'service', 'text':'ServiceCode ', 'attr':true, 'period':0},
      {'value':'department', 'text':'DepartmentCode ', 'attr':true, 'period':0},
      {'value':'delimeter', 'text':'Delimiter ', 'attr':true, 'period':0},
      {'value':'day1', 'text':'Day(D) ', 'attr':true, 'period':4},
      {'value':'day2', 'text':'Day(DD) ', 'attr':true, 'period':4},
      {'value':'month1', 'text':'Month(M) ', 'attr':true, 'period':2},
      {'value':'month2', 'text':'Month(MM) ', 'attr':true, 'period':2},
      {'value':'year2', 'text':'Year(YY) ', 'attr':true, 'period':1},
      {'value':'year4', 'text':'Year(YYYY) ', 'attr':true, 'period':1}
    ];
    
    $scope.periodCity=[
      {'value':'0', 'text':'None'}
    ];
// End: Iterate Object
// Function For Making pattern
cfpLoadingBar.start();
  $scope.checkPeriods=function(period) {
    var i=false;
    angular.forEach($scope.selectedPrefs, function(p) {
      if(p.period==period) {
        i=true;
        return;
      }
    });

    angular.forEach($scope.selectedSufs, function(s) {
      if(s.period==period) {
        i=true;
        return;
      }
    });

    return i;
  };
  // Quotation
  $scope.makePcity=function() {
    $scope.periodCity=[];
    $scope.periodCity.push({'value':0, 'text':'None'});
    
    if($scope.checkPeriods(1)) {
      $scope.periodCity.push({'value':1, 'text':'Yearly'});

      if($scope.checkPeriods(2)) {
        $scope.periodCity.push({'value':2, 'text':'Monthly'});

        if($scope.checkPeriods(4)) {
          $scope.periodCity.push({'value':4, 'text':'Daily'});
        }
      }
    }
    
  };

  $scope.changeAffixesAttribute=function(params) {
    angular.forEach(params.split(','), function(param) {
      angular.forEach($scope.prefNsuf, function(affixes) {
        if(affixes.value==param) {
          affixes.attr=false;
        }
      });
    });
  }

  

  // Zero fill 
  $scope.zeroFill=function(width, startingNumber, len) {
    slength = String(startingNumber).length;
    if(slength<len && width) {
      len=len-slength;
      while (len--) 
        startingNumber = '0' + startingNumber;
      num=startingNumber;
    }else {
      num=startingNumber;
    }
  };
// End: Making Pattern
  $scope.prefixesAndSuffixesFromRemote=function(dataPattern, isPrefix) {
    if(dataPattern==null) {
      dataPattern=',';
    }
    angular.forEach(dataPattern.split(','), function(data) {
      angular.forEach($scope.prefNsuf, function(prefix) {
        if(data==prefix.value) {
          if(isPrefix) {
            $scope.selectedPrefs.push(prefix);
          }else{
            $scope.selectedSufs.push(prefix);
          }
          return;
        }
      });
    });
    
  }
// Get Quotaion Default Datas
  $scope.clearaffixes=function() {
    $scope.selectedPrefs=[];
    $scope.selectedSufs=[];
  }

  $scope.addPref=function(row, index) {
    $scope.selectedPrefs.push(row);
    $scope.makePcity();
  };

  $scope.removePref=function(row, index) {
    $scope.selectedPrefs.splice(index,1);
    $scope.makePcity();
  };

  $scope.addSufs=function(row, index) {
    $scope.selectedSufs.push(row);
    $scope.makePcity();
  };

  $scope.removeSuf=function(row, index) {
    $scope.selectedSufs.splice(index,1);
    $scope.makePcity();
  };

  $scope.quotationConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.get('quotation').then(function success(response) {

      
      $scope.formData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).qcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).qcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.formData.qcperiodicityid) {
          flag=1;
          $scope.formData.qcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.formData.qcperiodicityid=0;
      }
    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveQuotation=function() {
    cfpLoadingBar.start();
  
    $scope.formData.qcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.formData.qcreferenceprefixpattern+=p.value+',';
    });
    $scope.formData.qcreferenceprefixpattern=$scope.formData.qcreferenceprefixpattern.slice(0,-1);
    $scope.formData.qcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.formData.qcreferencesuffixpattern+=s.value+',';
    });
    $scope.formData.qcreferencesuffixpattern=$scope.formData.qcreferencesuffixpattern.slice(0,-1);
    Config.save('quotation',$scope.formData).then(function success(response) {
      notify.custom('success','Quotation Successfully Saved','Quotation');
      $scope.quotationConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Quotation!');
      cfpLoadingBar.complete();
    });
  };
  

  $scope.contractConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.project('contract').then(function success(response) {
      $scope.ctData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).cpcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).cpcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.ctData.cpcperiodicityid) {
          flag=1;
          $scope.ctData.cpcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.ctData.cpcperiodicityid=0;
      }
    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveContract=function() {
    cfpLoadingBar.start();
    $scope.ctData.cpcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.ctData.cpcreferenceprefixpattern+=p.value+',';
    });
    $scope.ctData.cpcreferenceprefixpattern=$scope.ctData.cpcreferenceprefixpattern.slice(0,-1);
    $scope.ctData.cpcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.ctData.cpcreferencesuffixpattern+=s.value+',';
    });
    $scope.ctData.cpcreferencesuffixpattern=$scope.ctData.cpcreferencesuffixpattern.slice(0,-1);
    Config.projectSave('contract',$scope.ctData).then(function success(response) {
      notify.custom('success','Contract Successfully Saved','Contract');
      $scope.contractConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Contract!');
      cfpLoadingBar.complete();
    });
  };

  $scope.invoiceConfig=function() {
    cfpLoadingBar.start();
    $scope.changeAffixesAttribute('service');
    $scope.clearaffixes();
    Config.config('invoice').then(function success(response) {
      $scope.invData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).icreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).icreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.invData.icperiodicityid) {
          flag=1;
          $scope.invData.icperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.invData.icperiodicityid=0;
      }
    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveInvoice=function() {
    cfpLoadingBar.start();
    $scope.invData.icreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.invData.icreferenceprefixpattern+=p.value+',';
    });
    $scope.invData.icreferenceprefixpattern=$scope.invData.icreferenceprefixpattern.slice(0,-1);
    $scope.invData.icreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.invData.icreferencesuffixpattern+=s.value+',';
    });
    $scope.invData.icreferencesuffixpattern=$scope.invData.icreferencesuffixpattern.slice(0,-1);
    Config.save('invoice',$scope.invData).then(function success(response) {
      notify.custom('success','Invoice Successfully Saved','Invoice');
      $scope.invoiceConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Invoice!');
      cfpLoadingBar.complete();
    });
  }

  $scope.jobConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.config('job').then(function success(response) {
      $scope.jobData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).jcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).jcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.jobData.jcperiodicityid) {
          flag=1;
          $scope.jobData.jcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.jobData.jcperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.jobSaving=function() {
    cfpLoadingBar.start();
    $scope.jobData.jcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.jobData.jcreferenceprefixpattern+=p.value+',';
    });
    $scope.jobData.jcreferenceprefixpattern=$scope.jobData.jcreferenceprefixpattern.slice(0,-1);
    $scope.jobData.jcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.jobData.jcreferencesuffixpattern+=s.value+',';
    });
    $scope.jobData.jcreferencesuffixpattern=$scope.jobData.jcreferencesuffixpattern.slice(0,-1);
    Config.save('job',$scope.jobData).then(function success(response) {
      notify.custom('success','Job Successfully Saved','Job');
      $scope.jobConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Job!');
      cfpLoadingBar.complete();
    });
  }

  $scope.instantConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.project('instant').then(function success(response) {
      $scope.instData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).ipcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).ipcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.instData.ipcperiodicityid) {
          flag=1;
          $scope.instData.ipcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.instData.ipcperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveInstant=function() {
    cfpLoadingBar.start();
    $scope.instData.ipcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.instData.ipcreferenceprefixpattern+=p.value+',';
    });
    $scope.instData.ipcreferenceprefixpattern=$scope.instData.ipcreferenceprefixpattern.slice(0,-1);
    $scope.instData.ipcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.instData.ipcreferencesuffixpattern+=s.value+',';
    });
    $scope.instData.ipcreferencesuffixpattern=$scope.instData.ipcreferencesuffixpattern.slice(0,-1);
    Config.projectSave('instant',$scope.instData).then(function success(response) {
      notify.custom('success','Instant Successfully Saved','Instant');
      $scope.instantConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Instant!');
      cfpLoadingBar.complete();
    });
  }

  $scope.expSheetConfig=function() {
    cfpLoadingBar.start();
    $scope.changeAffixesAttribute('customer,service,department,branch');
    $scope.clearaffixes();
    Config.config('expensesheet').then(function success(response) {
      $scope.expData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).escreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).escreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.expData.escperiodicityid) {
          flag=1;
          $scope.expData.escperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.expData.escperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveExpSheet=function() {
    cfpLoadingBar.start();
    $scope.expData.escreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.expData.escreferenceprefixpattern+=p.value+',';
    });
    $scope.expData.escreferenceprefixpattern=$scope.expData.escreferenceprefixpattern.slice(0,-1);
    $scope.expData.escreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.expData.escreferencesuffixpattern+=s.value+',';
    });
    $scope.expData.escreferencesuffixpattern=$scope.expData.escreferencesuffixpattern.slice(0,-1);
    Config.save('expensesheet',$scope.expData).then(function success(response) {
      notify.custom('success','Expensesheet Successfully Saved','Expensesheet');
      $scope.expSheetConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Expensesheet!');
      cfpLoadingBar.complete();
    });
  }

  $scope.jobsheetConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.config('jobsheet').then(function success(response) {
      $scope.jsData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).jscreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).jscreferenceprefixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.jsData.jscperiodicityid) {
          flag=1;
          $scope.jsData.jscperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.jsData.jscperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveJobSheet=function() {
    cfpLoadingBar.start();
    $scope.jsData.jscreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.jsData.jscreferenceprefixpattern+=p.value+',';
    });
    $scope.jsData.jscreferenceprefixpattern=$scope.jsData.jscreferenceprefixpattern.slice(0,-1);
    $scope.jsData.jscreferenceprefixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.jsData.jscreferenceprefixpattern+=s.value+',';
    });
    $scope.jsData.jscreferenceprefixpattern=$scope.jsData.jscreferenceprefixpattern.slice(0,-1);
    Config.save('jobsheet',$scope.jsData).then(function success(response) {
      notify.custom('success','Jobsheet Successfully Saved','Jobsheet');
      $scope.jobsheetConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Jobsheet!');
      cfpLoadingBar.complete();
    });
  }

  $scope.onetimeConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.project('onetime').then(function success(response) {
      $scope.oneTiData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).opcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).opcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.oneTiData.opcperiodicityid) {
          flag=1;
          $scope.oneTiData.opcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.oneTiData.opcperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveOneTime=function() {
    cfpLoadingBar.start();
    $scope.oneTiData.opcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.oneTiData.opcreferenceprefixpattern+=p.value+',';
    });
    $scope.oneTiData.opcreferenceprefixpattern=$scope.oneTiData.opcreferenceprefixpattern.slice(0,-1);
    $scope.oneTiData.opcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.oneTiData.opcreferencesuffixpattern+=s.value+',';
    });
    $scope.oneTiData.opcreferencesuffixpattern=$scope.oneTiData.opcreferencesuffixpattern.slice(0,-1);
    Config.projectSave('onetime',$scope.oneTiData).then(function success(response) {
      notify.custom('success','Onetime Successfully Saved','Onetime');
      $scope.onetimeConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Onetime!');
      cfpLoadingBar.complete();
    });
  }

  $scope.scheduleConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.config('schedule').then(function success(response) {
      $scope.scheData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).screferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).screferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.scheData.scperiodicityid) {
          flag=1;
          $scope.scheData.scperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.scheData.scperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveSchedule=function() {
    cfpLoadingBar.start();
    $scope.scheData.screferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.scheData.screferenceprefixpattern+=p.value+',';
    });
    $scope.scheData.screferenceprefixpattern=$scope.scheData.screferenceprefixpattern.slice(0,-1);
    $scope.scheData.screferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.scheData.screferencesuffixpattern+=s.value+',';
    });
    $scope.scheData.screferencesuffixpattern=$scope.scheData.screferencesuffixpattern.slice(0,-1);
    Config.save('schedule',$scope.scheData).then(function success(response) {
      notify.custom('success','Schedule Successfully Saved','Schedule');
      $scope.scheduleConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Schedule!');
      cfpLoadingBar.complete();
    });
  }


  $scope.makePattern=function(width, startingNumber, len, prefixInput, delimiterInput, suffixInput) {
    $scope.zeroFill(width, startingNumber, len);
    $('#previewModal').modal('show');
    
    var prefix=[];
    var suffix=[];
  // Iterate Through Selected Prefixes
    angular.forEach($scope.selectedPrefs, function(p) {
      switch (p.value) {
        case 'day1':
              prefix.push(mDay.getDate());
          break;
        case 'day2':
            if(mDay.getDate()<10) {
              prefix.push('0'+mDay.getDate());
            }else {
              prefix.push(mDay.getDate());
            }
          break;
        case 'month1':
              prefix.push(mDay.getMonth()+1);
          break;
        case 'month2':
              if (("0" + (mDay.getMonth()+1)).slice(-2) <10) {
                prefix.push(("0" + (mDay.getMonth()+1)).slice(-2));
              }else {
                prefix.push(mDay.getMonth()+1);
              }
          break;
        case 'year2':
              prefix.push((mDay.getFullYear()).toString().slice(-2));
          break;
        case 'year4':
              prefix.push((mDay.getFullYear()));
          break;
        case 'delimeter':
            prefix.push($("#"+delimiterInput).val());
          break;
        case 'custom':
              prefix.push($("#"+prefixInput).val());
          break;
        default:
          prefix.push(p.value);
      }

    });
  // End: Selected Prefixes Iterate

  // Iterate Through Selected Suffixes
    angular.forEach($scope.selectedSufs, function(s) {
      switch (s.value) {
        case 'day1':
              suffix.push(mDay.getDate());
          break;
        case 'day2':
            if(mDay.getDate()<10) {
              suffix.push('0'+mDay.getDate());
            }else {
              suffix.push(mDay.getDate());
            }
          break;
        case 'month1':
              suffix.push(mDay.getMonth()+1);
          break;
        case 'month2':
              if (("0" + (mDay.getMonth()+1)).slice(-2) <10) {
                suffix.push(("0" + (mDay.getMonth()+1)).slice(-2));
              }else {
                suffix.push(mDay.getMonth()+1);
              }
          break;
        case 'year2':
              suffix.push((mDay.getFullYear()).toString().slice(-2));
          break;
        case 'year4':
              suffix.push((mDay.getFullYear()));
          break;
        case 'delimeter':
              suffix.push($("#"+delimiterInput).val());
          break;
        case 'custom':
              suffix.push($("#"+suffixInput).val());
          break;
        default:
          suffix.push(s.value);
      }

    });
  // End: Selected Suffixes Iterate

    // Making The Concated patter Preview
      // $scope.preview=prefix.join("")+num+suffix.join("");
      $scope.patternPreview=prefix.join("")+num+suffix.join("");
    // End: Preview
  }
}]);
