import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <br />
        <br />
        <br />
        <fast-morph elements={['image', 'name', 'coordinates', 'author', 'bottom-card', 'pizza', 'pasta', 'mandolino']}>
          <div slot="state-1">
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
                  <div class="description">Asolo is a town and comune in the Veneto Region of Northern Italy.</div>
                  <div class="profiles">
                    <img itemprop="fm-pizza"     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" />
                    <img itemprop="fm-pasta"     src="http://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-utensils.jpg" />
                    <img itemprop="fm-mandolino" src="https://www.valsassinanews.com/wp-content/uploads/2017/07/mandolino.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="state-0">
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
                <div itemprop="fm-bottom-card" class="info-back"></div>
                <div class="info-front">
                  <div class="profiles">
                    <div class="profile">
                      <img itemprop="fm-pizza" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" />
                      <div class="name">Pizza</div>
                    </div>
                    <div class="profile">
                      <img itemprop="fm-pasta" src="http://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-utensils.jpg" />
                      <div class="name">Pasta</div>
                    </div>
                    <div class="profile">
                      <img itemprop="fm-mandolino" src="https://www.valsassinanews.com/wp-content/uploads/2017/07/mandolino.jpg" />
                      <div class="name">Mandolino</div>
                    </div>
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
