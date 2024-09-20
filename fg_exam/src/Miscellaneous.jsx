import PropTypes from 'prop-types'

export default function Miscellaneous(prop) {
    return (
        <body>
            <div className="keyFeatures">
                <h2><strong>Key Features:</strong></h2>
                <h3>
                    <strong>Customizable RGB Backlighting:</strong>
                </h3>
                <p>
                    Personalize the keyboard’s illumination with a wide range of colors and lighting effects.

                </p>
                <h3>
                    <strong>Mechanical Switches:</strong>
                </h3>
                <p>
                    Cherry MX Red switches for a responsive and smooth typing experience.
                </p>
                <h3>
                    <strong>Programmable Keys:</strong>
                </h3>
                <p>
                    Assign macros and custom functions to any key with the included software.
                </p>
                <h3>
                    <strong>Anti-Ghosting & N-Key Rollover:</strong>
                </h3>
                <p>
                    Ensure accurate keypress registration during intense gaming sessions.
                </p>
                <h3>
                    <strong>Dedicated Media Controls:</strong>
                </h3>
                <p>
                    Easily control music and videos with dedicated media keys.
                </p>
            </div>
            <div className="setup">
                <h2><strong>Setup Instructions:</strong></h2>
                <h3><strong>Unboxing:</strong></h3>
                <ul>
                    <li>Carefully remove the keyboard and accessories from the box.</li>
                </ul>
                <h3><strong>Connecting the Keyboard:</strong></h3>
                <ul>
                    <li>Plug the USB cable into an available USB port on your computer.</li>
                    <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
                </ul>
                <h3><strong>Software Installation (<i>Optional</i>):</strong></h3>
                <ul>
                    <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
                    <li>Follow the on-screen instructions to install the software.</li>
                </ul>
                <h3><strong>Keycap Removal and Replacement:</strong></h3>
                <ul>
                    <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</li>
                    <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
                </ul>
            </div>
            <div className="usingKeyboard">
                <h2><strong>Using the Keyboard:</strong></h2>
                <h3><strong>Basic Typing:</strong></h3>
                <ul>
                    <li>Simply start typing; the keyboard is pre-configured with standard key mappings.</li>
                </ul>
                <h3><strong>Customizing Backlighting:</strong></h3>
                <ul>
                    <li>Press <code>Fn</code> + <code>F9</code> to cycle through preset lighting effects.</li>
                    <li>Use the configuration software to create custom lighting profiles.</li>
                </ul>
                <h3><strong>Programming Keys:</strong></h3>
                <ul>
                    <li>Open the configuration software.</li>
                    <li>Select the key you want to program.</li>
                    <li>Assign a macro or function and save your changes.</li>
                </ul>
                <h3><strong>Using Media Controls:</strong></h3>
                <ul>
                    <li>Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.</li>
                </ul>
            </div>
            <div className="troubleshooting">
                <h2><strong>Troubleshooting:</strong></h2>
                <h3><strong>Keyboard Not Responding:</strong></h3>
                <ul>
                    <li>Ensure the USB connection is secure.</li>
                    <li>Try connecting the keyboard to a different USB port.</li>
                    <li>Restart your computer if necessary.</li>
                </ul>
                <h3><strong>Backlighting Not Working:</strong></h3>
                <ul>
                    <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
                    <li>Verify that the configuration software is properly installed.</li>
                </ul>
                <h3><strong>Key Not Registering:</strong></h3>
                <ul>
                    <li>Confirm that no physical obstructions are affecting the key.</li>
                    <li>Test the key in different applications to determine if the issue is software-related.</li>
                </ul>
            </div>
            <div className="maintenance">
                <h2><strong>Maintenance and Care:</strong></h2>
                <h3><strong>Cleaning:</strong></h3>
                <ul>
                    <li>Disconnect the keyboard from the computer.</li>
                    <li>Use a soft, dry cloth to clean the surface</li>
                    <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris</li>
                </ul>
                <h3><strong>Storage:</strong></h3>
                <ul>
                    <li>Store the keyboard in a cool, dry place</li>
                    <li>Avoid exposure to liquids or extreme temperatures</li>
                </ul>
            </div>
            <div className="warranty">
                <h2><strong>Warranty and Support:</strong></h2>
                <ul>
                    <li><strong>Warranty Period:</strong> {prop.warrantyYears} years from the date of purchase.</li>
                    <li><strong>Customer Support:</strong> For assistance, contact customer support via the manufacturer’s website or call the support hotline at {prop.custSuppNo}</li>
                </ul>
                <p><strong>Manufacturer’s Website:</strong> {prop.website}</p>
                <p><strong>Customer Support Email:</strong> {prop.custSuppEmail}</p>
                <p><strong>Support Hotline:</strong> {prop.custSuppNo}</p>
            </div>
            <div className="message">
                <h2>“Thank you for choosing the {prop.modelName}. We hope you enjoy your new keyboard! Type Safe!”</h2>
            </div>
        </body>
    )
}

Miscellaneous.PropTypes = {
    warrantyYears: PropTypes.number,
    custSuppNo: PropTypes.string,
    website: PropTypes.string,
    custSuppEmail: PropTypes.string,
    modelName: PropTypes.string
}

Miscellaneous.defaultProps = {
    warrantyYears: 0,
    custSuppNo: "Unknown",
    website: "Unknown",
    custSuppEmail: "Unknown",
    modelName: "Unknown"
}