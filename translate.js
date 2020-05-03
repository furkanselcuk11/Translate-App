function Translate(word,language){
    this.apikey="trnsl.1.1.20200424T183439Z.1140d2bb0886111b.3aa244b2d672b584045e2fb7330053c65b4e7604";
    this.word=word;
    this.language=language;

    //  XHR Object
    this.xhr=new XMLHttpRequest();

}

Translate.prototype.translateWord=function(callback){       
    // Ajax İşlemleri
    const endpoint=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload=()=>{
        if(this.xhr.status===200){
            const json=JSON.parse(this.xhr.responseText);
            const text=json.text[0];
            callback(null,text);
        }
        else {
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();
};

Translate.prototype.changeParameters=function(newWord,newLanguage){
    this.word=newWord;
    this.language=newLanguage;
    
}