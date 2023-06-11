// /**
//  *
//  * propsFilter
//  *
//  */


// app.filter('propsFilter', propsFilter);
app.filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    }
});


app.filter('fSum', function () {
  return function(data, prop) {
    var total=0;
    for (i=0; i<data.length; i++) {
       total += Number(data[i].esdamount);
    }
    return total;

  }
});

app.filter('capitalize', function() {
  return function(token) {
      return token.charAt(0).toUpperCase() + token.slice(1);
   }
});

app.filter('sumByColumn', function() {
  return function(collection, column) {
    var total = 0;
      
        collection.forEach(function (item) {
          total += parseInt(item[column]);
        });

      return total;
  }
});
app.filter('formatTime', function () {
    return function (time, format) {

      m = time % 60;
     h = (time-m)/60;
   var intime = h.toString() + ":" + (m<10?"0":"") + m.toString();

     
        return intime, format || 'h:mm';
    };

    
    })

    app.filter('timeconvertin', function () {
        return function(time)    {
            Number(time);
            m = time % 60;
            h = (time-m)/60;
            tt = 'AM';
            if(h>11){
                tt = 'PM';
                if(h > 12)
                    h = h % 12;
            }
            var intime = (h<10 ? "0" : "") + h.toString() + ":" + (m<10 ? "0" : "") + m.toString() + " " + tt;
            return intime;
        }
    })
    app.filter('stringnumber', function () {
        return function(data)   {
            var value=  Number(data);
            // Number(time);
            // m = time % 60;
            // h = (time-m)/60;
            // var intime = h.toString() + ":" + (m<10?"0":"") + m.toString();
            return value;
        }
    });

    app.filter('toWords', function() {
        return function(s) {
            var th = ['','Thousand','Million', 'Billion','Trillion'];
            var dg = ['Zero','One','Two','Three','Four', 'Five','Six','Seven','Eight','Nine']; 
            var tn = ['Ten','Eleven','Twelve','Thirteen', 'Fourteen','Fifteen','Sixteen', 'Seventeen','Eighteen','Nineteen'];
            var tw = ['Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety']; 

            s = s.toString(); 
            s = s.replace(/[\, ]/g,''); 
            if (s != parseFloat(s)) return 'not a number'; 
            var x = s.indexOf('.'); 
            if (x == -1) x = s.length; 
            if (x > 9) return 'too big'; 
            var n = s.split(''); 
            var str = ''; 
            var sk = 0; 
            for (var i=0; i < x; i++) 
            {
                if ((x-i)%3==2) 
                {
                    if (n[i] == '1') 
                    {
                        str += tn[Number(n[i+1])] + ' '; 
                        i++; 
                        sk=1;
                    }
                    else if (n[i]!=0) 
                    {
                        str += tw[n[i]-2] + ' ';
                        sk=1;
                    }
                }
                else if (n[i]!=0) 
                {
                    str += dg[n[i]] +' '; 
                    if ((x-i)%3==0) str += 'hundred ';
                    sk=1;
                }
        
                if ((x-i)%3==1)
                {
                    if (sk) str += th[(x-i-1)/3] + ' ';
                    sk=0;
                }
            }
            if (x != s.length)
            {
                var y = s.length; 
                str += 'point '; 
                for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';
            }
            return str.replace(/\s+/g,' ');
        }
    })
