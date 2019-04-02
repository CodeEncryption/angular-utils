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
  _num = 5;
  items=[];
  status=[];
  @Input() 
  set num(num:number){
    this._num=(num<5?5:num);
    this.items.length=this._num;
  };
  get num(): number { return this._num; }
  @Input() score:number;
  @Input() position:string;
  @Input() disabled:string;
  @ViewChild('pos') pos:ElementRef;
  
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
    for(let j=this.num-1;j>=n;j--){
      this.status[j]=false;
    }
    this.select.emit(n);
  }
}