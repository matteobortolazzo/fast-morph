import { Component } from '@stencil/core';

@Component({
  tag: 'example-text',
  styleUrl: 'example-text.scss'
})
export class ExampleText {

  render() {
    return (
      <div class="example-text">
        <fast-morph>
          <div class="old-mario" slot="state-0">
            <div class="mario"  itemprop="fm-activator">
              <img itemprop="fm-mario" src="assets/example-text/mario-1.png" />
              <div class="date" itemprop="fm-date">1985</div>
            </div>
          </div>
          <div class="new-mario" slot="state-1">
            <div class="top">
              <img class="mario" itemprop="fm-mario" src="assets/example-text/mario-2.png" />
              <div class="name">Super Mario</div>
            </div>
            <div class="date" itemprop="fm-date">2018</div><br />
            <div class="back" itemprop="fm-activator">Back</div>
          </div>
        </fast-morph>
      </div>
    );
  }
}
