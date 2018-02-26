import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <br />
        <fast-morph activeClasses={['asolo', 'city', 'coordinates', 'author', 'pizza', 'pasta', 'mandolino', 'berlusconi']}>
          <div slot="state-1">
            <div class="slot1-container change-state">
              <div class="image-quad">
                <img class="asolo" src="assets/asolo.jpg" />
                <div class="city">Asolo</div>
                <div class="coordinates">45.7993° N, 11.9141° E</div>
                <div class="author">Matteo Bortolazzo</div>
              </div>
              <div class="info my-card">
                <div class="description">Asolo is a town and comune in the Veneto Region of Northern Italy.</div>
                <div class="profiles">
                  <img class="pizza"      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" />
                  <img class="pasta"      src="http://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-utensils.jpg" />
                  <img class="mandolino"  src="https://www.valsassinanews.com/wp-content/uploads/2017/07/mandolino.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div slot="state-0">
            <div class="slot2-container change-state my-card">
              <div class="image-quad2">
                <img class="asolo" src="assets/asolo.jpg" />
                <div class="city">Asolo</div>
                <div class="coordinates">45.7993° N, 11.9141° E</div>
                <div class="author">Matteo Bortolazzo</div>
              </div>
              <div class="info2">
                <div class="info2-inner">
                  <div class="profiles2">
                    <div class="profile">
                      <img class="pizza" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" />
                      <div class="name">Pizza</div>
                    </div>
                    <div class="profile">
                      <img class="pasta" src="http://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-utensils.jpg" />
                      <div class="name">Pasta</div>
                    </div>
                    <div class="profile">
                      <img class="mandolino" src="https://www.valsassinanews.com/wp-content/uploads/2017/07/mandolino.jpg" />
                      <div class="name">Mondolino</div>
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
