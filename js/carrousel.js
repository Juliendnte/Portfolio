const shadow = '0 20px 50px rgba(0,34,45,0.5)';

function styles(item_id, x, y, z, opacity, shadow){
    $(item_id).css({
        transform: 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)',
        opacity: opacity,
        'box-shadow': shadow
    });
}

function updateStyles(focusClass, cardStyles) {
    $('.btn').removeClass('focus');
    $(focusClass).addClass('focus');

    cardStyles.forEach(({id, x, y, z, opacity, shadow}) => {
        styles(id, x, y, z, opacity, shadow);
    });
}

$('.btn-1').click(function(){
    updateStyles('.btn-1', [
        { id: '#first', x: 0, y: 0, z: 0, opacity: 1, shadow: shadow },
        { id: '#second', x: 70, y: -80, z: -50, opacity: 0.6, shadow: 'none' },
        { id: '#third', x: 110, y: 80, z: -60, opacity: 0.1, shadow: 'none' },
        { id: '#fourth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#fifth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#sixth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' }
    ]);
});

$('.btn-2').click(function(){
    updateStyles('.btn-2', [
        { id: '#first', x: 110, y: 80, z: -60, opacity: 0.1, shadow: 'none' },
        { id: '#second', x: 0, y: 0, z: 0, opacity: 1, shadow: shadow },
        { id: '#third', x: 70, y: -80, z: -50, opacity: 0.6, shadow: 'none' },
        { id: '#fourth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#fifth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#sixth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' }
    ]);
});

$('.btn-3').click(function(){
    updateStyles('.btn-3', [
        { id: '#first', x: 70, y: -80, z: -50, opacity: 0.6, shadow: 'none' },
        { id: '#second', x: 110, y: 80, z: -60, opacity: 0.1, shadow: 'none' },
        { id: '#third', x: 0, y: 0, z: 0, opacity: 1, shadow: shadow },
        { id: '#fourth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#fifth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#sixth', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' }
    ]);
});

$('.btn-4').click(function(){
    updateStyles('.btn-4', [
        { id: '#first', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#second', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#third', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#fourth', x: 0, y: 0, z: 0, opacity: 1, shadow: shadow },
        { id: '#fifth', x: 70, y: -80, z: -50, opacity: 0.6, shadow: 'none' },
        { id: '#sixth', x: 110, y: 80, z: -60, opacity: 0.1, shadow: 'none' }
    ]);
});

$('.btn-5').click(function(){
    updateStyles('.btn-5', [
        { id: '#first', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#second', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#third', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#fourth', x: 70, y: -80, z: -50, opacity: 0.6, shadow: 'none' },
        { id: '#fifth', x: 0, y: 0, z: 0, opacity: 1, shadow: shadow },
        { id: '#sixth', x: 110, y: 80, z: -60, opacity: 0.1, shadow: 'none' }
    ]);
});

$('.btn-6').click(function(){
    updateStyles('.btn-6', [
        { id: '#first', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#second', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#third', x: 0, y: 0, z: 0, opacity: 0.1, shadow: 'none' },
        { id: '#fourth', x: 110, y: 80, z: -60, opacity: 0.1, shadow: 'none' },
        { id: '#fifth', x: 70, y: -80, z: -50, opacity: 0.6, shadow: 'none' },
        { id: '#sixth', x: 0, y: 0, z: 0, opacity: 1, shadow: shadow }
    ]);
});
