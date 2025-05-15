import { useState, useEffect } from "react";

const texts = [
    "Author Code",
    "Target Browser Compatibility",
    "Write Tests",
    "Deploy Experiences",
    "Enforce Quality",
    "Monitor Performance",
    "Measure Impact",
    "Release Components",
    "Establish Standards",
    "Govern Architecture",
    "Introduce Change",
    "Handle Migrations",
    "Manage Dependencies",
    "Automate CICD",
    "Enforce Linting",
    "Collaborate",
    "Integrate Components",
    "Establish Independence",
    "Scale Teams",
    "Enforce Security",
    "Enable Optimizations",
    "Scaffold New Experiences",
    "Experiment",
    "Authenticate",
    "Enforce No-Flys",
    "Enable Rapid Prototyping",
    "Assure Compliance",
];

const defaultTypeSpeed = 100;
const defaultDeleteSpeed = 40;

/**
 * An animated text component that cycles through a list of strings and displays them one at a time.
 * The text is animated to type out and delete on string completion
 * Upon completion a random string from the list is selected and the process repeats
 * @returns {React.ReactElement} The animated text component
 */
const AnimatedText = (): React.ReactElement => {
    const [textIndex, setTextIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(defaultTypeSpeed);
    
    useEffect(() => {
        const handleType = () => {
            const currentText = texts[textIndex];
            setText(
                isDeleting
                ? currentText.substring(0, text.length - 1)
                : currentText.substring(0, text.length + 1)
            );
        
            setSpeed(isDeleting ? defaultDeleteSpeed : defaultTypeSpeed);
        
            if (!isDeleting && text === currentText) {
                setTimeout(() => setIsDeleting(true), 500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setTextIndex((textIndex + 1) % texts.length);
            }
        };
    
        const typeInterval = setInterval(() => {
            handleType();
        }, speed);
    
        return () => clearInterval(typeInterval);
    }, [text, isDeleting, textIndex, speed, texts]);
    
    return <span style={{ color: "#4f46e5" }}>{text}</span>;
}

export default AnimatedText;