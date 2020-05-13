<<<<<<< HEAD
<<<<<<< HEAD

var search = document.querySelector('.btn-search');
var API_URL ='https://floating-harbor-78336.herokuapp.com/fastfood';

search.addEventListener('click',function(){

    var searchKeyword = $('#txt-search').val();

    $.get(API_URL, {searchKeyword: searchKeyword}, function(data) {
        console.log (data)
        var list = data.list;
        var total = data.total;

        document.querySelector('.total').innerText = ('총 ' + total + ' 개의 패스트푸드점을 찾았습니다')
        
        var $list = $('.list');

        for (var i = 0; i < list.length; i++) {
            var item = list[i]

            var $elem = $('#item-template')
                .clone()
                .removeAttr('id');

            $elem.find('.item-no').html(i+1);
            $elem.find('.item-name').html(item.name);
            $elem.find('.item-addr').html(item.addr);

            $list.append($elem)
            
        }
    })
})
=======
var search = document.querySelector('.btn-search');
var API_URL ='https://floating-harbor-78336.herokuapp.com/fastfood';

search.addEventListener('click',function(){
    $.get(API_URL, {}, function(data) {
        console.log (data)
        var list = data.list;
        var total = data.total;

        document.querySelector('.total').innerText = ('총 ' + total + ' 개의 패스트푸드점을 찾았습니다')
        
        var $list = $('.list');

        for (var i = 0; i < list.length; i++) {
            var item = list[i]
        }
    })
})

>>>>>>> d9b6746aac7d239771bc4a502cd55a4f23f5c74e
=======
var search = document.querySelector('.btn-search');
var API_URL ='https://floating-harbor-78336.herokuapp.com/fastfood';

search.addEventListener('click',function(){
    $.get(API_URL, {}, function(data) {
        console.log (data)
        var list = data.list;
        var total = data.total;

        document.querySelector('.total').innerText = ('총 ' + total + ' 개의 패스트푸드점을 찾았습니다')
        
        var $list = $('.list');

        for (var i = 0; i < list.length; i++) {
            var item = list[i]
        }
    })
})

>>>>>>> d9b6746aac7d239771bc4a502cd55a4f23f5c74e
