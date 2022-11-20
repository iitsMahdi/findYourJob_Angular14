export class Company {
  id:number;
  nom:String;
  prenom:String;
  phone:String;
  email:String;
  password:String;
  bussName:String;
  StreetAdr:String;
  city:String;
  state:String;

  //Constructor
  public Company(id:number,nom:String,prenom:String,phone:String,email:String,password:String,bussName:String,StreetAdr:String,city:String,state:String){
    this.id=id;
    this.nom=nom;
    this.prenom=prenom;
    this.phone=phone;
    this.email=email;
    this.password=password;
    this.bussName=bussName;
    this.StreetAdr=StreetAdr;
    this.city=city;
    this.state=state;
  }
}

