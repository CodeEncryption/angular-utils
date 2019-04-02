import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

export interface Option {
  num: number;
  score?: number;
  position?: string;
  disable?: boolean;
}

@Component({
  selector: "util-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent implements OnInit {
  @Output() select = new EventEmitter<number>();
  num = 5;
  score = 3;
  position = "center";
  disable = false;
  _option: Option = {
    num: this.num,
    score: this.score,
    position: this.position,
    disable: this.disable
  };
  items = [];
  status = [];
  @Input()
  set option(option: Option) {
    this._option.num = option.num;
    this._option.score = option.score;
    this._option.position = option.position;
    this._option.disable = option.disable;
    this.items.length = this._option.num;
  }
  get option(): Option {
    return this._option;
  }
  @ViewChild("pos") pos: ElementRef;

  constructor(private el: ElementRef, private rd: Renderer2) {}

  ngOnInit() {
    this.rd.addClass(this.pos.nativeElement, this.option.position);
    //初始化评分
    this.star(this.option.score, true);
  }
  star(n, flag = false) {
    if (!flag) {
      if (this.option.disable == true) {
        return;
      }
    }
    for (let i = 0; i < n; i++) {
      this.status[i] = true;
    }
    for (let j = this.option.num - 1; j >= n; j--) {
      this.status[j] = false;
    }
    this.select.emit(n);
  }
}
