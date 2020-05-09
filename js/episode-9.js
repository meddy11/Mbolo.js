var note = prompt('Quelle est votre note')
if(note > 0 && note <=10){
    alert(note +  '  :(  Passable peu faire mieux...');
}else if (note > 10 && note <=13){
    alert(note + '  :)  Assez-Bien, peu faire mieux...');
}
else if (note > 13 && note <=16){
    alert(note + '  :)  Bien, peu faire mieux...');
}
else if (note > 16 && note <=17){
    alert(note + '  :D  Très bien, peu faire mieux...');
}
else if (note > 17 && note <=17){
    alert(note + '  :D  Excellent, peu faire mieux...');
}