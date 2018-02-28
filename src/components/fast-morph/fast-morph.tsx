import {Component, Element, Prop} from '@stencil/core';


@Component({
  tag: 'fast-morph',
  styleUrl: 'fast-morph.scss'
})
export class FastMorph {

  @Element() fastMorphEl: HTMLElement;
  @Prop() elements: string[];

  baseTransform: string = 'translateX(0) translateY(0) scaleX(1) scaleY(1)';

  state: boolean;
  animationSpeed: number = 900;

  slot0: HTMLElement;
  slot1: HTMLElement;

  elementsToTransform: { [id: string] : [{ el: HTMLElement, transform: string }, { el: HTMLElement, transform: string }]} = {};

  componentDidLoad() {
    // Get the ref of the two div states
    this.slot0 = this.fastMorphEl.querySelector('[slot=state-0]') as HTMLElement;
    this.slot1 = this.fastMorphEl.querySelector('[slot=state-1]') as HTMLElement;

    // Second state positioning
    this.slot1.style.opacity = '0';
    this.slot1.style.visibility = 'hidden';
    this.slot1.style.marginTop = `-${this.slot0.getBoundingClientRect().height}px`;

    // Add event listeners to the change state activators
    this.slot0.querySelector(".change-state").addEventListener('click', () => this.switchSlot());
    this.slot1.querySelector(".change-state").addEventListener('click', () => this.switchSlot());

    // For every element to morph
    for(let c of this.elements) {
      // Get the two elements
      let el0 = this.slot0.querySelector(`[itemprop=${c}]`) as HTMLElement;
      let el1 = this.slot1.querySelector(`[itemprop=${c}]`) as HTMLElement;
      // Get their bounds
      let bound1 = el0.getBoundingClientRect();
      let bound2 = el1.getBoundingClientRect();
      // Calculate the differences between the two elements
      let translateX = bound1.left - bound2.left;
      let translateY = bound1.top - bound2.top;
      let scaleX = bound1.width / bound2.width;
      let scaleY = bound1.height / bound2.height;
      // Concat the transform properties
      let transformStyle1 = `translateX(${translateX}px) translateY(${translateY}px) scaleX(${scaleX}) scaleY(${scaleY})`;
      let transformStyle0 = `translateX(${-translateX}px) translateY(${-translateY}px) scaleX(${1/scaleX}) scaleY(${1/scaleY})`;
      console.log(c);
      console.log(transformStyle0);
      console.log(transformStyle1);
      // Assign the style
      el0.style.transform = this.baseTransform;
      el0.classList.add('will-transform');
      el1.style.transform = transformStyle1;
      el1.classList.add('will-transform');
      // Store the styles
      this.elementsToTransform[c] = [{
          el: el0,
          transform: transformStyle0
        },
        {
          el: el1,
          transform: transformStyle1
        }];
    }
  }

  switchSlot() {
    this.state = !this.state;
    if(this.state) {
      this.hideSlot(this.slot0);
      this.showSlot(this.slot1);
    }
    else {
      this.hideSlot(this.slot1);
      this.showSlot(this.slot0);
    }
    this.transformElements();
  }

  transformElements() {
    if(this.state) {
      for (let id in this.elementsToTransform) {
        let value = this.elementsToTransform[id];
        value[0].el.style.transform = value[0].transform;
        value[1].el.style.transform = this.baseTransform;
      }
    }
    else {
      for (let id in this.elementsToTransform) {
        let value = this.elementsToTransform[id];
        value[0].el.style.transform = this.baseTransform;
        value[1].el.style.transform = value[1].transform;
      }
    }
  }

  hideSlot(slot: HTMLElement) {
    slot.style.opacity = '0';
    slot.style.pointerEvents = 'none';
    setTimeout(() => slot.style.visibility = 'hidden', this.animationSpeed);
  }

  showSlot(slot: HTMLElement) {
    slot.style.visibility = 'visible';
    slot.style.opacity = '1';
    setTimeout(() => slot.style.pointerEvents = 'auto', this.animationSpeed);
  }

  render() {
    return(
      <div class="fast-morph">
        <slot name="state-0" />
        <slot name="state-1" />
      </div>
    );
  }
}
