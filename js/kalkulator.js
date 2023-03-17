function tambah(){
    var form=document.getElementById('kalkulator');
    var a1=parseFloat(form.angka.value);
    var a2=parseFloat(form.angka2.value);
    var total= a1 + a2;
    
    if(isNaN(a1) ||isNaN(a2)){
        alert('masukkan angka dengan lengkap')
        
    }else{
        form.hasil.value=total;
    }
}
function kurang(){
    var form=document.getElementById('kalkulator');
    var a1=parseFloat(form.angka.value);
    var a2=parseFloat(form.angka2.value);
    var total= a1 - a2;
    form.hasil.value=total;
    if(isNaN(a1) || isNaN(a2)){
        alert('masukkan angka dengan lengkap')
        
    }else{
        form.hasil.value=total;
    }
}
function kali(){
    var form=document.getElementById('kalkulator');
    var a1=parseFloat(form.angka.value);
    var a2=parseFloat(form.angka2.value);
    var total= a1 * a2;
    form.hasil.value=total;
    if(isNaN(a1) || isNaN(a2)){
        alert('masukkan angka dengan lengkap')
        
    }else{
        form.hasil.value=total;
    }
}
function bagi(){
    var form=document.getElementById('kalkulator');
    var a1=parseFloat(form.angka.value);
    var a2=parseFloat(form.angka2.value);
    var total= a1 / a2;
    form.hasil.value=total;
    if(isNaN(a1) || isNaN(a2)){
        alert('masukkan angka dengan lengkap')
        
    }else{
        form.hasil.value=total;
    }
}
function pangkat(){
    var form=document.getElementById('kalkulator');
    var a1=parseFloat(form.angka.value);
    var a2=parseFloat(form.angka2.value);
    var total= a1**a2
    form.hasil.value=total;
    if(isNaN(a1) || isNaN(a2)){
        alert('masukkan angka dengan lengkap')
        
    }else{
        form.hasil.value=total;
    }
}