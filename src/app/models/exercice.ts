export class Exercice {
    private _id:string;
    private _enunciat:string;
    private _image:string;
    private _modul:string;
    private _solucio:string;
    private _title:string;

    constructor(){
        this._id = "";
        this._enunciat = "";
        this._image = "";
        this._modul = "";
        this._solucio = "";
        this._title = "";
    }

    get id():string {
        return this._id;
    }
    get enunciat():string {
        return this._enunciat;
    }
    get image():string {
        return this._image;
    }
    get modul():string {
        return this._modul;
    }
    get solucio():string {
        return this._solucio;
    }
    get title():string {
        return this._title;
    }

    set id(id:string){
        this._id = id;
    }
    set enunciat(enunciat:string){
        this._enunciat = enunciat;
    }
    set image(image:string){
        this._image = image;
    }
    set modul(modul:string){
        this._modul = modul;
    }
    set solucio(solucio:string){
        this._solucio = solucio;
    }
    set title(title:string){
        this._title = title;
    }

}
