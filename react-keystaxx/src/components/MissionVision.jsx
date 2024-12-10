import missionImg from "../assets/image/mission-showcase.webp"
import visionImg from "../assets/image/vision-showcase.webp"

export default function MissionVision() {
    return (
        <>
            <div className="mission-vision-wrapper">
                <div className="mission">
                    <div>
                        <h1 className="page-title-2"><center>Mission</center></h1>
                        <hr />
                        <p>
                            To become a <strong>global leader in keyboard innovation</strong>, blending <strong>craftsmanship with technology</strong> to create personalized, high-performance typing experiences for everyone, <strong>from everyday professionals to passionate PC enthusiasts</strong>.
                        </p>
                    </div>
                    <img 
                        src={missionImg} 
                        alt="mission-image"
                        style={{ width: "720px", height: "480px" }}
                    />
                </div>
                <div className="vision">
                    <img 
                        src={visionImg}
                        alt="vision-image"
                        style={{ width: "720px", height: "480px" }}
                        />
                    <div>
                        <h1 className="page-title-2"><center>Vision</center></h1>
                        <hr />
                        <p>
                        At KeyStaxx, we design and craft premium artisan and standard mechanical keyboards that cater to diverse needs. Our mission is to <strong>deliver exceptional products</strong> that enhance productivity, comfort, and creativity while <strong>embracing innovation</strong>. We aim to provide our customers with reliable, customized solutions, <strong>fostering a seamless connection between design and function</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};
