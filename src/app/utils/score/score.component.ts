import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  ViewChild, 
  ElementRef, 
  Renderer2
} from '@angular/core';

@Component({
  selector: 'util-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Output() select=new EventEmitter<number>();
  @Input() score:number;
  @Input() position:string;
  @Input() disabled:string;
  @ViewChild('pos') pos:ElementRef;
  status=[]
  constructor(private el:ElementRef,private rd:Renderer2) { }
  
  ngOnInit() {
    this.rd.addClass(this.pos.nativeElement,this.position)
    //初始化评分
    this.star(this.score,true)
  }
  star(n,flag=false){
    if(!flag){if(this.disabled=='true'){return;}}
    for(let i=0;i<n;i++){
      this.status[i]=true;
    }
    for(let j=4;j>=n;j--){
      this.status[j]=false;
    }
    this.select.emit(n);
  }
}