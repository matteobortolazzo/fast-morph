/*! Built with http://stenciljs.com */
const { h, Context } = window.FastMorph;

class FastMorph {
    constructor() {
        this.baseTransform = 'translateX(0) translateY(0) scaleX(1) scaleY(1)';
        this.opacitySpeed = 300;
        this.animationSpeed = 600;
        this.elementsToTransform = [];
        this.transitioning = false;
    }
    componentDidLoad() {
        // Get the ref of the two div states
        this.slot0 = this.fastMorphEl.querySelector('[slot=state-0]');
        this.slot1 = this.fastMorphEl.querySelector('[slot=state-1]');
        // Hide the second state
        this.slot1.style.opacity = '0';
        this.slot1.style.pointerEvents = 'none';
        this.slot1.style.visibility = 'none';
        // Add event listeners to the change state activators
        this.slot0.querySelector("[itemprop=fm-activator]").addEventListener('click', () => this.switchSlot());
        this.slot1.querySelector("[itemprop=fm-activator]").addEventListener('click', () => this.switchSlot());
        // Find the elements to transform
        let slot0Elements = Array.from(this.slot0.querySelectorAll("[itemprop^=fm-]"));
        let slot1Elements = Array.from(this.slot1.querySelectorAll("[itemprop^=fm-]"));
        let elementsToAnimate = [];
        // Check that every element has its "twin"
        for (let i = 0; i < slot0Elements.length; i++) {
            let slot0El = slot0Elements[i];
            // If it's not the activator element
            if (slot0El.getAttribute("itemprop") != "fm-activator") {
                for (let j = 0; j < slot1Elements.length; j++) {
                    let slot1El = slot1Elements[j];
                    // Checks if there's a "twin"
                    if (slot0El.getAttribute("itemprop") == slot1El.getAttribute("itemprop"))
                        elementsToAnimate.push({ element0: slot0El, element1: slot1El });
                }
            }
        }
        // For every element to morph
        for (let elements of elementsToAnimate) {
            let el0 = elements.element0;
            let el1 = elements.element1;
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
            let transformStyle0 = `translateX(${-translateX}px) translateY(${-translateY}px) scaleX(${1 / scaleX}) scaleY(${1 / scaleY})`;
            // Assign the style
            el0.style.transform = this.baseTransform;
            el0.classList.add('will-transform');
            el1.style.transform = transformStyle1;
            el1.classList.add('will-transform');
            // Store the styles
            this.elementsToTransform.push({
                el0: {
                    el: el0,
                    transform: transformStyle0
                },
                el1: {
                    el: el1,
                    transform: transformStyle1
                }
            });
        }
    }
    switchSlot() {
        if (this.transitioning)
            return;
        this.transitioning = true;
        this.state = !this.state;
        this.transformElements();
        if (this.state) {
            this.hideSlot(this.slot0);
            this.showSlot(this.slot1);
        }
        else {
            this.hideSlot(this.slot1);
            this.showSlot(this.slot0);
        }
        setTimeout(() => this.transitioning = false, this.animationSpeed);
    }
    transformElements() {
        if (this.state) {
            for (let elGroup of this.elementsToTransform) {
                elGroup.el0.el.style.transform = elGroup.el0.transform;
                elGroup.el1.el.style.transform = this.baseTransform;
            }
        }
        else {
            for (let elGroup of this.elementsToTransform) {
                elGroup.el0.el.style.transform = this.baseTransform;
                console.log(elGroup.el1.transform);
                elGroup.el1.el.style.transform = elGroup.el1.transform;
            }
        }
    }
    hideSlot(slot) {
        slot.style.transition = 'opacity 300ms cubic-bezier(0.215, 0.61, 0.355, 1)';
        slot.style.pointerEvents = 'none';
        setTimeout(() => slot.style.visibility = 'none', this.animationSpeed);
        setTimeout(() => slot.style.opacity = '0', this.opacitySpeed);
    }
    showSlot(slot) {
        slot.style.transition = 'opacity 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19)';
        slot.style.visibility = 'visible';
        slot.style.pointerEvents = 'auto';
        slot.style.opacity = '1';
    }
    render() {
        return (h("div", { class: "fast-morph" },
            h("slot", { name: "state-0" }),
            h("slot", { name: "state-1" })));
    }
    static get is() { return "fast-morph"; }
    static get properties() { return { "fastMorphEl": { "elementRef": true } }; }
    static get style() { return "[slot] {\n  will-change: opacity;\n  contain: layout; }\n\n.will-transform {\n  will-change: transform;\n  transform-origin: left top 0px;\n  transition: transform 600ms cubic-bezier(0.645, 0.045, 0.355, 1); }"; }
}

export { FastMorph };
