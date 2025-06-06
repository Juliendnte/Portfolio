
import { Section, SectionText, SectionTitle } from '../../style/GlobalComponents';
import { LeftSection} from '../../style/GlobalComponents/Gradient.jsx';

const Presentation = () => (
    <>
        <Section colorAlt className="w-1/2" row nopadding id="About" nothidden>
            <LeftSection >
                <SectionTitle main className="flex gap-1">
                    Hey there ,
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                        <path fill="rgba(255, 255, 255, 0.66)"
                              d="m220.17 100l-17.31-30a28 28 0 0 0-38.24-10.25a27.7 27.7 0 0 0-9 8.34L138.2 38a28 28 0 0 0-48.48 0a28 28 0 0 0-41.57 36l1.59 2.76A27.7 27.7 0 0 0 38 80.41a28 28 0 0 0-10.24 38.25l40 69.32a87.47 87.47 0 0 0 53.43 41a88.6 88.6 0 0 0 22.92 3a88 88 0 0 0 76.06-132Zm-6.66 62.64A72 72 0 0 1 81.62 180l-40-69.32a12 12 0 0 1 20.78-12L81.63 132a8 8 0 1 0 13.85-8L62 66a12 12 0 1 1 20.78-12L114 108a8 8 0 1 0 13.85-8l-24.28-42a12 12 0 1 1 20.78-12l33.42 57.9a48 48 0 0 0-5.54 60.6a8 8 0 0 0 13.24-9a32 32 0 0 1 7.31-43.5a8 8 0 0 0 2.13-10.4L168.23 90A12 12 0 1 1 189 78l17.31 30a71.56 71.56 0 0 1 7.2 54.62ZM184.25 31.71A8 8 0 0 1 194 26a59.62 59.62 0 0 1 36.53 28l.33.57a8 8 0 1 1-13.85 8l-.33-.57a43.67 43.67 0 0 0-26.8-20.5a8 8 0 0 1-5.63-9.79M80.89 237a8 8 0 0 1-11.23 1.33A119.6 119.6 0 0 1 40.06 204a8 8 0 0 1 13.86-8a103.7 103.7 0 0 0 25.64 29.72A8 8 0 0 1 80.89 237"/>
                    </svg>
                </SectionTitle>
                <SectionText>
                    Je suis Dante Julien un développeur de Marseille. Mais je suis aussi un nageur sauveteur, un étudiant, et un sportif.<br/>
                    Je suis quelqu&#39;un amoureux de la programmation et de la technologie. Je suis toujours entrain de chercher de nouveau challenge et des nouvelles choses à apprendre.<br/>
                </SectionText>
            </LeftSection>
        </Section>
    </>
);

export default Presentation;