document.addEventListener (
    'contextmenu', function (e) {
        e.preventDefault ();
    }
);

document.addEventListener (
    'keydown', function (e) {
        if (
            e.ctrlKey && e.keyCode === 'u'
        ) {
            e.preventDefault();
        }
    }
);

document.onkeydown = function (e) {
    if (
        e.ctrlKey && (
            e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117
        )
    ) {
        return false;
    } else {
        return true;
    }
};