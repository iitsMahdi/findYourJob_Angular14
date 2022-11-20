export class WorkExp {
  id:number;
  descCompany:String;
  jobDuration:String;

  //Constructor
  public WorkExp(id:number,des:String,jd:String){
    this.id=id;
    this.descCompany=des;
    this.jobDuration=jd;
  }
}
