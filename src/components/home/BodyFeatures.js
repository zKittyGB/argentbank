import "../../css/home/BodyFeatures.css"
import IconChat from "../../assets/icon-chat.png"
import IconMoney from "../../assets/icon-money.png"
import IconSecurity from "../../assets/icon-security.png"
/** function that create the body area */
export default function BodyFeatures(){
    return(
        <div className="body-features">
            {/* body section item */}
            <section className="body-features-section">
                <h2 className="sr-only">Features</h2>
                <div className="body-feature-section-item">
                    <img src={IconChat} alt="Chat Icon" className="body-feature-section-icon" />
                    <h3 className="body-feature-section-item-title">You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>
                <div className="body-feature-section-item">
                    <img
                        src={IconMoney} 
                        alt="Chat Icon"
                        className="body-feature-section-icon"
                    />
                    <h3 className="body-feature-section-item-title">More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>
                <div className="body-feature-section-item">
                    <img
                        src={IconSecurity} 
                        alt="Chat Icon"
                        className="body-feature-section-icon"
                    />
                    <h3 className="body-feature-section-item-title">Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </div>
    )
}