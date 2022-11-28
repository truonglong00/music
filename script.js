function playLack(){
  document.getElementById('nhac').muted = false;
  document.querySelector('#nhac').play();
}
// /******** Typing js *********/
var inputBox = document.querySelector('.typingText')

var myString = 'Cuộc đời vốn dĩ rất rộng lớn, bạn sẽ gặp gỡ rất nhiều người. May mắn thì gặp được một người và gắn bó với người đó đến trọn kiếp. Còn không may thì phải đi một đoạn đường dài, trải qua hết hỉ nộ ái ố trong tình cảm mới tìm được một người tâm đầu ý hợp.';

var myArray = myString.split('')

var MdsdTyping = function() {

    if (myArray.length > 0) {
        inputBox.innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
    }
    var loopTimer = setTimeout('MdsdTyping()', 90);

};
MdsdTyping();

