var app = function() {
    var gracearray = [];
    var markGrace = function() {
        var picker = new mdDateTimePicker.default({
            type: 'date',
            init: moment().add(2, "day"),
            future: moment().add(1, "month"),
            past: moment().add(2, "day"),
        });
        picker.trigger = document.getElementById('markgrace');
        $('#markgrace').off().on('onOk', function() {
            console.log(picker.time);
            gracearray.push(picker.time);
            gracearray = sortMomentArray(gracearray);
            gracearray = getUniqueArray(gracearray);
            renderGraceArray();
        });
        picker.toggle();
    }
    var renderGrace = function(grace) {
        var entry = document.createElement("li");
        var gracelist = document.getElementById("grace-list");
        var datestring = grace.format("dddd, MMMM Do YYYY");
        entry.innerHTML = datestring;
        entry.classList.add("w3-hover-grey");
        entry.classList.add("w3-padding-16");
        gracelist.appendChild(entry);
    }

    var renderGraceArray = function() {
        var gracelist = document.getElementById("grace-list");
        gracelist.innerHTML = "";
        gracearray.forEach(function(elem) {
            renderGrace(elem);
        });
    }

    var getUniqueArray = function(array) {
        var uniquearray = [];
        $.each(array, function(i, el) {
            if ($.inArray(el, uniquearray) === -1) uniquearray.push(el);
        });
        return uniquearray;
    }

    var sortMomentArray = function(array) {
        array.sort(function(a, b) {
            if (a.valueOf() < b.valueOf()) return -1;
            if (a.valueOf() > b.valueOf()) return 1;
            return 0;
        });
        return array;
    }

    return {
        markGrace: markGrace,
        renderGraceArray: renderGraceArray,
    }
}();