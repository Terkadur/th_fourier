
function toReal(c) {
    return [(1+c.re)*act.height/2, (1-c.im)*act.height/2];
}

function getNext(index) {
    if (index <= 0) {
        return abs(index)+1;
    } else {
        return -1*index;
    }
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}