function totalAmount(data) {
    return data.performances
        .reduce((total, p) => total + p.amount, 0);
}
function totalVolumeCredits(data) {
    return data.performances
        .reduce((total, p) => total + p.volumeCredits, 0);
}