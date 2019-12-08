import {html, css, LitElement} from "lit-element";

class LeadApp extends LitElement {
    static get styles() {
        // language=CSS
        return css`
            :host {
                height: 1000px;
            }

            .full-app {
                background-color: darkslategray;
                height: 1000px;
                width: 960px;
                margin: auto;
                margin: 32px auto 100px auto;
                display: flex;
                flex-direction: column;
                position: relative;
            }

            .header {
                align-items: start;
                display: flex;
                justify-content: space-between;
                margin: 32px;
                margin-right: 0;
            }

            .life-bar {
                width: 150px;
                border: 0.8px solid aquamarine;
                display: flex;
                align-items: center;
                border-radius: 8px;
            }

            .life-bar > span {
                border-radius: 8px;
            }

            .human img {
                width: 80px;
            }

            .name {
                color: aqua;
            }
            .application{
                width: 80%;
                align-self: start;
                border: solid;
                margin: 0 auto;
            }
            .question {
                display: flex;
            }
            .question > span{
                margin:32px;
            }
            .answers {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            .answer {
                cursor:pointer;
                border-radius: 4px;
                margin:32px;
                border: 0.5px solid wheat;
                padding-left: 10px;
            }
            .answer *{
                margin:4px;
            }
            .answer > img {
                height:32px;
                width: 32px;
                border-radius: 50%;
                margin-right: 4px;
            }
            .answer:hover{
                background-color: aqua;
            }
            .response{
                display:none;
            }
            :host([chosen=first]) .question, :host([chosen=first]) .answers{
                display:none;
            }
            :host([chosen=first]) .response{
                display:flex;
                flex-direction: column;
                top:0;
                background-color: red;
                z-index: 1;
                margin:32px;
            }
            .response span {
                margin:32px;
            }
            .next {
                align-self: flex-end;
                border-radius: 4px;
                margin-right: 32px;
                margin-bottom: 32px;
            }
            .sos {
                font-size: 28px;
                font-weight: 900;
            }
        `;
    }

    render() {
        // language=HTML
        return html`
        <div class="full-app">
            <div class="header">
                <div class="life-bar">
                    <span style="width:${this.lifeBar}%; background-color: ${this.barColor}">Life-bar ${this.lifeBar*10}</span>
                </div>
                <div class="name"><span>Control The Lead</span></div>
                <div class="human"><img src="../../images/standing-human-body-silhouette.svg"></div>
            </div>
            <div class="application">
            <div class="response">
            <div class="sos">SOS</div>
            <span>სახლში მოყვანილი ბოსტნეული ხშირად საჭიროებს დამატებით მოვლის საშუალებებს, (სასუქებს)
                რომელთა უმრავლესობა ქიმიური ნაერთებია და გამოირჩევა ტყვიის შემცველობის მაღალი კონცენტრაციით რაც დიდ
                საშიშროებას წარმოადგენს თქვენთვის და თქვენი შვილებისათვის, შეიძლება ისინი არ იღებდნენ ამ საკვებს თუმცა დედის ორგანიზმიდან ადვილად ხვდება ჩვილ ბავშვებში, 
                 ამიტომ კარგად დარწმუნდით თუ რითი მორწყავთ(ან მოუვლით) სახლის პირობებშ მოყვანილ ბოსტნეულს</span>
                 <button class="next" @click="${this.loadNext}">თქვენ დაგაკლდათ ${this.lostScore} ქულა >></button></div>
                <div class="question"><span>
                    ადამიანის ჯანმრთელობისთვის ერთერთი მნიშვნელოვანი რამ არის დღის რაციონი, 
                    განსაკუთრებით ყურადღება უნდა მივაქციოთ მოზარდის კვებას.
                    ოთხი კერძიდან რომელს აირჩევდით დღის დასაწყებად?
</span></div>
                <div class="answers">
                    <div class="answer" @click="${this.choseFirst}"><img src="../../images/ბოსტნეული.jpg">სახლში მოყვანილ ბოსტენულის სალათს</div>
                    <div class="answer"><img src="../../images/sauzme.jpg">ჩაის და მასთან ერთად რაიმე მსუბუქს</div>
                    <div class="answer"><img src="../../images/ostri2-crop-c0-5__0-5-450x301-70.jpg">სუნელებით შეკაზმულ უგემრიელეს წვნიანს</div>
                    <div class="answer"><img src="../../images/77390654_1422355124583222_1200387906909241344_n.png">დილით საერთოდ არ მივირთმევ</div>
                </div>
                
            </div>
            
        </div>
        `;
    }

    static get properties() {
        return {
            lifeBar: {
                type: Number,
            },
            barColor: {
                type: String,
            },
            chosen: {
                type: String,
                reflect: true,
            },
            lostScore: {
                type: Number,
                reflect: true,
            }
        };
    }
    constructor() {
        super();
        this.lifeBar = 100;
        this.lostScore=0;
        this.barColor = 'green';
    }
    choseFirst(){
        this.chosen = 'first';
        this.lostScore= 200;
        this.lifeBar= this.lifeBar-(this.lostScore/10);
        this.barColor='chartreuse';
    }
    loadNext(){
        this.chosen='';
    }
}

window.customElements.define('lead-app', LeadApp);
