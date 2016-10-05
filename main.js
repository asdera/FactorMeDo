function harambe(a, b, c, d) {
    alert("( " + a + "x + " + b + " ) * ( " + c + "x + " + d + " )");
}

function cheesemachine(str) {
    var cheese = $("#" + str).text();
    if (cheese == "") {
        return 1;
    } else {
        return Number($("#" + str).text());
    }
}

function dutycalls() {
    /**(a+b)(c+d)
     * ac+(ad+bc)+bd
    **/
    var x = cheesemachine("a");
    var y = cheesemachine("b");
    var z = cheesemachine("c");
    var xar = factorfam(x);
    var zar = factorfam(z);
    for (i = 1; i < xar.length; i++) {
        for (n = -1; n < 2; n = n + 2) {
            var a = xar[i] * n;
            var c = x / a;
            for (j = 1; j < zar.length; j++) {
                for (m = -1; m < 2; m = m + 2) {
                    var b = zar[j] * m;
                    var d = z / b;
                    if (a*d+b*c==y) {
                        harambe(a, b, c, d);
                    }
                }
            }
        }
    }
}
function factorfam(num) {
    var numarray = [0]
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            numarray.push(i);
        }
    }
    return numarray;
}

$(document).ready(function() {
    $("button").click(function() {
        dutycalls();
    });
    //alert(factorfam(420));
});
