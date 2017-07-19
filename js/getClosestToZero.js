var getClosestToZero = function() {
    var absOfFirstArgument = Math.abs(arguments[0]);
    var closest = 0;
    for (var i = 0; i < arguments.length; i++) {
        var abs = Math.abs(arguments[i]);
        if (abs <= absOfFirstArgument) {
            absOfFirstArgument = abs;
            closest = arguments[i];
        }
    }
    return closest;
}