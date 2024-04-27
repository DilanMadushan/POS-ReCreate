$('#storeSection').css({display:'none'});
$('#customerSection').css({display:'none'});
$('#orderSection').css({display:'none'});
$('#homeSection').css({display:'block'});

$('#cusNav').on('click', () => {
    $('#customerSection').css({display:'block'});
    $('#storeSection').css({display:'none'});
    $('#orderSection').css({display:'none'});
    $('#homeSection').css({display:'none'});
});

$('#storeNav').on('click', () => {
    $('#customerSection').css({display:'none'});
    $('#storeSection').css({display:'block'});
    $('#orderSection').css({display:'none'});
    $('#homeSection').css({display:'none'});
});

$('#orderNav').on('click', () => {
    $('#customerSection').css({display:'none'});
    $('#storeSection').css({display:'none'});
    $('#orderSection').css({display:'block'});
    $('#homeSection').css({display:'none'});
});

$('#homeNav').on('click', () => {
    $('#customerSection').css({display:'none'});
    $('#storeSection').css({display:'none'});
    $('#orderSection').css({display:'none'});
    $('#homeSection').css({display:'block'});
});
