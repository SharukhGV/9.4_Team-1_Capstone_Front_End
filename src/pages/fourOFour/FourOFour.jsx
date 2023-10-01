import './FourOFour.css';
import { Link } from 'react-router-dom';

export default function FourOFour() {

    return (
        <div className='four-o-four'>
            
            <div className="paper-pink">
                <div className="tape-section"></div>
                <h1>Sometimes errors happen.  Time to head <Link to={'/home'}>home.</Link></h1>
                <div className="tape-section"></div>
            </div>

            <div className="container">
                <svg id="tsuru" className="container" width="500" height="500">
                    <g id="tsuru-origami" transform="scale(0.5)">
                        <path id="head" className="colorset1" d="M530,195 L454.5,238 L519,230 Z" />
                        <path id="neck" className="colorset2" d="M530,195 L556.5,227.5 L549,425 L525,427 L424,528 Z" />
                        <path id="body" className="colorset3" d="M424,528 L525.5,632 L599,592 L525,427 Z" />

                        <g id="wingy-right">
                            <path id="right-upper-wing" className="colorset1" d="M525,427 L959,250 L870,427 Z" />
                            <g id="flower4" transform="translate(290,-60) scale(0.9)">
                                <path className="flower-pink" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                                <circle className="flower-center" cx="609.5" cy="473" r="7" />
                            </g>
                        </g>
                        <path id="right-lower-wing" className="colorset4" d="M525,427 L870,427 L599,592 Z" />
                        <path id="left-lower-wing" className="colorset3" d="M344,378.5 L455,423 L456,427 L432.5,499 Z" />
                        <g id="wingy-left">
                            <path id="left-upper-wing" className="colorset1" d="M344,378.5 L325,218 L455,423 Z" />
                            <g id="flower9" transform="translate(120,150) scale(0.4)">
                                <path className="flower-red" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                                <circle className="flower-center" cx="609.5" cy="473" r="7" />
                            </g>
                        </g>
                        <path id="tail-lower" className="colorset2" d="M525.5,632 L599,592 L641,632.5 L641,710.7 Z" />
                        <path id="tail-middle" className="colorset1" d="M641,632.5 L641,767 L675,768.5 L688,677 Z" />
                        <path id="tail-upper" className="colorset4" d="M675,768.5 L732,774 L678.2,748.5 Z" />

                        <g id="flower1">
                            <path id="flowe1-petal" className="colorset1" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle className="flower-center" cx="609.5" cy="473" r="7" />
                        </g>

                        <g id="flower2" transform="translate(279,282) scale(0.6) rotate(-9)">
                            <path className="colorset1" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle className="flower-center" cx="609.5" cy="473" r="7" />
                        </g>
                        <g id="flower3" transform="translate(320,205) scale(0.65) rotate(-7)">
                            <path className="flower-red" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle className="flower-center" cx="609.5" cy="473" r="7" />
                        </g>

                        <g id="flower5" transform="translate(90,210) scale(0.7)">
                            <path className="flower-pink" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle className="flower-center" cx="609.5" cy="473" r="7" />
                        </g>

                        <g id="flower6" transform="translate(145,285) scale(0.75)">
                            <path className="colorset1" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle className="flower-center" cx="609.5" cy="473" r="7" />
                        </g>
                        <g id="flower7" transform="translate(155,110) scale(0.58)">
                            <path className="colorset1" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle className="flower-center" cx="609.5" cy="473" r="7" />
                        </g>
                        <g id="flower8" transform="translate(285,105) scale(0.4)">
                            <path className="flower-pink" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle className="flower-center" cx="609.5" cy="473" r="7" />
                        </g>

                    </g>
                </svg>
            </div>

        </div>
    )
}