import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

	img:any;
	type:any;
	showP:boolean;
	txt:any;
	imgUrl:any;
	showImg:any;
	
	item: Observable<any>;
  constructor(private connect:ConnectService) { 
  
  }
  
  getImg(){
  var self=this;
  this.connect.getImg().subscribe(function(data){
  
  self.img="data:image/png;base64,"+data.data.replace('b','').replace("'","").replace("'","");
  
  self.showImg=true;
  
  });
  
  }
  
  getText(){
  var self=this;
  this.connect.getText().subscribe(function(data){
  self.txt=data.txt;
  });
  }
  
  download(){
  var blob = new Blob([this.txt], { type: 'text/csv' });
  var url= window.URL.createObjectURL(blob);
  window.open(url);
  }

  ngOnInit() {
  this.showP=false;
  this.txt="";
  this.showImg=false;
  var self=this;
  this.getImg();
  this.getText();
  
  }
  
  
  
  doUpload(jsn){
  var self=this;
  this.showP=true;
  this.txt="";
  this.connect.upload(jsn).subscribe(function(data){
  console.log(data);
  self.showP=false;
  self.txt=data.txt;
  });
  }
  
  onFileChange(event) {
    var self=this;
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
	    console.log(file.name);
		console.log(file.type);
		self.type=file.type;
        self.img="data:image/png;base64,"+reader.result.split(',')[1];
		var jsn={
		"type":self.type,
		"data":reader.result.split(',')[1]
		};
		this.doUpload(jsn)
		
      };
    }
  }

}
