/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
// This element is connected to the Redux store.
import { store } from '../store.js';
import './lead-header';
import './lead-app';
// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState
} from '../actions/app.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from './my-icons.js';
import './snack-bar.js';

class MyApp extends connect(store)(LitElement) {
  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean }
    };
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display:flex;
          flex-direction: column;
          margin:auto;
          background-image: url("../../images/77390654_1422355124583222_1200387906909241344_n.png");
        }
          .starter{
            display: flex;
            margin-top: 32px;
          }
          .starter > span{
            padding: 25px;
            margin: auto;
            border-radius: 12px;  
            background-color: aqua;
          }
      `
    ];
  }

  render() {
    // Anything that's related to rendering should be done in here.
    return html`
      <div class="content">
        <lead-header></lead-header>
        <div class="starter">
        <span @click="${this.scroll}">თამაშის დაწყება</span>
</div>
        <lead-app></lead-app>
      </div>
    `;
  }

  constructor() {
    super();

  }
  scroll() {
    window.scrollTo({
      top:535,
      behavior: 'smooth',
    })
  }
}

window.customElements.define('my-app', MyApp);
