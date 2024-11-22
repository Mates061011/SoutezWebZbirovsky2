import React from "react";
import styles from "./people.module.css";
interface TeamMember {
  name: string;
  role: string;
  experience: string[];
  techStack: string[];
  responsibilities?: string[];
}

const teamData: { team: TeamMember[] } = {
  team: [
    {
      name: "Jan Novák",
      role: "Lead Developer",
      experience: [
        "10 let zkušeností v herním průmyslu.",
        "Pracoval na vývoji AAA titulů jako level designer ve studiu Ubisoft.",
        "Specializuje se na herní mechaniky a fyziku."
      ],
      techStack: ["C++", "Unreal Engine 5"]
    },
    {
      name: "Petra Švecová",
      role: "Environment Artist",
      experience: [
        "7 let v oblasti 3D modelování a texturování.",
        "Spolupracovala na několika VR projektech pro architekturu a hry.",
        "Znalosti v oblasti optimalizace herních prostředí."
      ],
      techStack: ["Blender", "Substance Painter", "Unity"]
    },
    {
      name: "Tomáš Král",
      role: "Gameplay Programmer",
      experience: [
        "5 let jako programátor herní logiky.",
        "Pracoval na dvou indie titulech a jako freelancer na mobilních hrách."
      ],
      techStack: ["C#", "Unity", "Godot"]
    },
    {
      name: "Lenka Bartošová",
      role: "Narrative Designer",
      experience: [
        "4 roky v oblasti psaní příběhů pro interaktivní média.",
        "Dříve pracovala jako copywriterka, poté přešla do herního designu."
      ],
      techStack: ["C#", "Unity", "Godot"],
      responsibilities: [
        "Tvorba příběhových linek a dialogů"
      ]
    },
    {
      name: "Martin Dvořák",
      role: "UI/UX Designer",
      experience: [
        "6 let praxe v herním a webovém designu.",
        "Pomohl optimalizovat UI pro mobilní i desktopové platformy."
      ],
      techStack: ["Figma", "Adobe XD", "HTML/CSS"]
    },
    {
      name: "David Pospíšil",
      role: "Sound Designer",
      experience: [
        "8 let jako zvukový designér pro hry, filmy a reklamy.",
        "Má cit pro vytváření atmosféry pomocí ambientních zvuků."
      ],
      techStack: ["Pro Tools", "FMOD", "Ableton Live"]
    }
  ]
};

const TeamSection: React.FC = () => {
    return (
        <div className={styles.container}>
            {teamData.team.map((member, index) => (
            <div key={index} className={styles.card}>
                <h3>{member.name}</h3>
                <p><strong>Role:</strong> {member.role}</p>
                <p><strong>Experience:</strong></p>
                <ul>
                {member.experience.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                ))}
                </ul>
                {member.techStack.length > 0 && (
                <p><strong>Tech Stack:</strong> {member.techStack.join(", ")}</p>
                )}
                {member.responsibilities && (
                <>
                    <p><strong>Responsibilities:</strong></p>
                    <ul>
                    {member.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                    ))}
                    </ul>
                </>
                )}
            </div>
            ))}
        </div>
    );
};


export default TeamSection;
