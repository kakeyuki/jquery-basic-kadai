$(function () {
    // change-colorというid属性のボタンを押すと文字色が変わる
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });
    // change-textというid属性のボタンを押すと文字内容が変わる
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');
    });
    // fade-outというid属性のボタンを押すとフェードアウトする
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });
    // fade-inというid属性のボタンを押すとフェードインする
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});