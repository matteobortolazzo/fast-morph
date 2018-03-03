import { Component } from '@stencil/core';

@Component({
  tag: 'example-card',
  styleUrl: 'example-card.scss'
})
export class ExampleCard {

  render() {
    return (
      <div class="example-card">
        <fast-morph elements={['image', 'name', 'coordinates', 'author', 'bottom-card', 'description', 'pizza', 'pasta', 'lasagne']}>
          <div slot="state-0">
            <div class="small-slot" itemprop="fm-activator">
              <div class="top-card">
                <img itemprop="fm-image"       class="city-image" src="assets/asolo.jpg" />
                <div class="city-name-container">
                  <div itemprop="fm-name" class="city-name">Asolo</div>
                </div>
                <div itemprop="fm-coordinates" class="coordinates">45.7993° N, 11.9141° E</div>
                <div itemprop="fm-author"      class="author">Matteo Bortolazzo</div>
              </div>
              <div class="bottom-card">
                <div itemprop="fm-bottom-card" class="info-back"></div>
                <div class="info-front">
                  <div class="description-container">
                    <div itemprop="fm-description" class="description">Asolo is a town and comune in the Veneto Region of Northern Italy.</div>
                  </div>
                  <div class="profiles">
                    <img itemprop="fm-pizza"     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" />
                    <img itemprop="fm-pasta"     src="http://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-utensils.jpg" />
                    <img itemprop="fm-lasagne"   src="https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/28f996d1-0821-44ec-97de-2de86efa897c.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="state-1">
            <div class="big-slot" itemprop="fm-activator">
              <div class="top-card">
                <img class="city-image" itemprop="fm-image" src="assets/asolo.jpg" />
                <div class="city-name-container">
                  <div itemprop="fm-name" class="city-name">Asolo</div>
                </div>
                <div itemprop="fm-coordinates" class="coordinates">45.7993° N, 11.9141° E</div>
                <div itemprop="fm-author" class="author">Matteo Bortolazzo</div>
              </div>
              <div class="bottom-card">
                <div itemprop="fm-bottom-card" class="info-back">
                  <div class="product-descriptions">
                    <div>Pizza</div>
                    <div>Pasta</div>
                    <div>Lasegne</div>
                  </div>
                </div>
                <div class="info-front">
                  <div class="description-container">
                    <div itemprop="fm-description" class="description"></div>
                  </div>
                  <div class="profiles">
                    <img itemprop="fm-pizza" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" />
                    <img itemprop="fm-pasta" src="http://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-utensils.jpg" />
                    <img itemprop="fm-lasagne" src="https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/28f996d1-0821-44ec-97de-2de86efa897c.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fast-morph>
      </div>
    );
  }
}
