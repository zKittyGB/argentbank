import "../../css/home/BodyBanner.css"
/** function that create the body area */
function BodyBanner(){
    return(
        <div className="body-banner">
            <section className="body-banner-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default BodyBanner