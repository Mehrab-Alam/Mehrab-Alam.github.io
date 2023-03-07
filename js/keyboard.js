function getPreviousResult() {
    return document.getElementById('text').value;
}

function btn_click(alphabets) {
    document.getElementById('text').value = getPreviousResult() + alphabets
}

// 