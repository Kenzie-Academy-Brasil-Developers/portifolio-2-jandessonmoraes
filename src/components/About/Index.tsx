import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { AboutSection, AboutSectionContent, AboutSectionText } from "./style";

export const AboutMeComponents = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutSectionContent>
          <AboutSectionText>
            <Text color="grey4" type="heading2">
              About Me
            </Text>
            <Text color="grey4">
            I am a Full-Stack Web Developer with strong technical skills in HTML5, 
            CSS3, JavaScript, React, TypeScript, Express, Nest, SQL, MySQL, Angular, 
            Python, and Linux, in addition to expertise in UX. 
            I have experience as a Scrum Master, Git, and Tech Leader, 
            and proficiency in using Figma for design and modeling. I possess 
            valuable interpersonal skills such as communication, collaboration, 
            leadership, adaptability, and problem-solving. I am continually 
            improving my skills and open to job opportunities, seeking to 
            apply my knowledge to challenging projects.{" "}
            </Text>
          </AboutSectionText>
        </AboutSectionContent>
      </Container>
    </AboutSection>
  );
};