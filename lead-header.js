import {html, css, LitElement} from "lit-element";

class LeadHeader extends LitElement {
    static get styles() {
        // language=CSS
        return css `

            #first{
                background: rgba(0,0,0, 0.5);
                height:420px;
            }
            .header{
                width: 100%;
                height: 100px;
                display: flex;
            }
            .container{
                width:960px;
                margin:auto;
                position:relative;
            }
            .header-wrapper{
                width:100%;
                height:100%;
                display:flex;
            }
            .logo{
                width:33%;
            }
            .logo>h1{
                font-size: 28px;
                line-height: 28px;
                color: #ffffff;
                font-family: "Georgia";
            }
            .logo>h5{
                font-size: 11px;
                line-height: 11px;
                color: #979797;
                font-family: "Georgia";
            }

            .tools ul {
                width: 100%;
                display:grid;
                grid-template-columns: repeat(6, 1fr);
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
            }

            .tools li {
                font-size: 13px;
                line-height: 16px;
                color: #ffffff;
                font-family: "Georgia";
                float: left;
            }

            .tools a {
                display: block;
                color: white;
                text-align: center;
                padding: 16px;
                text-decoration: none;
            }
            .tools li:hover a{
                background-color: lawngreen;
                border-radius: 11px;
            }
            .slider{
                display:flex;
                justify-content: space-between;
            }
            .arrow{
                align-items: center;
                display:flex;
            }
            .arrow-style{
                height:10px;
                width:10px;
            }

            .moving-item{
                width:79%;
                height:300px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 60px;
            }
            .object{
                display:grid;
                grid-gap:20px;
                margin: auto;
                align-content: center;
            }
            #covered{
                width: 220px;
                height: 220px;
                border-radius: 215px;
                background-color: #6b6b6b;
                display:flex;
            }
            #photo{
                width: 200px;
                height: 200px;
                border-radius: 190px;
                background-image: url("../../images/questn.png");
                background-size: cover;
            }
            .moving-item__title{
                font-size: 46px;
                line-height: 46px;
                color: #ffffff;
                font-family: "Georgia";
            }
            .moving-item__discription{
                width: 319px;
                height: 74px;
                font-size: 12px;
                line-height: 19px;
                color: #979797;
                font-family: "Georgia";
            }
            .moving-item__More img{
                width:10px;
                height:10px;
                fill: black;
            }
            .moving-item__More a{

                display: block;
                padding: 11px;
                width: 142px;
                height: 15px;
                font-size: 13px;
                line-height: 16px;
                color: #ffffff;
                font-family: "Georgia";
                border-radius: 11px;
                background-color: #76c38f;
            }        `;
    }
    render(){
        return html`
<section id = "first">
    <header class="header">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <h1>მშობლების გვერდი</h1>
                    <h5>დავიცვათ შვილი მძიმე მეტალისგან</h5>
                </div>
                <div class="tools">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#Style Demo">ინფორმაცია</a></li>
                        <li><a href="#Full width">რჩევები</a></li>
                        <li><a href="#Drop Down">პორტფოლიო</a></li>
                        <li><a href="#Portfolio">კონტაქტი</a></li>
                        <li><a href="#Gallery">თამაში</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="slider">
                <div class="arrow">
                    <img src='../../images/169-1694347_arrows-svg-aztec-right-angled-arrow-png.png' style="width:20px; transform:rotate(180deg)">
                </div>
                <div class="moving-item">
                    <div class="object">
                        <div class="moving-item__title">
                        <span>Lead</span>
                        </div>
                        <div class="moving-item__discription">
                        <p>Lead in the body is distributed to the brain, liver, kidney and bones. It is stored in the 
                        teeth and bones, where it accumulates over time. Human exposure is usually assessed through
                         the measurement of lead in blood.
                        </p>
                    </div>
                        <div class="moving-item__More">
                        <a>Read More Here >></a>
                    </div>
                    </div>
                    <div id="covered" class="object">
                        <div id="photo" class="object"></div>
                    </div>
                </div>
                <div class="arrow">
                    <img src='../../images/169-1694347_arrows-svg-aztec-right-angled-arrow-png.png' style="width:20px">
                </div>
            </div>
        </div>
    </main>
</section>
        `;
    }
}
window.customElements.define('lead-header', LeadHeader);
