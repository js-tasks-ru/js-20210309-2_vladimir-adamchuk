export default class ColumnChart {
  subElements = {};
  height = 50;
  chartHeight = 50;
  constructor({
                data = [],
                label = '',
                value = 0,
                link = ''
              } = {}) {
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.composer();
  }
  composer() {
    const element = document.createElement('div');
    element.innerHTML = this.dataPump;
    this.element = element.firstElementChild;
    console.log('dlina data', this.data.length);
    if (this.data.length){
      this.element.classList.remove('column-char_loading');
    }
    const elements  = element.querySelectorAll('[data-element]');
      let TempElem = this.element;
    this.subElements = (TempElem)=>{
      const elements = element.querySelectorAll('[data-element]');
      return [...elements].reduce((accum, subElement) =>{
        accum[subElement.dataset.element] = subElement;
        return accum;
      }, {});
    }
  }
  get dataPump(){
    return `<div class="column-chart column-chart_loading" style="...${this.chartHeight}">
            <div class="column-chart__title">
            Total ${this.label}
            ${this.getLink}
            </div>
            <div class="column-chart__container">
            <div data-element="header" class="column-chart__header">
            ${this.value}
            </div>
            <div data-element="body" class="column-chart__chart">
            ${this.getColumnBody(this.data)}
            </div>
            </div>
            </div>`;
  }
  getColumnBody(data){
    const maxValue = Math.max(...data);
    const scale = this.chartHeight / maxValue;
    return data
      .map(item => {
        const percent = (item / maxValue * 100).toFixed(0);
        return `<div style="--value: ${Math.floor(item * scale)}" data-tooltip="${percent}%"></div>`;
      })
      .join('');
  }
  get getLink(){
    if (this.link) return `<a class="column-chart__link" href="${this.link}">View all</a>`
    else return '';
  }
  update(data) {
    console.log('upd', this.subElements.innerHTML);
    this.subElements.innerHTML = this.getColumnBody(data);
  }
  remove () {
    this.element.remove();
  }
  destroy() {
    this.remove();
    this.element = null;
    this.subElements = {};
  }
}
