export class Worker {
  id:number;
  nom:String;
  prenom:String;
  CIN:number;
  email:String;
  password:String;
  DateNaissance:Date;
  Bio:String;
  Photo:String;

  //Constructor
  public Worker(id:number,nom:String,prenom:String,cin:number,email:String,password:String,dn:Date,bio:String,ph:String){
    this.id=id;
    this.nom=nom;
    this.prenom=prenom;
    this.CIN=cin;
    this.email=email;
    this.password=password;
    this.DateNaissance=dn;
    this.Bio=bio;
    this.Photo=ph;
  }
}
