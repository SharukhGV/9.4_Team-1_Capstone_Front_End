import './FourOFour.css';
import { Link } from 'react-router-dom';

export default function FourOFour() {

    return (
        <div className='four-o-four'>
            <h1>Sometimes errors happen.  Time to head <Link to={'/home'}>home.</Link></h1>
            <div class="container">
                <svg id="tsuru" class="container" width="500" height="500">
                    <g id="tsuru-origami" transform="scale(0.5)">
                        <path id="head" class="colorset1" d="M530,195 L454.5,238 L519,230 Z" />
                        <path id="neck" class="colorset2" d="M530,195 L556.5,227.5 L549,425 L525,427 L424,528 Z" />
                        <path id="body" class="colorset3" d="M424,528 L525.5,632 L599,592 L525,427 Z" />

                        <g id="wingy-right">
                            <path id="right-upper-wing" class="colorset1" d="M525,427 L959,250 L870,427 Z" />
                            <g id="flower4" transform="translate(290,-60) scale(0.9)">
                                <path class="flower-pink" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                                <circle class="flower-center" cx="609.5" cy="473" r="7" />
                            </g>
                        </g>
                        <path id="right-lower-wing" class="colorset4" d="M525,427 L870,427 L599,592 Z" />
                        <path id="left-lower-wing" class="colorset3" d="M344,378.5 L455,423 L456,427 L432.5,499 Z" />
                        <g id="wingy-left">
                            <path id="left-upper-wing" class="colorset1" d="M344,378.5 L325,218 L455,423 Z" />
                            <g id="flower9" transform="translate(120,150) scale(0.4)">
                                <path class="flower-red" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                                <circle class="flower-center" cx="609.5" cy="473" r="7" />
                            </g>
                        </g>
                        <path id="tail-lower" class="colorset2" d="M525.5,632 L599,592 L641,632.5 L641,710.7 Z" />
                        <path id="tail-middle" class="colorset1" d="M641,632.5 L641,767 L675,768.5 L688,677 Z" />
                        <path id="tail-upper" class="colorset4" d="M675,768.5 L732,774 L678.2,748.5 Z" />

                        <g id="flower1">
                            <path id="flowe1-petal" class="colorset1" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle class="flower-center" cx="609.5" cy="473" r="7" />
                        </g>

                        <g id="flower2" transform="translate(279,282) scale(0.6) rotate(-9)">
                            <path class="colorset1" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle class="flower-center" cx="609.5" cy="473" r="7" />
                        </g>
                        <g id="flower3" transform="translate(320,205) scale(0.65) rotate(-7)">
                            <path class="flower-red" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle class="flower-center" cx="609.5" cy="473" r="7" />
                        </g>

                        <g id="flower5" transform="translate(90,210) scale(0.7)">
                            <path class="flower-pink" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle class="flower-center" cx="609.5" cy="473" r="7" />
                        </g>

                        <g id="flower6" transform="translate(145,285) scale(0.75)">
                            <path class="colorset1" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle class="flower-center" cx="609.5" cy="473" r="7" />
                        </g>
                        <g id="flower7" transform="translate(155,110) scale(0.58)">
                            <path class="colorset1" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle class="flower-center" cx="609.5" cy="473" r="7" />
                        </g>
                        <g id="flower8" transform="translate(285,105) scale(0.4)">
                            <path class="flower-pink" d="M583,465.5 Q581,435 608,446 Q637,432 635,463.5 Q656,486 626,494.5 Q611.5,521 594,495 Q565,489 583,465.5" />
                            <circle class="flower-center" cx="609.5" cy="473" r="7" />
                        </g>

                    </g>
                </svg>
            </div>

        </div>
    )
}