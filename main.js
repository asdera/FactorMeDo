function greatatcod(m, n) {
    if (!n) {
        return m;
    }
    return greatatcod(n, m % n);
    //test body.append
};

function harambe(a, b, c, d) {
    var cf = 1;
    var ab = greatatcod(a, b);
    var cd = greatatcod(c, d);
    cf = cf * ab * cd;
    if (cf == 1) {
        $(".answer").append("<p>( " + a + "x + " + b + " ) * ( " + c + "x + " + d + " )</p>");
    } else {
        $(".answer").append("<p>" + cf + " ( " + (a / ab) + "x + " + (b / ab) + " ) * ( " + (c / cd) + "x + " + (d / cd) + " )</p>");
    }
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
    $(".answer").empty();
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
    if ($(".answer").text() == "") {
        $(".answer").append("Unfactorable! Check Your Inputs!");
    }
}
function factorfam(num) {
    var numarray = [0]
    for (i = 1; i <= Math.abs(num); i++) {
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
